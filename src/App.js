import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { TransactionList } from './components/TransactionList';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Container className="my-4">
        <Row>
          <Col>
            <Balance />
            <AddTransaction />
          </Col>
          <Col>
            <TransactionList />
          </Col>
        </Row>
      </Container>
    </GlobalProvider>
  );
}

export default App;
