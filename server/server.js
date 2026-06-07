import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import path from "path";
import { createRequire } from "module";
import { fileURLToPath } from "url";
import expressLayouts from "express-ejs-layouts";

import storeRoutes from './src/routes/storeRoutes.js';
import adminRoutes from './src/routes/adminRoutes.js';
import { notFound } from './src/middleware/notFound.js';
import connectDB from './src/config/mongodb.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layouts/main');

app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));  // also fixed typo: cresentials → credentials

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
});

app.use('/', storeRoutes);
app.use('/admin', adminRoutes);

app.use(notFound);

app.get('/', (req,res) => res.send("API Working."));

app.listen(PORT, () => {
  console.log(`Wisen Book Mart server running on http://localhost:${PORT}`);
});