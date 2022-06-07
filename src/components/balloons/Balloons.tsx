import './Balloons.css';

type ballonProps = {
  sender: string;
  time?: string;
  children: string;
};

const Balloon = ({ sender, time, children }: ballonProps) => (
  <div>
    <span>{`${sender} - `}</span>
    <span className={sender === 'me' ? 'me' : 'other'}>{`${children}`}</span>
    <span>{time}</span>
  </div>
);

interface talkListShape {
  message: string;
  sender: string;
}

interface propShape {
  talkList: talkListShape[];
}

const Balloons = ({ talkList }: propShape) => (
  <>
    {talkList.map((talk, idx) => (
      <Balloon key={idx} sender={talk.sender} time="오전 10:17">
        {talk.message}
      </Balloon>
    ))}
  </>
);

export default Balloons;
