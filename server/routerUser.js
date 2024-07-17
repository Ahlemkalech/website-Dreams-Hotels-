const router2=require("express").Router()
const {getAllUsers,createOneUsers,deleteOneUsers,updateOneUsers}=require('./controllerUser')


router2.get('/getall',getAllUsers)
router2.post('/adduser',createOneUsers)
router2.delete('/:id',deleteOneUsers)
router2.put('/:id',updateOneUsers)

module.exports={router2}