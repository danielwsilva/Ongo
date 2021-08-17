import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.lightGray};
`;

export const Header = styled(LinearGradient)`
  height: 40%;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 120px;
`;

export const HeaderText = styled.Text`
  position: absolute;
  color: ${colors.white};
  font-family: ${fonts.text};
  font-size: 20px;
  bottom: 0;
  right: 0;
  margin-bottom: 50px;
  margin-right: 30px;
`;

export const Logo = styled.Image`
  height: 50px;
`;

export const Wrapper = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: space-around;
  align-items: center;
`;

export const ViewInput = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 40px;
  background: ${colors.white};
  elevation: 2;
`;

export const Input = styled.TextInput`
  flex: 1;
  margin-left: 10px;
  font-family: ${fonts.text};
`;

export const ButtonLogin = styled(LinearGradient)`
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  margin-top: 30px;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.text};
  font-size: 20px;
`;

export const WrapperText = styled.Text`
  color: ${colors.gray};
  font-family: ${fonts.complement};
  font-size: 15px;
`;

export const ViewMensageError = styled.View`
  padding: 10px;
  border-radius: 4px;
  background-color: ${colors.white};
  border-left-color: ${colors.red};
  border-left-width: 5px;
  elevation: 2;
`;

export const TextMensageError = styled.Text`
  color: ${colors.black};
  font-family: ${fonts.complement};
  font-size: 15px;
`;

export const ActivityInd = styled(ActivityIndicator)`
  padding: 4px;
`;
