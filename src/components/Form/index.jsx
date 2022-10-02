import React, {useState} from 'react'
import Grid from "../Grid";
import * as C from "./styles";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {

    const [ desc , setDesc ] = useState('');
    const [ amount , setAmount ] = useState('');
    const [ isExpense , setIsExpense ] = useState(false);

    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if(!desc || !amount){
            alert("Informe a descrição e o valor");
            return;
        } else if(amount < 1) {
            alert("O valor tem que ser positivo!");
            return;
        }


        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        }

        handleAdd(transaction);

        setDesc("");
        setAmount("");
    };



  return (
    <>
        <C.Container>
            <C.InputContent>
                <C.Label>Description</C.Label>
                <C.Input 
                    value={desc} 
                    onChange={(e) => setDesc(e.target.value)} />
            </C.InputContent>
            <C.InputContent>
                <C.Label>Value</C.Label>
                <C.Input 
                    value={amount}
                    type="number"
                    onChange={(e) => setAmount(e.target.value)}
                />
            </C.InputContent>
            <C.RadioGroup>
                <C.Input 
                    type="radio"
                    id="rIncome"
                    defaultChecked
                    name="group1"
                    onChange={() => setIsExpense(isExpense)}
                />
                <C.Label htmlFor="rIncome">Income</C.Label>
                <C.Input 
                    type="radio"
                    id="rExpanses"
                    name="group1"
                    onChange={() => setIsExpense(!isExpense)}
                />
                <C.Label htmlFor="rExpenses">Expenses</C.Label>
            </C.RadioGroup>
            <C.Button onClick={handleSave}>ADD</C.Button>
        </C.Container>
        <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  )
}

export default Form