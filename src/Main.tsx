import React, { useState } from 'react';
import InputList from '@/components/input/InputList';
import './Main.css';
import Balloons from './components/balloons/Balloons';

interface talkShape {
  message: string;
  sender: string;
}

const Main = () => {
  const [talkList, setTalkList] = useState<talkShape[]>([]);

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
