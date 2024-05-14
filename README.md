# Computer Graphics

- A personally practiced p5js code for my computer graphics course

## Weekly Logs

### Week 1

1. OOP

- 객체 지향 프로그래밍(OOP) 개념 학습
  - 클래스(Class)를 정의하고 객체(Object)를 생성하는 방법
  - 생성자(Constructor)를 사용하여 객체 초기화
  - 객체의 속성(Properties)과 메서드(Methods) 정의
- p5.js 라이브러리 활용
  - setup() 초기 설정
  - draw() 애니메이션 루프 생성
  - createCanvas() 캔버스 생성
  - background() 배경색 설정
  - fill() 도형 채우기 색상 설정
  - rect() 사각형 그리기
- 인터랙티브한 요소 구현
  - mousePressed() 마우스 클릭 이벤트 처리
  - 조건문을 사용하여 마우스 클릭 위치에 따른 동작 제어
- 버튼 클래스 구현
  - 버튼의 위치, 크기, 상태 등을 속성으로 정의
  - draw() 메서드로 버튼 그리기
  - flick() 메서드로 마우스 클릭 시 버튼 상태 변경

[w1-oop2.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/2b8ffdcd-9d4b-48f0-aef8-fd5f2e6db8a6)

2. 2D Transformation

- 2D 변환 매트릭스 활용
  - translate() 좌표계 이동
  - rotate() 좌표계 회전
  - scale() 좌표계 크기 조정
  - push()와 pop() 함수로 변환 매트릭스 상태 저장 및 복원
- 도형 그리기 함수 사용
  - rect() 사각형 그리기
  - ellipse() 원 그리기
  - line() 선 그리기
  - triangle() 삼각형 그리기
- 시계 그리기 예제
  - 초침, 분침, 시침을 각도에 따라 회전하여 그리기
  - map() 함수를 사용하여 시간 값을 각도로 변환
  - radians() 각도를 라디안 단위로 변환
- 마우스 위치에 따른 객체 그리기
  - mouseX와 mouseY 변수를 사용하여 마우스 위치 추적
  - 마우스 위치를 기준으로 객체 (고양이) 그리기
- 모듈화된 코드 작성
  - 각 기능을 별도의 함수로 분리하여 코드 구조화
  - drawTransFigures(), drawCat(), rotRect(), tempTrans(), drawClock() 등의 함수 사용
- 스타일 설정 함수 사용
  - fill() 도형 채우기 색상 설정
  - stroke() 선 색상 설정
  - strokeWeight() 선 두께 설정

[w1-2d2.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/7de0f7d9-ee8e-4de6-8623-a2a307aa09eb)

### Week 2

1. Bouncing Ball (Vector Addition)

- 객체 지향 프로그래밍(OOP) 개념 학습
  - Ball 클래스를 정의하여 공의 속성과 동작을 캡슐화
  - 생성자(constructor)를 사용하여 Ball 객체 초기화
  - 객체의 메서드(run(), draw(), move(), bounce())를 통해 공의 동작 구현
- 벡터(Vector) 개념 이해
  - createVector() 함수를 사용하여 벡터 생성
  - 벡터를 사용하여 공의 위치(location)와 속도(velocity) 표현
  - add() 메서드를 사용하여 벡터 간 덧셈 연산으로 공의 움직임 구현
- 공의 움직임과 경계 처리
  - move() 메서드에서 벡터 연산을 통해 공의 위치 업데이트
  - bounce() 메서드에서 공이 화면 경계에 닿았을 때 속도의 방향을 반전시켜 공이 화면 내에서 튕기도록 처리
- 랜덤 값 생성
  - random() 함수를 사용하여 공의 초기 위치와 속도를 랜덤하게 설정

[w2-bouncing.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/34ff5b6e-bc38-4c6c-89f2-13dab70502d6)

2. Vector Operations

