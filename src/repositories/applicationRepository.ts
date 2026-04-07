// src/repositories/applicationRepository.ts

export interface Application {
  id: string;
  name: string;
  age: number;
}

let applications: Application[] = [];

// GET all
export const getApplications = (): Application[] => {
  return applications;
};

// CREATE
export const createApplication = (app: Application): Application => {
  applications.push(app);
  return app;
};

// UPDATE
export const updateApplication = (
  id: string,
  updatedData: Partial<Application>
): Application | null => {
  const index = applications.findIndex((app) => app.id === id);

  if (index === -1) return null;

  applications[index] = { ...applications[index], ...updatedData };
  return applications[index];
};

// DELETE
export const deleteApplication = (id: string): boolean => {
  const index = applications.findIndex((app) => app.id === id);

  if (index === -1) return false;

  applications.splice(index, 1);
  return true;
};