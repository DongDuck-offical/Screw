import { Link } from 'react-router-dom';
import Logo from 'assets/img/logo.jpg';
import { styled } from 'styled-components';

export default function Topmenu() {
  return (
    <Content>
      <SLink to={'/'}>
        <SImg src={Logo} alt={'logo'} />
        SCrew
      </SLink>
      <UserBox>
        <div>로그인</div>
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
