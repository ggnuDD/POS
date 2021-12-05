import React from "react";
import { Container, Col, Row, Table, Image } from "react-bootstrap";
import img1 from "./img1.jpg";
import "./redeem.css";

function Redeem() {
    return (
        <Container className="box-container">
            <h1 className="title">Đổi điểm tích lũy</h1>
            <p className="prg">Chương trình bao gồm các đối tượng thành viên thân thiết, VIP và SVIP với những quyền lợi và mức ưu đãi khác nhau. Mỗi khi thực hiện giao dịch, bạn sẽ nhận được một số điểm thưởng tương ứng với cấp độ thành viên:</p>
            <Table bordered hover striped size="sm" variant="warning">
                <thead>
                    <tr>
                        <th>Điểm thưởng</th>
                        <th>KH thân thiết</th>
                        <th>KH VIP</th>
                        <th>KH SVIP</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Quầy vé</td>
                        <td>5%</td>
                        <td>7%</td>
                        <td>10%</td>
                    </tr>
                    <tr>
                        <td>Quầy bắp nước</td>
                        <td>3%</td>
                        <td>3%</td>
                        <td>5%</td>
                    </tr>
                </tbody>
            </Table>
            <br/>
            <Row>
                <Col xs={6} md={4}>
                    <Image src={img1} roundedCircle fluid />
                </Col>
                <Col>
                    <p className="prg"><b>1 điểm = 1.000 VND</b>, có giá trị như tiền mặt, được dùng để mua vé xem phim, thức uống hoặc combo tương ứng tại CGV. Ví dụ: Với giao dịch mua vé giá 100.000 VND bạn có thể:<br />
                    - Thanh toán 80.000 VND + 20 điểm thưởng<br/>
                    - Thanh toán 10.000 VND + 90 điểm thưởng<br/>
                    </p>
                </Col>
            </Row>
            <p className="prg">
                <b>Lưu ý:</b><br />
                1. Điểm thưởng có thời hạn sử dụng là 01 năm.<br />
                2. Điểm thưởng có giá trị sử dụng tại một số rạp của chúng tôi trên toàn quốc.<br />
                3. Điểm thưởng tối thiểu được sử dụng cho mỗi giao dịch là 20 điểm trở lên.<br />
                4. Thành viên khi thanh toán trực tuyến trên Website/APP, trong 1 giao dịch, điểm thưởng chỉ được sử dụng thanh toán tối đa 90% giá trị đơn hàng.<br />
            </p>
        </Container>
    )
}

export default Redeem;