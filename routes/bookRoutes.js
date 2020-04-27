const book = require('../models/Book');

module.exports = app => {
  app.get('/', (req,res) =>{          //get all books info from db
    book.find({},(err,doc)=>{
        if(doc)
            res.json({"Available books" : doc});
        else {
            res.err(err);
        }
    })
  });

  app.post('/addbook',(req,res)=>{        //add a new book
    var bookObj = new book({
        bookTitle : req.body.booktitle,
        author : req.body.author,
        bookId : req.body.bookid,
        publisher : req.body.publisher,
        publishDate : req.body.publishdate
    })
    bookObj.save((err)=>{
        if(err){
        console.log(err);
        res.send('Unable to save book data!');
        }
        else
        res.send('book data saved successfully!');
    })
  });

  app.get('/getbookDetails/:bookid',(req,res)=>{              //get a book details
    book.findOne({bookId : req.params.bookid},{},(err,doc)=>{
        if(doc)
            res.json(doc);
        else {
            res.status(404).send('Ops!Detail not found');
        }
    })
  });

  app.post('/update',(req,res)=>{          //update a book data
    book.findOneAndUpdate({bookId : req.body.bookid},{$set:{publisher : req.body.publisher}},(err,doc)=>{
        if(doc)
            res.send('Book updated successfully!');
        else {
            res.err(err.message);
        }
    })
  });

  app.delete('/deletebook/:bookid',(req,res)=>{           //delete a perticular book
    book.findOneAndRemove({bookId : req.params.bookid},{},(err,doc)=>{
        if(doc)
            res.json(doc);
        else {
            res.status(404).send('Ops! Book not found');
        }
    })
  });

  showTimes = () => {
    let result = ''
    const times = process.env.TIMES || 5
    for (i = 0; i < times; i++) {
      result += i + ' '
    }
    return result;
  }
}