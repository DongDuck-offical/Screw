import Link from 'next/link';
import Image from 'next/image';
import { styled } from 'styled-components';
import logo from '@/asset/img/logo.jpg';

export default function TopMenu() {
  return (
    <Content>
      <Link href="/">
        <SLink>
          <Image src={logo} width={25} height={25} alt={'logo'} />
          SCrew
        </SLink>
      </Link>
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

const SLink = styled.div`
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  color: black;
`;

const UserBox = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
  justify-content: space-between;
`;
