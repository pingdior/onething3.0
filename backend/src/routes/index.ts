import express from 'express';
import { ProjectController } from '../controllers/projectController';
import { TaskController } from '../controllers/taskController';
import { ChatController } from '../controllers/chatController';

const router = express.Router();
const projectController = new ProjectController();
const taskController = new TaskController();
const chatController = new ChatController();

// 项目相关路由
router.get('/projects/:projectId', projectController.getProjectDetails);
router.get('/projects', projectController.getProjectList);

// 任务相关路由
router.get('/tasks/daily/:date', taskController.getDailyTasks);
router.get('/tasks/:taskId', taskController.getTaskDetails);
router.get('/tasks/:taskId/progress/:date', taskController.getTaskProgress);
router.get('/tasks/:taskId/check/:date', taskController.getTaskCheck);
router.get('/tasks/:taskId/review/:date', taskController.getTaskReview);

// 聊天相关路由
router.post('/conversations', chatController.saveChat);

export default router; 