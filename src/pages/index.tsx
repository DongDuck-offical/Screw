import type { NextPage } from 'next';
import styled from 'styled-components';
import Header from '@/layout/Header';

const Home: NextPage = () => {
  return (
    <Content>
      <Header />
      <div>하이!!</div>
    </Content>
  );
};

export default Home;

const Content = styled.div``;
