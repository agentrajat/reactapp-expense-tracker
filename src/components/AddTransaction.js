import React, { useState, useContext } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalState';
import { GLOBAL_VARIABLES } from '../utilities/GlobalVariables';

export const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(null);
    const [transactionType, setTransactionType] = useState(GLOBAL_VARIABLES.transaction.income);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            text,
            amount: +amount,
            transactionType
        }
        addTransaction(newTransaction);
        setText('');
        setAmount(null);
    }

    const onTransactionTypeChange = e => {
        setTransactionType(e.target.value);
    }

    return (
        <Card className='my-5'>
            <Card.Body>
                <Card.Title as="h6">Add a new transaction</Card.Title>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3" controlId="transactionForm.text">
                        <Form.Label>Text</Form.Label>
                        <Form.Control type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter text...' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="transactionForm.amount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="number" value={amount} min={0} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount...' />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check inline name="transactionType" type="radio" label="Income" id="transaction-type-inc" checked={transactionType === GLOBAL_VARIABLES.transaction.income} value={GLOBAL_VARIABLES.transaction.income} onChange={onTransactionTypeChange} />
                        <Form.Check inline name="transactionType" type="radio" label="Expense" id="transaction-type-exp" checked={transactionType === GLOBAL_VARIABLES.transaction.expense} value={GLOBAL_VARIABLES.transaction.expense} onChange={onTransactionTypeChange} />
                    </Form.Group>
                    <div className='text-center'>
                        <Button variant="primary" type="submit" disabled={(text.length == 0)}>
                            Add Transaction
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    )
}
