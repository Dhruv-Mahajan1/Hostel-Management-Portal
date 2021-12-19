import express from 'express';
import session from 'express-session';
import passport from 'passport';
import authRoutes from './routes/auth.js';
import './utils/GoogleOAuth.js';
import dotenv from "dotenv";

dotenv.config();

//Initializing the express app
const app = express();
const PORT = process.env.PORT || 8080;

app.use(session({ secret: process.env.SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//Auth Routes
app.use('/', authRoutes);
app.listen(PORT, () => console.log(`listening on port: ${PORT}`));