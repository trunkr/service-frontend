import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import icCheckBold from 'static/icons/system/ic_check_bold.svg';
import { QuizQuery } from 'queries';
import { IQuizAnotherAnswer, Nullable } from 'types';

import List from './List';
import NoResults from './NoResults';
import { section, wrap, title, subTitle, countLabel, btnGroup, filterBtn, grayDivider } from './style';

const data: IQuizAnotherAnswer[] = [
  {
    quizId: 3,
    quizGroupId: '1',
    answer: `자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n`,
    favorCount: 1,
    isFavor: false,
    member: {
      id: 3,
      nickname: '랜드폴커피',
      profileImageUrl: 'https://abc.xyz',
    },
  },
  {
    quizId: 3,
    quizGroupId: '1',
    answer: `자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n`,
    favorCount: 1,
    isFavor: false,
    member: {
      id: 3,
      nickname: '랜드폴커피',
      profileImageUrl: 'https://abc.xyz',
    },
  },
  {
    quizId: 3,
    quizGroupId: '1',
    answer: `자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n`,
    favorCount: 1,
    isFavor: false,
    member: {
      id: 3,
      nickname: '랜드폴커피',
      profileImageUrl: 'https://abc.xyz',
    },
  },
  {
    quizId: 3,
    quizGroupId: '1',
    answer: `자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n`,
    favorCount: 1,
    isFavor: false,
    member: {
      id: 3,
      nickname: '랜드폴커피',
      profileImageUrl: 'https://abc.xyz',
    },
  },
  {
    quizId: 3,
    quizGroupId: '1',
    answer: `자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n`,
    favorCount: 1,
    isFavor: false,
    member: {
      id: 3,
      nickname: '랜드폴커피',
      profileImageUrl: 'https://abc.xyz',
    },
  },
  {
    quizId: 3,
    quizGroupId: '1',
    answer: `자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n`,
    favorCount: 1,
    isFavor: false,
    member: {
      id: 3,
      nickname: '랜드폴커피',
      profileImageUrl: 'https://abc.xyz',
    },
  },
  {
    quizId: 3,
    quizGroupId: '1',
    answer: `자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n`,
    favorCount: 1,
    isFavor: false,
    member: {
      id: 3,
      nickname: '랜드폴커피',
      profileImageUrl: 'https://abc.xyz',
    },
  },
  {
    quizId: 3,
    quizGroupId: '1',
    answer: `자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다\n스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.\n힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.\n자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.\n메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장\n`,
    favorCount: 1,
    isFavor: false,
    member: {
      id: 3,
      nickname: '랜드폴커피',
      profileImageUrl: 'https://abc.xyz',
    },
  },
];

function AnotherAnswers() {
  const { quizId } = useParams();
  const { data: answers } = QuizQuery.useGetAnotherAnswerResult(
    quizId || '',
    // quizId !== ''
    false,
  );

  console.log('answers:', answers);

  const hasAnswers = useMemo(() => {
    if (!data) return 'pending';
    return Boolean(data.length);
  }, [data]);

  let Render: Nullable<React.ReactNode> = null;
  switch (hasAnswers) {
    case true:
      Render = <List data={data} />;
      break;
    case false:
      Render = <NoResults />;
      break;
    default:
  }

  return (
    <section css={section}>
      <div css={wrap}>
        <hr css={grayDivider} />
        <div css={title}>
          <h2 css={subTitle}>
            이런 풀이도 있어요 <span css={countLabel}>12</span>
          </h2>
          <div css={btnGroup}>
            <button css={[filterBtn(true), { marginRight: '16px' }]}>
              <img src={icCheckBold} alt="" />
              인기 순
            </button>
            <button css={filterBtn(false)}>최신 순</button>
          </div>
        </div>
        {Render}
      </div>
    </section>
  );
}

export default AnotherAnswers;
