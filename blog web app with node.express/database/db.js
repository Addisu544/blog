import mysql, { createConnection } from 'mysql'
const db=createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'blog_platform'
})
db.connect((err,res)=>{{
    if(err){
        console.log('err while connecting to server',err)
}
    else{
        console.log('Database connected...')
    }
}
})
export default db;
