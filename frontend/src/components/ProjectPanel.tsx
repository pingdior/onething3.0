import React, { useEffect, useState } from 'react';
import { Card, Timeline, Tag } from 'antd';

interface Project {
  project_id: string;
  title: string;
  description: string;
  tasks: Task[];
}

interface Task {
  task_id: string;
  content: string;
  status: string;
  start_time: Date;
  end_time: Date;
}

const ProjectPanel: React.FC<{ projectId: string }> = ({ projectId }) => {
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    fetchProjectDetails(projectId);
  }, [projectId]);

  const fetchProjectDetails = async (id: string) => {
    // TODO: 实现获取项目详情的API调用
  };

  return (
    <Card title={project?.title}>
      <p>{project?.description}</p>
      <Timeline>
        {project?.tasks.map(task => (
          <Timeline.Item key={task.task_id}>
            <div className="task-item">
              <span>{task.content}</span>
              <Tag color={task.status === 'completed' ? 'green' : 'blue'}>
                {task.status}
              </Tag>
            </div>
          </Timeline.Item>
        ))}
      </Timeline>
    </Card>
  );
};

export default ProjectPanel; 