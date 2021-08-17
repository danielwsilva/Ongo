import styled from 'styled-components/native';
import { ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { LinearGradient  } from 'expo-linear-gradient';
import { TextInputMask } from 'react-native-masked-text';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

export const Container = styled(ScrollView)`
  flex: 1;
  background-color: ${colors.white};
  padding-top: 10px;
`;

export const Wrapper = styled.View`
  padding: 0 20px;
`;

export const ButtonLocation = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 4px;
  background-color: ${colors.gray1};
`;

export const Category = styled(LinearGradient)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 10px;
`;

export const CategoryText = styled.Text`
  padding-left: 5px;
  font-size: 18px;
  font-family: ${fonts.text};
  color: ${colors.white};
`;

export const InputMask = styled(TextInputMask)`
  flex: 1;
  font-family: ${fonts.text};
  padding: 10px;
  border-radius: 4px;
  background-color: ${props => props.editable ? colors.white : colors.lightGray};
  margin-bottom: 15px;
  color: ${colors.gray};
  elevation: 3;
`;

export const InputText = styled.TextInput`
  flex: 1;
  font-family: ${fonts.text};
  padding: 10px;
  border-radius: 4px;
  background-color: ${props => props.editable ? colors.white : colors.lightGray};
  margin-bottom: 15px;
  elevation: 3;
  color: ${colors.gray};
`;

export const Button = styled(LinearGradient)`
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.text};
  font-size: 20px;
`;

export const ActivityInd = styled(ActivityIndicator)`
  padding: 4px;
`;


