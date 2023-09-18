import { MutableRefObject, useRef, useState } from "react";

const Todo = () => {
  // 할일목록 상태(string[])
  const [todoList, setTodoList] = useState<string[]>([]);
  // 입력박스 참조
  // useRef() 참조변수 생성, 기본이 null
  // as MutableRefObject<참조할 변수의 타입>
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleAdd = () => {
    // 참조하는 객체의 현재상태는 참조변수.current
    console.log(inputRef.current);
    console.log(inputRef.current.value);
  };

  return (
    <div>
      {/* ref 속성에 참조변수 */}
      <input placeholder="..할일" ref={inputRef}></input>
      <button onClick={handleAdd}>추가</button>
      <ul>
        {/* li  */}
        {/* li  */}
        {/* li  */}
      </ul>
    </div>
  );
};

export default Todo;
