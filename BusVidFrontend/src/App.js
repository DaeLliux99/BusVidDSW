import './App.css';
import AppRouter from './routes';
import { ChakraProvider     } from '@chakra-ui/provider';
function App() {
  return (
    <ChakraProvider>
      <AppRouter/>
    </ChakraProvider>
  );
}

export default App;
