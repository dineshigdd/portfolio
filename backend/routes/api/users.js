const express = require('express');
const router = express.Router();
const User = require('../../models/user')
const Message = require('../../models/message');



router.get("/test", (req, res) => res.json( req.body.name ));

router.post("/register",(req, res) => console.log( "testing----:" + req.body.name));
    // Check to make sure nobody has already registered with a duplicate email
    // User.findOne({ email: req.body.email })
    //   .then(user => {
    //     if (user) {
    //       // Throw a 400 error if the email address already exists
    //       return res.status(400).json({email: "A user has already registered with this address"})
    //     } else {
    //       // Otherwise create a new user
    //       const newUser = new User({
    //                 firstName: req.body.firstName,
    //                 lastName: req.body.lastName,
    //                 email: req.body.email,
    //                 phone: req.body.phone
    //             });
                
    //             newUser.save();

    //             const message = new Message({
    //                 message : req.body.message,
    //                 user: newUser._id
    //             });

    //             message.save();
  
      
    //     }
    //   })
  // })


// router.post('/sendmsg', ( req, res ) => {
//     console.log("testing....." + req)
//     User.findOne({ email: req.body.email })
   
//         .then( user => {
//             if( user ){
//                 //Append the msg to the existig=ng msg
//                 console.log("user found")
//             }else{
//                 //create a new user and record the msg
               

                // const newUser = new User({
                //     firstName: req.body.firstName,
                //     lastName: req.body.lastName,
                //     email: req.body.email,
                //     phone: req.body.phone
                // });
                
                // newUser.save();

                // const message = new Message({
                //     message : req.body.message,
                //     user: newUser._id
                // });

                // message.save();
                
//             }
//         }
            

//     ).catch(
        
//         err => res.json(err)
        
//         )
// })

module.exports = router;