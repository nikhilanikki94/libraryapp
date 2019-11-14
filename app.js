const express=require("express");
const chalk=require('chalk');
const path=require('path');
const cors=require('cors');
const bodyparser=require('body-parser')
var app= new express();
var nav=[{link:'/',title:'Home'},
    {link:'/login',title:'Login'},
    {link:'/signup',title:'Signup'},
    {link:'/books',title:'Books'},
    {link:'/authors',title:'authors'},
    {link:'/books/addbooks',title:'addbooks'}
];
const booksRouter=require('./src/routs/bookrouts')(nav);    // passing nav to bookrouter
const authorsRouter=require('./src/routs/authorRouts')(nav);
const loginRouter=require('./src/routs/loginrouts')(nav);


app.use(express.static(path.join(__dirname,"/public")));
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use(bodyparser.json());
app.use(cors());
app.set('views','./src/views'); 
app.set('view engine','ejs');


      
   

app.get('/',function(req,res){
    res.render('index',

    {

      nav,
      title:"Library",

    }
);
});

// app.get('/',function(req,res){
//     res.sendFile(path.join(__dirname,"/src/views/index.html"));
// })   

app.listen(3000,function(){
    console.log('listening to port'+chalk.green('3000'));
});