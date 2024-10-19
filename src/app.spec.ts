import request from "supertest";
import app from "./app";

describe("App", () => {
  it("should return 200 status", async () => {
    const response = await request(app).get("/").send();
    expect(response.statusCode).toBe(200);
  });
});
