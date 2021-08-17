import React from 'react';

import { useAuth } from '../../contexts/auth';

import colors from '../../styles/colors';

import { 
  Container, 
  Titulo, 
  Button 
} from './styles';
import { Feather } from '@expo/vector-icons';

interface HeaderProps {
  title: string;
}

const Header = ({title}: HeaderProps) => {
  const { signOut } = useAuth();
  return (
    <Container
      colors={[ colors.green, colors.blue ]}
      start={{x:1, y:0}} 
      end={{x:0, y:2}}
    >
      <Titulo>{title}</Titulo>
      <Button activeOpacity={0.7} onPress={signOut}>
        <Feather name="log-out" color="#fff" size={25} />
      </Button>
    </Container>
  );
}

export default Header;