import GlobalStyle from './styles/Globalstyle';
import { Outlet } from 'react-router';

function Root() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default Root;
