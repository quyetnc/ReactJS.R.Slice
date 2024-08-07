import styled from "styled-components";
import { Form } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: beige; /* For browsers that do not support gradients */
  /* background-image: linear-gradient(to right, #0085ff, #bb4c9c); */
  background-image: linear-gradient(45deg, #0085ff, #bb4c9c);

  width: 100%;
  height: 100vh;
  min-width: 400px;
  min-height: 600px;

  & > div {
    width: 25rem;
  }
`;

interface IFormProps {
  isOtp?: boolean;
}

export const FormContainer = styled(Form)<IFormProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #dcdcdc;
  width: ${(props) => (props.isOtp ? "500px" : "100%")};
  height: 100%;
  padding: 2rem 3rem;
  border-radius: 1rem;

  & > img {
    display: flex;
    align-self: center;
  }

  .ant-form-item {
    display: flex;
    width: 100%;

    & > .ant-row {
      width: 100%;
    }

    & > .ant-row > div > label::before {
      display: none;
    }

    input {
      font-size: 18px;
    }
  }

  a:hover {
    text-decoration: underline;
  }

  .input-otp {
    width: 48px !important;
    height: 48px;
    border-radius: 4px;
    border: 1px solid #555;
    margin: 0px !important;
    margin: "auto";
    font-weight: 500;
  }

  .otp-container {
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .ant-form-item-explain-error:not(:first-child) {
    display: none;
  }
`;

export const SubmitItem = styled(Form.Item)`
  text-align: end;
`;

export const BackText = styled.span`
  color: #1890ff;
  text-decoration: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    text-decoration: underline;
  }
`;
