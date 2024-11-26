create database e_auction;

use e_auction;

create table login(username varchar(20), password varchar(20));
insert into login values('admin', 'admin');

create table user (
    name varchar(50),
    email varchar(50),
    phone varchar(15),
    address varchar(100),
    aadhar varchar(20),
    gender varchar(10)
);

create table auction_item (
    item_id varchar(20) primary key,
    item_name varchar(50),
    category varchar(30),
    start_price decimal(10, 2),
    status varchar(20)
);

create table bid (
    bid_id varchar(20) primary key,
    item_id varchar(20),
    user_aadhar varchar(20),
    bid_amount decimal(10, 2),
    bid_time timestamp default current_timestamp,
    foreign key (item_id) references auction_item(item_id),
    foreign key (user_aadhar) references user(aadhar)
);

insert into auction_item values ('A1001', 'Antique Vase', 'Antiques', 1000.00, 'Active');
insert into auction_item values ('A1002', 'Smartphone', 'Electronics', 15000.00, 'Active');
insert into auction_item values ('A1003', 'Wrist Watch', 'Accessories', 5000.00, 'Closed');

show tables;
