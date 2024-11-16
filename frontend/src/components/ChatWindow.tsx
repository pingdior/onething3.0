import React, { useState } from 'react';
import { Button, Input, List, Avatar } from 'antd';
import { SaveOutlined } from '@ant-design/icons';

interface Message {
  role: 'user' | 'agent';
  content: string;
  timestamp: Date;
}

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const newMessage: Message = {
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    };
    
    setMessages([...messages, newMessage]);
    setInputValue('');
    // TODO: 调用API发送消息
  };

  const handleSaveChat = async () => {
    try {
      // TODO: 调用保存聊天记录的API
      console.log('Saving chat...');
    } catch (error) {
      console.error('Failed to save chat:', error);
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-messages">
        <List
          itemLayout="horizontal"
          dataSource={messages}
          renderItem={(message) => (
            <List.Item className={`message ${message.role}`}>
              <List.Item.Meta
                avatar={<Avatar src={message.role === 'user' ? '/user-avatar.png' : '/agent-avatar.png'} />}
                content={message.content}
              />
            </List.Item>
          )}
        />
      </div>
      <div className="chat-input">
        <Input.TextArea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onPressEnter={handleSend}
          placeholder="输入消息..."
        />
        <Button type="primary" onClick={handleSend}>发送</Button>
        <Button icon={<SaveOutlined />} onClick={handleSaveChat}>保存对话</Button>
      </div>
    </div>
  );
};

export default ChatWindow; 