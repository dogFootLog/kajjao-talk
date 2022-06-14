import React, { useState } from 'react';
import './InputList.css';

interface propShape {
  onEnter(values: object): any;
}

const InputList = ({ onEnter }: propShape) => {
  const [values, setValues] = useState({ sender: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const temp = { ...values, ...{ [key]: e.target.value } };
    setValues(temp);
  };

  const onClick = () => {
    onEnter && onEnter(values);
    setValues({ sender: '', message: '' });
  };
  return (
    <div className="input-area">
      <input
        id="sender"
        className="sender"
        type="text"
        value={values.sender}
        onChange={(e) => handleChange(e, 'sender')}
      />
      <input
        id="message"
        className="message"
        type="text"
        value={values.message}
        onChange={(e) => handleChange(e, 'message')}
      />
      <button type="button" onClick={onClick}>
        enter
      </button>
    </div>
  );
};

export default InputList;
