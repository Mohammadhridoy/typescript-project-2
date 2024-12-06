import express from 'express'
import { carControllers } from './car.controller';


const router = express.Router()

router.post('/create-car', carControllers.createCar )
router.get('/:carId', carControllers.getOneCarInfo )
router.put('/:carId', carControllers.updatedCarInfo )
router.delete('/:carId', carControllers.deleteCarInfo)
router.get('/', carControllers.getAllCarsInfo)


export const carRoutes = router; 