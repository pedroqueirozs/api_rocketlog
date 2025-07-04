import request from "supertest";

import { app } from "@/app";
import { prisma } from "@/database/prisma";

describe("UsersController", () => {
  let user_id: string;

  afterAll(async () => {
    await prisma.user.delete({
      where: {
        id: user_id,
      },
    });
  });
  it("should create a new user secessfully", async () => {
    const response = await request(app).post("/users").send({
      name: "Teste User 4",
      email: "teste04@example.com",
      password: "password1234",
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe("Teste User 4");

    user_id = response.body.id;
  });

  it("should throw an error if user whith same email already exists", async () => {
    const response = await request(app).post("/users").send({
      name: "Deuplicate user",
      email: "teste04@example.com",
      password: "password1234",
    });
    expect(response.status).toBe(400);
    expect(response.body.message).toBe("User with same email alread exists");
  });

  it("shold throw a validation error of e-mail is invalid", async () => {
    const response = await request(app).post("/users").send({
      name: "Teste User",
      email: "email-invalide",
      password: "123456789",
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("validation error");
  });
});
