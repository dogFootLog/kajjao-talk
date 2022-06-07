import React, { useState } from 'react';
import InputList from '@/components/input/InputList';
import './Main.css';
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
      <InputList onEnter={onEnter} />
    </>
  );
};

export default Main;
