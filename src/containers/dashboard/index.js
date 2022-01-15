import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../redux/actions/index";
import { Steps, Button, Form, Spin, Alert } from "antd";
import PersonnalForm from "../../components/PersonalForm";
import CompanyForm from "../../components/CompanyForm";
import ConfirmForm from "../../components/ConfirmForm";
import { mapCreateProfileToRequest } from "../../utils/createUtils";
const { Step } = Steps;

const steps = [
  {
    title: "Personal",
  },
  {
    title: "Company",
  },
  {
    title: "Confirm",
  },
  
];

const Dashboard = ({
  showData,
  data,
  getAddress,
  createProfile,
  currentStep,
  setCurrentStep,
  refreshPage,
}) => {
  const [current, setCurrent] = useState(0);
  const [base64Img, setBase64Img] = useState([]);

  const [formStep1] = Form.useForm();
  const [formStep2] = Form.useForm();
  useEffect(() => {
    getAddress();
  }, []);

  const onSubmit = async () => {
    createProfile(await mapCreateProfileToRequest(data));
  };

  const next = async () => {
    let step1 = await formStep1.validateFields();
    let step2 = await formStep2.validateFields();

    try {
      if (currentStep === 0) {
        showData(step1);
      } else if (currentStep === 1) {
        showData({ ...data, ...step2, imgProfileBase64: base64Img });
      }
    } catch (err) {}
    setCurrentStep(currentStep + 1);
  };

  const prev = () => {
    setCurrentStep(currentStep - 1);
  };
  const setFormContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <PersonnalForm formStep1={formStep1} setBase64Img={setBase64Img} />
        );
      case 1:
        return <CompanyForm formStep2={formStep2} />;
      case 2:
        return <ConfirmForm />;
      default:
        return "last";
    }
  };
  return (
    <>
      <Steps current={currentStep}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{setFormContent()}</div>
      <div className="steps-action">
        {currentStep < steps.length - 1 && currentStep != 2 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {currentStep === 2 && (
          <Button type="primary" onClick={() => onSubmit()}>
            Submit
          </Button>
        )}
        {currentStep > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};
function mapStateToProps(state) {
  return {
    data: state.dashboard.data,
    currentStep: state.dashboard.currentStep,
    refreshPage: state.dashboard.refreshPage,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
