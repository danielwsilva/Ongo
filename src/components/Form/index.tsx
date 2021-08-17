import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { showMessage } from "react-native-flash-message";
import { useNavigation, useRoute } from '@react-navigation/core';
import axios from 'axios';
import * as Location from 'expo-location';

import { useTerminal } from '../../contexts/terminal';
import { TerminalsProps } from '../../pages/Terminals';

import RadioButtton from '../../components/RadioButtton';

import colors from '../../styles/colors';

interface FormProps {
  titleButton: string;
  operation: string;
}

import { 
  Container, 
  Wrapper, 
  Category, 
  CategoryText, 
  InputMask, 
  InputText, 
  Button,
  ButtonText,
  ButtonLocation,
  ActivityInd
} from './styles';

const Form = ({operation, titleButton}: FormProps) => {
  const { terminalSave, terminalChange, newLongitude, newLatitude, clearCoordenate, loading } = useTerminal();
  const navigation = useNavigation();
  const route = useRoute();
  
  // TERMINAL
  const [id, setId] = useState<number>(0);
  const [idDonoCarga, setIdDonoCarga] = useState<string>('');
  const [nome, setNome] = useState<string>('');
  const [tipoPessoa, setTipoPessoa] = useState<number>(1);
  const [documento, setDocumento] = useState<string>('');
  const [inscricaoEstadual, setInscricaoEstadual] = useState<string>('');

  // ENDEREÇO
  const [logradouro, setLogradouro] = useState<string>('');
  const [cep, setCep] = useState<string>('');
  const [bairro, setBairro] = useState<string>('');
  const [numero, setNumero] = useState<string>('');
  const [complemento, setComplemento] = useState<string>();
  const [cidade, setCidade] = useState<string>('');
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const [estado, setEstado] = useState<string>('');
  const [nomeEstado, setNomeEstado] = useState<string>('');
  const [codCidadeIBGE, setCodCidadeIBGE] = useState<string>('');

  // DONO DA CARGA
  const [nomeFantasia, setNomeFantasia] = useState<string>('');
  const [cnpjDono, setCnpjDono] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');

  const [selected, setSelected] = useState<number>(0);

  useEffect(() => {
    getLocationAsync();
  }, []);

  useEffect(() => {
    loadingTerminal();
  }, []);
  
  useEffect(() => {
    handleCep();
  }, [cep]);

  useEffect(() => {
    setTipoPessoa(selected === 0 ? 1 : 2);
  }, [selected]);

  // VERIFICA PERMISSÃO E RETORNA LOCALIZAÇÃO ATUAL
  async function getLocationAsync() { 
    const { status } = await Location.requestForegroundPermissionsAsync();
    
    if (status === 'granted') {
      if (operation !== 'Change') {
        let location = await Location.getCurrentPositionAsync({});
        
        setLatitude(location.coords.latitude)
        setLongitude(location.coords.longitude);
      }
    } else {
      throw new Error('Location permission not granted');
    }
  }

  // CHAMA O COMPONENTE DE MAPA
  function handleMaps() {
    const newLocation = {
      coordenate: {
        latitude: newLatitude ? newLatitude : latitude,
        longitude: newLongitude ? newLongitude : longitude
      }
    }

    navigation.navigate('Maps', newLocation);
  }

  // RETORNA A CIDADE, ESTACO, COD. IBGE COM BASE NO CEP
  async function handleCep() {
    const cepReplace = cep.replace(/\.|\-/g, '');

    if (cepReplace.length < 8) {
      setCidade('');
      setEstado('');
      setNomeEstado('');
      setCodCidadeIBGE('');
      return;
    }

    const { data } = await axios.get(`https://viacep.com.br/ws/${cepReplace}/json/`);

    if (data.erro) {
      showMessage({
        message: "Atenção",
        description: "O CEP informado não é válido!",
        type: "danger",
      });
    } else {
      setCidade(data.localidade);
      setEstado(data.uf);
      setNomeEstado(data.uf);
      setCodCidadeIBGE(data.ibge);
    }
  }

  // CARREGA TERMINAL
  function loadingTerminal() {
    if(operation === 'Change') {
      const data = route.params as TerminalsProps;

      clearCoordenate();

      setId(data.id);
      setIdDonoCarga(String(data.idDonoCarga));
      setNome(data.nome);
      setTipoPessoa(data.tipoPessoa);
      setSelected(data.tipoPessoa === 1 ? 0 : 1);
      setDocumento(data.cpf ? data.cpf : data.cnpj);
      setInscricaoEstadual(data.inscricaoEstadual);
      setLogradouro(data.endereco.logradouro);
      setCep(data.endereco.cep);
      setBairro(data.endereco.bairro);
      setNumero(data.endereco.numero);
      setCodCidadeIBGE(String(data.endereco.codCidadeIBGE));
      setComplemento(data.endereco.complemento);
      setLatitude(Number(data.endereco.lat));
      setLongitude(Number(data.endereco.lng));
      setCidade(data.endereco.cidade);
      setEstado(String(data.endereco.estado));
      setNomeEstado(data.endereco.nomeEstado);
      setNomeFantasia(data.donoCarga.nomeFantasia);
      setCnpjDono(data.donoCarga.cnpj);
      setEmail(data.donoCarga.email);
      setTelefone(data.donoCarga.ddd + data.donoCarga.numero);
    }
  }

  // MENSAGENS DE VALIDAÇÃO
  function handleMessage(error: boolean) {
    showMessage({
      message: error ? "Sucesso" : "Atenção",
      description: error ?'Operação realizada com sucesso!' : 'Operação não realizada, preencha os campos corretamente!' ,
      type: error ? "success" : "danger",
    });
  }

  // VALIDA CAMPOS
  function handleValidateFields() {
    var valida = false;

    if (nome === '')
      valida = true;
    if (documento === '')
      valida = true;
    if (idDonoCarga === '')
      valida = true;
    if (logradouro === '')
      valida = true;
    if (bairro === '')
      valida = true;
    if (numero === '')
      valida = true;
    if (cidade === '')
      valida = true;

    if (valida) {
      showMessage({
        message: "Atenção",
        description: 'Preencha os campos corretamente!',
        type: "danger",
      });
    } else {
      handleSave();
    }
  }

  // LIMPA OS ESTADOS APÓS CADASTRAR UM TERMINAL
  function clearState() {
      setId(0);
      setNome('');
      setTipoPessoa(1);
      setDocumento('');
      setInscricaoEstadual('');
      setIdDonoCarga('');
      setLogradouro('');
      setCep('');
      setBairro('');
      setNumero('');
      setComplemento('');
      setCidade('');
      getLocationAsync();
      setEstado('');
      setNomeEstado('');
      setCodCidadeIBGE('');
      clearCoordenate();
  }

  // CADASTRA E ALTERA TERMINAL
  function handleSave() {
    const data = {
      "id": id,
      "idDonoCarga": Number(idDonoCarga),
      "nome": nome,
      "TipoPessoa": tipoPessoa, 
      "CPF": tipoPessoa === 1 ? documento : '',
      "CNPJ": tipoPessoa === 2 ? documento : '',
      "InscricaoEstadual": Number(inscricaoEstadual),
      "Endereco": {
        "logradouro": logradouro,
        "cep": cep,
        "bairro": bairro,
        "numero": numero,
        "CodCidadeIBGE": Number(codCidadeIBGE),
        "complemento": complemento,
        "lat": newLatitude ? newLatitude : latitude,
        "lng": newLongitude ? newLongitude : longitude,
        "cidade": cidade,
        "estado": estado,
        "nomeEstado": nomeEstado
      }
    }
    
    console.log(data);

    if (operation === 'Register') {
      terminalSave(data).then(response => {
        handleMessage(response);
        response && clearState();
      });
    } else {
      terminalChange(data).then(response => {
        handleMessage(response)
      });
    }
  }

  return (  
    <Container>
      <Wrapper>
        <Category 
          colors={[ colors.blue, colors.green ]} 
          start={{x:0, y:1}} 
          end={{x:1, y:0}}
        >
          <Feather name="info" color={colors.white} size={20} />
          <CategoryText>Informações</CategoryText>
        </Category>

        <RadioButtton 
          selected={selected}
          onChangeSelect={(i) => {
            setSelected(i)
            setDocumento('')
            if (selected === 1)
              setInscricaoEstadual('');
          }}
        />

        <InputText
          placeholder={'Nome'} 
          editable={true} 
          value={nome} 
          onChangeText={(text) => setNome(text)}
        />

        <InputMask 
          placeholder={tipoPessoa === 1 ? 'CPF' : 'CNPJ'} 
          type={tipoPessoa === 1 ? 'cpf' : 'cnpj'} 
          editable={true} 
          value={documento}
          onChangeText={(text) => setDocumento(text)} 
        />

        <InputMask 
          placeholder={'IE'} 
          type={'only-numbers'}
          editable={tipoPessoa === 1 ? false : true} 
          value={inscricaoEstadual} 
          onChangeText={(text) => setInscricaoEstadual(text)} 
        />

        <InputMask 
          placeholder={'Dono Carga'} 
          type={'only-numbers'} 
          editable={true} 
          value={idDonoCarga} 
          onChangeText={(text) => setIdDonoCarga(text)} 
        />

        <Category 
          colors={[ colors.blue, colors.green ]} 
          start={{x:0, y:1}} 
          end={{x:1, y:0}}
        >
          <Feather name="map-pin" color={colors.white} size={20} />
          <CategoryText>Endereço</CategoryText>
        </Category>

        <InputText
          placeholder={'Logradouro'} 
          editable={true} 
          value={logradouro} 
          onChangeText={(text) => setLogradouro(text)} 
        />

        <InputMask 
          placeholder={'CEP'} 
          type={'zip-code'}  
          editable={true} 
          value={cep} 
          onChangeText={(text) => setCep(text)} 
        />

        <InputText
          placeholder={'Bairro'} 
          editable={true} 
          value={bairro} 
          onChangeText={(text) => setBairro(text)} 
        />

        <InputMask 
          placeholder={'Numero'} 
          type={'only-numbers'} 
          editable={true} 
          value={numero} 
          onChangeText={(text) => setNumero(text)} 
        />

        <InputText
          placeholder={'Complento'} 
          editable={true} 
          value={complemento} 
          onChangeText={(text) => setComplemento(text)} 
        />

        <ButtonLocation activeOpacity={0.7} onPress={handleMaps}>
          <Feather name="map" color={colors.white} size={20} />
          <CategoryText>{operation === 'Change' ? 'Alterar localização' : 'Selecionar localização' }</CategoryText>
        </ButtonLocation>

        <InputText
          placeholder={'Cidade'} 
          editable={false} 
          value={cidade} 
        />

        <InputText
          placeholder={'Estado'} 
          editable={false} 
          value={estado} 
        />

        <InputText
          placeholder={'Cod. IBGE'} 
          editable={false}  
          value={codCidadeIBGE} 
        />

        { 
          operation === 'Change' &&
          <>
            <Category 
              colors={[ colors.blue, colors.green ]} 
              start={{x:0, y:1}} 
              end={{x:1, y:0}}
            >
              <Feather name="map-pin" color={colors.white} size={20} />
              <CategoryText>Dono da Carga</CategoryText>
            </Category>

            <InputText
              editable={false} 
              value={nomeFantasia} 
            />

            <InputMask 
              editable={false} 
              type={'cnpj'} 
              value={cnpjDono}
            />

            <InputText
              editable={false}  
              value={email} 
            />

            <InputMask 
              editable={false} 
              type={'cel-phone'} 
              value={telefone}
            />
          </>
        }

        <TouchableOpacity 
          activeOpacity={0.7}
          onPress={handleValidateFields}
        >
          <Button 
            colors={[ colors.blue, colors.green ]} 
            start={{x:0, y:1}} end={{x:1, y:0}}
          >
            {
              loading 
                ? <ActivityInd color={colors.white} /> 
                : <ButtonText>{titleButton}</ButtonText>
            }
          </Button>
        </TouchableOpacity>
      </Wrapper>
    </Container>
  );
}

export default Form;