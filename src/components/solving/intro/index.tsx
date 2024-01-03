import Text from '@public/assets/text/Text';
import * as styles from './SolvingIntro.style';
import { COLORS } from '@public/assets/colors/color';
import Link from 'next/link';
import ThinDivider from '@/components/commons/divider/thin/ThinDivider';
import { useEffect, useState } from 'react';
import TabsBubble from '@/components/commons/tabs/bubble';
import PrimaryBoxButton from '@/components/commons/buttons/boxButton/primaryButton/PrimaryBoxButton';
import SolvingIntroItem from './solvingIntroItem/SolvingIntroItem';
import { useGetQuizCategoriesFigure } from '@/hooks/quiz/useGetQuizCategoriesFigure';
import api from '@/service/TokenService';
import { useRouter } from 'next/router';
import CheckBox from '@public/icons/System/CheckSquareBox.svg';
import CheckBoxOn from '@public/icons/System/CheckSquareMint.svg';

const CS = 'CS';
const LANGUAGE = 'LANGUAGE';
const FRAMEWORK = 'FRAMEWORK';

const SolvingCategory = [
  {
    id: 1,
    name: '운영체제',
    type: CS,
    quizTotal: 0,
    solvableQuizCnt: 0,
  },
  {
    id: 2,
    name: '자료구조',
    type: CS,
    quizTotal: 0,
    solvableQuizCnt: 0,
  },
  {
    id: 3,
    name: '데이터베이스',
    type: CS,
    quizTotal: 0,
    solvableQuizCnt: 0,
  },
  {
    id: 4,
    name: '컴퓨터구조',
    type: CS,
    quizTotal: 0,
    solvableQuizCnt: 0,
  },
  {
    id: 5,
    name: '네트워크',
    type: CS,
    quizTotal: 0,
    solvableQuizCnt: 0,
  },
  {
    id: 6,
    name: 'Spring',
    type: FRAMEWORK,
    quizTotal: 0,
    solvableQuizCnt: 0,
  },
  {
    id: 7,
    name: 'React',
    type: FRAMEWORK,
    quizTotal: 0,
    solvableQuizCnt: 0,
  },
  {
    id: 8,
    name: 'Java',
    type: LANGUAGE,
    quizTotal: 0,
    solvableQuizCnt: 0,
  },
  {
    id: 9,
    name: 'JavaScript',
    type: LANGUAGE,
    quizTotal: 0,
    solvableQuizCnt: 0,
  },
  {
    id: 10,
    name: 'GO',
    type: LANGUAGE,
    quizTotal: 0,
    solvableQuizCnt: 0,
  },
  {
    id: 11,
    name: 'Kotlin',
    type: LANGUAGE,
    quizTotal: 0,
    solvableQuizCnt: 0,
  },
];

