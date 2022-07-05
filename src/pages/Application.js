import Header from "../component/application/Header";
import Main from "../component/application/Main";

const Application = ({ price }) => {
  return (
    <div className="application">
      <Header></Header>
      <Main price={price}></Main>
    </div>
  );
};

export default Application;
