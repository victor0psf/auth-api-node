import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const router = express.Router();

router.get("/listar-users", async (req, res) => {
  try {
    const user = await prisma.user.findMany();

    res.status(200).json({ message: "Users successfully listed", user });
  } catch (error) {
    console.error("Error in /list:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
