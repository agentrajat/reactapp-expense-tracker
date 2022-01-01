import React, { useContext } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalState';
import { GLOBAL_VARIABLES } from '../utilities/GlobalVariables';

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = (transaction.transactionType == GLOBAL_VARIABLES.transaction.expense) ? '-' : '+';

    return (
        <tr className='transaction'>
            <td>{transaction.text}</td>
            <td><span className={transaction.transactionType == GLOBAL_VARIABLES.transaction.expense ? 'expense' : 'income'}>{sign + "$" + Math.abs(transaction.amount)}</span></td>
            {/* <td><Button className='deleteBtn' variant="warning" onClick={() => deleteTransaction(transaction.id)}>Delete</Button></td> */}
            <td><OverlayTrigger
                placement="right"
                overlay={<Tooltip>Remove</Tooltip>}>
                <i className='fas fa-minus-circle deleteBtn' onClick={() => deleteTransaction(transaction.id)}/>
            </OverlayTrigger></td>
        </tr>
    )
}
