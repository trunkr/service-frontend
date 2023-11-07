import styled from '@emotion/styled';
import { TEXT_STYLES, TextStyleName } from '../fonts/fonts';
interface StyledTextProps {
  color?: string;
  fontFamily: string;
  textStyleName: TextStyleName;
}
export const StyledText = styled.div<StyledTextProps>(({ color, textStyleName, fontFamily }) => ({
  color,
  fontFamily,
  fontSize: TEXT_STYLES[textStyleName].fontSize,
  fontWeight: TEXT_STYLES[textStyleName].fontWeight,
  lineHeight: TEXT_STYLES[textStyleName].lineHeight,
}));
