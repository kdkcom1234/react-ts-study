import Todo from "./components/todo/Todo";
import ResetStyle from "./styles/reset";

const App = () => {
  return (
    <>
      {/* 글로벌 스타일을 가장 첫부분에 넣어야함 */}
      <ResetStyle />
      <Todo />
    </>
  );
};

export default App;
