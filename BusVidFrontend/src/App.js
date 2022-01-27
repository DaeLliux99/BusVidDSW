import './App.css';
import AppRouter from './routes';
import { ChakraProvider, } from '@chakra-ui/provider';
import theme from './theme/default';
function App() {
  return (
    <ChakraProvider theme = {theme}>
      <AppRouter/>
    </ChakraProvider>
  );
}

export default App;
