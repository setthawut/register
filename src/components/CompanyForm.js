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
        hideRequiredMark
      >
        <Form.Item label="ชื่อบริษัท" id="companyName" name="companyName">
          <Input placeholder="ชื่อบริษัท" />
        </Form.Item>
        <Form.Item name="provinceCompany" label="จังหวัด">
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
        <Form.Item name="districtCompany" label="อำเภอ">
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
        <Form.Item name="subDistrictCompany" label="ตำบล">
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
