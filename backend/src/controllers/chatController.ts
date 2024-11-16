import { Request, Response } from 'express';
import { ChatService } from '../services/chatService';
import { AIService } from '../services/aiService';

export class ChatController {
  private chatService: ChatService;
  private aiService: AIService;

  constructor() {
    this.chatService = new ChatService();
    this.aiService = new AIService();
  }

  async sendMessage = async (req: Request, res: Response) => {
    try {
      const { message } = req.body;
      const userId = req.user.id;

      // 获取AI响应
      const aiResponse = await this.aiService.getResponse(message, userId);
      
      // 保存聊天记录
      await this.chatService.saveChat({
        userId,
        message,
        response: aiResponse,
      });

      res.json({ response: aiResponse });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
} 