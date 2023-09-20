import styled from "@emotion/styled";

// styled-component
// style 집합에 대한 class를 생성을 함
// <button class="css-239sadlkj">...
// label: 클래스명케밥케이스
// -> 클래스명을 추가해주는 방법
// 클래스명으로 컴포넌트 찾기가 쉽다.
export const PrimaryButton = styled.button`
  label: primary-btn;
  background-color: #0000ff;
  color: white;
`;

// ButtonProps는 HTMLButtonElement의 HTML 속성을 확장
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  // small? : boolean;
  // large? : boolean;
  // bold? : boolean;
  size?: "md" | "sm" | "lg";
}

const getHeight = ({
  size,
  hidden,
}: ButtonProps) => {
  //..

  if (size === "sm") {
    return 25;
  } else if (size === "lg") {
    return 40;
  } else {
    return 30; // default medium
  }

  //..
};

// style.엘리먼트명<속성타입>`스타일목록`
export const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: 4px;
  /* ${(속성) => "반환식"} */
  background-color: ${({ primary }) =>
    primary ? "blue" : "gray"};
  font-size: ${({ primary }) =>
    primary ? 14 : 13}px;
  height: ${getHeight}px;
  color: white;
  cursor: pointer;
`;
