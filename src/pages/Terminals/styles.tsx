import styled from 'styled-components/native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const Terminal = styled.View`
  flex: 1;
  padding: 0 20px;
  justify-content: center;
`;

export const ViewInput = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 40px;
  margin: 10px 0 10px 0;
  padding: 10px;
  background: #fff;
  elevation: 2;
`;

export const Input = styled.TextInput`
  flex: 1;
  margin-left: 10px;
  font-family: ${fonts.text};
`;

