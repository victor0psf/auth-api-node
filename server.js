import dotenv from "dotenv";
import express from "express";
import privateRoutes from "./routes/private.js";
import publicRoutes from "./routes/public.js";

dotenv.config();

import auth from "./middlewares/auth.js";

const app = express();
app.use(express.json());

app.use("/", publicRoutes);
app.use("/", auth, privateRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
