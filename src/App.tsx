// 리액트는 컴포넌트(component)단위 개발
// 컴포넌트: 페이지, 세부화면, 위젯, 아이콘, 버튼
// 컴포넌트: 재사용이 가능한 UI 조각
// 컴포넌트: 템플릿(틀) + 작동코드

// 리액트 컴포넌트는 파일명과 함수명을 파스칼케이스로 작성
// 원래 리액트 컴포넌트는 class/function 2가지 형태였고,
// 기본이 class 형식이었음
// 원래 자바스크립트에서 생성자함수 new Person()는 원래 파스칼케이스
// function Person() { name; age; function printInfo() {} }

// 리액트는 컴포넌트는 함수
// JSX Element를 반환하는 함수

import react_icon from "./assets/react-icon.png";
import intro from "./assets/intro.mp4";
import WelcomeMessage from "./components/WelcomeMessage";

const App = () => {
  // React.createElement(component, props, ...children)
  // React.createElement("div", null, "Hello, React!!")
  return (
    <div>
      <img src={react_icon} alt="react icon" height={16} />
      <span>Hello, React!!</span>
      <div>
        <video width={480} height={270} controls loop autoPlay muted>
          <source src={intro} type="video/mp4" />
        </video>
      </div>
      <WelcomeMessage />
    </div>
  );
};

export default App;
