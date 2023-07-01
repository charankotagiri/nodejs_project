const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
    email:{
         type:String,
         require: true,
         unique: true
    },

    password:{
          type:String,
          require:true
    },

    username:{
          type:String,
          require:true
    }
    },
     {
        timestamps: true
     
});

const User = mongoose.model('users',userschema);
module.exports= User;
