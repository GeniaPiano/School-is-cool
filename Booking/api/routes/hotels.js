import {Router} from 'express';
import {
    countByCity,
    countByType,
    createHotel,
    deleteHotel,
    getAllHotels,
    getOneHotel,
    updateHotel
} from "../controllers/hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js";

const hotelsRouter = Router();

hotelsRouter

    .post('/', verifyAdmin, createHotel)
    .put('/:id', verifyAdmin, updateHotel)
    .delete('/:id', verifyAdmin, deleteHotel)
    .get('/find/:id', getOneHotel)
    .get('/', getAllHotels)
    .get('/countByCity', countByCity)
    .get('/countByType', countByType)



export default hotelsRouter;