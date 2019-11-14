const express = require('express');
const authorsRouter = express.Router();
function router(nav) {
    var authors = [
        {
            bookName: "Balarama",
            author: "Nikhila",
            dob: '22-05-1994',
            image: "image.jpg"

        },
        {
            bookName: "Kalikudukka",
            author: "Pranav",
            dob: '11-07-1992',
            image: "image.jpg"
        },
        {
            bookName: "Balaboomi",
            author: "Jangoo",
            dob: '22-03-2018',
            image: "image.jpg"
        }
    ];
    authorsRouter.route('/')
        .get((req, res) => {

            res.render(
                'authors',
                {
                    nav,
                    title: "AUTHORS",
                    authors
                }
            )
        })
    authorsRouter.route('/:id')
        .get((req, res) => {
            const id = req.params.id;
            res.render(
                'author',
                {
                    nav,
                    title: "AUTHORS",
                    author: authors[id]
                }
            )
        })
    return authorsRouter;
}
module.exports = router;