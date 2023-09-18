import { memo, useEffect } from "react";

interface AlertProps {
  message: string;
  onClose: () => void;
}

const Alert = ({ message, onClose }: AlertProps) => {
  const handleClickClose = () => {
    onClose();
  };

  useEffect(
    function () {
      console.log("메시지가 초기화되거나 변경되었습니다.");
      console.log(message);
    },
    [message]
  );

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleClickClose}>닫기</button>
    </div>
  );
};

// memo(컴포넌트)
// 컴포넌트를 메모이제이션(memoization)
// 컴포넌트의 속성값이 바뀌지 않으면, diff나 rendering 수행하지 않겠다.
export default memo(Alert);
