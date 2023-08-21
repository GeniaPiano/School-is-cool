import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import roomsRouter from "./routes/rooms.js";
import hotelsRouter from "./routes/hotels.js";
import usersRouter from "./routes/users.js";
import cookieParser from "cookie-parser";


const app = express();
dotenv.config();

//MIDDLEWARES
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/hotels', hotelsRouter);
app.use('/api/rooms', roomsRouter);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
    }
)



app.get('/', (req, res) => {
    res.send('<h1>działa!!</h1>')
})

mongoose.connect('mongodb://127.0.0.1:27017/booking');
mongoose.connection.on("connected", () => {
   console.log("mongoDB connected.")
});







app.listen(8800, ()=> {
    console.log("Listening on port http://localhost:8800")
})





// const connect = async () => {
//     try {
//         await mongoose.connect("mongodb://127.0.0.1:27017/booking");
//         console.log("Connected to MongoDb")
//     } catch (error) {
//         throw error;
//     }
// };

// mongoose.connection.on("disconnected", () => {
//     console.log("MongoDb disconnected.")
// });
//
// mongoose.connection.on("connected", () => {
//     console.log("mongoDB connected.")
// })