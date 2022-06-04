import React, { useState } from 'react';

interface messageShape {
  message: string;
}

interface propShape {
  onEnter(values: object): any;
}

const InputList = ({ onEnter }: propShape) => {
  const [values, setValues] = useState({ speaker: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const temp = { ...values, ...{ [key]: e.target.value } };
    setValues(temp);
  };

  const onClick = () => {
    onEnter && onEnter(values);
  };
  return (
    <div>
      <input
        id="speaker"
        type="text"
        value={values.speaker}
        onChange={(e) => handleChange(e, 'speaker')}
      />
      <input
        id="message"
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
