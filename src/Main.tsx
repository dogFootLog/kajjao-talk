import React, { useState } from 'react';
import InputList from '@/components/input/InputList';
import styles from './Main.module.scss';
import Balloons from './components/balloons/Balloons';

interface talkShape {
  message: string;
  sender: string;
}

const Main = () => {
  const [talkList, setTalkList] = useState<talkShape[]>([
    { sender: 'me', message: '배고파배고파배고파' },
    { sender: '분노하는 프로도', message: '배고파배고파배고파' },
  ]);

  const onEnter = (values: talkShape) => {
    talkList.push({ ...values });
    setTalkList([...talkList]);
  };

  return (
    <div className={styles.container}>
      <div className="balloon-container">
        <Balloons talkList={talkList} />
      </div>
      <div className={styles['input-container']}>
        <InputList onEnter={onEnter} />
      </div>
    </div>
  );
};

export default Main;
