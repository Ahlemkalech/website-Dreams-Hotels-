const {getAll,createOne,deleteOne,updateOne}=require('./database/mysql/modelUsers.js')

const getAllUsers=(req,res)=>{
    getAll(function(err,result){
        err ?console.log(err):res.send(result)
    })
}

const createOneUsers=(req,res)=>{
    createOne(req.body,function(err,result){
        err ? console.log(err):res.send(result)
    })
    }


    const deleteOneUsers=(req,res)=>{
        deleteOne(req.params.id,function(err,result){
            err ? console.log(err):res.send(result)
        })
    
    }

    const updateOneUsers=(req,res)=>{
        updateOne(req.body,req.params.id,function(err,result){
           err ?console.log(err):res.send(result)
        })
       }

//       const getOneUsers=(req,res)=>{
//     getOne(req.params.id,function(err,result){
//         err ?console.log(err):res.send(result)
//     })
// }
    
    



       module.exports={getAllUsers,createOneUsers,deleteOneUsers,updateOneUsers}