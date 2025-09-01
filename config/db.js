if(process.env.NODE_ENV == "production"){
    module.exports  = {mongoURI: "mongodb+srv://name:<password>@cluster0-nbec3.mongodb.net/test?retryWrites=true"}
}else{
    // module.exports = {mongoURI: "mongodb://localhost/blogapp"}
    module.exports = {mongoURI: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_DOCKER_PORT}:27017/blogapp?authSource=admin`}
}
