create database eauction;

use eauction;

create table login(username varchar(20), password varchar(20));

insert into login values('admin', 'admin');

create table bidder(
    name varchar(50),
    email varchar(50),
    phone varchar(15),
    address varchar(100),
    gender varchar(10)
);

create table item(
    item_code varchar(20),
    item_name varchar(50),
    category varchar(30),
    starting_price decimal(10,2),
    description varchar(255)
);

insert into item values('I001', 'Antique Vase', 'Antiques', 5000.00, 'An antique vase from the 18th century');
insert into item values('I002', 'Vintage Watch', 'Watches', 15000.00, 'A vintage Rolex watch from the 1960s');
insert into item values('I003', 'Oil Painting', 'Art', 12000.00, 'An oil painting of a landscape');

create table bid(
    bid_id varchar(20),
    bidder_name varchar(50),
    item_code varchar(20),
    bid_amount decimal(10,2),
    bid_time timestamp
);

create table auction_result(
    item_code varchar(20),
    winner_name varchar(50),
    winning_bid decimal(10,2),
    auction_date timestamp
);

show tables;
