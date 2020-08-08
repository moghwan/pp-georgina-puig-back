const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
// import routes
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const { use } = require('./routes/auth');

dotenv.config();

// connect to db
mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to DB!'))
  .catch(error => console.log(error.message));
  

// middleware
<<<<<<< HEAD
app.set('view engine', 'ejs');
=======
>>>>>>> fa5fe1df32add3109f57e52a9a8fe3ae27faac0c
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
// route middlewares
app.use('/api/user', authRoute);
app.use('/api/users', usersRoute);

app.listen(3300, () => console.log(`The server has started in port 3300 - http://localhost:3300/`));