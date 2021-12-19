import express from 'express';
import { Home, Login, Callback, Logout, FailedRedirect, SuccessRedirect } from "../controllers/auth.js";
import {isLoggedIn} from '../middleware/isLoggedIn.js';
import '../utils/GoogleOAuth.js';

const router = express.Router();

//Route to Home page
router.get('/', Home);

//Route to Google SignIn
router.get('/login', Login);

//Redirect route after Login
router.get( '/login/callback', Callback);

//Redirect route after successful Authentication
router.get('/auth/success', isLoggedIn, SuccessRedirect);

//Route to logout 
router.get('/logout', Logout);

//Redirect route after Failed Authentication
router.get('/auth/failure', FailedRedirect);

export default router;