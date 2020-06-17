const express = require('express');
const router = express.Router();
const User = require('../../models/user')
const Message = require('../../models/message');



router.get("/test", (req, res) => res.json( req.body.name ));

router.post("/sendmsg",(req, res) => {
   
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
            new Message({
            message : req.body.message,
            user: user._id
          }).save();

        } else {
          // Otherwise create a new user
          const newUser = new User({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    phone: req.body.phone
                });
                
                newUser.save();

                const message = new Message({
                    message : req.body.message,
                    user: newUser._id
                });

                message.save();
  
                res.json({ user: newUser, msg: message })
        }
      })
  })



module.exports = router;