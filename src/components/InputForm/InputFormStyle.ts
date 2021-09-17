import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.textarea.attrs({
  required: true,
  placeholder: '숫자를 입력해주세요. (예> 1,2,3,4)',
  rows: 2,
})`
  outline: none;
  resize: none;
  border: 1px solid #549ab5;
  margin: 20px 0;
  padding: 14px;
  line-height: 1.5;
`;

const Button = styled.button`
  height: 60px;
  border: 1px solid #549ab5;
  border-radius: 5px;
  font-size: 24px;
  font-weight: 400;
  color: #549ab5;
  cursor: pointer;

  &:hover {
    background-color: #549ab5;
    color: #fff;
  }
`;

const Message = styled.p`
  margin-bottom: 20px;
  color: #b55a54;
`;

export default {
  Form,
  Input,
  Button,
  Message,
};
