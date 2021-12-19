import passport from 'passport';
import '../utils/GoogleOAuth.js';

//Land at the Home page
export const Home = (req, res) => {
  res.send('<a href="http://localhost:8080/login">Authenticate with Google</a>');
};

//Login with Google account
export const Login = passport.authenticate('google', { scope: ['email', 'profile']});


//Redirect after Login attempt
export const Callback = 
    passport.authenticate('google', {
      successRedirect: '/auth/success',
      failureRedirect: '/auth/failure'
    });

//Logout 
export const Logout = (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('Goodbye!');
};

//Redirect after Successful Login
export const SuccessRedirect = (req, res) => {
  res.send(`Hello ${req.user.displayName}`);
}

//Redirect after Failed authentication
export const FailedRedirect = (req, res) => {
  res.send('Failed to authenticate..');
};
