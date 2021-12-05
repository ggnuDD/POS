import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./member.css";
import i1 from "./i1.jpg";
import i2 from "./i2.jpg";
import i3 from "./i3.svg";

function Member() {
    return (
        <Container className="box-container">
            <h1 className="title">Quyền lợi thành viên</h1>
            <Row>
                <Col>
                    <h2 className="sub">1. Thành viên thân thiết</h2>
                    <p className="prg">
                        Điều kiện: đăng ký làm thành viên thân thiết và duy trì xem phim ít nhất 2 tháng 1 lần.<br />
                        Thành viên thân thiết sẽ nhận được các ưu đãi sau:<br />
                        - Nhận 1 combo bắp và nước miễn phí vào tháng sinh nhật.<br />
                        - Giảm 5% giá vé khi thanh toán online.<br />
                        - Tích lũy điểm 5% giá trị giao dịch tại quầy vé và 3% giá trị giao dịch tại quầy bắp nước.<br />
                        - Cơ hội tham gia những chương trình đặc biệt khác chỉ áp dụng cho thành viên thân thiết.<br />
                    </p>
                </Col>
                <Col xs={6} md={4}>
                    <br /><br /><Image src={i2} rounded fluid />
                </Col>
            </Row>
            <Row>
                <Col xs={6} md={4}>
                    <br /><br /><Image src={i1} roundedCircle fluid />
                </Col>
                <Col>
                    <h2 className="sub">2. Thành viên VIP</h2>
                    <p className="prg">
                        Điều kiện: là thành viên thân thiết có tổng chi tiêu trong 1 năm từ 2.000.000 VND đến 3.999.999 VND.<br />
                        Thành viên vip sẽ nhận được các ưu đãi sau:<br />
                        - Nhận 01 combo bắp và nước miễn phí và 01 vé xem phim 2D/3D trong tháng sinh nhật và vào những ngày lễ.<br />
                        - Giảm 7% giá vé khi thanh toán online.<br />
                        - Tích lũy điểm 7% giá trị giao dịch tại quầy vé và 3% giá trị giao dịch tại quầy bắp nước.<br />
                        - Cơ hội tham gia những chương trình đặc biệt khác chỉ áp dụng cho thành viên VIP.<br />
                    </p>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h2 className="sub">3. Thành viên SVIP</h2>
                    <p className="prg">
                        Điều kiện: là thành viên thân thiết có tổng chi tiêu trong 1 năm từ 4.000.000 VND trở lên.<br />
                        Là cấp độ thành viên cao nhất, bạn sẽ được nhận các ưu đãi sau:<br />
                        - 01 phần quà đặc biệt dành cho bạn trong tháng sinh nhật.<br />
                        - Nhận 01 combo bắp và nước miễn phí và 01 vé xem phim 2D/3D trong tháng sinh nhật và vào những ngày lễ.<br />
                        - Giảm 10% giá vé khi thanh toán online.<br />
                        - Tích lũy điểm 10% giá trị giao dịch tại quầy vé và 5% giá trị giao dịch tại quầy bắp nước.<br />
                        - Cơ hội tham gia những chương trình đặc biệt khác chỉ áp dụng cho thành viên SVIP.<br />
                    </p>
                </Col>
                <Col xs={6} md={4}>
                    <br /><br /><Image src={i3} fluid />
                </Col>
            </Row>
        </Container>
    )
}

export default Member;