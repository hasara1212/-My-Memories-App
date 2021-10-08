import express from 'express';
import bodyParser from 'body-parser';
import Mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('./posts',postRoutes);

app.use(express.json({limit: "30mg",extended: true}));
app.use(express.urlencoded({limit: "30mg",extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://Hasara1212:<Hasara1212>@cluster0.ra1f6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;

//connect database
Mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
 .then(()=>app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)) )
 .catch((error)=> console.log(error.message));


Mongoose.set('useFindAndModify', false);