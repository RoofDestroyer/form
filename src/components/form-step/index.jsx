import React from "react";
import { Form, Select, Upload, Button } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import {
  DatePickerStyled,
  FormContainer,
  InputForm,
  SelectStyled,
  TextAreaStyled,
} from "./styled";

const { Option } = Select;

const FormStep = ({ step, onSubmit }) => {
  const [form] = Form.useForm();

  const renderField = (field) => {
    switch (field.type) {
      case "text":
      case "email":
      case "tel":
        return (
          <Form.Item
            key={field.id}
            // label={field.label}
            name={field.name}
            rules={[
              {
                required: field.validation.required,
                message: `${field.label} is required`,
              },
              {
                max: field.validation.maxLength,
                message: `Maximum length is ${field.validation.maxLength}`,
              },
            ]}
          >
            <InputForm
              type={field.type}
              placeholder={field.placeholder}
              defaultValue={field.defaultValue}
            />
          </Form.Item>
        );
      case "select":
        return (
          <Form.Item
            key={field.id}
            label={field.label}
            name={field.name}
            rules={[
              {
                required: field.validation.required,
                message: `${field.label} is required`,
              },
            ]}
          >
            <SelectStyled
              placeholder={field.placeholder}
              defaultValue={field.defaultValue}
              style={{ width: "240px" }}
            >
              {field.options.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </SelectStyled>
          </Form.Item>
        );
      case "file":
        return (
          <Form.Item
            style={{ display: "flex", flexDirection: "column" }}
            key={field.id}
            label={field.label}
            name={field.name}
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
            rules={[
              {
                required: field.validation.required,
                message: `${field.label} is required`,
              },
            ]}
          >
            <Upload.Dragger
              style={{ width: "240px" }}
              name={field.name}
              action="/upload.do"
              listType="picture"
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">{field.placeholder}</p>
            </Upload.Dragger>
          </Form.Item>
        );
      case "date":
        return (
          <Form.Item
            key={field.id}
            label={field.label}
            name={field.name}
            rules={[
              {
                required: field.validation.required,
                message: `${field.label} is required`,
              },
            ]}
          >
            <DatePickerStyled placeholder={field.placeholder} />
          </Form.Item>
        );
      case "textarea":
        return (
          <Form.Item
            key={field.id}
            label={field.label}
            name={field.name}
            rules={[
              {
                required: field.validation.required,
                message: `${field.label} is required`,
              },
            ]}
          >
            <TextAreaStyled
              placeholder={field.placeholder}
              defaultValue={field.defaultValue}
            />
          </Form.Item>
        );
      default:
        return null;
    }
  };

  return (
    <FormContainer form={form} onFinish={onSubmit} layout="vertical">
      {step.fields.map(renderField)}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Next
        </Button>
      </Form.Item>
    </FormContainer>
  );
};

export default FormStep;
