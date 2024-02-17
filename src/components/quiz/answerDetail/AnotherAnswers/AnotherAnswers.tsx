import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import icCheckBold from 'static/icons/system/ic_check_bold.svg';
import { QuizQuery } from 'queries';
import { IQuizAnotherAnswer, Nullable } from 'types';

import List from './List';
import NoResults from './NoResults';
import { section, title, subTitle, countLabel, btnGroup, filterBtn, grayDivider } from './style';

const data: IQuizAnotherAnswer[] = [
  {
    quizId: 0,
    quizGroupId: '1',
    answer:
      'Java에서 오버로딩(Overloading)과 오버라이딩(Overriding)은 둘 다 객체 지향 프로그래밍의 개념이며, 다른 목적과 방식으로 사용됩니다.  오버로딩 (Overloading): 오버로딩은 같은 이름의 메서드를 여러 개 정의하는 것을 말합니다. 이 메서드들은 같은 클래스 내에서 선언되며, 매개변수의 개수, 타입 또는 순서가 다르게 정의될 수 있습니다. 메서드 오버로딩은 다양한 매개변수 조합을 통해 같은 작업을 수행하는 데 유용합니다.수 조합을 통해 같은 작업을 수행하는 데 유용합니다.수 조합을 통해 같은 작업을 수행하는 데 유용합니다.',
    favorCount: 1,
    isFavor: false,
    member: {
      id: 0,
      nickname: '닉네임최대열글자제한',
      profileImageUrl: 'https://abc.xyz',
    },
  },
  {
    quizId: 1,
    quizGroupId: '1',
    answer: `new String()은 new 키워드로 새로운 객체를 생성하기 때문에 Heap 메모리 영역에 저장되고,
    ""는 Heap 안에 있는 String Constant Pool 영역에 저장됩니다.`,
    favorCount: 1,
    isFavor: true,
    member: {
      id: 2,
      nickname: 'Four_Seasons_Hotel',
      profileImageUrl: 'https://abc.xyz',
    },
  },
  {
    quizId: 2,
    quizGroupId: '1',
    answer: `여러 개의 쓰레드가 한 개의 자원을 사용하고자 할 때, 현재 데이터를 사용하고 있는 쓰레드를 제외하고 나머지 쓰레드들은 데이터에 접근할 수 없게 막는 개념입니다.
    데이터의 thread-safe를 하기 위해 자바에서 Synchronized 키워드를 제공해 멀티 쓰레드 환경에서 쓰레드간 동기화를 시켜 데이터의 thread-safe를 보장합니다. 
    Synchronized는 변수와 메소드에 사용해서 동기화 할 수 있으며, Synchronized 키워드를 남발하게 되면 오히려 프로그램의 성능저하를 일으킬 수 있습니다.`,
    favorCount: 1,
    isFavor: true,
    member: {
      id: 1,
      nickname: '룰루랄라',
      profileImageUrl: 'https://abc.xyz',
    },
  },
  {
    quizId: 3,
    quizGroupId: '1',
    answer: `자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.

    메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다.
    스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.
    힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.
    
    자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.
    메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장`,
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
    answer:
      'Java에서 오버로딩(Overloading)과 오버라이딩(Overriding)은 둘 다 객체 지향 프로그래밍의 개념이며, 다른 목적과 방식으로 사용됩니다.  오버로딩 (Overloading): 오버로딩은 같은 이름의 메서드를 여러 개 정의하는 것을 말합니다. 이 메서드들은 같은 클래스 내에서 선언되며, 매개변수의 개수, 타입 또는 순서가 다르게 정의될 수 있습니다. 메서드 오버로딩은 다양한 매개변수 조합을 통해 같은 작업을 수행하는 데 유용합니다.수 조합을 통해 같은 작업을 수행하는 데 유용합니다.수 조합을 통해 같은 작업을 수행하는 데 유용합니다.',
    favorCount: 1,
    isFavor: true,
    member: {
      id: 4,
      nickname: '최강금돈까스',
      profileImageUrl: 'https://abc.xyz',
    },
  },
  {
    quizId: 0,
    quizGroupId: '1',
    answer:
      'Java에서 오버로딩(Overloading)과 오버라이딩(Overriding)은 둘 다 객체 지향 프로그래밍의 개념이며, 다른 목적과 방식으로 사용됩니다.  오버로딩 (Overloading): 오버로딩은 같은 이름의 메서드를 여러 개 정의하는 것을 말합니다. 이 메서드들은 같은 클래스 내에서 선언되며, 매개변수의 개수, 타입 또는 순서가 다르게 정의될 수 있습니다. 메서드 오버로딩은 다양한 매개변수 조합을 통해 같은 작업을 수행하는 데 유용합니다.수 조합을 통해 같은 작업을 수행하는 데 유용합니다.수 조합을 통해 같은 작업을 수행하는 데 유용합니다.',
    favorCount: 1,
    isFavor: false,
    member: {
      id: 0,
      nickname: '닉네임최대열글자제한',
      profileImageUrl: 'https://abc.xyz',
    },
  },
  {
    quizId: 1,
    quizGroupId: '1',
    answer: `new String()은 new 키워드로 새로운 객체를 생성하기 때문에 Heap 메모리 영역에 저장되고,
    ""는 Heap 안에 있는 String Constant Pool 영역에 저장됩니다.`,
    favorCount: 1,
    isFavor: true,
    member: {
      id: 2,
      nickname: 'Four_Seasons_Hotel',
      profileImageUrl: 'https://abc.xyz',
    },
  },
  {
    quizId: 2,
    quizGroupId: '1',
    answer: `여러 개의 쓰레드가 한 개의 자원을 사용하고자 할 때, 현재 데이터를 사용하고 있는 쓰레드를 제외하고 나머지 쓰레드들은 데이터에 접근할 수 없게 막는 개념입니다.
    데이터의 thread-safe를 하기 위해 자바에서 Synchronized 키워드를 제공해 멀티 쓰레드 환경에서 쓰레드간 동기화를 시켜 데이터의 thread-safe를 보장합니다. 
    Synchronized는 변수와 메소드에 사용해서 동기화 할 수 있으며, Synchronized 키워드를 남발하게 되면 오히려 프로그램의 성능저하를 일으킬 수 있습니다.`,
    favorCount: 1,
    isFavor: true,
    member: {
      id: 1,
      nickname: '룰루랄라',
      profileImageUrl: 'https://abc.xyz',
    },
  },
  {
    quizId: 3,
    quizGroupId: '1',
    answer: `자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.

    메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다.
    스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.
    힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.
    
    자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.
    메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장`,
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
    answer:
      'Java에서 오버로딩(Overloading)과 오버라이딩(Overriding)은 둘 다 객체 지향 프로그래밍의 개념이며, 다른 목적과 방식으로 사용됩니다.  오버로딩 (Overloading): 오버로딩은 같은 이름의 메서드를 여러 개 정의하는 것을 말합니다. 이 메서드들은 같은 클래스 내에서 선언되며, 매개변수의 개수, 타입 또는 순서가 다르게 정의될 수 있습니다. 메서드 오버로딩은 다양한 매개변수 조합을 통해 같은 작업을 수행하는 데 유용합니다.수 조합을 통해 같은 작업을 수행하는 데 유용합니다.수 조합을 통해 같은 작업을 수행하는 데 유용합니다.',
    favorCount: 1,
    isFavor: true,
    member: {
      id: 4,
      nickname: '최강금돈까스',
      profileImageUrl: 'https://abc.xyz',
    },
  },
  {
    quizId: 0,
    quizGroupId: '1',
    answer:
      'Java에서 오버로딩(Overloading)과 오버라이딩(Overriding)은 둘 다 객체 지향 프로그래밍의 개념이며, 다른 목적과 방식으로 사용됩니다.  오버로딩 (Overloading): 오버로딩은 같은 이름의 메서드를 여러 개 정의하는 것을 말합니다. 이 메서드들은 같은 클래스 내에서 선언되며, 매개변수의 개수, 타입 또는 순서가 다르게 정의될 수 있습니다. 메서드 오버로딩은 다양한 매개변수 조합을 통해 같은 작업을 수행하는 데 유용합니다.수 조합을 통해 같은 작업을 수행하는 데 유용합니다.수 조합을 통해 같은 작업을 수행하는 데 유용합니다.',
    favorCount: 1,
    isFavor: false,
    member: {
      id: 0,
      nickname: '닉네임최대열글자제한',
      profileImageUrl: 'https://abc.xyz',
    },
  },
  {
    quizId: 1,
    quizGroupId: '1',
    answer: `new String()은 new 키워드로 새로운 객체를 생성하기 때문에 Heap 메모리 영역에 저장되고,
    ""는 Heap 안에 있는 String Constant Pool 영역에 저장됩니다.`,
    favorCount: 1,
    isFavor: true,
    member: {
      id: 2,
      nickname: 'Four_Seasons_Hotel',
      profileImageUrl: 'https://abc.xyz',
    },
  },
  {
    quizId: 2,
    quizGroupId: '1',
    answer: `여러 개의 쓰레드가 한 개의 자원을 사용하고자 할 때, 현재 데이터를 사용하고 있는 쓰레드를 제외하고 나머지 쓰레드들은 데이터에 접근할 수 없게 막는 개념입니다.
    데이터의 thread-safe를 하기 위해 자바에서 Synchronized 키워드를 제공해 멀티 쓰레드 환경에서 쓰레드간 동기화를 시켜 데이터의 thread-safe를 보장합니다. 
    Synchronized는 변수와 메소드에 사용해서 동기화 할 수 있으며, Synchronized 키워드를 남발하게 되면 오히려 프로그램의 성능저하를 일으킬 수 있습니다.`,
    favorCount: 1,
    isFavor: true,
    member: {
      id: 1,
      nickname: '룰루랄라',
      profileImageUrl: 'https://abc.xyz',
    },
  },
  {
    quizId: 3,
    quizGroupId: '1',
    answer: `자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.

    메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다.
    스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.
    힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.
    
    자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.
    메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장`,
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
    answer:
      'Java에서 오버로딩(Overloading)과 오버라이딩(Overriding)은 둘 다 객체 지향 프로그래밍의 개념이며, 다른 목적과 방식으로 사용됩니다.  오버로딩 (Overloading): 오버로딩은 같은 이름의 메서드를 여러 개 정의하는 것을 말합니다. 이 메서드들은 같은 클래스 내에서 선언되며, 매개변수의 개수, 타입 또는 순서가 다르게 정의될 수 있습니다. 메서드 오버로딩은 다양한 매개변수 조합을 통해 같은 작업을 수행하는 데 유용합니다.수 조합을 통해 같은 작업을 수행하는 데 유용합니다.수 조합을 통해 같은 작업을 수행하는 데 유용합니다.',
    favorCount: 1,
    isFavor: true,
    member: {
      id: 4,
      nickname: '최강금돈까스',
      profileImageUrl: 'https://abc.xyz',
    },
  },
  {
    quizId: 0,
    quizGroupId: '1',
    answer:
      'Java에서 오버로딩(Overloading)과 오버라이딩(Overriding)은 둘 다 객체 지향 프로그래밍의 개념이며, 다른 목적과 방식으로 사용됩니다.  오버로딩 (Overloading): 오버로딩은 같은 이름의 메서드를 여러 개 정의하는 것을 말합니다. 이 메서드들은 같은 클래스 내에서 선언되며, 매개변수의 개수, 타입 또는 순서가 다르게 정의될 수 있습니다. 메서드 오버로딩은 다양한 매개변수 조합을 통해 같은 작업을 수행하는 데 유용합니다.수 조합을 통해 같은 작업을 수행하는 데 유용합니다.수 조합을 통해 같은 작업을 수행하는 데 유용합니다.',
    favorCount: 1,
    isFavor: false,
    member: {
      id: 0,
      nickname: '닉네임최대열글자제한',
      profileImageUrl: 'https://abc.xyz',
    },
  },
  {
    quizId: 1,
    quizGroupId: '1',
    answer: `new String()은 new 키워드로 새로운 객체를 생성하기 때문에 Heap 메모리 영역에 저장되고,
    ""는 Heap 안에 있는 String Constant Pool 영역에 저장됩니다.`,
    favorCount: 1,
    isFavor: true,
    member: {
      id: 2,
      nickname: 'Four_Seasons_Hotel',
      profileImageUrl: 'https://abc.xyz',
    },
  },
  {
    quizId: 2,
    quizGroupId: '1',
    answer: `여러 개의 쓰레드가 한 개의 자원을 사용하고자 할 때, 현재 데이터를 사용하고 있는 쓰레드를 제외하고 나머지 쓰레드들은 데이터에 접근할 수 없게 막는 개념입니다.
    데이터의 thread-safe를 하기 위해 자바에서 Synchronized 키워드를 제공해 멀티 쓰레드 환경에서 쓰레드간 동기화를 시켜 데이터의 thread-safe를 보장합니다. 
    Synchronized는 변수와 메소드에 사용해서 동기화 할 수 있으며, Synchronized 키워드를 남발하게 되면 오히려 프로그램의 성능저하를 일으킬 수 있습니다.`,
    favorCount: 1,
    isFavor: true,
    member: {
      id: 1,
      nickname: '룰루랄라',
      profileImageUrl: 'https://abc.xyz',
    },
  },
  {
    quizId: 3,
    quizGroupId: '1',
    answer: `자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.

    메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 남아있다.
    스택(Stack) 영역 : 지역변수와 매개변수 데이터 값이 저장되는 공간이며, 메소드가 호출될 때 메모리에 할당되고 종료되면 메모리가 해제된다. LIFO(Last In First Out) 구조를 갖고 변수에 새로운 데이터가 할당되면 이전 데이터는 지워진다.
    힙(Heap) 영역 : new 키워드로 생성되는 객체(인스턴스), 배열 등이 Heap 영역에 저장되며, 가비지 컬렉션에 의해 메모리가 관리되어 진다.
    
    자바의 메모리 공간은 크게 Method 영역, Stack 영역, Heap 영역으로 구분되고, 데이터 타입에 따라 할당됩니다.
    메소드(Method) 영역 : 전역변수와 static변수를 저장하며, Method영역은 프로그램의 시작부터 종료까지 메모리에 저장`,
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
    answer:
      'Java에서 오버로딩(Overloading)과 오버라이딩(Overriding)은 둘 다 객체 지향 프로그래밍의 개념이며, 다른 목적과 방식으로 사용됩니다.  오버로딩 (Overloading): 오버로딩은 같은 이름의 메서드를 여러 개 정의하는 것을 말합니다. 이 메서드들은 같은 클래스 내에서 선언되며, 매개변수의 개수, 타입 또는 순서가 다르게 정의될 수 있습니다. 메서드 오버로딩은 다양한 매개변수 조합을 통해 같은 작업을 수행하는 데 유용합니다.수 조합을 통해 같은 작업을 수행하는 데 유용합니다.수 조합을 통해 같은 작업을 수행하는 데 유용합니다.',
    favorCount: 1,
    isFavor: true,
    member: {
      id: 4,
      nickname: '최강금돈까스',
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
    </section>
  );
}

export default AnotherAnswers;
