import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Dashboard } from './components/Dashboard/Index';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] =useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }


  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }
  


  useEffect(() =>{
    fetch('http://localhost:3000/api/transactions')
    .then(response =>response.json)
    .then(data =>console.log(data))
  },[])
  return (
    <>
      <Header onOpenNewTrasactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}>
                        <h1>Cadastro</h1>
                </Modal>
      <GlobalStyle/>
    </>
  );
}

