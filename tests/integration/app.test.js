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

  it("should handle names with special characters", async () => {
    const res = await request(app).get("/hello/Jean-Luc");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello Jean-Luc!");
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

  it("should handle empty x-name header", async () => {
    const res = await request(app)
      .post("/hello")
      .set("x-name", "");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello world!");
  });
});

describe("POST /hi", () => {
  it("should return Hey there when no name is provided", async () => {
    const res = await request(app).post("/hi");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hey there!");
  });

  it("should return Hey with a custom name from header", async () => {
    const res = await request(app)
      .post("/hi")
      .set("x-name", "Bob");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hey Bob!");
  });

  it("should return 405 for unsupported methods", async () => {
    const res = await request(app).put("/hi");
    expect(res.statusCode).toBe(405);
  });
});
