import request from "supertest";
import app from "../src/app";

describe("Applications API", () => {
  it("GET /applications should return 200", async () => {
    const res = await request(app).get("/api/v1/applications");
    expect(res.statusCode).toBe(200);
  });

  it("POST /applications should create new app", async () => {
    const res = await request(app)
      .post("/api/v1/applications")
      .send({ name: "Test App" });

    expect(res.statusCode).toBe(201);
  });
});this 