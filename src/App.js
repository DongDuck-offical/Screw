import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/Globalstyle';
import { Outlet } from 'react-router';
import { theme } from 'styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
