import icComputerStructure from 'static/icons/category/ComputerStructure.svg';
import icDataBase from 'static/icons/category/DataBase.svg';
import icDataStructure from 'static/icons/category/DataStructure.svg';
import icJava from 'static/icons/category/Java.svg';
import icJavaScript from 'static/icons/category/JavaScript.svg';
import icKotlin from 'static/icons/category/Kotlin.svg';
import icNetwork from 'static/icons/category/Network.svg';
import icOS from 'static/icons/category/OS.svg';
import icReact from 'static/icons/category/React.svg';
import icSpring from 'static/icons/category/Spring.svg';
import { QuizCategoryNameType } from 'types';

const CATEGORY_ICON_MAP: Record<QuizCategoryNameType, string> = {
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

export { CATEGORY_ICON_MAP };
