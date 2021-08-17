import React, { createContext, useState, useContext } from 'react';
import api from '../services/api';

interface TerminalContextData {
  newLatitude: number | undefined;
  newLongitude: number | undefined;
  loading: boolean;
  clearCoordenate(): Promise<void>;
  terminalSave(terminal: object): Promise<boolean>;
  terminalChange(terminal: object): Promise<boolean>;
  getCoordenate(coordenate: object): Promise<void>;
}

export interface Coordenate {
  coordinate: {
    latitude: number,
    longitude: number,
  },
}

const TerminalContext = createContext<TerminalContextData>({} as TerminalContextData);

export const TerminalProvider: React.FC  = ({children}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [newLatitude, setNewLatitude] = useState<number>();
  const [newLongitude, setNewLongitude] = useState<number>();

  async function terminalSave(terminal: object) {
    try {
      setLoading(true);

      await api.post('api/Terminal/save-terminal', terminal);

      setLoading(false);
      return true;

    } catch (err) { 
      setLoading(false);
      return false;
    }
  }

  async function terminalChange(terminal: object) {
    try {
      setLoading(true);

      await api.post('api/Terminal/alterar-terminal', terminal);

      setLoading(false);
      return true;

    } catch (err) { 
      setLoading(false);
      return false;
    }
  }

  async function getCoordenate(coords: Coordenate) {   
    setNewLatitude(coords.coordinate.latitude);
    setNewLongitude(coords.coordinate.longitude);
  }

  async function clearCoordenate() {   
    setNewLatitude(undefined);
    setNewLongitude(undefined);
  }
  
  return (
    <TerminalContext.Provider value={{newLatitude, newLongitude, loading, terminalSave, terminalChange, getCoordenate, clearCoordenate}}>
      {children}
    </TerminalContext.Provider>
  );
};

export function useTerminal() {
  const context = useContext(TerminalContext);
  return context;
};