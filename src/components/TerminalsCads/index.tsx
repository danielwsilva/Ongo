import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { TerminalsProps } from '../../pages/Terminals';

import colors from '../../styles/colors';

import { 
  Container,
  Card,
  Wrapper, 
  Information, 
  TextDescription, 
  TextValue 
} from './styles';

interface Terminal extends RectButtonProps {
  data: TerminalsProps
}

const TerminalsCards = ({data, ...rest}: Terminal) => {
  return (  
      <Container {...rest}>
        <Card>
          <Wrapper>
            <Information>
              <TextDescription>Terminal: </TextDescription> 
              <TextValue>{ data.nome.substr(0, 20) }</TextValue>
            </Information>

            <Information>
              <TextDescription>Dono: </TextDescription>
              <TextValue>{ data.donoCarga.nomeFantasia }</TextValue>
            </Information>

            <Information>
              <TextDescription>Cidade: </TextDescription> 
              <TextValue>{ data.endereco.cidade + ' / ' + data.endereco.siglaEstado}</TextValue>
            </Information>
          </Wrapper>
          <Feather name="chevron-right" size={40} color={colors.blue}/>
        </Card>
    </Container>
  );
}

export default TerminalsCards;