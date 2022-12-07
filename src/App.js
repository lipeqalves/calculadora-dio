import { Container, Content, Row } from './styles'
import { Input } from './components/Inpute/Index';
import { Button } from './components/Button';

export const App = () =>{
  return (
    <Container >
      <Content>
       <Input />
       <Row>
          <Button label="7" />
          <Button label="8" />
          <Button label="9" />
          <Button label="-" />
       </Row>
          <Row>
          <Button label="4" />
          <Button label="5" />
          <Button label="6" />
          <Button label="+" />
       </Row>
       <Row>
          <Button label="1" />
          <Button label="2" />
          <Button label="3" />
          <Button label="*" />
       </Row>
       <Row>
          <Button label="0" />
          <Button label="C" />
          <Button label="=" />
          <Button label="/" />
       </Row>

       
      </Content> 
    </Container>
  );
}

