import React from 'react';
import PropTypes from 'prop-types';
import style from './InputFormStyle';

InputForm.propTypes = {
  inputNumbers: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

function InputForm({ inputNumbers, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        id="numbers"
        name="numbers"
        required
        placeholder="숫자를 입력해주세요. (예> 1,2,3,4)"
        value={inputNumbers}
        onChange={handleChange}
      />
      <Button type="submit">소팅 시작!</Button>
    </form>
  );
}

export default InputForm;

const { Input, Button } = style;
