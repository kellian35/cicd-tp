const request = require("supertest");
const app = require("../../src/server");

describe("GET /hello", () => {
  it("should return Hello world", async () => {
    const res = await request(app).get("/hello");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello world!");
  });

  it("should return Hello with a custom name", async () => {
    const res = await request(app).get("/hello/John");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello John!");
  });
});

describe("POST /hello", () => {
  it("should return Hello world when no name is provided", async () => {
    const res = await request(app).post("/hello");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello world!");
  });

  it("should return Hello with a custom name from header", async () => {
    const res = await request(app)
      .post("/hello")
      .set("x-name", "Alice");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello Alice!");
  });
});

describe("POST /hi", () => {
  it("should return Hello world when no name is provided", async () => {
    const res = await request(app).post("/hi");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello world!");
  });

  it("should return Hello with a custom name from header", async () => {
    const res = await request(app)
      .post("/hi")
      .set("x-name", "Bob");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello Bob!");
  });
});
