const bcrypt = require('bcrypt');
const User = require("../model/User")
const Login = async (req,res)=>{
   let {email, password} = req.body
   let loginexistring = await User.find({email : email});
   if(loginexistring.length == 0){
    res.send("Credeancial not valide")
   }
   else{
    bcrypt.compare(password, loginexistring[0].password, function(err, result) {
        if(result){
            res.send({ result : "success"})
        }
        else{
            res.send("Credeancial not valide")
        }
    });
   }
}
module.exports = Login