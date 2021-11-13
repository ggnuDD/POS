USE CINEMA;
GO

-- Liet ke cac rap tai tinh thanh duoc chon
CREATE OR ALTER FUNCTION rap_tai_tinh (@Tinh NVARCHAR(50))
RETURNS TABLE
AS
RETURN
	SELECT ten_rap, dia_chi FROM dbo.DSRAP WHERE tinh_thanh=@Tinh  
GO

-- Liet ke cac suat chieu theo theo rap duoc chon
CREATE OR ALTER FUNCTION Lich_chieu_phim_tai_rap (@TenRap VARCHAR(10))
RETURNS TABLE
AS
RETURN SELECT ngay, suat_chieu, ten_phim
		FROM (SELECT L.ngay, L.ma_phim, L.ma_rap, L.suat_chieu  
		  FROM dbo.LICHCHIEU AS L JOIN dbo.DSRAP AS R 
		  ON L.ma_rap=R.ma_rap 
		  WHERE R.ten_rap=@TenRap) AS LC JOIN dbo.DSPHIM AS P 
    ON LC.ma_phim = P.ten_phim
GO


SELECT * FROM Lich_chieu_phim_tai_rap('CGV') ORDER BY ngay
GO

--Phim theo the loai
CREATE OR ALTER FUNCTION tim_phim (@the_loai NVARCHAR(50)) 
RETURNS TABLE
AS RETURN
	SELECT ten_phim FROM DSPHIM WHERE the_loai=@the_loai
GO

--Lich chieu cua 1 phim
CREATE OR ALTER FUNCTION lich_chieu_1_phim (@ten_phim NVARCHAR(100), @rap NVARCHAR(50))
RETURNS TABLE
AS RETURN
	SELECT * FROM Lich_chieu_phim_tai_rap(@rap) WHERE ten_phim=@ten_phim 
GO


--Phim dang chieu
-- SELECT ten_phim FROM DSPHIM

--Doanh thu: tien ve + do an
--Theo rap
SELECT ten_rap, SUM(tong) as So_tien 
FROM DONHANG JOIN DSRAP ON DONHANG.ma_rap=DSRAP.ma_rap
GROUP BY ten_rap
GO
--Theo phim: gia ve
SELECT ten_phim, SUM(gia) as So_tien 
FROM VE JOIN 
	(SELECT ten_phim, ngay, ma_rap, suat_chieu 
	 FROM LICHCHIEU JOIN DSPHIM 
	 ON LICHCHIEU.ma_phim=DSPHIM.ma_phim) AS P
ON VE.ngay = P.ngay AND VE.ma_rap = P.ma_rap AND VE.suat_chieu = P.suat_chieu
GROUP BY ten_phim
GO

--Theo ngay: tien ve + do an
SELECT CAST(ngay_gio_mua AS DATE) AS Ngay, SUM(tong) as So_tien 
FROM DONHANG
GROUP BY CAST(ngay_gio_mua AS DATE)





