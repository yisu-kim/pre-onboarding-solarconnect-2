import React from 'react';
import style from './InputFormStyle';

interface InputFormProps {
  inputNumbers: string;
  handleChange: () => void;
  handleSubmit: () => void;
  showDescending: boolean;
  message: string;
}

const InputForm: React.FC<InputFormProps> = ({
  inputNumbers,
  handleChange,
  handleSubmit,
  showDescending,
  message,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Input value={inputNumbers} onChange={handleChange} />
      <Message>{message}</Message>
      <Button type="submit" disabled={!showDescending}>
        Sort
      </Button>
    </Form>
  );
};

export default InputForm;

const { Form, Input, Button, Message } = style;
