import { useState } from 'react';
import Modal from 'react-modal';

import { TransactionsProvider } from './hooks/useTransactions';

import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { Dashboard } from "./components/Dashboard";

import { GlobalStyle } from "./styles/global";


export function App() {
  Modal.setAppElement('#root'); 

  const [isNewTrasactionModalOpen, setIsNewTrasactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTrasactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTrasactionModalOpen(false);
    }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <GlobalStyle />
      < NewTransactionModal 
        isOpen={isNewTrasactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal} 
      />
    </TransactionsProvider>
  );
}
