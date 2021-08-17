import React from 'react';
import { ScrollView } from 'react-native'

import Header from '../../components/Header';
import Form from '../../components/Form';

const Register: React.FC = () => {
  return (
    <>
      <Header title='Cadastro de Terminais'/>
      <ScrollView>    
        <Form titleButton='Cadastrar' operation='Register' />
      </ScrollView>
    </>
  );
}

export default Register;