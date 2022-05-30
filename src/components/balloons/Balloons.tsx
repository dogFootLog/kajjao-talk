type ballonProps = {
  sender: string;
  time?: string;
  children: string;
};

const Balloon = ({
  sender = '프로도',
  time = '오후 3:43',
  children,
}: ballonProps) => (
  <div>
    <span>{sender}</span>
    <span>{children}</span>
    <span>{time}</span>
  </div>
);

interface messageShape {
  message: string;
}

interface msgProptype {
  messages: messageShape[];
}

const Balloons = ({ messages }: msgProptype) => (
  <>
    {messages.map((msg, idx) => (
      <Balloon key={idx} sender="프로도" time="오전 10:17">
        {msg?.message}
      </Balloon>
    ))}
  </>
);

export default Balloons;
