import Mainpage from './components/Mainpage';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div>
        <Mainpage />
      </div>
    </MantineProvider>
  );
}

export default App;