const SolvingIntro = () => {
  const token = api.getAccessToken();
  const router = useRouter();
  const [clickAll, setClickAll] = useState(true);
  const [clickCs, setClickCs] = useState(false);
  const [clickFramework, setClickFramework] = useState(false);
  const [clickLanguage, setClickLanguage] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedQuizIds, setSelectedQuizIds] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const handleItemClick = (name: string, id: number) => {
    // 항목의 선택 여부를 토글
    if (selectedItems.some((item) => item == name)) {
      // 이미 존재하는 경우 제거
      setSelectedItems(selectedItems.filter((item) => !(item == name)));
      setSelectedQuizIds(selectedQuizIds.filter((item) => !(item == id)));
    } else {
      // 존재하지 않는 경우 추가
      setSelectedItems([...selectedItems, name]);
      setSelectedQuizIds([...selectedQuizIds, id]);
    }
  };

  const onAllClick = () => {
    setClickAll(true);
    setClickCs(false);
    setClickLanguage(false);
    setClickFramework(false);
  };
  const onCsClick = () => {
    setClickAll(false);
    setClickCs(true);
    setClickLanguage(false);
    setClickFramework(false);
  };
  const onLanguageClick = () => {
    setClickAll(false);
    setClickCs(false);
    setClickLanguage(true);
    setClickFramework(false);
  };
  const onFrameworkClick = () => {
    setClickAll(false);
    setClickCs(false);
    setClickLanguage(false);
    setClickFramework(true);
  };
  const onButtonClick = () => {
    router.push({
      pathname: '/solving/solve',
      query: {
        quizIds: JSON.stringify(selectedQuizIds),
      },
    });
  };
  const selectAllClick = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems([
        '운영체제',
        '자료구조',
        '데이터베이스',
        '컴퓨터구조',
        '네트워크',
        'Spring',
        'React',
        'Java',
        'JavaScript',
        'GO',
        'Kotlin',
      ]);
    }
    setSelectAll(!selectAll);
  };

  const { data } = useGetQuizCategoriesFigure(token);
  // @TODO: 추후 스낵바 관련 작업
  //const zeroQuizData = data?.payload.filter((item) => item.solvableQuizCnt == 0);

  useEffect(() => {
    data?.payload.map((item) =>
      SolvingCategory.filter((solvingItem) => {
        if (solvingItem.name == item.name) {
          solvingItem.quizTotal = item.quizTotal;
          solvingItem.solvableQuizCnt = item.solvableQuizCnt;
        }
      }),
    );
  }, [data]);
  return (
    <styles.Container>
      <styles.TextContainer>
        <Text color={COLORS.gray.black} fontFamily="Pretendard" textStyleName="Title1">
          CS 문제 카테고리 선택
        </Text>
        <styles.SubTextContainer>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Text color={COLORS.gray.black} fontFamily="Pretendard" textStyleName="Body2M">
              풀고 싶은 문제 카테고리를 선택해주세요. 선택한 카테고리에서 5개의 문제가 랜덤으로 출제됩니다.
            </Text>
            <Text color={COLORS.gray.black} fontFamily="Pretendard" textStyleName="Body2M">
              효율적인 학습을 위해 푼 문제는 중복으로 출제되지 않습니다.
            </Text>
          </div>
          <Link href="/">
            <Text color={COLORS.gray.black} fontFamily="Pretendard" textStyleName="Label4B">
              문제 갯수 설정
            </Text>
          </Link>
        </styles.SubTextContainer>
      </styles.TextContainer>
      <styles.BubbleTabContainer>
        {clickAll ? (
          <TabsBubble bubbleType="SELECTED" label="All" onClick={onAllClick} />
        ) : (
          <TabsBubble bubbleType="INACTIVE" label="All" onClick={onAllClick} />
        )}
        {clickCs ? (
          <TabsBubble bubbleType="SELECTED" label="CS" onClick={onCsClick} />
        ) : (
          <TabsBubble bubbleType="INACTIVE" label="CS" onClick={onCsClick} />
        )}
        {clickFramework ? (
          <TabsBubble bubbleType="SELECTED" label="Framework" onClick={onFrameworkClick} />
        ) : (
          <TabsBubble bubbleType="INACTIVE" label="Framework" onClick={onFrameworkClick} />
        )}
        {clickLanguage ? (
          <TabsBubble bubbleType="SELECTED" label="Language" onClick={onLanguageClick} />
        ) : (
          <TabsBubble bubbleType="INACTIVE" label="Language" onClick={onLanguageClick} />
        )}
      </styles.BubbleTabContainer>
      <ThinDivider />
      {selectAll ? (
        <div onClick={selectAllClick}>
          <styles.SelectContainer>
            <CheckBoxOn />
            <Text color={COLORS.gray.black} textStyleName="Label4M" fontFamily="Pretendard">
              전체선택(11/11)
            </Text>
          </styles.SelectContainer>
        </div>
      ) : (
        <div onClick={selectAllClick}>
          <styles.SelectContainer>
            <CheckBox />
            <Text color={COLORS.gray.black} textStyleName="Label4M" fontFamily="Pretendard">
              전체선택(0/11)
            </Text>
          </styles.SelectContainer>
        </div>
      )}

      <styles.SolvingIntroItemContainer>
        {clickAll &&
          SolvingCategory.map((item) => (
            <div key={item.name} onClick={() => handleItemClick(item.name, item.id)}>
              <styles.SolvingIntroItemSubContainer>
                <SolvingIntroItem
                  isClick={selectedItems.includes(item.name)}
                  name={item.name}
                  quizTotal={item.quizTotal}
                  solvableQuizCnt={item.solvableQuizCnt}
                />
              </styles.SolvingIntroItemSubContainer>
            </div>
          ))}
        {clickCs &&
          SolvingCategory.filter((item) => item.type === CS).map((item) => (
            <div key={item.name} onClick={() => handleItemClick(item.name, item.id)}>
              <styles.SolvingIntroItemSubContainer>
                <SolvingIntroItem
                  isClick={selectedItems.includes(item.name)}
                  name={item.name}
                  quizTotal={item.quizTotal}
                  solvableQuizCnt={item.solvableQuizCnt}
                />
              </styles.SolvingIntroItemSubContainer>
            </div>
          ))}
        {clickLanguage &&
          SolvingCategory.filter((item) => item.type === LANGUAGE).map((item) => (
            <div key={item.name} onClick={() => handleItemClick(item.name, item.id)}>
              <styles.SolvingIntroItemSubContainer>
                <SolvingIntroItem
                  isClick={selectedItems.includes(item.name)}
                  name={item.name}
                  quizTotal={item.quizTotal}
                  solvableQuizCnt={item.solvableQuizCnt}
                />
              </styles.SolvingIntroItemSubContainer>
            </div>
          ))}
        {clickFramework &&
          SolvingCategory.filter((item) => item.type === FRAMEWORK).map((item) => (
            <div key={item.name} onClick={() => handleItemClick(item.name, item.id)}>
              <styles.SolvingIntroItemSubContainer>
                <SolvingIntroItem
                  isClick={selectedItems.includes(item.name)}
                  name={item.name}
                  quizTotal={item.quizTotal}
                  solvableQuizCnt={item.solvableQuizCnt}
                />
              </styles.SolvingIntroItemSubContainer>
            </div>
          ))}
      </styles.SolvingIntroItemContainer>

      <styles.CategoryCheckContainer>
        <Text color={COLORS.gray.black} textStyleName="Label4B" fontFamily="Pretendard">
          이 카테고리 다음에도 사용
        </Text>
      </styles.CategoryCheckContainer>

      <styles.ButtonContainer>
        {selectedItems.length > 0 ? (
          <div onClick={onButtonClick}>
            <PrimaryBoxButton size="LARGE" msg="다음" state="DEFAULT" />
          </div>
        ) : (
          <PrimaryBoxButton size="LARGE" msg="다음" state="DISABLED" />
        )}
      </styles.ButtonContainer>
    </styles.Container>
  );
};
export default SolvingIntro;