- 벡터(Vector) 연산 이해
  - createVector() 벡터 생성
  - sub() 메서드를 사용하여 두 벡터의 차이 계산
  - mag() 메서드를 사용하여 벡터의 크기(magnitude) 계산
  - normalize() 메서드를 사용하여 벡터 정규화(크기를 1로 만듦)
  - mult() 메서드를 사용하여 벡터에 스칼라 곱셈 적용
  - div() 메서드를 사용하여 벡터에 스칼라 나눗셈 적용
- 마우스 위치를 기반으로 한 벡터 연산
  - mouseX와 mouseY 변수를 사용하여 마우스 위치 추적
  - 마우스 위치와 화면 중심 사이의 벡터 계산
  - 벡터 뺄셈을 통해 마우스 위치와 화면 중심 사이의 거리와 방향 계산
- 벡터의 크기(magnitude) 시각화
  - mag() 메서드를 사용하여 벡터의 크기 계산
  - text() 함수를 사용하여 벡터의 크기 값 표시
  - rect() 함수를 사용하여 벡터의 크기에 비례하는 사각형 그리기
- 벡터 정규화(normalization) 시각화
  - normalize() 메서드를 사용하여 벡터 정규화
  - 정규화된 벡터에 일정한 크기를 곱하여 화살표 그리기
- 벡터 스케일링(크기 조정) 이해
  - mult() 메서드를 사용하여 벡터에 스칼라 곱셈 적용
  - div() 메서드를 사용하여 벡터에 스칼라 나눗셈 적용
- 화면 중심을 기준으로 선 그리기
  - translate() 함수를 사용하여 화면 중심으로 좌표계 이동
  - strokeWeight() 선의 두께 설정

[w2-vector.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/c24e8043-5bcc-4871-9294-e4db96bd5ebf)

3. Acceleration

- 가속도(Acceleration) 개념 도입
  - acceleration 벡터를 사용하여 공의 가속도 표현
  - 가속도는 프레임마다 일정한 값으로 설정됨
- 속도에 가속도를 더하여 속도 업데이트
  - velocity.add(acceleration)을 사용하여 가속도를 속도에 더함
  - 이를 통해 공의 속도가 점진적으로 증가
- 속도 제한 설정
  - limit() 메서드를 사용하여 속도의 크기를 제한
  - maxVelocity 변수를 사용하여 최대 속도 값 설정
- 화면 경계 처리
  - edges() 메서드에서 공이 화면 경계를 벗어날 때 반대편 경계로 이동하도록 처리
  - 이를 통해 공이 화면을 계속 순환하는 효과를 구현

[w2-acc.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/b1998dbf-42aa-4263-85a2-374f0f3af8c1)

4. Mouse Tracing

- 마우스 위치를 따라가는 공의 움직임 구현
  - createVector(mouseX, mouseY)를 사용하여 마우스 위치를 벡터로 생성
  - 정적 함수 p5.Vector.sub()를 사용하여 마우스 위치와 공의 위치 사이의 방향 벡터 계산
  - 방향 벡터를 정규화(normalize)하고 일정한 크기를 곱하여 가속도로 설정
- 공의 궤적을 선으로 그리기
  - prevLocation 벡터를 사용하여 이전 프레임에서의 공의 위치 저장
  - line() 함수를 사용하여 현재 위치와 이전 위치 사이에 선 그리기
  - copy() 메서드를 사용하여 현재 위치를 이전 위치로 업데이트
- 배경을 지우지 않고 공의 궤적 누적
  - draw() 함수에서 background() 함수를 호출하는 대신, setup()에서 호출함으로써 이전 프레임의 그림을 유지
  - 이를 통해 공의 궤적이 화면에 누적되어 그려짐

[w2-tracing.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/54ff64f5-abae-4c56-96f3-17751bd90f5a)

5. W2 - Mouse Patterns

[w2-practice.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/34fe624d-d17f-482b-bfeb-1c976d0879b8)

### Week 3
