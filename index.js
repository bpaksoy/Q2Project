const env = process.env.NODE_ENV || "development";
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);
const express = require('express');
const port = process.env.PORT || 5050;
const app = express();
const bodyParser= require("body-parser");
const bcrypt = require("bcrypt-as-promised");

const ejs = require("ejs");
app.set("view engine", "ejs")

app.use( express.static( "public" ));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/sign_up", function(req,res, next){
  //res.send("hello");
 res.render("signup");
});

app.get("/sign_in", function(req, res, next){
  res.render("signin");
});

app.get("/sign_out", function(req, res, next){
  res.render("signout");
});

app.get("/forgot_password", function(req, res, next){
  res.render("error");
});

function isValid(id){
  return !isNaN(id);
}

app.get("/users/:id", function(req,res,next){
  const id = req.params.id;
  if(isValid(id)){
    knex("users")
    .where("id", id)
    .first()
    .then(function(user){
      knex("statement")
      .where("user_id", id)
      .then(function(statement){
           console.log("this is statement", statement);
           res.render("user", {user, statement});
      });
   });
  } else{
    //res.sendStatus(404);
    res.render("error");
  }
});

app.get("/users/:id", function (req, res, next){
  knex("students")
  .then(function(statement){
    res.render("statement", {statement})
  });
});


app.post("/users/:id", function(req, res, next){
  const id = req.params.id;
  const {title, post} = req.body;
  knex("statement")
  .insert({
    title: title,
    post: post,
    user_id: id
  }).then(function(){
    res.redirect("/users/" + id)
  });
});


app.post("/sign_in", function(req, res, next){
 const {username, email, password} = req.body;
 bcrypt.hash(req.body.password, 12)
 .then(function(hashed_password){
   return knex("users")
   .where("username", username)
   .first()
   .then(function(user){
     res.redirect("/users/" + user.id);
   });
 }).catch(function(err){
   next(err);
 });
});

app.post("/sign_up", function(req,res, next){
  const {username, email, password} = req.body;
  bcrypt.hash(req.body.password, 12)
  .then(function(hashed_password){
    return knex("users")
     .insert({
       username,
       email,
       hashed_password
     });
  }).then(function(){
    knex("users")
    .where("username", username)
    .first()
    .then(function(user){
      res.redirect("/users/" + user.id);
    })
  }).catch(function(err){
    next(err);
  });
});


app.listen(port, function(){
  console.log("Listening on ", port);
})
