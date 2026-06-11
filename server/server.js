import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import expressLayouts from "express-ejs-layouts";

import connectDB from './src/config/mongodb.js';
import authRouter from './routes/authRoutes.js';
import userRouter from "./routes/userRoutes.js";
import storeRoutes from './src/routes/storeRoutes.js';
import adminRoutes from './src/routes/adminRoutes.js';
import { notFound } from './src/middleware/notFound.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

connectDB();

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layouts/main');
app.use(expressLayouts);

// Shared middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ credentials: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Current path helper
app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
});

// API routes
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

// Store / Admin routes
app.use('/', storeRoutes);
app.use('/admin', adminRoutes);

// 404 handler (must be last)
app.use(notFound);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});