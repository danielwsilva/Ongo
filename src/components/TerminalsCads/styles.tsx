import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled(RectButton)`
  background-color: ${colors.white};
  margin: 10px 2px;
  border-radius: 4px;
  elevation: 2;
`;

export const Card = styled.View`
  border-left-color: ${colors.green};
  border-left-width: 5px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.View`
  padding: 10px 0;
`;

export const Information = styled.View`
  flex-direction: row;
  padding-left: 10px;
  margin: 1px 0;
`;

export const TextDescription = styled.Text`
  color: ${colors.heading};
  font-family: ${fonts.text};
  font-size: 15px;
`;

export const TextValue = styled.Text`
  color: ${colors.gray};
  font-family: ${fonts.text};
  font-size: 15px;
`;