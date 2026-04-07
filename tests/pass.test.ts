import request from "supertest";
import app from "../src/app";

describe("Pass API", () => {
  it("should create a pass", async () => {
    const res = await request(app)
      .post("/api/v1/passes")
      .send({
        name: "Test",
        age: 65,
        balance: 10,
        ridesLeft: 2,
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Test");
  });
});