import React, { useEffect, useState } from 'react';
import Input from '@/components/input/InputList';
import Balloons from './components/balloons/Balloons';

interface messageShape {
  message: string;
}

const Main = () => {
  const [msgInput, setMsgInput] = useState('');
  const [messages, setMessages] = useState<messageShape[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsgInput(e.target.value);
  };

  const onBtnClick = () => {
    messages.push({ message: msgInput });
    setMessages([...messages]);
  };

  useEffect(() => {
    console.log(messages);
  }, [messages]);
  return (
    <>
      <div className="main-area">
        <Balloons messages={messages} />
      </div>
      <div className="input-area">
        <input type="text" value={msgInput} onChange={handleInputChange} />
        <button type="button" onClick={onBtnClick} value={msgInput}>
          전송
        </button>
      </div>
    </>
  );
};

export default Main;
