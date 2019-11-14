const express=require('express');
const booksRouter=express.Router()
function router(nav){


 var books=[
    {
        title:"War and Peace",
        genre:"Historical Fiction",
        author:"Lev Nicolayavich",
        image:"prof.jpg"
    },
    {
        title:"Les Miserables",
        genre:"Historical Fiction",
        author:"victor Hugo",
        image:"prof.jpg"
    },
    {
        title:"Balarama",
        genre:"Historical Fiction",
        author:"Jamban",
        image:"prof.jpg"
    },
    {
        title:"Vogue",
        genre:"Historical Fiction",
        author:"Thumban",
        image:"prof.jpg"
    },
 ];      

    booksRouter.route('/')
    .get((req,res)=>{
    const id=req.params.id;
    res.render(
        'books',
        {
            nav,
            title:"BOOKS",
            books
        }
     );
    });
    booksRouter.route('/addbooks')
    .get((req,res)=>{
        res.render(

       
        'addBook.ejs',
        {
            nav,
            title:"AddBooks",
            books
        }
    )
    })
    booksRouter.route('/save')
    .post((req,res)=>{
        console.log(req.body);
        console.log(req);
    })
    booksRouter.route('/:id')
    .get((req,res)=>{
    const id =req.params.id;
    res.render(
        'book',
        {
            nav,
            title:"Books",
            book:books[id]
        }
    )
})
return booksRouter;
}
module.exports=router;