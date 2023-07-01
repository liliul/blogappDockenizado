if(process.env.NODE_ENV == "production"){
    module.exports  = {mongoURI: "mongodb+srv://name:<password>@cluster0-nbec3.mongodb.net/test?retryWrites=true"}
}else{
    // module.exports = {mongoURI: "mongodb://localhost/blogapp"}
    module.exports = {mongoURI: `mongodb://mongoadmin:mongo123@localhost:27017/blogapp?authSource=admin`}
}
