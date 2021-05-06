#---------------------------------------CREACION DE TABLAS-------------------------------------------------
create table PRODUCT(
	price				double not null,
    discount			double default	0.00,
    discharge_date		date not null,
    score				smallint default 0,
    description			text,
    nombre				varchar(20),
    id					int auto_increment not null,
    
    constraint PK_PRODUCT primary key(id, nombre)
);

create table PRODUCT_IMAGE(
	image		varchar(100),
    dateImg		date not null,
    prodName	varchar(20) not null,
    prodId		int not null, 
    
    constraint PK_IMG primary key(image, dateImg),
    constraint FK_PROD foreign key(prodId, prodName) references PRODUCT(id, nombre)
);

create table PRODUCT_SPECS(
	prodName	varchar(20) not null,
    prodId		int not null,
    processor	varchar(50),
    graph		varchar(20),
    RAM			smallint,
    storage		smallint,
    specsId		int auto_increment not null,
    
    constraint PK_SPECS primary key(specsId),
    constraint FK_PRODUCT_SPECS foreign key(prodId, prodName) references PRODUCT(id, nombre)
);

create table USER(
	email		varchar(80) not null,
    name		varchar(20) not null,
    s_name		varchar(20),
    m_lastName	varchar(20) not null,
    p_lastName	varchar(20) not null,
    phone		varchar(13) default '555-555-555',
    password	varchar(100) not null,
    
    constraint PK_USER primary key(email)
);

create table ADRESS(
	adress_number		smallint not null,
	street				varchar(20),
    city				varchar(20),
    state				varchar(30),
    idAddress			int not null auto_increment,
    user_email			varchar(80) not null,
    
    constraint PK_ADDRESS primary key(idAddress),
    constraint FK_USER_ADRESS foreign key(user_email) references USER(email)
);

create table purchases(
	user_email		varchar(80) not null,
	fecha			date,	
	prodName		varchar(20) not null,
    prodId			int not null,
    
    constraint PK_PURCHASE primary key(user_email, prodName, prodId)
);

create table WISH_LIST(
	user_email			varchar(80) not null,
    name				varchar(40) not null,
    id					int auto_increment not null,
	discharge_date		date,	
    
    constraint PK_LIST primary key(id, name),
    constraint FK_LIST_USER foreign key(user_email) references USER(email)
);

create table USER_CREATE_WISH_LIST(
	list_name		varchar(80) not null,
    list_id			int not null,
    prodName		varchar(20) not null,
    prodId			int not null,
    
    constraint PK_CREATE_WISH_LIST primary key(list_name, list_id, prodName, prodId),
    constraint FK_CREATE_WISH_LIST_LIST foreign key(list_id, list_name) references WISH_LIST(id, name),
    constraint FK_CREATE_WISH_LSIT_PRODUCT foreign key(prodId, prodName) references PRODUCT(id ,nombre)
);

#----------------------------------------------Testing---------------------------------------------------
insert into `user`(
	email,
    user_name,
    s_name,
    m_lastName,
    p_lastName,
    user_password
) values(
	'Miguel5@hotmail.com',
    'Miguel',
    'Angel',
    'Med',
    'Ortiz',
    '123'
);
#modo no seguro
SET SQL_SAFE_UPDATES = 0;
#modo seguro
SET SQL_SAFE_UPDATES = 1;

use altatec_ecomer;
select * from user;
delete from user;

