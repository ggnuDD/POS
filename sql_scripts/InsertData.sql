USE CINEMA
GO

-- Them N khi go dau
--insert bang gia
INSERT INTO BANGGIA VALUES (N'Thứ 2-6', 40000, 50000, 45000);
INSERT INTO BANGGIA VALUES (N'Cuối tuần - Ngày lễ', 50000, 60000, 55000);
GO


--insert phim
INSERT INTO DSPHIM VALUES ('ff9','Fast and furious 9',N'Mỹ',N'Hành động','James Wan','Vin Diesel, John Cena',
							N'Bom tấn đua xe trở lại và lợi hại hơn xưa','02:25:00','/images/poster/ff.png','youtube.com');
							-- Mô tả phim có thể thay thế bằng đường dẫn tới file txt
GO

--insert danh sach rap
INSERT INTO DSRAP VALUES ('HCM01',N'Vincom Thủ Đức',N'216 Võ Văn Ngân, Phường Bình Thọ, Quận Thủ Đức','TP HCM',3);
INSERT INTO DSRAP VALUES ('HCM02','Pearl Plaza',N'561A Điện Biên Phủ, P.25, Quận Bình Thạnh','TP HCM',3);

--phong chieu
INSERT INTO PHONGCHIEU VALUES ('HCM01',1);
INSERT INTO PHONGCHIEU VALUES ('HCM01',2);
INSERT INTO PHONGCHIEU VALUES ('HCM01',3);
INSERT INTO PHONGCHIEU VALUES ('HCM02',1);


--lich chieu
INSERT INTO LICHCHIEU VALUES ('2021-11-20','HCM01','08:00:00',1,'ff9');
INSERT INTO LICHCHIEU VALUES ('2021-11-20','HCM01','08:15:00',2,'ff9');
INSERT INTO LICHCHIEU VALUES ('2021-11-20','HCM01','09:00:00',3,'ff9');
GO

--nhan vien
INSERT INTO NHANVIEN VALUES ('NV0001',N'Lê Khánh Toàn',N'Bán vé','HCM01','2001-11-15','toanle@gmail.com','Nam','0999009009');

--ve
INSERT INTO VE VALUES (GETDATE(),03,'2021-11-20','HCM01','08:00:00','45000','A9','toanlebk');
INSERT INTO VE VALUES (GETDATE(),02,'2021-11-20','HCM01','08:00:00','50000','A2',NULL);

--don hang
INSERT INTO DONHANG VALUES ('HCM01', GETDATE(),'45000','20000');
INSERT INTO DONHANG VALUES ('HCM01', GETDATE(),'50000','15000');

SELECT * FROM DONHANG