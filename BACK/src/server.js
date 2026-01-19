import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://696ea36e1f129aa7559c838c--eclectic-custard-0f3ec0.netlify.app",
    ],
  })
);
app.use(express.json());
app.use("/api/notes", notesRoutes);
const PORT = process.env.PORT || 3001;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor levantado en puerto http://localhost:${PORT}`);
  });
});
