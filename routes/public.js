import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import express from "express";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

router.post("/cadastro", async (req, res) => {
  try {
    const user = req.body;
    // Criptografar a senha
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    await prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: hash,
      },
    });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error in /cadastro:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const userLogin = req.body;
    // Buscar o user by email
    const user = await prisma.user.findUnique({
      where: {
        email: userLogin.email,
      },
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    // Verificar se a senha está correta, compara a senha informada com a senha do banco de dados
    const isPasswordValid = await bcrypt.compare(
      userLogin.password,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Gerar o token JWT
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: "365d", // Token válido por 365 dias
    });

    res.status(200).json({ message: "User found", token });
  } catch (error) {
    console.error("Error in /login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
