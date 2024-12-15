import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bookshelfImg from './/images/bookshelf.png';
import { ChatBox } from './ChatBox';

export function Home() {
  return (
    <>
    <br/>
      <Container fluid 
        style={{
          backgroundImage: `url(${bookshelfImg})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          minHeight: '50vh',
}}>
        <ChatBox />
      </Container>
    </>
  )
}