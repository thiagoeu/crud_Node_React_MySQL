import GlobalStyle from './styles/global'
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import styled from 'styled-components';
import Form from './components/Form.js'
import Grid from './components/Grid.js'



const Container = styled.div`
  width: 100%;;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;


const Title = styled.h2``;


function App() {
  return (
    <>
      <Container>
        <Title>Usuarios</Title>
        <Form></Form>
        <Grid></Grid>
      </Container>
      <ToastContainer autoClose = {3000} position={toast.POSITION.BOTTOM_LEFT}/>
      <GlobalStyle />
    </>
  );
}

export default App;
