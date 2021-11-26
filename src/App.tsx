import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export const App = () => {
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionOpen(true);
  };

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionOpen(false);
  };

  return (
    <>
      <GlobalStyle />
      <Header onOpenTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <Modal
        isOpen={isNewTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>
    </>
  );
};
