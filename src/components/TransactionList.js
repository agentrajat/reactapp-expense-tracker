import React, { useContext } from 'react';
import { Badge, Container, ListGroup, Table } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    const transactionsAvailable = (transactions.length > 0);
    return (
        <Container>
            <h4 className='text-center'>List of Transactions {transactionsAvailable && <Badge pill bg="info">{transactions.length}</Badge>}</h4>
            {transactionsAvailable && (<Table hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th style={{ width: "120px" }}>Amount</th>
                            <th style={{ width: "48px" }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map(transaction => (
                            <Transaction key={transaction.id} transaction={transaction} />
                        ))}
                    </tbody>
                </Table>)}
            {!transactionsAvailable && <p className='text-center'>No transactions available</p>}
        </Container>
    )
}