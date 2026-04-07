import swaggerUi from "swagger-ui-express";
import * as YAML from "yamljs";

const swaggerDocument = YAML.load("./docs/swagger.yaml");

export const swaggerDocs = (app: any) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

