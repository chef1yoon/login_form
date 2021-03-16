# express로 서버띄우기
브라우저 경로는 기본경로("/")와 로그인경로("/login") 포트는 3000으로("localhost:3000") express로 서버 띄워보았습니다.


# http로 서버띄우기
브라우저로 한글을 해석해야한다는것도 설정했습니다.
조건문을 이용해서 출력화면을 다르게 설정해보았습니다.


## 로그인 화면 만들기


## view engine을 ejs로 사용
"home/index" 파일과 "home/login"파일을 res.render해줍니다.


## 미들웨어를 등록해주는 메소드를 사용
app.use()를 이용해서 파일들을 서로 연결 시켜주었습니다.


## nodemon 이용
nodemon을 이용하여 서버 개발을 효과적으로 이용했습니다. (소스코드 업데이트 할때마다 껐다키는 번거로움을 없앴습니다.)


## DOM으로 HTML 객체 제어


## fetch
fetch로 프론트에서 서버로 데이터 보내기


### 자바스크립트 코드 작성시
문법을 준수해서 사용하겠다는 뜻으로, "use strict"라고 명시해주면 좋다고 해서 썼습니다.


#### PORT 사용하는 방법
app.listen에서 바로 포트번호를 선언하는 것이 아닌, 변수명("PORT")로 해주는것이 좋습니다.


#### 만약 npm ERR! missing script: start 에러가 있을시,
package.json에서 script부분에 start가 누락되었는지 확인하고, 실행파일 경로를 삽입해주면 됩니다.
"scripts": {"start": "node ./bin/www.js"}


