const User = require('../models/users');

module.exports.signup = function(req, res) {
  return res.render('_users_signup', {
    title: "signup"
  });
};

module.exports.signin = function(req, res) {
  return res.render('_users_signin', {
    title: "signin"
  });
};
module.exports.userprofile = function(req, res) {
  return res.render('userprofile', {
    title: "userprofile"
  });
};

// Create a new user

module.exports.createuser = async function(req, res) {
try{
  if (req.body.password != req.body.confirmPassword) {
      return res.redirect('back');
  }
  
  let user =  await User.findOne({ email: req.body.email })

    if (!user) {
       await User.create (req.body)
        return res.redirect('/users/signin');
  }
  else{
     return res.redirect('back');
  }
}
catch(err){
     console.log(err);
}
}
     

module.exports.createsession = async function(req, res) {
  try {
    if (!req.body.email || !req.body.password) {
      return res.redirect('back');
    }

    const user = await User.findOne({ email: req.body.email });
    if(user){
      if ( user.password === req.body.password) {
        res.cookie('user_id',user._id)
        return res.redirect('/users/userprofile');
      }
  
      return res.redirect('back');
    }
    
    
  } catch (err) {
    console.log('Error in creating session:', err);
  }
};
