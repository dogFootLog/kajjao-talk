import React from 'react';

type ballonProps = {
  sender: string;
  time?: string;
  children: string;
};

const Ballon = ({ sender, time, children }: ballonProps) => (
  <div>
    <span>{sender}</span>
    <span>{children}</span>
    <span>{time}</span>
  </div>
);

export default Ballon;
