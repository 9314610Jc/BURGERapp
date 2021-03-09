Drop database if exists burgers_db;
create database burgers_db;

create table burgers(
    id integer auto_increment not null,
    burger_name varchar(50) not null,
    devoured boolean default false,
)