import { Link } from 'react-router-dom';
import Logo from 'assets/img/logo.jpg';
import { styled } from 'styled-components';

export default function Topmenu() {
  const REST_API_KEY = 'c4957dae238f06a38023a0dc6d8a3470';
  const REDIRECT_URI = 'http://localhost:3000/kakaologin';
  return (
    <Content>
      <SLink to={'/'}>
        <SImg src={Logo} alt={'logo'} />
        SCrew
      </SLink>
      <UserBox>
        <a
          href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`}
        >
          로그인
        </a>
        <div>회원가입</div>
      </UserBox>
    </Content>
  );
}

const Content = styled.div`
  position: sticky;
  top: 0px;
  z-index: 100;
  background-color: white;
  box-shadow: 0 3px 3px rgb(0, 0, 0, 0.2);
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
`;

const SLink = styled(Link)`
  width: 80px;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  color: black;
`;

const SImg = styled.img`
  width: 27px;
  height: 27px;
`;

const UserBox = styled.div`
  width: 135px;
  font-size: 15px;
  display: flex;
  color: black;
  font-weight: bolder;
  justify-content: center;
  justify-content: space-between;
`;
