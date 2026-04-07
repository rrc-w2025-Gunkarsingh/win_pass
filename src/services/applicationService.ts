// src/services/applicationService.ts

import {
  getApplications,
  createApplication,
  updateApplication,
  deleteApplication,
  Application
} from "../repositories/applicationRepository";

// GET
export const getAllApplications = (): Application[] => {
  return getApplications();
};

// CREATE
export const addApplication = (data: any): Application => {
  const newApp: Application = {
    id: Date.now().toString(),
    name: data.name,
    age: data.age,
  };

  return createApplication(newApp);
};

// UPDATE
export const editApplication = (
  id: string,
  data: Partial<Application>
): Application | null => {
  return updateApplication(id, data);
};

// DELETE
export const removeApplication = (id: string): boolean => {
  return deleteApplication(id);
};