# onething3.0
onething project AI manage
# AI Chat Assistant

一个基于 React 和 Node.js 的智能最重要目标管理助手系统，集成了项目管理、任务追踪和智能对话功能。

## 🌟 特性

- 📱 响应式界面设计
- 🤖 智能对话功能
- 📊 项目管理系统
- ✅ 任务追踪
- 🔄 实时通讯
- 📈 数据分析
- 🔐 用户认证
- 📝 聊天记录保存

## 🛠 技术栈

### 前端
- React 18
- TypeScript
- Ant Design
- Redux Toolkit
- Axios
- WebSocket

### 后端
- Node.js
- Express
- MongoDB
- WebSocket
- JWT Authentication
- Winston Logger

### 部署
- Docker
- Nginx
- PM2

## 📦 安装

1. **克隆仓库**
   
bash
git clone https://github.com/pingdior/ai-chat-assistant.git
cd ai-chat-assistant


2. **安装依赖**
bash
安装所有依赖（前端和后端）
npm run install-all


3. **环境配置**

创建前端 `.env` 文件：

env
REACT_APP_API_URL=http://localhost:3000/api


创建后端 `.env` 文件：


PORT=3000


## 🚀 运行

### 开发环境

bash
启动前端和后端服务
npm start
仅启动前端
npm run client
仅启动后端
npm run server


### Docker 环境

bash
构建并启动所有服务
docker-compose up --build
停止服务
docker-compose down


## 📁 项目结构

project-root/
├── frontend/ # React前端项目
│ ├── src/
│ │ ├── api/ # API请求
│ │ ├── components/ # 通用组件
│ │ ├── pages/ # 页面组件
│ │ ├── store/ # 状态管理
│ │ ├── utils/ # 工具函数
│ │ └── App.tsx # 根组件
├── backend/ # Node.js后端项目
│ ├── src/
│ │ ├── controllers/ # 控制器
│ │ ├── models/ # MongoDB模型
│ │ ├── routes/ # 路由
│ │ ├── services/ # 业务逻辑
│ │ └── app.ts # 入口文件
├── nginx/ # Nginx配置
│ └── nginx.conf
└── docker-compose.yml # Docker编排


## 🔌 API 文档

### 认证相关
- POST `/api/auth/register` - 用户注册
- POST `/api/auth/login` - 用户登录

### 项目相关
- GET `/api/projects` - 获取项目列表
- GET `/api/projects/:projectId` - 获取项目详情

### 任务相关
- GET `/api/tasks/daily/:date` - 获取每日任务
- GET `/api/tasks/:taskId` - 获取任务详情
- GET `/api/tasks/:taskId/progress/:date` - 获取任务进度

### 聊天相关
- POST `/api/conversations` - 保存聊天记录
- GET `/api/conversations/:userId` - 获取聊天历史

## 🔧 配置说明

### MongoDB 集合结构
- users - 用户信息
- conversations - 对话记录
- projects - 项目信息
- tasks - 任务信息
- events - 事件追踪

## 📈 性能优化

- Redis 缓存集成
- 数据库索引优化
- 前端资源压缩
- 图片懒加载
- API 请求合并

## 🔐 安全特性

- JWT 身份验证
- 请求加密
- XSS 防护
- CSRF 防护
- 请求频率限制

## 🔍 监控告警

- 错误日志记录
- 性能监控
- 用户行为分析
- 系统状态监控

## 🤝 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE.md](LICENSE.md) 了解详情

## 👥 作者

- 开发者名字 - [@yourgithub](https://github.com/yourgithub)

## 🙏 致谢

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Ant Design](https://ant.design/)

## 📞 联系方式

- 项目链接: [https://github.com/yourusername/ai-chat-assistant](https://github.com/pingdior/ai-chat-assistant)
- 博客: [your-blog.com](https://onething.work)
- 邮箱: woodgaya@gmail.com
