import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import recipeRoutes from "./routes/recipes.mjs";

dotenv.config();

const app = express();
const PORT = 5050;

app.use(cors());
app.use(express.json());

app.use("/api/recipes", recipeRoutes);

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
