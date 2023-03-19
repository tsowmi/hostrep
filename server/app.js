require('dotenv').config();                     // for using environment variable protection
const express =require("express");
const bodyParser =require("body-parser");
const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const saltRounds=10;

const app=express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/trialDB"


// mongoose.connect("mongodb://127.0.0.1:27017/trialDB");
mongoose.connect(MONGODB_URI);

const trialSchema= new mongoose.Schema({
   username: String,
   password: String
});


const Trial = mongoose.model("Trial",trialSchema);

app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended:true
}));


app.post("/login",function(req,res){
  
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    const newUser = new Trial({
      username:req.body.username,
      password:hash,                        
    });
    
      newUser.save();
      res.redirect("/");
    
    });

});

app.listen(PORT,function(){
  console.log("Server started at port 3001");
})