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

it("should verify a valid pass", async () => {
  const createRes = await request(app)
    .post("/api/v1/passes")
    .send({
      name: "VerifyUser",
      age: 65,
      balance: 10,
      ridesLeft: 2,
    });

  const id = createRes.body.id;

  const res = await request(app).get(`/api/v1/passes/verify/${id}`);

  expect(res.statusCode).toBe(200);
  expect(res.body.valid).toBe(true);
});

it("should return false for invalid pass", async () => {
  const res = await request(app).get("/api/v1/passes/verify/invalid123");

  expect(res.statusCode).toBe(404);
  expect(res.body.valid).toBe(false);
});

it("should deduct a ride", async () => {
  const createRes = await request(app)
    .post("/api/v1/passes")
    .send({
      name: "RideUser",
      age: 65,
      balance: 0,
      ridesLeft: 2,
    });

  const id = createRes.body.id;

  const res = await request(app).post(`/api/v1/passes/use/${id}`);

  expect(res.statusCode).toBe(200);
  expect(res.body.ridesLeft).toBe(1);
});
it("should use balance when no rides left", async () => {
  const createRes = await request(app)
    .post("/api/v1/passes")
    .send({
      name: "BalanceUser",
      age: 65,
      balance: 10,
      ridesLeft: 0,
    });

  const id = createRes.body.id;

  const res = await request(app).post(`/api/v1/passes/use/${id}`);

  expect(res.statusCode).toBe(200);
  expect(res.body.balance).toBe(7); // assuming fare = 3
});

it("should top up balance", async () => {
  const createRes = await request(app)
    .post("/api/v1/passes")
    .send({
      name: "TopUpUser",
      age: 65,
      balance: 10,
      ridesLeft: 0,
    });

  const id = createRes.body.id;

  const res = await request(app)
    .post(`/api/v1/passes/topup/${id}`)
    .send({ amount: 20 });

  expect(res.statusCode).toBe(200);
  expect(res.body.balance).toBe(30);
});

it("should fail when no rides and no balance", async () => {
  const createRes = await request(app)
    .post("/api/v1/passes")
    .send({
      name: "EmptyUser",
      age: 65,
      balance: 0,
      ridesLeft: 0,
    });

  const id = createRes.body.id;

  const res = await request(app).post(`/api/v1/passes/use/${id}`);

  expect(res.statusCode).toBe(400);
});


it("should return all passes", async () => {
  const res = await request(app).get("/api/v1/passes");

  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});