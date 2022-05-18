import Modal from 'react-modal';
import { Container } from './styles';


interface NewTransactionModaProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModaProps) {
    return(
        <Modal isOpen={isOpen} 
        onRequestClose={onRequestClose}>
            <Container>
              <h2>Cadastrar Transação</h2>
              <input placeholder="Título" />
              <input type="number" placeholder="Valor" />
              <input placeholder="Categoria" />
              <button type="submit">Cadastrar</button>
            </Container>
        </Modal> 
    );
}