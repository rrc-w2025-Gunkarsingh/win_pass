import {
  getApplicationsRepo,
  createApplicationRepo,
  deleteApplicationRepo,
  updateApplicationRepo,
} from "../repositories/applicationRepository";

export const getApplicationsService = () => {
  return getApplicationsRepo();
};

export const createApplicationService = (name: string) => {
  return createApplicationRepo(name);
};

export const deleteApplicationService = (id: number) => {
  return deleteApplicationRepo(id);
};

export const updateApplicationService = (id: number, name: string) => {
  return updateApplicationRepo(id, name);
};