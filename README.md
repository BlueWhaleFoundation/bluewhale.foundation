# 프로젝트

관리자: 손태희, 강현석

사용중인 API: [Sendgrid](https://sendgrid.com/)

데이터베이스: [MySQL](https://github.com/BlueWhaleFoundation/bw-site-mysql)

웹페이지 도메인: https://bluewhale.foundation

이메일 구독 서버 도메인: https://email.bluewhale.foundation

# 실행법

먼저 webpack watch 켜둔다.

```
webpack --watch
```

# history

1. 19.04.01

- v3.0 배포 후
- v4.0 제작중.

#html

- 기본적으로 시멘틱태그 사용 권장.

## 색인

- 일반 문서를 HTML로 다음과 같은 규칙에 맞게 색인화 한다.

- H1 : 로고, 딱 한번만 사용.
- H2 : 메인메뉴, 본문, 이용약관 등
- H3 : 세부 컨텐츠, 핵심 컨텐츠 등
- H4 : 서브 컨텐츠
- H5, H6 : 헤딩요소의 파편화를 불러일으킬 여지가 있으므로 가급적 사용하지 않는다.
-

# css

## css 속성 순서

- 기본적으로 모양 -> 색상순.

1. 제일 처음은 무조건 display. 블록, 인라인 속성을 정리해준다.(표시)
2. box-border.
3. overflow (넘침)
4. float (흐름)

5. position (위치)
6. left, top, right, bottom 필에따라 순으로.
7. width
8. height
9. line-heigt: line-height는 글자속성인데 height 값이랑 똑같이 쓸때가 많아서 height 바로 뒤로 사용.
10. margin
11. padding
12. border
13. background-color

14. font-size
15. font-weight
16. text-align 등등

17. transform
18. transition
19. opacity 등등....
20. z-index(맨뒤에)

## 폰트 속성 순서

- 축약형은 지양
- 다음 순으로 작성.

1. font-family
2. font-size
3. font-weight
4. font-style

## background-position 속성값

- 숫자로 선언한다.
- {background-position: left top} (x)
- {background-position: 0 0} (o)
- {background-position: 100% 50%} (o)

## 컬러값

- 축양형으로 사용한다.
- {color: #777777} (x)
- {color: #777} (o)

## z-index값 적용 가이드

- z-index 수치 간격은 10단위로 적용.
- 기본값을 10으로 지정, 해당 프로젝트마다 z-index를 재정의 해서 사용
- 페이지 단위에서 1000을 넘는 경우를 발생하지 않음
- 팝업은 1000부터 시작

# class명 정리

- 의미를 염두하고 클래스 사용할 것.
- scss를 사용하기 때문에 감싸주는 영역은 정확하게 쓰되, 아래 하위 요소들은 간단명료하게 사용.
- ex)product_wrap -> product -> item -> img_area, text_area 순
- snake case사용. ex) main_visual
- wrap: 감싸는 영역
- area: wrap 아래 한번더 감싸는 영역
- gnb: global navigation bar. 메뉴영역
- tit: title의 약자
- txt: text의 약자
- fir: first의 약자
