//Arquivo de configurações que faz a conexão com o banco de dados.
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: process.env.NODE_ENV === "production" ? [] : ["query"],
});
