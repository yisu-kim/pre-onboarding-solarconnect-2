import React from 'react';
import PropTypes from 'prop-types';
import style from './InputFormStyle';

InputForm.propTypes = {
  inputNumbers: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  showDescending: PropTypes.bool,
};

function InputForm({
  inputNumbers,
  handleChange,
  handleSubmit,
  showDescending,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="numbers"
        name="numbers"
        required
        value={inputNumbers}
        onChange={handleChange}
      />
      <Button type="submit" disabled={!showDescending}>
        Sort
      </Button>
    </form>
  );
}

export default InputForm;

const { Input, Button } = style;
