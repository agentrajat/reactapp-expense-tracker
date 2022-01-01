import React, { useContext } from 'react';
import { Card, ListGroup, Stack } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalState';
import { GLOBAL_VARIABLES } from '../utilities/GlobalVariables';


const calculateBalance = (transactions) => {
    let statement = {
        total: 0,
        income: 0,
        expense: 0
    };
    transactions.forEach(transaction => {
        if (transaction.transactionType == GLOBAL_VARIABLES.transaction.expense) {
            statement.total -= transaction.amount;
            statement.expense += transaction.amount;
        } else {
            statement.total += transaction.amount;
            statement.income += transaction.amount;
        }
    });
    return statement;
};


export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const { total, expense, income } = calculateBalance(transactions);

    return (
        <Card className='text-center'>
            <Card.Header as="h6">Your Balance</Card.Header>
            <Card.Body>
                <Card.Title>
                    ${total.toFixed(2)}
                </Card.Title>
                <div className="border-top my-2"></div>
                <Stack direction="horizontal">
                    <span className="mx-auto">Total Income<br /><h6 className='income'>+{income.toFixed(2)}</h6></span>
                    <div className="vr" />
                    <span className="mx-auto">Total Expense<br /><h6 className='expense'>-{Math.abs(expense).toFixed(2)}</h6></span>
                </Stack>
            </Card.Body>
        </Card>
    )
}
