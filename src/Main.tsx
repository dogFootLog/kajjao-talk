import React, { useState } from 'react';
import InputList from '@/components/input/InputList';
import Balloons from './components/balloons/Balloons';

interface talkShape {
  message: string;
  sender: string;
}

const Main = () => {
  const [msgInput, setMsgInput] = useState('');
  const [talkList, setTalkList] = useState<talkShape[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsgInput(e.target.value);
  };

  const onBtnClick = () => {
    // messages.push({ message: msgInput });
    // setMessages([...messages]);
  };

  const onEnter = (values: talkShape) => {
    talkList.push({ ...values });
    setTalkList([...talkList]);
  };

  return (
    <>
      <div className="main-area">
        <Balloons talkList={talkList} />
      </div>
      <div className="input-area">
        <input type="text" value={msgInput} onChange={handleInputChange} />
        <button type="button" onClick={onBtnClick} value={msgInput}>
          전송
        </button>
      </div>
      <InputList onEnter={onEnter} />
    </>
  );
};

export default Main;
