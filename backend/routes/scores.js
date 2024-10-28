import express from "express";
import { playerName } from "../controllers/scoreboard.js";

const router = express.Router();
router.get("/cricket/stats/:player_name", playerName);

export default router;