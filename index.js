const express = require('express');
const app = express();
const adminRoute = require('./routes/admin/adminRoute');
const userRoute = require('./routes/user/userRoute');
const path = require('path');
const db = require('./config/mongoose');
const flash = require('connect-flash');
const session = require('express-session'); 
const flashmessage = require('./config/message');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.join(__dirname, './static/assets')));
console.log(path.join(__dirname, './static/assets'));
app.use(express.static(path.join(__dirname, './static/admin')));
app.use(express.urlencoded({ extended: true }));

app.use(session({
  name: 'data',
  secret: 'codeadmin',
  resave: false,
  saveUninitialized: false,
  cookie: {
      maxAge: 10000 * 60 * 60
  }
}));

app.use(flash()); 
app.use(flashmessage.setFlash);

app.use('/',userRoute.router);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
