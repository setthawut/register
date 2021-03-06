import React, { useState } from "react";
import { Form, Input, DatePicker, Select } from "antd";
import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../redux/actions/index";

const { Option } = Select;
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

export function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

const PersonalForm = ({
  formStep1,
  setBase64Img,
  dataProvince,
  getAddressDistrict,
  dataDistrict,
  getAddressSubDistrict,
  dataSubDistrict,
 
}) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [provinceData, setProvinceData] = useState("");
  const dummyRequest = ({ onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };
  const handleChangeImage = async (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      let resultBase64 = await toBase64(info.file.originFileObj);
      setImageUrl(resultBase64);
      setLoading(false);
      setBase64Img(resultBase64);

      //   setGetBase64ToSubmit(resultBase64);
    }
    if (info.file.status === "error") {
      setLoading(false);
      setImageUrl("");
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

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
        form={formStep1}
        layout="horizontal"
        style={{ marginTop: "40px" }}
      >
        <Form.Item
          label="รูป"
          rules={[
            {
              required: true,
              message: "กรุณารูปภาพ",
            },
          ]}
        >
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            customRequest={dummyRequest}
            onChange={handleChangeImage}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
            ) : (
              uploadButton
            )}
          </Upload>
        </Form.Item>
        <Form.Item
          label="ชื่อ (TH)"
          name="nameTH"
          rules={[
            {
              required: true,
              message: "กรุณากรอกข้อมูล",
            },
          ]}
        >
          <Input placeholder="ชื่อ (TH)" style={formItemLayout.inputWidth} />
        </Form.Item>
        <Form.Item
          label="ชื่อ (EN)"
          name="nameEN"
          rules={[
            {
              required: true,
              message: "กรุณากรอกข้อมูล",
            },
          ]}
        >
          <Input placeholder="ชื่อ (EN)" style={formItemLayout.inputWidth} />
        </Form.Item>
        <Form.Item
          label="นามสกุล (EN)"
          name="surnameEN"
          rules={[
            {
              required: true,
              message: "กรุณากรอกข้อมูล",
            },
          ]}
        >
          <Input placeholder="นามสกุล (EN)" style={formItemLayout.inputWidth} />
        </Form.Item>
        <Form.Item
          label="นามสกุล (TH)"
          name="surnameTH"
          rules={[
            {
              required: true,
              message: "กรุณากรอกข้อมูล",
            },
          ]}
        >
          <Input placeholder="นามสกุล (TH)" style={formItemLayout.inputWidth} />
        </Form.Item>
        <Form.Item
          label="วัน/เดือน/ปี เกิด"
          hasFeedback
          name={"birthDay"}
          rules={[
            {
              required: true,
              message: "กรุณากรอกข้อมูล",
            },
          ]}
        >
          <DatePicker style={formItemLayout.inputWidth} />
        </Form.Item>
        <Form.Item
          label="เลขบัตรประชาชน"
          name="idCard"
          rules={[
            {
              required: true,
              message: "กรุณากรอกข้อมูล",
            },
            {
              pattern: new RegExp(/^[0-9\b]+$/),
              message: "กรุณากรอกตัวเลขเท่านั้น",
            },
            {
              len: 13,
              message: "กรุณากรอกตัวเลข 13 ตัว",
            },
          ]}
        >
          <Input
            placeholder="เลขบัตรประชำชน"
            style={formItemLayout.inputWidth}
          />
        </Form.Item>
        <Form.Item
          label="เบอร์โทรศัพท์"
          name="phone"
          rules={[
            {
              required: true,
              message: "กรุณากรอกข้อมูล",
            },
            {
              pattern: new RegExp(/^[0-9\b]+$/),
              message: "กรุณากรอกตัวเลขเท่านั้น",
            },
          ]}
        >
          <Input
            placeholder="เบอร์โทรศัพท์"
            style={formItemLayout.inputWidth}
          />
        </Form.Item>
        <Form.Item
          name="province"
          label="จังหวัด"
          rules={[
            {
              required: true,
              message: "กรุณาเลือกจังหวัด",
            },
          ]}
        >
          <Select style={{ width: 200 }} onChange={handleChangeAddressProvince}>
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
          name="district"
          label="อำเภอ"
          rules={[
            {
              required: true,
              message: "กรุณาเลือกอำเภอ",
            },
          ]}
        >
          <Select style={{ width: 200 }} onChange={handleChangeAddressDistrict}>
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
          name="subDistrict"
          label="ตำบล"
          rules={[
            {
              required: true,
              message: "กรุณาเลือกตำบล",
            },
          ]}
        >
          <Select style={{ width: 200 }}>
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

export default connect(mapStateToProps, mapDispatchToProps)(PersonalForm);
