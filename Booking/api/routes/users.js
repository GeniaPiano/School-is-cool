import { Router } from "express";
import {deleteUser, getAllUsers, getOneUser, updateUser} from "../controllers/user.js";
import {verifyAdmin, verifyToken, verifyUser} from "../utils/verifyToken.js";


const usersRouter = Router();


usersRouter

    // .get('/checkauthentication', verifyToken, (req, res, next)=> {
    //     res.send('You are logged in.')
    // })
    //
    // .get('/checkuser/:id', verifyUser , (req, res, next) => {
    //     res.send('You are logged in and you can delete your account')
    // })
    //
    // .get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
    //     res.send('Hello Admin, you are logged in and you can delete all accounts.')
    // })

    .put('/:id', verifyUser, updateUser)
    .delete('/:id', verifyUser, deleteUser)
    .get('/:id', verifyUser, getOneUser)
    .get('/', verifyAdmin, getAllUsers);

export default usersRouter;