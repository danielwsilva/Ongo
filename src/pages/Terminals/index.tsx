import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Feather } from '@expo/vector-icons';

import Header from '../../components/Header';
import Load from '../../components/Load';
import TerminalsCards from '../../components/TerminalsCads';

import { useAuth } from '../../contexts/auth';
import { useTerminal } from '../../contexts/terminal';

import api from '../../services/api';

import colors from '../../styles/colors';

import { 
  Container,
  Terminal,
  ViewInput,
  Input
} from './styles';

export interface TerminalsProps {
  id: number;
  idDonoCarga: number;
  nome: string;
  tipoPessoa: number;
  inscricaoEstadual: string;
  cpf: string;
  cnpj: string;
  endereco: {
    id: number;
    logradouro: string;
    numero: string;
    bairro: string;
    complemento: string;
    cep: string;
    lat: string;
    lng: string;
    cidade: string;
    estado: number;
    siglaEstado: string;
    nomeEstado: string;
    codCidadeIBGE: number
  };
  donoCarga: {
    nomeFantasia: string;
    cnpj: string;
    email: string;
    ddd: string;
    numero: string;
  };
}

const Terminals: React.FC = () => {
  const navigation = useNavigation();
  const { signOut } = useAuth();
  const { clearCoordenate } = useTerminal();

  const [loading, setLoading] = useState(true);
  const [terminals, setTerminals] = useState<TerminalsProps[]>([]);
  const [filteredTerminals, setFilteredTerminals] = useState<TerminalsProps[]>([]);
  const [name, setName] = useState<string>('');

  useEffect(() => {
    async function loadTerminals() {
      try{
        const page = await api.get('api/Terminal/get-terminal-listagem');

        const pageSize = page.data.data.totalResult;

        const response = await api.get(`api/Terminal/get-terminal-listagem?pageSize=${pageSize}&pageIndex=0&pesquisa`);
        
        const data = response.data.data.data;

        setTerminals(data);
        setFilteredTerminals(data);

        setLoading(false);
      } catch {
        signOut();
      }
    }
    
    navigation.addListener('focus', () => {
      setFilteredTerminals([]);
      setLoading(true);
      setName('');
      loadTerminals();
      clearCoordenate();
    });
    
    loadTerminals();
  }, [navigation]);

  useEffect(() => {
    handleTerminalSelected(name);
  }, [name]);

  function handleTerminalSelected(name: string) {
    if (name == '')
      return setFilteredTerminals(terminals);
    
    const filtered = terminals.filter(terminal => 
      terminal.nome.includes(name)
    );

    setFilteredTerminals(filtered);
  }

  function handleTerminalSelect(terminal: TerminalsProps) {
    navigation.navigate('Details', terminal);
  }

  if (loading)
    return <Load />
  
  return (
    <>
    <Container>
      <Header title='Lista de Terminais'/>
      <Terminal>
        <ViewInput>
          <Input 
            placeholder="Nome do Terminal"
            keyboardType="default"
            autoCorrect={false}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          
          <Feather
            name="search" 
            size={20} 
            color={colors.gray}
          />
        </ViewInput>
        <FlatList 
          data={filteredTerminals}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <TerminalsCards data={item} onPress={() => handleTerminalSelect(item)}/>
          )}
        />
      </Terminal>
    </Container>
    </>
  );
}

export default Terminals;