import express from 'express';
import http from 'http';
import cors from 'cors';
import { database } from './config/database';
import { WebSocketService } from './services/websocket';
import { errorHandler } from './middleware/errorHandler';
import { requestLogger, logger } from './utils/logger';
import routes from './routes';

const app = express();
const server = http.createServer(app);

// 初始化WebSocket服务
const wsService = new WebSocketService(server);

// 中间件
app.use(cors());
app.use(express.json());
app.use(requestLogger);

// 路由
app.use('/api', routes);

// 错误处理
app.use(errorHandler);

// 启动服务器
const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await database.connect();
    
    server.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();

export { app, wsService }; 