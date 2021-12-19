//Check if the user is logged in
export function isLoggedIn(req, res, next){
    req.user ? next() : res.sendStatus(401);
};


