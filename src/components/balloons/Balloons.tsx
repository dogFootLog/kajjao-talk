import classNames from 'classnames/bind';
import styles from './Balloons.scss';

const cx = classNames.bind(styles);

type ballonProps = {
  sender: string;
  time?: string;
  children: string;
  showSender: boolean;
};

const Balloon = ({ sender, time, children, showSender }: ballonProps) => (
  <div
    className={cx(
      'balloon-wrapper',
      sender === 'me' ? 'me-wrap' : 'other-wrap'
    )}
  >
    {showSender && sender !== 'me' && (
      <div className="balloon-sender">{`${sender}`}</div>
    )}
    <div className={`${sender === 'me' ? 'span-wrap-me' : 'span-wrap-other'}`}>
      <div className="balloon-time">{time}</div>
      <div className="balloon-child">{children}</div>
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
