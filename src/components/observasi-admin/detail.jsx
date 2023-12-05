import React from "react";
import { Card, Row, Col, Divider } from "antd";
import Style from "./style.module.css";

export default function Detail() {
  return (
    <Card
      style={{ width: "100%", alignItems: "center" }}
      title="Cek Pengerjaan Siswa PPLG XII-2"
      className="rounded-lg shadow-xl mt-4 shadow-gray-100"
    >
      <Row gutter={[16, 16]} justify="space-between" align="middle">
        <Col xs={24} sm={16}>
          <div>
            <Card className={Style.noBorder}>
              <Divider orientation="left" plain>
                Detail
              </Divider>
              <p>Tugas: makan air</p>
              <p>Status: belum</p>
              <p>Mengerjakan: PPLG</p>
              <p>Tanggal Pelaksanaan: 20 Nov 2023</p>
            </Card>

            <Card className={Style.noBorder}>
              <Divider orientation="left" plain>
                Alamat
              </Divider>
              <p>Contoh alamat 123, Kota Kamu, Negara</p>
            </Card>
          </div>
        </Col>
        <Col xs={24} sm={8}>
          <img
            src="./p5-2.png"
            alt="Gambar"
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
      </Row>
    </Card>
  );
}
