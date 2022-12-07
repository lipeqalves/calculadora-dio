import { Container, Content, Row } from './styles'
import { Input } from './components/Inpute/Index';
import { Button } from './components/Button';

import { useState } from 'react';

export const App = () =>{

   const [currentNumber, setCurrentNumber] = useState('0');
   const [firstNumber, setFirstNumber] = useState('0');
   const [operation, setOperation] = useState('')

   const handleClear = () =>{
      setCurrentNumber('0');
      setFirstNumber('0');
      setOperation("");
   }
   const handleAddNumber = (num) =>{
      setCurrentNumber(prev => `${prev === '0' ? "":prev}${num}`);
   }

   const handleSumNumber = () =>{

      if(firstNumber === '0'){
         setFirstNumber(String(currentNumber));
         setCurrentNumber('0');
         setOperation("+");
      }else{
         const sum = Number(firstNumber) + Number(currentNumber);
         setCurrentNumber(String(sum))
         setOperation("");
      }
   }

   const handleMinusNumber = () =>{

      if(firstNumber === '0'){
         setFirstNumber(String(currentNumber));
         setCurrentNumber('0');
         setOperation("-");
      }else{
         const minus = Number(firstNumber) - Number(currentNumber);
         setCurrentNumber(String(minus))
         setOperation("");
      }
   }

   const handleMultiplicationNumber = () =>{

      if(firstNumber === '0'){
         setFirstNumber(String(currentNumber));
         setCurrentNumber('0');
         setOperation("*");
      }else{
         const mult = Number(firstNumber) * Number(currentNumber);
         setCurrentNumber(String(mult))
         setOperation("");
      }
   }
   
   const handleEquals = () =>{
      if(firstNumber !== '0' && operation !== "" && currentNumber !== "0"){
         switch(operation){
            case '+':
               handleSumNumber();
               break;
            case '-':
               handleMinusNumber();
               break;
            case '*':
               handleMultiplicationNumber();
               break;
            default:
               break;
         }
      }
   }

  return (
    <Container >
      <Content>
       <Input value={currentNumber}/>
       <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={handleMinusNumber} />
       </Row>
          <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={handleSumNumber} />
       </Row>
       <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="*" onClick={handleMultiplicationNumber} />
       </Row>
       <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="C" onClick={handleClear} />
          <Button label="=" onClick={handleEquals} />
          <Button label="/" onClick={() => handleAddNumber('')} />
       </Row>

       
      </Content> 
    </Container>
  );
}

