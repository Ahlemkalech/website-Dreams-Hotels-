const {connection}=require('../../database/mysql/index.js')

const getAll=(callback)=>{
    const sql='SELECT * FROM users'
    connection.query(sql,function(err,result){
        callback(err,result)
    })

}
const createOne=(newPost,callback)=>{
    const sql='INSERT INTO users SET ?'
    connection.query(sql,newPost,function(err,result){
        callback(err,result)
    })


}
const deleteOne=(id,callback)=>{
    const sql='DELETE FROM users WHERE idusers=?'
    connection.query(sql,id,function(err,result){
        callback(err,result)
    })


}
const updateOne=(value,id,callback)=>{
    const sql='UPDATE users SET? WHERE idusers=?'
    connection.query(sql,[value,id],function(err,result){
        callback(err,result)
    })


}
// const getOne=(id,callback)=>{
//     const sql='SELECT * FROM users where idusers=?'
//     connection.query(sql,id,function(err,result){
//         callback(err,result)
//     })

// }
module.exports={getAll,createOne,deleteOne,updateOne}