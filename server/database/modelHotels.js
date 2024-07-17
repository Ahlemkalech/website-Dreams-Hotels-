const {connection}=require('./mysql/index')


const getAll=(callback)=>{
    const sql='SELECT * FROM HOTELS'
    connection.query(sql,function(err,result){
        callback(err,result)
    })

}
const createOne=(newPost,callback)=>{
    const sql='INSERT INTO HOTELS SET ?'
    connection.query(sql,newPost,function(err,result){
        callback(err,result)
    })


}
const deleteOne=(id,callback)=>{
    const sql='DELETE FROM HOTELS WHERE idhotels=?'
    connection.query(sql,id,function(err,result){
        callback(err,result)
    })


}
const updateOne=(value,id,callback)=>{
    const sql='UPDATE HOTELS SET? WHERE idhotels=?'
    connection.query(sql,[value,id],function(err,result){
        callback(err,result)
    })


}



module.exports={ getAll,createOne,deleteOne,updateOne}