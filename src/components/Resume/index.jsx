import React from 'react';
import ResumeItem from '../ResumeItem';
import * as fa from "react-icons/fa"
import * as C from "./styles"


const Resume = ({ income, expense, total }) => {
  return (
    <C.Container>
        <ResumeItem title="Income" Icon={fa.FaRegArrowAltCircleUp} value={income}/>
        <ResumeItem title="Expenses" Icon={fa.FaRegArrowAltCircleDown} value={expense}/>
        <ResumeItem title="Total" Icon={fa.FaDollarSign} value={total} />
    </C.Container>
  );
};

export default Resume;