CREATE DATABASE platillos

CREATE TABLE platillos{
    id SERIAL PRIMARY KEY,
    name varchar(30),
    detail varchar (300),
    price int,
    status varchar(30),
    quantity int
}