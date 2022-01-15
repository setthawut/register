import React, { useState } from "react";
import { Form, Input, Select } from "antd";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../redux/actions/index";
const { Option } = Select;

const CompanyForm = ({
  formStep2,
  dataProvince,
  getAddressDistrict,
  dataDistrict,
  getAddressSubDistrict,
  dataSubDistrict,
}) => {
  const [provinceData, setProvinceData] = useState("");
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 14,
      },
    },
    inputWidth: { width: "70%" },
  };
  const handleChangeAddressProvince = (province) => {
    setProvinceData(province);
    getAddressDistrict(province);
  };
  const handleChangeAddressDistrict = (district) => {
    getAddressSubDistrict(provinceData, district);
  };

  return (
    <>
      <Form
        {...formItemLayout}
        layout="horizontal"
        form={formStep2}
        style={{ marginTop: "40px" }}
      >
        <Form.Item
          label="ชื่อบริษัท"
          id="companyName"
          name="companyName"
          rules={[
            {
              required: true,
              message: "กรุณากรอกข้อมูล",
            },
          ]}
        >
          <Input placeholder="ชื่อบริษัท" style={formItemLayout.inputWidth} />
        </Form.Item>
        <Form.Item
          name="provinceCompany"
          label="จังหวัด"
          rules={[
            {
              required: true,
              message: "กรุณาเลือกจังหวัด",
            },
          ]}
        >
          <Select style={{ width: 120 }} onChange={handleChangeAddressProvince}>
            {!!dataProvince &&
              !!dataProvince.data &&
              dataProvince.data.map((item) => (
                <Option key={item.province} value={item.province}>
                  {item.province}
                </Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="districtCompany"
          label="อำเภอ"
          rules={[
            {
              required: true,
              message: "กรุณาเลือกอำเภอ",
            },
          ]}
        >
          <Select style={{ width: 120 }} onChange={handleChangeAddressDistrict}>
            {!!dataDistrict &&
              !!dataDistrict.data &&
              dataDistrict.data.map((item, i) => (
                <Option key={i} value={item}>
                  {item}
                </Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="subDistrictCompany"
          label="ตำบล"
          rules={[
            {
              required: true,
              message: "กรุณาเลือกตำบล",
            },
          ]}
        >
          <Select style={{ width: 120 }}>
            {!!dataSubDistrict &&
              !!dataSubDistrict.data &&
              dataSubDistrict.data.map((item, i) => (
                <Option key={i} value={item}>
                  {item}
                </Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: formItemLayout.wrapperCol.span,
              offset: formItemLayout.labelCol.span,
            },
          }}
        ></Form.Item>
      </Form>
    </>
  );
};
function mapStateToProps(state) {
  return {
    dataProvince: state.dashboard.dataProvince,
    dataDistrict: state.dashboard.dataDistrict,
    dataSubDistrict: state.dashboard.dataSubDistrict,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyForm);
