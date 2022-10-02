import React from 'react'
import * as C from './styles'
import * as Fa from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
  return (
    <C.Tr>
        <C.Td>{item.desc}</C.Td>
        <C.Td>R$ {item.amount}</C.Td>
        <C.Td alignCenter>
            {item.expense ? (
                <Fa.FaRegArrowAltCircleDown color='red' />
            ) : (
                <Fa.FaRegArrowAltCircleUp color='green'/>
            )}
        </C.Td>
        <C.Td>
            <Fa.FaTrash onClick={() => onDelete(item.id)} />
        </C.Td>
    </C.Tr>
  )
}

export default GridItem