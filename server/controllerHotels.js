const { getAll,createOne,deleteOne,updateOne}=require('./database/modelHotels')

const getAllHotels=(req,res)=>{
    getAll(function(err,result){
        err ?console.log(err):res.send(result)
    })
}
const createOneHotels=(req,res)=>{
createOne(req.body,function(err,result){
    err ? console.log(err):res.send(result)
})
}
const deleteOneHotel=(req,res)=>{
    deleteOne(req.params.id,function(err,result){
        err ? console.log(err):res.send(result)
    })

}
const updateOneHotel=(req,res)=>{
 updateOne(req.body,req.params.id,function(err,result){
    err ?console.log(err):res.send(result)
 })
}
module.exports={getAllHotels,createOneHotels,deleteOneHotel, updateOneHotel}