import { QuizCategoryNameType } from 'types';
import icOs from 'static/icons/category/OS.svg';
import icComputerStructure from 'static/icons/category/ComputerStructure.svg';
import icDataBase from 'static/icons/category/DataBase.svg';
import icDataStructure from 'static/icons/category/DataStructure.svg';
import icJava from 'static/icons/category/Java.svg';
import icJavaScript from 'static/icons/category/JavaScript.svg';
import icKotlin from 'static/icons/category/Kotlin.svg';
import icNetwork from 'static/icons/category/Network.svg';
import icReact from 'static/icons/category/React.svg';
import icSpring from 'static/icons/category/Spring.svg';

const ICON_DATA: Record<QuizCategoryNameType, string> = {
  OS: icOs,
  DATA_STRUCTURE: icDataStructure,
  NETWORK: icNetwork,
  DATABASE: icDataBase,
  COMPUTER_ARCHITECTURE: icComputerStructure,
  SPRING: icSpring,
  REACT: icReact,
  JAVA: icJava,
  JAVASCRIPT: icJavaScript,
  KOTLIN: icKotlin,
};

export { ICON_DATA };
