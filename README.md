# web261118
## 오늘 학습한 내용
- 브라우저는 HTML을 해석해 DOM 트리를 만들고, 화면은 DOM을 그린 결과   
- 노드 타입 5가지 : 문서, 요소, 속성, 텍스트, 주석 (공백도 텍스트 노드)   
- 트리 따라가기 : parentNode, children, firstElementChild, nextElementSibling   
- 바로 고르기 : getElementById(), querySelector(), querySelectorAll()   
- 내용과 모양 : textContent, innerHTML, style.backgroundColor   
- 클래스와 속성 : classList, dataset, setAttribute()   
- 노드 추가 : createElement() $\Rightarrow$ appendChild(), 글자는 createTextNode()   
- 노드 삭제 : 부모.removeChild(자식), 부모는 parentNode   
- 화면(DOM)을 지워도 데이터(movies)는 그대로   
- 폼 값 : value, checked, selected (폼과 입력 요소는 name으로)   
- 이벤트 등록 : addEventListener("click", 함수), 함수는 괄호 없이   
- 이벤트 객체 : e.target, e.preventDefault()   
- 누른 요소는 늘 e.target 으로 (this와 다를 수 있음)   


## 자가 체크
[ok] 글자를 칠 때마다 카드가 걸러진다
[ok] 선택 상자로 정렬이 바뀌고, 검색 결과에도 정렬이 적용된다
[ok] ♥를 누르면 색이 바뀌고 찜 개수가 변한다
[ok] 검색이나 정렬로 다시 그려진 뒤에도 ♥가 동작한다
[ok] 결과가 0건이면 "조건에 맞는 영화가 없습니다"가 보인다
[ok] index.html에 onclick, onchange 같은 속성이 하나도 없다
[ok] 콘솔(F12)에 빨간 오류가 없다




## 오늘만든 사이트
https://kimkisongasd7-droid.github.io/web261118/


