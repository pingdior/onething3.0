import { Collection, ObjectId } from 'mongodb';
import { db } from '../config/database';

export class ProjectService {
  private collection: Collection;

  constructor() {
    this.collection = db.collection('projects');
  }

  async getProjectDetails(projectId: string) {
    return await this.collection.findOne({ 
      project_id: projectId 
    });
  }

  async getProjectList() {
    return await this.collection.find({}).toArray();
  }
} 