import api from './axios';

export const projectService = {
  // 获取项目详情
  getProjectDetails: (projectId: string) => 
    api.get(`/api/projects/${projectId}`),

  // 获取项目列表
  getProjectList: () => 
    api.get('/api/projects'),

  // 获取指定日期的任务列表
  getDailyTasks: (date: string) => 
    api.get(`/api/tasks/daily/${date}`),

  // 获取任务详情
  getTaskDetails: (taskId: string) => 
    api.get(`/api/tasks/${taskId}`),

  // 获取任务进度记录
  getTaskProgress: (taskId: string, date: string) => 
    api.get(`/api/tasks/${taskId}/progress/${date}`),

  // 获取任务检查数据
  getTaskCheck: (taskId: string, date: string) => 
    api.get(`/api/tasks/${taskId}/check/${date}`),

  // 获取任务复盘数据
  getTaskReview: (taskId: string, date: string) => 
    api.get(`/api/tasks/${taskId}/review/${date}`),

  // 保存聊天记录
  saveChat: (chatData: any) => 
    api.post('/api/conversations', chatData)
}; 