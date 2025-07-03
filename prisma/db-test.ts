import { PrismaClient } from "@prisma/client";

async function testConnection() {
  const prisma = new PrismaClient();
  
  try {
    await prisma.$connect();
    console.log("Connexion à la base de données réussie via Prisma");
  } catch (err) {
    console.error("Erreur de connexion à la base de données:", err);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();