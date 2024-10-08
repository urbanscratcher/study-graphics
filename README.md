# Graphics Programming

- A personally practiced p5js code for my graphics programming course

## Table Of Contents

- [Graphics Programming](#graphics-programming)
  - [Table Of Contents](#table-of-contents)
  - [Weekly Logs](#weekly-logs)
    - [Week 1](#week-1)
      - [1. OOP](#1-oop)
      - [2. 2D Transformation](#2-2d-transformation)
    - [Week 2](#week-2)
      - [1. Bouncing Ball (Vector Addition)](#1-bouncing-ball-vector-addition)
      - [2. Vector Operations](#2-vector-operations)
      - [3. Acceleration](#3-acceleration)
      - [4. Mouse Tracing](#4-mouse-tracing)
      - [5. Mouse Patterns](#5-mouse-patterns)
    - [Week 3](#week-3)
      - [1. Forces](#1-forces)
      - [2. Gravity and Friction](#2-gravity-and-friction)
      - [3. Particles](#3-particles)
      - [4. Collision Detection](#4-collision-detection)
    - [Week 4](#week-4)
      - [1. Bouncing Box with Matter.js](#1-bouncing-box-with-matterjs)
      - [2. Bouncing Shapes with Matter.js](#2-bouncing-shapes-with-matterjs)
      - [3. Loop Boxes with Matter.js](#3-loop-boxes-with-matterjs)
      - [4. Plinko](#4-plinko)
      - [5. Constraints](#5-constraints)
      - [6. Constraints with Mouse](#6-constraints-with-mouse)
      - [7. Catapult](#7-catapult)
    - [Week 5](#week-5)
      - [1. Propeller](#1-propeller)
      - [2. Dominoes](#2-dominoes)
    - [Week 6](#week-6)
      - [1. Randomness](#1-randomness)
      - [2. Tickle Walker](#2-tickle-walker)
      - [3. Perlin Noise](#3-perlin-noise)
      - [4. Random Font](#4-random-font)
      - [5. Noisy Font](#5-noisy-font)
    - [Week 7](#week-7)
      - [1. 2D Noise](#1-2d-noise)
      - [2. 3D Noise](#2-3d-noise)
    - [Week 8](#week-8)
      - [1. Trigonometry](#1-trigonometry)
      - [2. Maurer Rose](#2-maurer-rose)
      - [3. Oscillation](#3-oscillation)
      - [4. Saskia](#4-saskia)
      - [5. Additive Synthesis](#5-additive-synthesis)
    - [Week 9](#week-9)
      - [1. Fractals](#1-fractals)
    - [Week 11](#week-11)
      - [1. 3D graphics](#1-3d-graphics)
      - [2. Materials and Lights](#2-materials-and-lights)
      - [3. Camera](#3-camera)
      - [4. Perspective](#4-perspective)

## Weekly Logs

### Week 1

#### [1. OOP](./w1%20-%20oop/sketch.js)

<details>
<summary>Note</summary>
  
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
  
</details>

[w1-oop2.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/2b8ffdcd-9d4b-48f0-aef8-fd5f2e6db8a6)

#### [2. 2D Transformation](./w1%20-%202D%20transformation/sketch.js)

<details>
<summary>Note</summary>
  
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
 
</details>

[w1-2d2.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/7de0f7d9-ee8e-4de6-8623-a2a307aa09eb)

### Week 2

#### [1. Bouncing Ball (Vector Addition)](./w2%20-%20bouncing%20ball/sketch.js)

<details>
  <summary>Note</summary>
  
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

</details>

[w2-bouncing.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/34ff5b6e-bc38-4c6c-89f2-13dab70502d6)

#### [2. Vector Operations](./w2%20-%20vector%20operations/sketch.js)

<details>
  <summary>Note</summary>

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

</details>

[w2-vector.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/c24e8043-5bcc-4871-9294-e4db96bd5ebf)

#### [3. Acceleration](./w2%20-%20acceleration/sketch.js)

<details>
<summary>Note</summary>
  
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

</details>

[w2-acc.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/b1998dbf-42aa-4263-85a2-374f0f3af8c1)

#### [4. Mouse Tracing](./w2%20-%20mouse%20tracing/sketch.js)

<details>
<summary>Note</summary>
  
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

</details>

[w2-tracing.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/54ff64f5-abae-4c56-96f3-17751bd90f5a)

#### [5. Mouse Patterns](./w2%20-%20mouse%20patterns/sketch.js)

[w2-practice.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/34fe624d-d17f-482b-bfeb-1c976d0879b8)

### Week 3

#### [1. Forces](./w3%20-%20forces/sketch.js)

<details>
<summary>Note</summary>
  
- 힘(Force)과 가속도(Acceleration)의 개념을 구현한 물리 시뮬레이션
  - 힘과 가속도를 이용하여 객체의 움직임을 구현하는 방법을 설명
  - 힘은 질량을 가진 물체를 가속시키는 벡터임
  - 가속도는 힘에 비례하고, 질량에 반비례함
  - 여러 개의 힘이 동시에 물체에 작용할 수 있음
  - `applyForce(force)` 메소드는 물체에 힘을 적용함
- 뉴턴의 운동 법칙을 기반으로 객체의 움직임을 시뮬레이션함
  - 제1법칙: 물체는 외부 힘이 작용하지 않으면 운동 상태를 유지함
  - 제2법칙: 힘 = 질량 × 가속도, 가속도 = 힘 / 질량
    - 질량을 1로 가정하면, 가속도 벡터는 힘 벡터와 같아짐
- Ball 클래스를 정의하여 공의 움직임을 시뮬레이션함

- 마우스 위치와 공의 위치 사이의 방향 벡터를 계산하여 힘을 적용함
- 공은 힘의 영향을 받아 움직이며, 경계면에 부딪히면 반사됨
- `move()` 메소드: 속도에 가속도를 더하고, 위치에 속도를 더하여 공의 움직임을 업데이트함
- `bounce()` 메소드: 공이 경계면에 부딪힐 때 속도의 방향을 반전시켜 반사 효과를 구현함

</details>

[w3-forces.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/07578e4e-9086-4a7f-bec4-df46b0840d59)

#### [2. Gravity and Friction](./w3%20-%20gravity%20and%20friction/sketch.js)

<details>
<summary>Note</summary>
  
- 중력(Gravity)과 마찰력(Friction)을 시뮬레이션하는 예제 코드
  - 중력: 질량을 가진 모든 물체가 서로 끌어당기는 자연 현상
    - p5에서는 (0, 0.1)의 값을 가진 벡터를 가속도에 추가하여 구현
  - 마찰력: 중력에 대한 반대 반응
    - p5에서는 속도 벡터의 반대 방향 벡터를 계산하고, 마찰 계수를 곱하여 적용
- `Ball` 클래스를 정의하여 공의 움직임을 시뮬레이션함
  - `applyForce(force)` 메소드를 사용하여 중력과 마찰력을 적용
  - `run()` 메소드에서 공을 그리고, 움직이며, 경계면에서 반사시킴
  - `move()` 메소드에서 속도에 가속도를 더하고, 위치에 속도를 더하여 공의 움직임을 업데이트
    - 다음 프레임에서 다른 힘들이 추가될 수 있도록 가속도를 0으로 초기화
  - `bounce()` 메소드에서 공이 경계면에 부딪힐 때 속도의 방향을 반전시켜 반사 효과를 구현
- `draw()` 함수에서 중력과 마찰력을 적용하는 과정을 설명함

- 중력: (0, 0.1)의 값을 가진 벡터를 생성하여 `applyForce()`로 적용
- 마찰력: 속도 벡터의 반대 방향 벡터를 계산하고, 정규화한 후 마찰 계수를 곱하여 `applyForce()`로 적용
- 중력과 마찰력을 시뮬레이션하여 공의 움직임을 구현하는 예제임
- 이를 바탕으로 다양한 물리 현상을 시뮬레이션할 수 있음

</details>

[w3-friction.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/fdb97c59-8436-495a-a123-5a7749519d8a)

#### [3. Particles](./w3%20-%20particles/sketch.js)

<details>
<summary>Note</summary>
  
- 마우스를 드래그할 때 어지고 바닥에서 튕기는 시뮬레이션 코드
  - 중력과 마찰력의 영향을 받아 공들이 자연스럽게 떨어지고 바닥에서 튕김
  - "Clear" 버튼으로 화면 초기화 가능
- 주요 함수
  - `setup()`: 초기 설정 및 "Clear" 버튼 생성
  - `draw()`: 물리 효과 적용, 공 그리기, 경계면 반사 등 프레임별 업데이트
- 핵심 클래스
  - `Ball`: 공의 속성, 움직임, 물리 효과 등을 캡슐화
    - `run()`, `draw()`, `move()`, `bounce()`, `applyForce()` 메소드로 구성
  - `Button`: 버튼의 상호작용과 이벤트 처리
  - `draw()`, `changeBgColor()`, `buttonPressed()` 메소드로 구성
- 사용자 인터랙션

- `mouseDragged()`: 마우스 드래그로 공 생성
- `mousePressed()`: 버튼 클릭으로 화면 초기화

</details>

[w3-particle.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/d77aed23-4c37-477a-9121-0d50b542ae68)

#### [4. Collision Detection](./w3%20-%20collision%20detection/sketch.js)

<details>
<summary>Note</summary>
  
- 마우스 드래그로 생성한 공들이 중력, 마찰력의 영향을 받으며 움직이고 충돌하는 시뮬레이션 코드
  - 마우스 드래그 이벤트로 공 생성, 버튼 클릭 이벤트로 공 제거 기능 구현
  - 중력, 마찰력을 적용하여 공의 움직임을 자연스럽게 표현
  - 사각형 박스와의 충돌 검사를 통해 공의 색상 변경 효과 적용
- 충돌 검사(Collision Detection)
  - 2개 이상의 객체 간 교차 여부를 판별하는 연산 문제
  - 시뮬레이션의 객체 수가 많아질수록 복잡도와 계산 비용 증가(O(n^2))
  - 최적화 방안: Broad Phase와 Narrow Phase로 나누어 처리
- Broad Phase Collision Detection
  - 충돌 가능성이 있는 객체 쌍을 찾고, 충돌 불가능한 쌍은 제외
  - 공간 분할(Space Partitioning)과 경계 상자(Bounding Box) 기법 활용
  - 쿼드트리(Quadtree) 알고리즘: 2D 공간을 재귀적으로 4분할하여 관리(O(nlogn))
- Narrow Phase Collision Detection
  - 점과 원, 원과 원, 사각형과 점, 삼각형과 사각형 등의 충돌 검사 알고리즘 활용
  - 거리 계산, 경계 비교 등을 통해 실제 충돌 여부 판별
- 주요 클래스와 함수

- `Box` 클래스: 사각형 박스 객체의 속성과 그리기 기능 캡슐화
- `Ball` 클래스: 공 객체의 속성, 움직임, 충돌 검사, 물리 효과 캡슐화
- `Button` 클래스: 버튼 객체의 속성, 그리기, 상호작용 기능 캡슐화
- `setup()` 함수: 캔버스 설정, 공 배열, 버튼, 박스 객체 초기화
- `draw()` 함수: 공의 물리 효과 적용, 충돌 검사, 그리기 수행
- `mouseDragged()` 함수: 마우스 드래그 시 공 생성하여 배열에 추가
- `mousePressed()` 함수: 버튼 클릭 시 공 배열 초기화

</details>

[w3-particle2.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/e3e6ed01-f69b-4647-943d-45ff16eca4dd)

### Week 4

- Matter.js을 통해 2D 및 3D 물리 시뮬레이션을 구현하는 방법에 대해 배움
- 여러 가지 물리적 특성을 가진 객체들이 어떻게 상호작용하는지 실습
- 기타 물리엔진
  - Box2D (2D)
  - Toxiclibs (2D+3D)
  - Bullet (3D)
  - Matter.js (2D)
  - cannon.js (3D)

#### [1. Bouncing Box with Matter.js](./w4%20-%20bouncing%20box/sketch.js)

<details>
<summary>Note</summary>

- 개요
  - Matter.js 라이브러리를 사용하여 기본적인 물리 시뮬레이션 환경을 구축
  - 사각형 상자(box1)와 바닥(ground1)을 생성하고, 상자는 반발력과 마찰력을 가지고 움직임
- 주요 개념
  - `Matter.js` 라이브러리에서 필요한 모듈을 가져옴
  - 물리 엔진 생성 및 초기화: `Engine.create()`로 엔진 생성, `engine` 객체를 생성해 물리 시뮬레이션을 관리
  - 물체 생성: `Bodies.rectangle()`로 사각형 객체 생성
  - 물체를 엔진에 추가: `World.add(engine.world, obj)`
  - 물리적 특성 적용: restitution(반발력)과 friction(마찰력) 설정
  - 정적 객체 생성: `isStatic: true` 옵션으로 움직이지 않는 바닥 생성
  - 엔진 업데이트 및 렌더링: `Engine.update(engine)`와 `drawVertices()`를 통해 물체의 움직임과 그리기

</details>

[w4-bouncing-box.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/e2e4bd61-182c-4f21-95c0-087322133a1a)

#### [2. Bouncing Shapes with Matter.js](./w4%20-%20bouncing%20shapes/sketch.js)

<details>
<summary>Note</summary>

- 개요
  - `Bodies.rectangle`, `Bodies.circle`, `Bodies.polygon`을 사용하여 다양한 모양의 물체를 생성
  - 두 개의 경사진 바닥(ground1, ground2)을 추가해 물체들이 서로 다른 각도로 충돌하게 함
- 주요 개념
  - 다양한 도형 생성: `Bodies.circle`과 `Bodies.polygon`을 사용하여 원과 다각형 생성
  - 물체의 물리적 특성 적용: 모든 물체에 동일한 반발력과 마찰력을 적용하여 일관된 움직임을 보여줌

</details>

[w4-bouncing-shapes.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/a883e711-11fc-41bc-b41e-f5e2b30252f9)

#### [3. Loop Boxes with Matter.js](./w4%20-%20loop%20boxes/sketch.js)

<details>
<summary>Note</summary>

- 개요
  - 상자들이 무작위 크기로 생성되어 중력에 의해 떨어짐
- 주요 개념
  - 동적 객체 생성 및 제거: `generateObject()` 물체를 동적으로 생성하고, 화면 밖으로 나간 물체를 제거하여 성능 유지
  - 화면 경계 감지: `isOffScreen()` 화면 밖으로 나간 상자를 감지

</details>

[w4-loop-boxes.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/86838256-94d7-4992-b2bf-91fe505b6723)

#### [4. Plinko](./w4%20-%20plinko/sketch.js)

<details>
<summary>Note</summary>

- 개요
  - 핀과 공을 생성하여 Plinko 게임을 모방한 시뮬레이션
  - 핀은 고정된 위치에 배치되고, 키 입력에 따라 새로운 공이 생성되어 화면 상단에서 떨어짐
- 주요 개념
  - 정적 핀과 동적 공의 상호작용: 핀은 고정되어 있고, 공은 충돌하며 떨어짐
  - 키 입력에 따른 공 생성: `keyPressed()`로 키 입력 시 새로운 공 생성
  - 복잡한 상호작용 시뮬레이션: 핀과 공의 충돌을 통해 복잡한 상호작용을 시뮬레이션

</details>

[w4-plinko.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/71760c6b-1847-4ffd-89b2-1389d7de3826)

#### [5. Constraints](./w4%20-%20constraints/sketch.js)

<details>
<summary>Note</summary>

- 개요
  - 여러 개의 다각형(poly1A, poly1B, poly2, poly3)을 생성하고, 각각의 다각형에 제약(constraint)을 추가
  - `World.add()`를 통해 엔진에 다각형과 제약을 추가
- 주요 개념
  - 제약 생성: 두 개의 물체 사이 또는 물체와 고정된 점 사이에 제약을 설정
  - 제약의 특성: stiffness(강성)와 damping(감쇠)를 설정하여 제약의 탄성과 저항 조절
  - 다각형과 제약의 시각화: `drawVertices()`와 `drawConstraint()`를 통해 물체와 제약을 그림

</details>

[w4-constraints.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/6771ba94-1e17-4831-aa61-0fee5cae9edf)

#### [6. Constraints with Mouse](./w4%20-%20constraints%20w%20mouse/sketch.js)

<details>
<summary>Note</summary>

- 개요
  - 이전 코드에 마우스 제약(Mouse Constraint)을 추가하여 마우스로 물체를 조작할 수 있게 함
  - `Mouse.create(canvas.elt)`를 사용해 마우스 입력을 받음
  - `MouseConstraint.create(engine, mouseParams)`를 통해 마우스 제약을 생성하고 엔진에 추가
- 주요 개념
  - 마우스 제약: 마우스로 물체를 드래그하고 이동할 수 있도록 설정
  - 고해상도 화면 지원: `pixelDensity()`를 사용하여 고해상도 화면에서 정확한 마우스 좌표를 얻음

</details>

[w4-constraints-mouse.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/1610872a-9a62-4cfa-bb88-5af67f1acbde)

#### [7. Catapult](./w4%20-%20catapult/sketch.js)

<details>
<summary>Note</summary>

- 개요
  - Catapult를 만들어 물체를 던지는 시뮬레이션
  - `Bodies.rectangle()`과 `Constraint.create()`를 사용해 Catpult와 그 제약을 설정
  - `setupBalls()`로 2개의 공을 생성하고 엔진에 추가
- 주요 개념
  - Catapult 설정: Catpult와 그 제약을 설정하여 물체를 던지는 동작을 구현
  - 공의 생성 및 물리적 특성 적용: 공을 생성하고 그 밀도(density)를 설정해 중력의 영향을 조절
  - 전체 시뮬레이션: `Engine.update()`와 `drawVertices()`를 사용하여 물체를 시각적으로 표현

</details>

[w4-catapult.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/77d5a2b2-8c46-430b-90e3-aff96ac70de7)

### Week 5

#### [1. Propeller](./w5%20-%20propeller/sketch.js)

<details>
<summary>Note</summary>

- 개요
  - Matter.js를 사용해 회전하는 프로펠러를 시뮬레이션
  - `Body.setAngle()`과 `Body.setAngularVelocity()`를 사용해 프로펠러의 회전 구현
  - `generateObject()`로 무작위 객체 생성 및 추가
- 주요 개념
  - 프로펠러의 각도와 각속도를 설정하여 회전 동작 구현
  - 무작위 객체를 생성하고 물리적 특성을 적용하여 중력 및 충돌 시뮬레이션
  - `Engine.update()`와 `drawVertices()`를 사용하여 물체를 시각적으로 표현

</details>

[w5-propeller.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/ba17fef3-2625-47df-97cd-ba991ec333eb)

#### [2. Dominoes](./w5%20-%20dominoes/sketch.js)

<details>
<summary>Note</summary>

- 개요
  - Matter.js를 사용해 도미노 효과를 시뮬레이션
  - 도미노가 작은 경사면 위에서 쓰러지는 물리 효과 구현
- 주요 개념
  - `Composites.stack` 을 사용해 도미노를 배치하고, `Bodies.rectangle()` 로 도미노 생성

</details>

[w5-dominoes.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/a80ea3b8-0430-4cd4-a917-a0c71a12dc95)

### Week 6

#### [1. Randomness](./w6%20-%20randomness/sketch.js)

<details>
<summary>Note</summary>

- 개요
  - 화면에 무작위 위치와 크기로 원을 그리는 시뮬레이션
  - `randomSeed()` 랜덤 함수의 시작 지점을 고정
  - `random()` 무작위 위치, 색상 및 크기의 원 생성
- 주요 개념
  - `random()` 무작위로 x와 y 좌표를 생성, 무작위 크기의 원 생성
  - `fill()` 무작위 빨간색 및 투명도 설정

</details>

[w6-randomness.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/26d92f2d-cfe2-4e35-9d8e-becaca9f3838)

#### [2. Tickle Walker](./w6%20-%20tickle%20walker/sketch.js)

<details>
<summary>Note</summary>

- 개요
  - 마우스 커서와 상호작용하는 원 객체를 시뮬레이션
  - 마우스가 원 안에 들어갈 때 원의 위치가 무작위로 변경
- 주요 개념
  - `Tickler` 클래스를 사용하여 원의 위치와 크기를 설정
  - `checkMouseInCircle()` 마우스와 원의 충돌을 감지
  - `tickled()` 원의 위치를 무작위로 변경

</details>

[w6-tickle-walker.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/944af39d-add6-4534-a5a1-9e2330790c91)

#### [3. Perlin Noise](./w6%20-%20perlin%20noise/sketch.js)

<details>
<summary>Note</summary>

- 개요
  - Perlin 노이즈 기반의 위치 및 회전을 적용한 사각형 애니메이션
- 주요 개념
  - `noise()` 매 프레임마다 사각형의 위치와 회전을 부드럽게 변경
  - `map()` 를 사용하여 노이즈 값을 화면 좌표와 회전 각도로 변환
  - `time` 변수를 증가시켜 노이즈 함수의 입력값을 변경하여 애니메이션 효과 구현

</details>

[w6-perlin-noise.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/a2bd3848-48a3-4bab-8f47-5f111bd589fe)

#### [4. Random Font](./w6%20-%20random%20font/sketch.js)

<details>
<summary>Note</summary>

- 개요
  - 텍스트를 점으로 변환하고, 마우스 움직임에 따라 점들의 위치를 무작위로 변경하는 애니메이션
- 주요 개념
  - `preload()`에서 폰트를 로드하고 `setup()`에서 텍스트를 점으로 변환
    - `loadFont()` 커스텀 폰트 로드
    - `textToPoints()` 텍스트를 점의 배열로 변환
  - `mouseMoved()` 마우스가 움직일 때마다 점의 위치를 업데이트하고 애니메이션을 다시 루프

</details>

[w6-random-font.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/a7acbdda-acc3-4d51-ad39-43b85378bf6a)

#### [5. Noisy Font](./w6%20-%20noisy%20font/sketch.js)

<details>
<summary>Note</summary>

- 개요
  - 텍스트를 점으로 변환하고, Perlin 노이즈를 이용해 점들의 위치를 애니메이션
  - 마우스 x 위치에 따라 점의 이동 범위를, 마우스 y 위치에 따라 점의 색상 투명도를 변경
- 주요 개념
  - `noise()` 와 `map()` 를 이용해 점의 위치를 Perlin 노이즈 기반으로 변경
  - `frameCount` 를 이용해 시간에 따라 점의 위치를 애니메이션

</details>

[w6-noisy-font.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/6221d581-8e55-4364-9dc0-2f5419e38d47)

### Week 7

#### [1. 2D Noise](./w7%20-%202d%20noise/sketch.js)

<details>
<summary>Note</summary>

- 개요
  - 2D 노이즈를 이용하여 랜덤하게 변하는 값을 생성하고 이를 시각화하는 방법을 학습
  - `randomGrid()` 와 `noiseGrid()` 를 통해 각각의 시각적 차이를 확인
  - `plotNoiseFn()` 로 1D 노이즈 값을 그래프로 표현
- 주요 개념
  - 2D 노이즈
    - 2D 노이즈 값이 이웃한 값들과 유사하게 나타나도록 하여 유기적인 패턴을 생성함
    - 2D 노이즈는 구름, 연기, 안개, 불과 같은 자연 현상을 시뮬레이션하는 데 사용
  - 1D 노이즈는 X축에서의 값의 연속성을 가지며, 2D 노이즈는 X축과 Y축에서 모두 연속성을 가짐
  - `randomGrid()` 는 인접한 값들 간의 연속성이 없지만, `noiseGrid()` 는 인접한 값들이 유사함
  - `noiseDetail()` 로 노이즈의 세부 사항 조정
  - `noLoop()` 한 번만 그리도록 설정

| Detail                  |                                                           Random Grid                                                           |                                                           Noise Grid                                                            |
| ----------------------- | :-----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
|                         | <img src="https://github.com/urbanscratcher/study-graphics/assets/17016494/72b38a0e-e2cd-46ce-ab08-79a5fbfcb2e3" width="200" /> | <img src="https://github.com/urbanscratcher/study-graphics/assets/17016494/cfad3af5-c83f-4e53-81e1-224de0358c2a" width="200" /> |
| dividing x and y by 10  |                                                                                                                                 | <img src="https://github.com/urbanscratcher/study-graphics/assets/17016494/f3a4d149-f100-4484-8898-f51b5489e3b8" width="200" /> |
| dividing x and y by 100 |                                                                                                                                 | <img src="https://github.com/urbanscratcher/study-graphics/assets/17016494/03fb7980-920a-4945-b5b6-bf234ef62d03" width="200" /> |

<h5>Plot Noise Function</h5>

<p>The shape of noise function depends on how many octaves you set</p>

<img src="https://github.com/urbanscratcher/study-graphics/assets/17016494/7f31b4a5-67f9-40b3-a8fd-69ff97ce08c3" width="200" />

|                                                         default detail                                                          |                                                           less detail                                                           |
| :-----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/urbanscratcher/study-graphics/assets/17016494/15ca20d5-1032-48b5-996d-0e438e09c470" width="300" /> | <img src="https://github.com/urbanscratcher/study-graphics/assets/17016494/633e39b7-7eaf-4059-af38-d74a1858668a" width="300" /> |

</details>

#### [2. 3D Noise](./w7%20-%203d%20noise/sketch.js)

<details>
<summary>Note</summary>

- 개요
  - 1D 노이즈와 2D 노이즈의 개념을 확장하여 3D 노이즈를 이해
  - 3D 노이즈는 노이즈 함수에 3개의 매개변수를 사용하여 값을 생성
  - 주로 3D 지형 생성에 사용되며, 시간 변화를 통해 유기적인 변화를 시뮬레이션
- 주요 개념
  - 1D 노이즈: 이전 값과 다음 값이 유사한 값을 반환하여 유기적인 패턴을 생성
  - 2D 노이즈: 그리드에서 주변 이웃 값들과 유사한 값을 반환하여 구름이나 연기와 같은 패턴을 생성
  - 3D 노이즈: 노이즈 함수에 3개의 매개변수를 사용하여 3D 공간에서의 유기적인 패턴을 생성
  - p5.js에서는 z-좌표 대신 `frameCount` 를 3번째 매개변수로 사용하여 시간에 따른 변화를 시뮬레이션
  - `noiseDetail()` 를 사용하여 노이즈의 옥타브 수를 조절하고, 패턴의 세밀함을 조정
  - 시간 변화를 더 작게 나누어 노이즈의 변화를 부드럽게 하거나 빠르게 조절

<img src="https://github.com/urbanscratcher/study-graphics/assets/17016494/5450631a-8ec1-43f1-91a5-753aa21e129b" />

</details>

[w7-3d-noise.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/7dd34266-5783-47f4-aee1-31c4ac420aaf)

### Week 8

#### [1. Trigonometry](./w8%20-%20trigonometry/sketch.js)

<details>
<summary>Note</summary>

- 개요
  - 데카르트 좌표와 극좌표를 이해하고, 아르키메데스 나선(각 프레임마다 중심에서 반지름이 점점 커지는 나선) 그리기
- 주요 개념
  - 데카르트 좌표와 화면 좌표
    - 데카르트 좌표: x, y 축 사용, y 축은 위쪽이 양수
    - 화면 좌표: x, y 축 사용, y 축은 아래쪽이 양수
    - 현재 두 좌표계의 차이는 중요하지 않음
  - 극좌표
    - 위치를 x와 y 대신, 원점에서의 거리(r)와 각도(θ)로 표현
    - r은 반지름, θ는 각도
    - 각도는 일반적으로 도(degree)나 라디안(radian)으로 표현, 2π 라디안은 360도
  - 극좌표의 필요성
    - 방향과 중심점으로부터의 거리가 중요한 경우에 적합
    - 예: 아르키메데스 나선(Archimedean spiral) 및 천체 운동(행성의 태양 주위 공전)을 극좌표로 더 쉽게 표현 가능
  - 극좌표를 데카르트 좌표로 변환
    - P5.js에서는 데카르트 좌표를 사용해야 하므로 극좌표를 변환 필요
    - y 좌표: \( y = \sin(\theta) \times r \)
    - x 좌표: \( x = \cos(\theta) \times r \)
- 코드
  - `radian(theta)` 도(degree)를 라디안(radian)으로 변환
  - `angleMode(DEGREE)` 극좌표를 데카르트 좌표로 변환
  - 각도(theta)를 프레임 수에 따라 증가시켜 원 형태의 주기적인(periodic) 패턴을 그림
  - 반지름(radius)을 프레임 수에 따라 증가시켜 중앙에서 가장자리까지 나선 형태의 원을 그림

</details>

[w8-trigon.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/cd321ba3-d7f5-4ff2-b2a9-023f6d9c28aa)

#### [2. Maurer Rose](./w8%20-%20maurer%20rose/sketch.js)

<details>
<summary>Note</summary>

- 개념
  - 극좌표계 기준 $r = \sin(n \theta)$ ($n$: 양의 정수)
  - $n$ 이 홀수일 때는 $n$ 개의 잎, 짝수일 때는 $2n$ 개의 잎을 가짐
  - 여기서 361개의 점을 서로 연결하면 다각형 곡선(polygonal curve, 여러 개의 직선 조각들이 연결돼 만들어진 곡선)이 그려지는데, 이를 Maurer rose라고 함
    - ($\sin(nk)$, k) (k = 0, d, 2d, 3d, ..., 360d) ($d$: 양의 정수)
    - 각도는 라디안(radian)이 아닌 도(degree)
- 코딩
  - Maurer 장미 그리기
    - `for` 루프를 통해 `0`도에서 `360`도까지 각도를 증가시키며, 각 점의 극좌표를 계산
    - `k = i * d`를 통해 각도를 조정하고, `r = 150 * sin(n*k)`로 반지름을 계산
    - 계산된 반지름과 각도로 `x`, `y` 좌표를 구하여 점을 연결
  - 꽃잎(petals) 그리기
    - `r = 150 * sin(n*i)`로 반지름을 계산하고, 계산된 반지름과 각도로 `x`, `y` 좌표를 구하여 점을 연결
  - 매개변수 `n`과 `d`의 역할
    - `n` (자연수): 꽃잎 개수를 결정. 값이 클수록 더 많은 꽃잎이 생성
    - `d` (자연수): 장미의 점들을 연결하는 방식에 영향을 미침. 패턴 복잡성을 조절하는 중요한 매개변수. 값이 클수록 더 복잡한 패턴이 생성됨.

</details>

#### [3. Oscillation](./w8%20-%20oscillation/sketch.js)

<details>
<summary>Note</summary>

- 주요 개념
  - 사인과 코사인의 주기성
    - 사인과 코사인은 주기적 함수로, 0도와 360도, 720도 등 동일한 위치에서 반복됨
  - 사인 함수의 출력
    - 사인 함수의 출력은 -1과 1 사이에서 매끄럽게 변동하는 곡선(진동)을 만듦
    - 이 진동은 공의 튀는 움직임, 진자, 기타 줄의 진동과 같은 운동을 나타냄
    - 사인 함수를 값 생성기로 사용할 수 있으며, 이 값은 -1에서 1 사이의 부드러운 비선형적인 값을 출력
  - 파형의 특성
    - 진폭 (Amplitude): 파형의 높이로, 중심에서 극단까지의 거리
    - 주기 (Period): 한 사이클을 완료하는 데 걸리는 시간으로, 주기는 주파수와 연결됨
    - 주파수 (Frequency): 단위 시간당 사이클의 수로, 헤르츠(Hz)로 측정됨
  - 주파수와 위상
    - 주파수는 단위 시간당 몇 개의 사이클이 있는지를 나타내며, 예시에서 주파수가 높은 파형은 더 많은 사이클을 가짐
    - 위상 (Phase)은 파형 주기 내에서 특정 시점의 위치를 나타내며, 360도 주기에서 특정 각도에 해당함

</details>

[w8-osc.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/6519d796-2431-4d5e-97d5-08c485e06ded)

#### [4. Saskia](./w8%20-%20saskia/sketch.js)

[w8-saskia.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/81b9eab6-a01c-4b24-b0d6-2a65ef221ef4)

#### [5. Additive Synthesis](./w8%20-%20additive%20synthesis/sketch.js)

<details>
<summary>Note</summary>

- 개요
  - 더 복잡한 함수를 그리고 싶을 때 삼각 함수를 더하면 됨

</details>

[w8-additive.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/e99f6d4d-799e-4f98-88d2-7b80addf7d98)

[w8-circular-additive.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/1589dcb7-8cd1-49ea-8f6b-9ef348256384)

### Week 9

#### [1. Fractals](./w9%20-%20fractals/sketch.js)

<details>
<summary>Note</summary>

- Fractal
  - 부분을 나눌 수 있는 거칠거나 조각난 기하학적 모양. 각 부분은 전체 모양의 축소된 버전.
  - Coined by Benoit Mandelbrot
- Sierpinski carpet
  - Sierspinski Triangle
  - Menger Sponge (Cube)

</details>

<img src="https://github.com/urbanscratcher/study-graphics/assets/17016494/b9878251-6157-4d71-90d5-73a16bfa6adc" width="480px" />

[fractal_tree.webm](https://github.com/urbanscratcher/study-graphics/assets/17016494/d8e411e9-a506-4ac2-9d21-a4fbbc5c5b6d)

### Week 11

#### [1. 3D graphics](./w11%20-%203d%20graphics/index.html)

<details>
<summary>Note</summary>

1. WebGL(Web Graphics Library) 개요

   - 웹 브라우저에서 플러그인 없이 상호작용 가능한 3D 그래픽을 렌더링하기 위한 JavaScript API입니다.
   - WebGL은 OpenGL(Open Graphics Library)에 기반하며, GPU 가속을 통해 이미지를 처리합니다.
   - GPU 가속이란, CPU 대신 GPU(Graphics Processing Unit, 그래픽 처리 장치)를 사용하여 그래픽 작업을 수행하는 것을 의미합니다. GPU는 **대량의 데이터를 병렬로 처리**할 수 있어, 이미지 처리 및 그래픽 생성에서 매우 효율적입니다.

2. GPU와 CPU의 차이

   - GPU는 이미지 생성과 처리를 가속화하기 위해 설계된 특수한 전자 회로입니다. 일반적인 CPU(Central Processing Unit, 중앙 처리 장치)보다 그래픽 작업에서 훨씬 빠릅니다.
   - GPU는 **병렬 구조** 덕분에 대량의 데이터를 동시에 처리하는 데 뛰어나며, 최근에는 머신 러닝 및 암호화폐 채굴 등의 분야에서도 많이 활용됩니다.

3. p5.js에서 3D 그래픽스 시작하기

   - p5.js는 주로 2D 그래픽을 위한 학습용 라이브러리로 개발되었지만, 3D 그래픽도 지원합니다.
   - 3D 기능을 활성화하려면 `createCanvas()` 의 3번째 매개변수로 WebGL을 추가해야 합니다. 예를 들어, `createCanvas(900, 600, WEBGL)` 과 같이 작성합니다.
   - 이렇게 하면 p5.js에서 3D 기능이 활성화되며, 3D 도형(예: 구, 상자 등), 텍스처, 재질, 조명 및 카메라 등을 사용할 수 있습니다.

4. 3D 좌표 시스템

   - 2D 그래픽스에서는 좌표 (0, 0)가 캔버스의 왼쪽 상단 모서리에 위치하지만, 3D 그래픽스에서는 이 좌표가 **화면 중앙**에 위치합니다.
   - 3D 그래픽스에서는 기존의 x축과 y축 외에 **z축이 추가**됩니다. z축은 화면에서 물체가 멀어지거나 가까워지는 깊이를 나타냅니다.
   - 물체의 z좌표가 클수록 화면에 가까워지고, z 좌표가 작을수록 화면에서 멀어집니다.

5. 3D 그래픽 작업

   - p5.js에서는 2D 그래픽스에서 사용했던 변환 및 회전 기능을 3D 도형에도 적용할 수 있습니다.
   - 예를 들어, 3D 공간에서 박스(Box)를 회전시키기 위해 `rotateX`, `rotateY`, `rotateZ` 함수들을 사용할 수 있습니다.
   - 이러한 변환을 통해 물체를 다양한 축으로 회전시킬 수 있으며, 이로 인해 3D 공간에서의 입체적 효과를 구현할 수 있습니다.
   - `translate()` 는 물체를 특정 방향으로 이동시키는 데 사용됩니다. 예를 들어, `translate(200, 0, 0)`은 물체를 x축 방향으로 200만큼 이동시킵니다.

6. 3D 렌더링의 본질

   - 3D 그래픽은 실제 3D 공간을 구현하는 것이 아니라, **2D 캔버스에 3D의 환영을 그려내는 것**입니다.
   - 이는 3D 그래픽스가 특정 방식으로 화면에 투사되기 때문에, 사용자는 2D 화면에서 3D 공간을 경험하는 것처럼 느낍니다.
   - 예를 들어, 르네상스 시대의 화가 라파엘로의 ‘아테네 학당’ 그림도 2D 표면에 3D 공간의 환영을 만들어내는 것과 같은 원리입니다.

</details>

#### [2. Materials and Lights](./w11%20-%20materials%20and%20lights/sketch.js)

<details>
<summary>Note</summary>

1. Materials

- 재료는 3D 모델의 표면 특성을 정의하여 실제 물체와 유사한 외형을 구현하는 데 사용됩니다. 단순한 텍스처 매핑을 넘어, 빛과의 상호작용 방식을 통해 재질의 질감, 반사율 등을 시뮬레이션합니다.

- **Normal Material**: 정점 좌표를 기반으로 색상을 할당하여 3D 모델의 형태를 파악하기 쉽게 만듭니다. 노멀 벡터를 사용
- **Ambient(주변광) Material**: 모든 방향에서 빛을 반사하여 균일한 색상을 나타냅니다.
- **Specular(반사광) Material**: 특정 방향으로 빛을 반사하여 광택이 나는 금속 표면과 같은 효과를 냅니다.

2. Lights

- 빛은 3D 공간에서 물체에 빛을 비추어 그림자, 하이라이트 등을 생성하여 입체감을 부여합니다.

- **Ambient Light (주변광)**: 모든 방향에서 균일하게 빛을 비추어 배경 빛을 제공합니다.
- **Point Light (점광원)**: 특정 위치에서 모든 방향으로 빛을 발산하여 현실적인 그림자와 하이라이트를 생성합니다.
- **Directional Light (방향광)**: 무한히 먼 곳에서 평행한 빛을 비추어 태양광과 같은 효과를 냅니다.

3. 용어

- 렌더링 엔진: 재료, 빛, 그리고 3D 모델의 정보를 바탕으로 최종 화면 이미지를 계산합니다.
- 정점: 3D 모델을 구성하는 기본 단위로, 각 정점에 재료 정보가 할당됩니다.
- 법선 벡터: 각 정점에서 표면의 수직 방향을 나타내는 벡터로, 빛의 반사 방향을 계산하는 데 사용됩니다.

4. p5.js에서 재료와 빛을 사용하는 이유

- 사실적인 3D 모델: 실제 세상의 물체와 유사한 외형과 재질을 구현합니다.
- 복잡한 빛의 상호작용: 그림자, 하이라이트, 반사 등 다양한 빛의 효과를 쉽게 구현합니다.
- 높은 수준의 제어: 다양한 종류의 재료와 빛을 조합하여 원하는 시각 효과를 얻을 수 있습니다.

5. p5.js에서 재료와 빛을 사용하는 예시

- 금속 표면: 반사광 재료를 사용하여 광택을 표현합니다.
- 플라스틱 표면: 주변광 재료를 사용하여 균일한 색상을 표현합니다.
- 태양 빛: 방향광을 사용하여 그림자와 하이라이트를 생성합니다.
- 실내 조명: 점광원을 사용하여 다양한 조명 효과를 연출합니다.

6. 더 알아보기

- 법선 벡터: 빛의 반사 방향을 계산하는 데 중요한 역할을 합니다.
- 셰이딩: 재료와 빛의 상호작용을 통해 픽셀의 색상을 계산하는 과정입니다.
- 렌더링 파이프라인: 3D 모델이 화면에 표시되기까지 거치는 일련의 과정입니다.

</details>

#### [3. Camera](./w11%20-%20materials%20and%20lights/sketch.js)

<details>
<summary>Note</summary>

1. 카메라 파라미터들

   1. 카메라 위치 (Position)

      - 카메라가 3D 공간에서 어디에 위치하는지를 결정합니다.
      - x, y, z 좌표로 표현되며, 예를 들어 (0, 0, 600)과 같은 값으로 설정할 수 있습니다. 이는 카메라가 원점으로부터 Z축을 따라 600만큼 떨어져 있다는 의미입니다.

   2. 바라보는 방향 (Viewing Direction)

      - 카메라가 어디를 바라보는지를 정의합니다.
      - 기본적으로 카메라는 원점(0, 0, 0)을 바라보도록 설정되며, 이 지점이 관심의 중심점입니다.

   3. 상하 방향 (Up direction, Orientation)
      - 카메라가 장면을 어떤 방향으로 볼지, 즉 카메라가 "위"를 어디로 인식할지 결정합니다.
      - 이 파라미터를 조정하면 장면을 수직으로 보거나 기울여서 볼 수 있으며, 극단적으로는 뒤집어진 상태로도 볼 수 있습니다.

2. 카메라의 기본 설정

   - 카메라는 기본적으로 원점(0,0,0)을 바라보며 설정됩니다.
   - 카메라의 위치, 방향, 그리고 상하 방향(orientation)을 설정할 수 있습니다.

3. 카메라 위치 변경

   - 카메라의 위치를 조정하여 장면을 가까이서 또는 멀리서 볼 수 있습니다.
   - 카메라가 움직이며 장면을 관찰하는 다양한 방식(예: 진동하는 운동, 소음 함수를 이용한 자연스러운 움직임 등)을 구현할 수 있습니다.

4. 카메라의 회전 및 방향 조정

   - 카메라가 특정 객체를 중심으로 회전하거나, 특정 방향으로 기울여서 보는 것과 같은 효과를 줄 수 있습니다.
   - 예를 들어, 카메라가 객체 주위를 회전하며 위아래로 이동하는 효과를 구현할 수 있습니다.

5. 응용

   - 첫 번째 또는 세 번째 인칭 시점의 게임에서 카메라의 시점을 설정할 때 사용될 수 있습니다.
   - 다양한 카메라 움직임과 각도를 통해 장면을 더 흥미롭게 만들 수 있습니다.

</details>

#### [4. Perspective](./w11%20-%20materials%20and%20lights/sketch.js)

<details>
<summary>Note</summary>

- 원근은 카메라의 특성 중 하나이며, 카메라의 원근을 조정하면 장면을 어떻게 시각화할지를 크게 바꿀 수 있습니다. 원근에 영향을 미치는 네 가지 주요 요소는 다음과 같습니다.

1. 시야각(Field of View, FOV)

   - 시야각은 카메라가 한 번에 볼 수 있는 관찰 가능한 세계의 범위를 정의합니다.
   - 예를 들어, 시야각이 넓으면 더 많은 부분을 한눈에 볼 수 있고, 좁으면 일부만 볼 수 있습니다.
   - P5.js에서 기본 시야각은 60도입니다.

2. 화면비(Aspect Ratio)

   - 화면비는 화면의 가로와 세로의 비율을 나타냅니다.
   - 예를 들어, 4:3 비율은 TV 화면, 16:9 비율은 영화관 화면에 자주 사용됩니다.
   - P5.js에서 기본적으로 화면비는 캔버스의 가로와 세로 비율을 따릅니다.

3. 근평면(Near Plane)과 원평면(Far Plane)

   - 근평면과 원평면은 3D 객체가 관찰 가능한 범위를 정의합니다.
   - 근평면보다 가까운 객체나 원평면보다 먼 객체는 보이지 않으며 렌더링되지 않습니다. 이러한 객체들은 화면에서 잘리게 됩니다(클리핑).

- 영상에서는 이 요소들을 직접 조작하면서 어떻게 원근을 설정하고, 각 파라미터가 장면의 렌더링에 어떤 영향을 미치는지 실습 예제를 통해 보여줍니다. 예를 들어, 시야각을 넓히면 어안 렌즈(와이드 앵글)처럼 보이게 되고, 화각을 조정하면 화면의 왜곡이 생길 수 있습니다. 또한, 마우스를 이용해 근평면과 원평면을 조정하며, 객체의 일부가 클리핑되는 것을 시각적으로 확인할 수 있습니다.

</details>
