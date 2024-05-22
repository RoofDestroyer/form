import styled, { css } from "styled-components";
import { Form, Input, Select, DatePicker } from "antd";

const { TextArea } = Input;

const BaseFormField = css`
  width: 240px;
  height: 42px;
  border-radius: 2px;
`;

export const InputForm = styled(Input)`
  ${BaseFormField}
  padding: 10px 15px;
`;

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SelectStyled = styled(Select)`
  ${BaseFormField}
`;

export const DatePickerStyled = styled(DatePicker)`
  ${BaseFormField}
`;

export const TextAreaStyled = styled(TextArea)`
  ${BaseFormField}
`;
