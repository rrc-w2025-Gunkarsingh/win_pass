import express, { Application, Request, Response } from "express";
import applicationRoutes from "./routes/applicationRoutes";
import { swaggerDocs } from "./swagger";

const app: Application = express();

// middleware
app.use(express.json());
app.use("/api/v1", applicationRoutes);
swaggerDocs(app);

// base route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "API is running",
  });
});

export default app;