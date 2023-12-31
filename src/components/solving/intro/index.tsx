import Text from '@public/assets/text/Text';
import * as styles from './SolvingIntro.style';
import { COLORS } from '@public/assets/colors/color';
import Link from 'next/link';
import ThinDivider from '@/components/commons/divider/thin/ThinDivider';
import { useState } from 'react';
import TabsBubble from '@/components/commons/tabs/bubble';
import PrimaryBoxButton from '@/components/commons/buttons/boxButton/primaryButton/PrimaryBoxButton';
import SolvingIntroItem from './solvingIntroItem/SolvingIntroItem';

const CS = 'CS';
const LANGUAGE = 'LANGUAGE';
const FRAMEWORK = 'FRAMEWORK';

const SolvingCategory = [
  {
    name: '운영체제',
    type: CS,
  },
  {
    name: '자료구조',
    type: CS,
  },
  {
    name: '데이터베이스',
    type: CS,
  },
  {
    name: '컴퓨터구조',
    type: CS,
  },
  {
    name: '네트워크',
    type: CS,
  },
  {
    name: 'Spring',
    type: FRAMEWORK,
  },
  {
    name: 'React',
    type: FRAMEWORK,
  },
  {
    name: 'Java',
    type: LANGUAGE,
  },
  {
    name: 'JavaScript',
    type: LANGUAGE,
  },
  {
    name: 'GO',
    type: LANGUAGE,
  },
  {
    name: 'Kotlin',
    type: LANGUAGE,
  },
];

const SolvingIntro = () => {
  const [clickAll, setClickAll] = useState(true);
  const [clickCs, setClickCs] = useState(false);
  const [clickFramework, setClickFramework] = useState(false);
  const [clickLanguage, setClickLanguage] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleItemClick = (name: string) => {
    // 항목의 선택 여부를 토글
    if (selectedItems.some((item) => item == name)) {
      // 이미 존재하는 경우 제거
      setSelectedItems(selectedItems.filter((item) => !(item == name)));
    } else {
      // 존재하지 않는 경우 추가
      setSelectedItems([...selectedItems, name]);
    }
    console.log(selectedItems);
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
  const onButtonClick = () => {};
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
      <styles.SelectContainer>
        <Text color={COLORS.gray.black} textStyleName="Label4M" fontFamily="Pretendard">
          전체선택(0/11)
        </Text>
      </styles.SelectContainer>

      <styles.SolvingIntroItemContainer>
        {SolvingCategory.map((item) => (
          <div key={item.name} onClick={() => handleItemClick(item.name)}>
            <styles.SolvingIntroItemSubContainer>
              <SolvingIntroItem
                isClick={selectedItems.includes(item.name)}
                name={item.name}
                quizTotal={10}
                solvableQuizCnt={10}
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
