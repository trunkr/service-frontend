import icComputerStructure from 'static/graphics/category/ComputerStructure.svg';
import icDataBase from 'static/graphics/category/DataBase.svg';
import icDataStructure from 'static/graphics/category/DataStructure.svg';
import icJava from 'static/graphics/category/Java.svg';
import icJavaScript from 'static/graphics/category/JavaScript.svg';
import icKotlin from 'static/graphics/category/Kotlin.svg';
import icNetwork from 'static/graphics/category/Network.svg';
import icOS from 'static/graphics/category/OS.svg';
import icReact from 'static/graphics/category/React.svg';
import icSpring from 'static/graphics/category/Spring.svg';
import { QuizCategoryNameType } from 'types';

const ICON_MAP: Record<QuizCategoryNameType, string> = {
  COMPUTER_ARCHITECTURE: icComputerStructure,
  DATABASE: icDataBase,
  DATA_STRUCTURE: icDataStructure,
  JAVA: icJava,
  JAVASCRIPT: icJavaScript,
  KOTLIN: icKotlin,
  NETWORK: icNetwork,
  OS: icOS,
  REACT: icReact,
  SPRING: icSpring,
};

const DESC_MAP: Record<QuizCategoryNameType, string> = {
  COMPUTER_ARCHITECTURE:
    '컴퓨터의 동작원리를 알아봐요. CPU가 어떻게 연산하는지, 메모리 계층 구조와 파이프라인 등을 알 수 있어요',
  DATABASE:
    '데이터를 관리하는 시스템인 DBMS를 알 수 있어요. 이를 통해 RDB,SQL, ERD설계, 동시성 문제, 락 , 인덱스를 학습해 볼 수 있어요.',
  DATA_STRUCTURE:
    '컴퓨터가 어떤 방식으로 데이터를 저장하는지 알아봐요. 배열, 링크드리스트, 스택, 큐, 트리 등을 공부할 수 있어요.',
  JAVA: 'Java를 통해 객체지향의 핵심을 알아봐요. 상속, 추상화, 제네릭, 다형성등을 공부해볼 수 있어요.',
  JAVASCRIPT:
    '웹 브라우저에서 동작하는 유일한 언어인 자바스크립트에 대해 공부해봐요. 자바스크립트의 핵심개념부터 이벤트 핸들링까지 알아볼 수 있어요.',
  KOTLIN:
    'Java 와의 상호 운용성을 중시하는 Backend 진영의 인기 언어인 Kotlin 에 대해 공부해봐요. Null Safety, Inline, Coroutine 등을 학습할 수 있어요.',
  NETWORK:
    '컴퓨터가 서로 어떻게 데이터를 주고 받는지 알 수 있어요. 컴퓨터 사이에 정보를 주고 받는 규칙, OSI 7계층, TCP/UDP등을 학습할 수 있어요.',
  OS: '컴퓨터 과학의 꽃 운영체제를 알아봐요. 프로세스, 메모리, 파일시스템, 스케줄러를 알 수 있어요.',
  REACT:
    '웹페이지를 만드는 가장 인기있는 라이브러리 리액트에 대해 공부해봐요. 리액트의 컴포넌트, Virtual DOM, 선언형 프로그래밍에 대해 학습할 수 있어요.',
  SPRING:
    '애플리케이션 서버를 만들 수 있는 Spring에 대해 얼마나 알고 있나요? 프레임워크의 개념부터 스프링의 핵심기능과 원리를 익혀봐요.',
};

export { ICON_MAP, DESC_MAP };
