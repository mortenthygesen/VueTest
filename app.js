var express = require('express');

var app = express();
var nav = [{
                Link: '/books',
                Text: 'Books'
            }, {
                Link: '/authors',
                Text: 'Authors'
            }];

var bookRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/books', bookRouter);
app.use('/admin', adminRouter);

app.get('/', function (req, res) {
    res.render('index', {
        list: [{
            Link: '/books',
            Text: 'Books'
        }, {
            Link: '/authors',
            Text: 'Authors'
        }]
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function (err) {
    console.log('running server on port ' + port);
});