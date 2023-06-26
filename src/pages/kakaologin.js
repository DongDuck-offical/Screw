import styled from 'styled-components';
import { useEffect } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import axios from 'axios';

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 100,
      marginBottom: 30,
    }}
    spin
  />
);

export default function KakaoLogin() {
  const code = new URL(document.location.toString()).searchParams.get('code');
  console.log(code);
  useEffect(() => {
    axios
      .get(`http://localhost:8081/login/oauth2/code/kakao?${code}`)
      .then((response) => {
        console.log(response.data);
      });
  }, []);

  return (
    <Container>
      <Content>
        <Spin indicator={antIcon} />
        <div>로그인중...</div>
      </Content>
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

const Content = styled.div`
  text-align: center;
`;
