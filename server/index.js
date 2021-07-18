import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';


import postRoutes from './routes/posts.js';

const app = express();
app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use('/posts',postRoutes);

const CONNECTION_URL = "mongodb+srv://prithivirajmurugan123:prithivirajmurugan123@cluster0.m4nil.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server listening in port ${PORT}`);
    })
})
.catch((error)=>{
    console.log(error.message);
});
mongoose.set('useFindAndModify',false);