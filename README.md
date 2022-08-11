pasos para crear la bd en docker:

docker network create mired
docker run -p 3307:3306 --name microservicio-mysql8 --network mired -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=almacen -d mysql:8