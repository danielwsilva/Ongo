import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

import colors from '../../styles/colors';

export const OptContainer = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`;

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 15px;
`;

export const OutlineCircle = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border-color: ${colors.gray1};
  border-width: 2px;
  justify-content: center;
  align-items: center;
`;

export const InnerCircle = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${colors.gray};
`;

export const TextCircle = styled.Text<{selected: number, index: number}>`
  font-size: 14px;
  margin-left: 7px;
  color: ${props => props.selected === props.index ? colors.gray : colors.gray1};
`;
