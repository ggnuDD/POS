USE CINEMA
GO

--Khach hang
CREATE TABLE Customer (
	id				INT				NOT NULL IDENTITY(1,1),
	username		VARCHAR(255)	NOT NULL PRIMARY KEY,
	password		VARCHAR(255)	NOT NULL,
	last_name		VARCHAR(255)	NOT NULL,
	first_name		VARCHAR(255)	NOT NULL,
	email			VARCHAR(255)    NOT NULL,
	phone			INT				NOT NULL,
);

ALTER TABLE VE 
	ADD FOREIGN KEY (ma_khach_hang) REFERENCES Customer(username)

--Nhan vien
--Ban ve
CREATE LOGIN nhan_vien_ban_ve 
    WITH PASSWORD = '123456789';  
GO  

CREATE USER nhan_vien_ban_ve FOR LOGIN nhan_vien_ban_ve;  
GO 

GRANT SELECT, INSERT, DELETE ON VE TO nhan_vien_ban_ve 
GRANT SELECT, INSERT, DELETE ON DONHANG TO nhan_vien_ban_ve 

--Quan ly kho phim va lich chieu
CREATE LOGIN quan_ly_phim
    WITH PASSWORD = '123456789';  
GO 

CREATE USER quan_ly_phim FOR LOGIN quan_ly_phim;  
GO 

GRANT SELECT, INSERT, DELETE ON DSPHIM TO quan_ly_phim
GRANT SELECT, INSERT, DELETE ON LICHCHIEU TO quan_ly_phim

--Quan ly
CREATE LOGIN quan_ly
    WITH PASSWORD = '123456789';  
GO 

CREATE USER quan_ly FOR LOGIN quan_ly;  
GO 

GRANT SELECT, INSERT, DELETE, UPDATE ON NHANVIEN TO quan_ly
GRANT SELECT ON Customer TO quan_ly
GRANT SELECT, INSERT, DELETE ON VE TO quan_ly
GRANT SELECT, INSERT, DELETE ON DONHANG TO quan_ly

