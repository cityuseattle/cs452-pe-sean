import express from "express";
import { ObjectId } from "mongodb";
import db from "../db/conn.mjs";

const router = express.Router();

/**
 * GET all recipes
 */
router.get("/", async (req, res) => {
  try {
    const recipes = await db.collection("recipes").find({}).toArray();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET recipe by ID (for details page)
 */
router.get("/:id", async (req, res) => {
  try {
    const recipe = await db.collection("recipes").findOne({
      _id: new ObjectId(req.params.id),
    });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * POST new recipe
 */
router.post("/", async (req, res) => {
  try {
    const result = await db.collection("recipes").insertOne(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
