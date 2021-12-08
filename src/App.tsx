import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';
import { TransactionsProvider } from './hooks/useTransactions';

export const App = () => {
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionOpen(true);
  };

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionOpen(false);
  };

  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenTransactionModal={handleOpenNewTransactionModal} />
      <NewTransactionModal
        isOpen={isNewTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Dashboard />
    </TransactionsProvider>
  );
};
