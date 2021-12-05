-- CSDL Rạp chiếu phim
CREATE DATABASE CINEMA;
GO
USE CINEMA;
GO

--GIA VE
CREATE TABLE BANGGIA
(	
	thoi_gian		NVARCHAR(50) NOT NULL,
	gia_tre_em		INT NOT NULL,
	gia_nguoi_lon	INT NOT NULL,
	gia_HSSV		INT NOT NULL --hoc sinh/ sinh vien
);
GO

--DANH SACH PHIM
CREATE TABLE DSPHIM
(
	stt				INT IDENTITY(1,1),
	ma_phim			VARCHAR(10) 	NOT NULL PRIMARY KEY,
	ten_phim		NVARCHAR(100) 	NOT NULL,
	quoc_gia		NVARCHAR(50) 	NOT NULL,
	the_loai		NVARCHAR(50) 	NOT NULL,
	dao_dien		NVARCHAR(50) 	NOT NULL,
	dien_vien		NVARCHAR(100) 	NOT NULL,
	noi_dung		NVARCHAR(200) 	NOT NULL,
	thoi_luong		TIME			NOT NULL, --hh:mm
	poster			VARCHAR(100)	NOT NULL, --duong dan den file
	trailer			VARCHAR(100)	NOT NULL  --youtube url
);
GO


-- DANH SACH RAP PHIM
CREATE TABLE DSRAP
(
	ma_rap			VARCHAR(10)		NOT NULL PRIMARY KEY,
	ten_rap			NVARCHAR(50)	NOT NULL,
	dia_chi			NVARCHAR(255)	NOT NULL,
	tinh_thanh		NVARCHAR(50)	NOT NULL,
	so_phong_chieu  INT				NOT NULL
);
GO

-- PHONG CHIEU

CREATE TABLE PHONGCHIEU
(
	ma_rap			VARCHAR(10)		NOT NULL,
	ma_phong		INT		NOT NULL,
	PRIMARY KEY (ma_rap,ma_phong),
	FOREIGN KEY (ma_rap) REFERENCES dbo.DSRAP(ma_rap)
);
GO

--LICH CHIEU PHIM
CREATE TABLE LICHCHIEU
(
	ngay			DATE			NOT NULL,
	ma_rap			VARCHAR(10)		NOT NULL, 
	suat_chieu		TIME			NOT NULL, --hh:mm
	ma_phong		INT		NOT NULL,
	ma_phim			VARCHAR(10) 	NOT NULL,
	PRIMARY KEY (ngay, ma_rap, suat_chieu),
	FOREIGN KEY (ma_rap,ma_phong) REFERENCES dbo.PHONGCHIEU(ma_rap,ma_phong),
	FOREIGN KEY (ma_phim) REFERENCES dbo.DSPHIM(ma_phim),
);
GO

CREATE TABLE NHANVIEN
(
	ma_nhan_vien	CHAR(6)		NOT NULL
		CHECK(ma_nhan_vien LIKE 'NV[0-9][0-9][0-9][0-9]'),
	ho_ten			NVARCHAR(50) 	NOT NULL,
	loai_cong_viec	VARCHAR(30) NOT NULL,
	noi_lam_viec	VARCHAR(10)	NULL, -- null khong lam tai rap
	ngay_sinh		VARCHAR(12) NOT NULL,
	email			VARCHAR(30) NOT NULL,
	gioi_tinh		CHAR(5)		NOT NULL,
	so_dien_thoai	INT			NOT NULL,
	PRIMARY KEY(ma_nhan_vien),
	FOREIGN KEY(noi_lam_viec) REFERENCES dbo.DSRAP(ma_rap),
);
GO

--10. vé
CREATE TABLE VE
(		
	ngay_gio_mua	SMALLDATETIME	NOT NULL,
	loai_ve			INT				NOT NULL, 
	-- cac loai ve: 01- nguoi lon, 02- tre em, 03- HSSV; 10- nguoi lon ngay le, 20- tre em ngay le, 30- tre em ngay le
	ngay			DATE			NOT NULL, --ngay di xem phim
	ma_rap			VARCHAR(10)		NOT NULL,
	suat_chieu		TIME			NOT NULL, --hh:mm
	gia				INT				NOT NULL,
	ma_ghe			CHAR(5)			NOT NULL,
	ma_khach_hang	VARCHAR(255)	NULL, -- =username khach hang neu dat mua online, null neu mua truc tiep tai rap
	id_temp			INT IDENTITY(1,1),
	ma_ve			AS 'V' + ma_rap 
						   + right('00' + cast(loai_ve as varchar(2)), 2) 
						   + right('00' + cast(DAY(GETDATE()) as varchar(2)), 2)
						   + right('00' + cast(MONTH(GETDATE()) as varchar(2)), 2)
						   + right('0000' + cast(YEAR(GETDATE()) as varchar(4)), 4)
						   + right('0000' + cast(id_temp as varchar(4)), 4),
	--ma ve = V + ma rap + loai ve + DDMMYYYY + [0-9][0-9][0-9][0-9]
	FOREIGN KEY (ngay, ma_rap, suat_chieu) REFERENCES dbo.LICHCHIEU(ngay, ma_rap, suat_chieu)
);
GO

CREATE TABLE DONHANG
(
	ma_rap				VARCHAR(10),
	ngay_gio_mua		SMALLDATETIME	NOT NULL,
	tien_ve				INT DEFAULT 0,	
	tien_do_an			INT DEFAULT 0,
	tong				AS tien_ve + tien_do_an,
	id_temp				INT IDENTITY(1,1),
	ma_bien_lai			AS 'B' + ma_rap 
						   + right('00' + cast(DAY(GETDATE()) as varchar(2)), 2)
						   + right('00' + cast(MONTH(GETDATE()) as varchar(2)), 2)
						   + right('0000' + cast(YEAR(GETDATE()) as varchar(4)), 4)
						   + right('0000' + cast(id_temp as varchar(4)), 4),
	--ma bien lai: B + ma rap + DDMMYYYY + [0-9][0-9][0-9][0-9]
	FOREIGN KEY(ma_rap) REFERENCES dbo.DSRAP(ma_rap)
);
GO



