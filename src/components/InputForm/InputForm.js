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
    <Form onSubmit={handleSubmit}>
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
    </Form>
  );
}

export default InputForm;

const { Form, Input, Button } = style;
