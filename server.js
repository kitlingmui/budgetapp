const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const app = express();

mongoose.connect('mongodb://localhost/Users', { useNewUrlParser: true});

//app.get('/models', (req, res) => res.render('app'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())


app.listen(3000, _ => console.log('http://localhost:3000'));