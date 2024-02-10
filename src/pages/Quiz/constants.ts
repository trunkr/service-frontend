import { RecentAnswerType } from 'types';

export const RECENT_MOCK_DATA: RecentAnswerType[] = [
  {
    question: 'JVM의 역할에 대해 설명해주세요.',
    quizAnswerStatus: 'INCORRECT',
    quizGroupId: '1',
    quizId: 1,
  },
  {
    question: 'Wrapper Class란 무엇이며, Boxing과 UnBoxing은 무엇인지 설명해주세요',
    quizAnswerStatus: 'CORRECT',
    quizGroupId: '1',
    quizId: 2,
  },
  {
    question: '불변 객체가 무엇인지 설명하고 대표적인 Java의 예시를 설명해주세요.',
    quizAnswerStatus: 'INCORRECT',
    quizGroupId: '1',
    quizId: 3,
  },
  {
    question: 'Java에서 오버로딩과 오버라이딩의 차이점은 무엇인가요?',
    quizAnswerStatus: 'CORRECT',
    quizGroupId: '1',
    quizId: 4,
  },
];

export const MOCK_AI_FEEDBACK = `자바의 메모리 영역은 Java 프로그램이 실행될 때 사용되는 메모리 공간을 나타냅니다. 이 메모리 영역은 다양한 부분으로\n나뉘며, 각각의 부분은 특정 목적으로 사용됩니다. 여기에는 주요한 메모리 영역이 있습니다:

  1. 힙(Heap):
    - 객체와 배열이 저장되는 곳입니다. 동적으로 생성된 객체들은 주로 힙 메모리에 저장됩니다.
    - 가비지 컬렉션(Garbage Collection)은 더 이상 참조되지 않는 객체를 정리하는 역할을 합니다.
  2. 스택(Stack):
    - 메소드 호출과 관련된 정보를 저장하는 곳입니다. 각 메소드 호출 시 지역 변수 및 메소드 호출 정보가 스택에 할당됩니다.
    - 스택은 후입선출(LIFO, Last-In-First-Out) 구조를 가지며, 메소드가 호출될 때마다 스택 프레임이 생성됩니다.
  3. 메소드 영역(Method Area 또는 PermGen):
    - 클래스와 메소드 정보, 정적 변수, 상수 풀(Constant Pool) 등을 저장합니다.
    - 이 영역은 Java 7 이전에는 PermGen(Permanent Generation)이라 불렸으며, Java 8부터는 Metaspace로 대체되었습니다.
  4. PC 레지스터(Program Counter Register):
    - 현재 실행 중인 스레드의 명령어 주소를 저장합니다. 스레드가 어떤 명령을 실행해야 할지를 나타내는 역할을 합니다.
  5. 네이티브 메소드 스택(Native Method Stack):
    - Java 프로그램에서 사용되는 네이티브 코드(C, C++ 등)를 실행할 때 사용됩니다. 네이티브 메소드 호출 시 사용되는 스택입니다.

이러한 메모리 영역들은 Java 애플리케이션의 실행 및 메모리 관리를 위해 중요하며, 특히 힙과 스택은 프로그램의 동작 및\n메모리 누수를 관리하는 데 핵심적인 역할을 합니다.
`;

export const MOCK_ANSWER =
  'Java에서 오버로딩(Overloading)과 오버라이딩(Overriding)은 둘 다 객체 지향 프로그래밍의 개념이며, 다른 목적과 방식으로 사용됩니다. 오버로딩 (Overloading): 오버로딩은 같은 이름의 메서드를 여러 개 정의하는 것을 말합니다. 이 메서드들은 같은 클래스 내에서 선언되며, 매개변수의 개수, 타입 또는 순서가 다르게 정의될 수 있습니다. 메서드 오버로딩은 다양한 매개변수 조합을 통해 같은 작업을 수행하는 데 유용합니다.수 조합을 통해 같은 작업을 수행하는 데 유용합니다.수 조합을 통해 같은 작업을 수행하는 데 유용합니다.';
