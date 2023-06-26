import styled from 'styled-components';
import { useEffect } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import axios from 'axios';

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 100,
    }}
    spin
  />
);

export default function KakaoLogin() {
  const code = new URL(document.location.toString()).searchParams.get('code');
  useEffect(() => {
    console.log(code);
  }, [code]);

  return (
    <Container>
      <Spin indicator={antIcon} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
