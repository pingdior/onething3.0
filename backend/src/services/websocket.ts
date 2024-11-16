import WebSocket from 'ws';
import { Server } from 'http';
import jwt from 'jsonwebtoken';

interface WebSocketClient extends WebSocket {
  userId?: string;
}

export class WebSocketService {
  private wss: WebSocket.Server;
  private clients: Map<string, WebSocketClient> = new Map();

  constructor(server: Server) {
    this.wss = new WebSocket.Server({ server });
    this.init();
  }

  private init() {
    this.wss.on('connection', async (ws: WebSocketClient, req) => {
      try {
        // 获取token并验证
        const token = req.url?.split('token=')[1];
        if (!token) {
          ws.close(1008, 'No token provided');
          return;
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key') as { userId: string };
        ws.userId = decoded.userId;
        this.clients.set(decoded.userId, ws);

        ws.on('message', (message: string) => {
          this.handleMessage(ws, message);
        });

        ws.on('close', () => {
          if (ws.userId) {
            this.clients.delete(ws.userId);
          }
        });

      } catch (error) {
        ws.close(1008, 'Invalid token');
      }
    });
  }

  private async handleMessage(ws: WebSocketClient, message: string) {
    try {
      const data = JSON.parse(message);
      
      // 根据消息类型处理不同的业务逻辑
      switch (data.type) {
        case 'chat':
          await this.handleChatMessage(ws.userId!, data);
          break;
        // 添加其他消息类型的处理
      }
    } catch (error) {
      ws.send(JSON.stringify({
        type: 'error',
        message: 'Invalid message format'
      }));
    }
  }

  private async handleChatMessage(userId: string, data: any) {
    // 处理聊天消息
    const response = {
      type: 'chat',
      data: {
        userId,
        message: data.message,
        timestamp: new Date()
      }
    };

    // 广播消息给所有连接的客户端
    this.broadcast(JSON.stringify(response));
  }

  public broadcast(message: string) {
    this.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  }

  public sendToUser(userId: string, message: string) {
    const client = this.clients.get(userId);
    if (client && client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  }
} 