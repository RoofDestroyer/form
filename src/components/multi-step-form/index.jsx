import React, { useState, useEffect } from "react";
import { Steps } from "antd";
import axios from "axios";
import FormStep from "../form-step";
import { FormContainer, StepLabel } from "./styled";
import { useNavigate } from "react-router-dom";

const { Step } = Steps;

const MultiStepForm = () => {
  let navigate = useNavigate();

  const [steps, setSteps] = useState([]);
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://663daaa0e1913c476794f42e.mockapi.io/api/steps")
      .then((response) => {
        setSteps(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching form steps:", error);
      });
  }, []);

  const handleNext = (values) => {
    setFormData({ ...formData, ...values });
    if (current < steps.length - 1) {
      //Типо отправляет на сервер
      setIsLoading(true);
      setTimeout(() => {
        setCurrent(current + 1);
        setIsLoading(false);
      }, 1000);
    } else {
      //Типо отправляет на сервер
      setIsLoading(true);
      setTimeout(() => {
        navigate("/thank-you");
        setIsLoading(false);
      }, 1000);
    }
  };

  if (steps.length === 0 || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <FormContainer>
      <StepLabel>{steps[current].title}</StepLabel>
      <div className="steps-content">
        {current < steps.length && (
          <FormStep step={steps[current]} onSubmit={handleNext} />
        )}
      </div>

      <Steps current={current} size={"small"}>
        {steps.map((step, index) => (
          <Step key={index} title={step.title} />
        ))}
      </Steps>
    </FormContainer>
  );
};

export default MultiStepForm;
