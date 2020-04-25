const express = require('express');
const  app = express();
const mongoose = require('mongoose');
//const user = require('./models/User')
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

app.use(express.json())
mongoose.connect(keys.mongoURI);
// let db = mongoose.connection;
// db.once('open', ()=> {
//     console.log('Connected to mongoDB');
// })
// 
// app.get('/', (req, res) => {
//     user.find({},(err,doc)=>{
//         if(doc)
//             res.json({"Available users": doc});
//         else {
//             res.err(err);
//         }
//     })
// })
// 
// app.post('/adduser',(req,res)=>{        //add a new book
//     var userObj = new user({
//         googleId: req.profile.id
//     })
//     userObj.save((err)=>{
//         if(err){
//         console.log(err);
//         res.send('Unable to save user data!');
//         }
//         else
//         res.send('user data saved successfully!');
//     })
// });
// 
// app.get('/getuserDetails/:googleId',(req,res)=>{              //get a book details
//     book.findOne({userId : req.params.userid},{},(err,doc)=>{
//         if(doc)
//             res.json(doc);
//         else {
//             res.status(404).send('Ops!Detail not found');
//         }
//     })
// });
// 
// app.post('/update',(req,res)=>{          //update a book data
//     user.findOneAndUpdate({userId : req.body.userid},(err,doc)=>{
//         if(doc)
//             res.send('User updated successfully!');
//         else {
//             res.err(err.message);
//         }
//     })
// });
// 
// app.delete('/deleteuser/:userid',(req,res)=>{           //delete a perticular book
//     book.findOneAndRemove({userId : req.params.userid},{},(err,doc)=>{
//         if(doc)
//             res.json(doc);
//         else {
//             res.status(404).send('Ops! User not found');
//         }
//     })
// });

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>{
    if(!err)
    console.log('server started running on:' + PORT);
    else
    console.log('unable to start server');
});