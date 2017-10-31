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

app.get("/users/:id/profile", function(req, res, next){
  const id = req.params.id;
  knex("users")
   .where("id", id)
   .first()
   .then(function(user){
     knex("students")
      .where("user_id", id)
      .first()
      .then(function(profile){
        knex("statement")
         .where("user_id", id)
         .first()
         .then(function(post){
           knex("universities")
            .where("user_id", id)
            //.first()
            .then(function(schools){
              console.log("this is schools", schools);
             res.render("profile", {user, profile, post, schools});
             }).catch(function(err){
             console.log(err);
           });
        });
    });
  });
});

// app.get("/users/:id/profile/statement", function(req, res, next){
//   const id = req.params.id;
//   knex("users")
//    .where("id", id)
//    .first()
//    .then(function(user){
//      knex("statement")
//       .where("user_id", id)
//       .first()
//       .then(function(post){
//         console.log("this is post ", post);
//         res.render("user", {user, post});
//       }).catch(function(err){
//         console.log(err);
//       });
//   });
// });

app.get("/users/:id", function(req, res, next){
   const id = req.params.id;
   knex("users")
    .where("id", id)
    .first()
    .then(function(user){
         console.log("user", user);
         res.render("user", {user});
   }).catch(function(err){
     console.log(err);
   });
});

//to create and post a personal statement
app.post("/users/:id/profile/statement", function(req, res, next){
  const id = req.params.id;
  const {title, post} = req.body;
  knex("users")
   .where("id", id)
   .first()
   .then(function(user){
      knex("statement")
      .insert({
        title: title,
        post: post,
        user_id: id
     }).then(function(){
    res.redirect("/users/" + id + "/profile" )
   });
 });
});


//to post schools and programs
app.post("/users/:id/profile/schools", function(req, res, next){
  const id = req.params.id;
  const {school_name} = req.body;
  knex("users")
   .where("id", id)
   .first()
   .then(function(user){
      knex("universities")
      .insert({
        school_name: school_name,
        user_id: id
     }).then(function(){
    res.redirect("/users/" + id + "/profile" );
   });
 });
});

//create and post personal information to students table
app.post("/users/:id", function(req, res, next){
  const id = req.params.id;
  const {name, last_name, country, city, state, alma_mater, gpa, toefl, ielts, sat} = req.body;
     knex("students")
     .insert({
       name: name,
       last_name: last_name,
       country: country,
       city: city,
       state: state,
       alma_mater: alma_mater,
       gpa: gpa,
       toefl: toefl,
       ielts: ielts,
       sat:sat,
       user_id: id
     }).then(function(){
         res.redirect("/users/" + id  + "/profile")
       }).catch(function(err){
         console.log(err);
       });
});



//compare sign in information with users table
app.post("/sign_in", function(req, res, next){
 const {username, password} = req.body;
  knex("users")
  .where("username", username)
  .first()
  .then(function(user){
      bcrypt.compare(password, user.hashed_password)
      .then(function(){
        knex("students")
        .where("name", undefined)
        .then(function(){
          res.redirect("/users/" + user.id);
        })
        .catch(function(){
          res.redirect("/users/" + user.id + "/profile");
        })
      });
   })
  .catch(function(err){
    res.redirect("/sign_in");
  });

});


//sign up to the page and insert information to users table
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
