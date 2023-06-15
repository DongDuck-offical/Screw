import { Link } from 'react-router-dom';
import Logo from 'assets/img/logo.jpg';
import { styled } from 'styled-components';

export default function topmenu() {
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
  background-color: #f9f5f6;
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
  width: 150px;
  display: flex;
  justify-content: center;
  justify-content: space-between;
`;
