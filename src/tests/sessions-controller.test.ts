import request from "supertest";
import { app } from "@/app";
import { prisma } from "@/database/prisma";

describe("SessionsController", () => {
  let user_id: string;
  afterAll(async () => {
    await prisma.user.delete({
      where: {
        id: user_id,
      },
    });
  });
  it("should authrnticate a and get asses token", async () => {
    const userResponse = await request(app).post("/users").send({
      name: "Auth Teste User",
      email: "auth_teste_user@example.com",
      password: "password1234",
    });
    user_id = userResponse.body.id;

    const sessionResponse = await request(app).post("/sessions").send({
      email: "auth_teste_user@example.com",
      password: "password1234",
    });

    expect(sessionResponse.status).toBe(200);
    expect(sessionResponse.body.token).toEqual(expect.any(String));
  });
});
