import styled from 'styled-components';

const Input = styled.input.attrs({
  type: 'text',
  required: true,
  placeholder: '숫자를 입력해주세요. (예> 1,2,3,4)',
})`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 60px;
  border-bottom: 1px solid gray;
  margin: 30px 0;
  padding-left: 20px;
`;

const Button = styled.button`
  width: 500px;
  height: 60px;
  border: 1px solid #2146b3;
  border-radius: 5px;
  font-size: 24px;
  font-weight: 400;
  color: #2146b3;
  cursor: pointer;

  &:hover {
    background-color: #2146b3;
    color: #fff;
  }
`;

export default {
  Input,
  Button,
};
