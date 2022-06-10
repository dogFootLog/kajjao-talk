import './Balloons.css';

type ballonProps = {
  sender: string;
  time?: string;
  children: string;
  showSender: boolean;
};

const Balloon = ({ sender, time, children, showSender }: ballonProps) => (
  <div className="balloon-wrap">
    {showSender && sender !== 'me' && (
      <div className="balloon-sender">{`${sender} - `}</div>
    )}
    <div className="span-wrap">
      <span className="balloon-time">{time}</span>
      <span className={`balloon-child ${sender === 'me' ? 'me' : 'other'}`}>
        {children}
      </span>
    </div>
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
      <Balloon
        key={idx}
        showSender={!(idx > 0 && talkList[idx - 1].sender === talk.sender)}
        sender={talk.sender}
        time="오전 10:17"
      >
        {talk.message}
      </Balloon>
    ))}
  </>
);

export default Balloons;
