import styled from "@emotion/styled";

/* 
div (
  input - button
  ul
    - li
      button - span
)
*/

export const TodoContainer = styled.div`
  header {
    input {
      border: 1px solid green;
    }
    /* 자식선택자만 이용 */
    > button {
      border: 1px solid green;
      background: white;
    }
  }

  ul {
    margin-top: 20px;

    li {
      padding: 7px;
      border: 1px solid green;
      margin-bottom: 3px;
      width: fit-content;

      button {
        border: 1px solid gray;
        margin-right: 3px;
      }
    }
  }

  footer {
    color: green;

    data {
      font-weight: bold;
    }
  }
`;
