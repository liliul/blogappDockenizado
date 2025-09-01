# Blogapp
blog feito com express
#npm install
Iniciar mongodb  &&  nodemon

para criar categorias usa url: http://localhost:8080/admin/categorias/add

para criar postagem usa url: http://localhost:8080/admin/postagem/add


run docker compose 
```bash
docker compose up --build

docker exec -it mongoBlogapp mongo -u root -p admin --authenticationDatabase admin 
show dbs;
use blogapp;
show collections;
db.postagens.find().pretty();

docker exec -it mongoBlogapp sh
``` 