const express = require('express');
const router = express.Router();
const User = require('../../models/user')
const Message = require('../../models/message');



router.get("/test", (req, res) => res.json({msg : "this is users"}));

router.post("/sendmsg",(req, res) => {
   const CONFIRMATION = "Your message has been submited. Thank you"
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
            new Message({
            message : req.body.message,
            user: user._id
          }).save().then(() => res.json({ msgConfirm : CONFIRMATION }))
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

                message.save().then(() => res.json({ msgConfirm : CONFIRMATION }))
  
                // res.json({ user: newUser, msg: message })
        }
      })
  })



module.exports = router;