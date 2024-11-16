import { Request, Response } from 'express';
import { ProjectService } from '../services/projectService';

export class ProjectController {
  private projectService: ProjectService;

  constructor() {
    this.projectService = new ProjectService();
  }

  getProjectDetails = async (req: Request, res: Response) => {
    try {
      const { projectId } = req.params;
      const project = await this.projectService.getProjectDetails(projectId);
      res.json(project);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch project details' });
    }
  };

  getProjectList = async (req: Request, res: Response) => {
    try {
      const projects = await this.projectService.getProjectList();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch project list' });
    }
  };
} 