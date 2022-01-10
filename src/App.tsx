import { useState } from 'react';

import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { Dashboard } from "./components/Dashboard";

import { GlobalStyle } from "./styles/global";


export function App() {
  const [isNewTrasactionModalOpen, setIsNewTrasactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTrasactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTrasactionModalOpen(false);
    }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      < NewTransactionModal isOpen={isNewTrasactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />

      <GlobalStyle />
    </>
  );
}
