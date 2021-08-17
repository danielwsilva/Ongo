import React from 'react';
import { ScrollView } from 'react-native';

import Header from '../../components/Header';
import Form from '../../components/Form';

const Register: React.FC = () => {
  return (
    <>
      <Header title='Detalhes do Terminal'/>
      <ScrollView>
        <Form titleButton='Alterar' operation='Change' />
      </ScrollView>
    </>
  );
}

export default Register;