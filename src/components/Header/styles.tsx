import styled from 'styled-components/native';
import { LinearGradient  } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled(LinearGradient)`
  align-items: center;
  justify-content: flex-end;
`;

export const Button = styled(TouchableOpacity)`
  position: absolute;
  right: 20px;
  top: 65%;
`;

export const Titulo = styled.Text`
  font-family: ${fonts.text};
  font-size: 25px;
  color: ${colors.white};
  padding: 70px 0 10px 0;
`;