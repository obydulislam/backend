const bcrypt = require('bcrypt');
const otpGenerator = require('otp-generator')
const nodemailer = require("nodemailer");
const Email = require("../helpers/EmailValidation")
const User = require("../model/User")
const reqistration = async (req,res)=>{
    let {name, email, password} = req.body
    let existringEmail = await User.find({email : email});

    if(existringEmail.length == 0){
        if(!name){
            res.send("name required ")
        }
        else if(!email){
            res.send("email required ")
        }
        else if(!password){
            res.send("password required ")
        }
        else{
            if(Email){
                if(!Email(email)){
                    res.send("Plesses valid email")
                    return 
                } 
            }
            let otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: true });
            bcrypt.hash(password, 6, async function(err, hash) {
                let user = new User({
                    name : name,
                    email : email,
                    password : hash,
                    otp : otp
                })
                user.save()
                const transporter = nodemailer.createTransport({
                    
                   
                    service : "gmail",
                    auth: {
                      user: "obydulislam018834@gmail.com",
                      pass: "pvjc xzhb cgbu hqwu",
                    },
                  });
                  const info = await transporter.sendMail({
                    from: USER_EMAIL, 
                    to: email, 
                    subject: "Hello ✔", 
                   
                    html: `<h2>Pless verify your Email this <a href=https://www.google.com/ style=color:red>verify</a></h2>`, 
                  });
                res.send({success : "Done"})
            });
           
        }
    }
    else{
        res.send("Email ALL Ready Excesting")
    }


   
}

module.exports = reqistration