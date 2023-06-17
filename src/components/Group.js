import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import sample from 'assets/img/sample.jpg';

export default function Group({ id, title, region, like, sport }) {
  const navigate = useNavigate();
  return (
    <Content onClick={() => navigate(`group/${id}`)}>
      <Img src={sample}></Img>
      <Title>{title}</Title>
      <SecondTitle>
        <SubTitle>{region}</SubTitle>
        <SubTitle>{sport}</SubTitle>
        <SubTitle2>❤️ {like}명</SubTitle2>
      </SecondTitle>
    </Content>
  );
}

const Content = styled.div`
  margin-top: 40px;
  width: 200px;
  height: 230px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  height: 155px;
`;

const Title = styled.p`
  margin-left: 5px;
  margin-top: 10px;
  font-size: 18px;
  font-weight: bolder;
`;

const SecondTitle = styled.div`
  width: 85%;
  margin-left: 5px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

const SubTitle = styled.p`
  padding: 0px 8px;
  font-weight: bolder;
  text-align: center;
  height: 20px;
  line-height: 20px;
  border-radius: 10px;
  font-size: 12px;
  background-color: aliceblue;
`;

const SubTitle2 = styled.p`
  padding: 0px 8px;
  font-weight: bolder;
  text-align: center;
  height: 20px;
  line-height: 20px;
  border-radius: 10px;
  font-size: 12px;
  background-color: #fce4ec;
`;
