const router=require("express").Router()

const {getAllHotels,createOneHotels,deleteOneHotel, updateOneHotel}=require('./controllerHotels')

router.get('/getAll',getAllHotels)
router.post('/add',createOneHotels)
router.delete('/:id',deleteOneHotel)
router.delete('/:id',updateOneHotel)




module.exports={router}