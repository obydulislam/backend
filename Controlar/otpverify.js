const User = require("../model/User");
const Otpverify = async(req,res)=>{
    let {email, otp} = req.body
    let otpexistring = await User.find({email : email})
    if(otpexistring[0].otp == otp){
        await User.findOneAndUpdate({otp : "", verify : true})
    }
    else{
        res.send("otp not mach")
    }

}
module.exports = Otpverify