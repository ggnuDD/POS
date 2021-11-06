import React from "react";
import Footer from "../components/footer";
import Icon from "../components/icons";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>Cinema Việt Nam</Footer.Title>
            <Footer.Link href="#">Giới thiệu</Footer.Link>
            <Footer.Link href="#">Tiện ích Online</Footer.Link>
            <Footer.Link href="#">Thẻ quà tặng</Footer.Link>
            <Footer.Link href="#">Tuyển dụng</Footer.Link>
            <Footer.Link href="#">Liên hệ quảng cáo</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Điều khoản sử dụng</Footer.Title>
            <Footer.Link href="#">Điều khoản chung</Footer.Link>
            <Footer.Link href="#">Điều khoản giao dịch</Footer.Link>
            <Footer.Link href="#">Chính sách thanh toán</Footer.Link>
            <Footer.Link href="#">Chính sách bảo mật</Footer.Link>
            <Footer.Link href="#">Câu hỏi thường gặp</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Chăm sóc khách hàng</Footer.Title>
            <Footer.Detail>Hotline: 1900 1009</Footer.Detail>
            <Footer.Detail>Giờ làm việc: 8:00 - 22:00</Footer.Detail>
            <Footer.Detail>Email hỗ trợ: support@cinema.vn</Footer.Detail>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Kết nối với chúng tôi</Footer.Title>
            <Footer.Link href="https://facebook.com">
              <Icon className="fab fa-facebook"></Icon>Facebook
            </Footer.Link>
            <Footer.Link href="https://youtube.com">
              <Icon className="fab fa-youtube"></Icon>Youtube
            </Footer.Link>
            <Footer.Link href="https://twitter.com">
              <Icon className="fab fa-twitter"></Icon>Twitter
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
