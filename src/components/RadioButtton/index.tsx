import React from 'react';

import { 
  Container, 
  OptContainer, 
  OutlineCircle, 
  InnerCircle, 
  TextCircle 
} from './styles';

interface RadioProps {
  selected: number
  onChangeSelect(value: number): void;
}

const RadioButtton = ({onChangeSelect, selected}: RadioProps) => {
  var options = ['Pessoa Física', 'Pessoa Jurídica'];

  return (
    <Container>
      {
        options.map((opt, index) => (
          <OptContainer key={opt} onPress={() => onChangeSelect(index)}>
            <OutlineCircle>
              {selected === index && <InnerCircle />} 
            </OutlineCircle>
            <TextCircle selected={selected} index={index}>{opt}</TextCircle>
          </OptContainer>
        ))
      }
    </Container>
  );
}

export default RadioButtton;