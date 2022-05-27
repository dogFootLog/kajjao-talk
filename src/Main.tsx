import Ballon from "@/component/ballon/Ballon";
import Input from "@/component/input/Input";

const Main = () => {
  return (
    <>
      <div className="main-area">
        <Ballon time="오후 2:43" sender="프로도">
          밥 먹었어?
        </Ballon>
      </div>
      <div className="input-area">
        <Input />
      </div>
    </>
  );
};

export default Main;
