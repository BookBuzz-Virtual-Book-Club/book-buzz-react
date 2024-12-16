import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bookshelfImg from './/images/bookshelf.png';
import { ChatBox } from './ChatBox';
import { IndexBookClubs } from './IndexBookClubs';

export function Home() {
  return (
    <>
    <br/>
      <Container fluid 
        style={{
          backgroundImage: `url(${bookshelfImg})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          minHeight: '35vh',
}}>
        <ChatBox />
      </Container>
      <br/>
      <Container fluid>
        <IndexBookClubs />
      </Container>
    </>
  )
}