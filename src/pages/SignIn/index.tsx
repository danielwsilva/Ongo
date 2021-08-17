import React, { useState } from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useAuth } from '../../contexts/auth';
import colors from '../../styles/colors';

import {
  Container, 
  Wrapper, 
  Logo, 
  HeaderText, 
  Header, 
  ViewInput, 
  Input, 
  ButtonLogin, 
  ButtonText, 
  WrapperText,
  ViewMensageError,
  TextMensageError,
  ActivityInd
} from './styles';

const SignIn: React.FC = ()  => {
  const { signIn, error, loading } = useAuth();

  const [user, setUser] = useState<string>();
  const [password, setPassword] = useState<string>();
  
  function handleSignIn() {
    const credentials = {
      UserIdentifier: user,
      Password: password
    }
    
    signIn(credentials);
  }

  return (
    <Container>
      <Header 
        colors={[ colors.blue, colors.green ]} 
        start={{x:0, y:2}} end={{x:1, y:0}}
      >
        <Logo 
          source={require("../../assets/logo.png")} 
          resizeMode={'contain'}
        />
        <HeaderText>Login</HeaderText>
      </Header>

      <Wrapper>
        <View>
          <ViewInput>
            <Feather 
              name="user" 
              size={20} 
              color={error ? colors.red : colors.gray}
            />
            <Input 
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              value={user}
              onChangeText={(text) => setUser(text)}
              returnKeyType="send"
              onSubmitEditing={handleSignIn}
            />
          </ViewInput>

          <ViewInput>
            <Feather 
              name="key" 
              size={20} 
              color={error ? colors.red : colors.gray}
            />
            <Input 
              placeholder="Senha"
              secureTextEntry={true}
              autoCorrect={false}
              value={password}
              onChangeText={(text) => setPassword(text)}
              returnKeyType="send"
              onSubmitEditing={handleSignIn}
            />
          </ViewInput>

          { error && 
              <ViewMensageError>
                <TextMensageError>Usuário ou Senha invalida!</TextMensageError>
              </ViewMensageError> 
          }
          
          <TouchableOpacity activeOpacity={0.7} onPress={handleSignIn}>
            <ButtonLogin 
              colors={[ colors.blue, colors.green ]} 
              start={{x:0, y:2}} end={{x:1, y:0}}
            > 
              {
                loading 
                ? <ActivityInd color={colors.white} /> 
                : <ButtonText>Entrar</ButtonText>
              }
            </ButtonLogin>
          </TouchableOpacity>
        </View>

        <WrapperText>ON GO Mobile Teste</WrapperText>
      </Wrapper>
    </Container>
  )
}

export default SignIn;