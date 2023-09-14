// commonjs 방식의 모듈선언

/** @type {import('webpack').Configuration} */
module.exports = {
  // 시작지점의 코드(여기서부터 번들링이 시작)
  entry: "./src/index.js",
  // 번들링이 완료된 코드를 출력하는 위치
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
};
