import { useState } from "react";
import Alert from "./Alert";

// 1. props와 state 둘다 렌더링 결과물에 영향을 주는 변수
// 2. props는 함수 매개변수처럼 컴포넌트에 전달
// 3. state는 함수 내에 선언된 변수(변수 변경함수가 존재)

const Counter = () => {
  // const [상태변수, 상태변경함수] = useState<상태타입>(초깃값)
  // 상태값 정의
  // 상태값이 변경이 생기면 컴포넌트를 다시 렌더링한다.
  // 1. 상태값이 변경이 생기면 컴포넌트 렌더링 요청이 발생
  // 2. 컴포넌트의 속성값 변동이 있으면 렌더링 한다.

  // 처음 렌더링할 때(mounted)만 초깃값이 적용되고,
  // 그 이후에 렌더링될 때는 기존에 저장된 값을 다시 불러옴
  const [count, setCount] = useState(0);
  console.log(count);

  const handleIncrement = () => {
    // 숫자값 증가
    // 상태값 변경함수에 변경값을 대입
    // 상태값 변경요청 -> innerText가 변경 -> 렌더링
    setCount(count + 1);
  };

  const handleAlertClosed = () => {};

  return (
    <>
      <Alert message="증가되었습니다." onClose={handleAlertClosed} />
      <div>
        <p>현재 카운트: {count}</p>
        <button onClick={handleIncrement}>증가</button>
      </div>
    </>
  );
};

export default Counter;
