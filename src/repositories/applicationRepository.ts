const applications: { id: number; name: string }[] = [];

export const getApplicationsRepo = () => {
  return applications;
};

export const createApplicationRepo = (name: string) => {
  const newApp = {
    id: applications.length + 1,
    name,
  };

  applications.push(newApp);
  return newApp;
};

