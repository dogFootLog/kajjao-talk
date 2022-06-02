interface messageShape {
  message: string;
}

interface propShape {
  values: string;
  onChange(): any;
}

const Input = ({ values, onChange }: propShape) => {
  const a = 'a';
  return (
    <div>
      <input id="message" type="text" />
      <button type="button">enter</button>
    </div>
  );
};

export default Input;
