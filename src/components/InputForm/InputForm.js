import React from 'react';
import PropTypes from 'prop-types';
import style from './InputFormStyle';

InputForm.propTypes = {
  inputNumbers: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  showDescending: PropTypes.bool,
  message: PropTypes.string,
};

function InputForm({
  inputNumbers,
  handleChange,
  handleSubmit,
  showDescending,
  message,
}) {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          id="numbers"
          name="numbers"
          required
          value={inputNumbers}
          onChange={handleChange}
        />
        <Message>{message}</Message>
        <Button type="submit" disabled={!showDescending}>
          Sort
        </Button>
      </Form>
    </>
  );
}

export default InputForm;

const { Form, Input, Button, Message } = style;
