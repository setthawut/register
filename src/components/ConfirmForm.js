import React from "react";
import { connect } from "react-redux";
import { Descriptions, Card, Image, Row, Col } from "antd";
import { mapDispatchToProps } from "../redux/actions/index";
import moment from "moment";

function ConfirmForm({ data }) {
  return (
    <>
      
      <Card bordered={false}>
        <Row>
          <Col xs={{ span: 12, offset: 1 }} lg={{ span: 6, offset: 8 }}>
            <Image width={230} height={180} src={data.imgProfileBase64} />
          </Col>
        </Row>
        <Descriptions
          title="Personal"
          style={{
            marginBottom: 32,
          }}
        >
          <Descriptions.Item label="ชื่อ (TH)">{data.nameTH}</Descriptions.Item>
          <Descriptions.Item label="ชื่อ (EN)">{data.nameEN}</Descriptions.Item>
          <Descriptions.Item label="นามสกุล (TH)">
            {data.surnameTH}
          </Descriptions.Item>
          <Descriptions.Item label="นามสกุล (EN)">
            {data.surnameEN}
          </Descriptions.Item>
          <Descriptions.Item label="วัน/เดือน/ปี เกิด">
            {moment(data.birthDay).format("DD/MM/YYYY")}
          </Descriptions.Item>
          <Descriptions.Item label="เลขบัตรประชำชน">
            {data.idCard}
          </Descriptions.Item>
          <Descriptions.Item label="เบอร์โทรศัพท์">
            {data.phone}
          </Descriptions.Item>
          <Descriptions.Item label="ตำบล">{data.subDistrict}</Descriptions.Item>
          <Descriptions.Item label="อำเภอ">{data.district}</Descriptions.Item>
          <Descriptions.Item label="จังหวัด">{data.province}</Descriptions.Item>
        </Descriptions>
        <Descriptions title="Company">
          <Descriptions.Item label="ชื่อบริษัท">
            {data.companyName}
          </Descriptions.Item>
          <Descriptions.Item label="ตำบล">
            {data.subDistrictCompany}
          </Descriptions.Item>
          <Descriptions.Item label="อำเภอ">
            {data.districtCompany}
          </Descriptions.Item>
          <Descriptions.Item label="จังหวัด">
            {data.provinceCompany}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </>
  );
}

function mapStateToProps(state) {
  return {
    data: state.dashboard.data,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmForm);
