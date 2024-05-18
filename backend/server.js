import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import ridesRoute from "./routes/ridesRoute.js";
import customerRoute from "./routes/customerRoute.js";
import userRoute from "./routes/UserRoute.js";
import riderRoute from "./routes/riderRoute.js";

const port = process.env.PORT || 5000;

connectDB();
const app  = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({extended : true}));
//cookie middleware
app.use(cookieParser());


app.get('/',(req, res) => {
    res.send('API is runing ...');
})

console.log("rides api used");
app.use('/api/rides',ridesRoute);

console.log("customer api used");
app.use('/api/customer',customerRoute);

//logIn SignUp
console.log("user api used");
app.use('/api/users',userRoute);

console.log("driver api used");
app.use('/api/rider',riderRoute);

app.use(notFound);
app.use(errorHandler);

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      console.error('Bad JSON:', err.message);
      return res.status(400).json({ error: 'Invalid JSON' });
    }
    next();
});
  

app.listen(port, () => console.log(`Server running on port ${port}`));