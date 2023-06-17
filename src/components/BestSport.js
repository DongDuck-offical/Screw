import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function BestSport({ id, icon, name, number }) {
  const navigate = useNavigate();
  return (
    <Content onClick={() => navigate(`sports/${id}`)}>
      <Icon>{icon}</Icon>
      <Title>{name}</Title>
      <SubTitle>{number}+ 개의 모임</SubTitle>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 135px;
  height: 135px;
  border-radius: 50%;
  background-color: #fafafa;
  cursor: pointer;
  &:hover {
    transition: all 0.4s linear;
    transform: scale(1.05);
  }
  box-shadow: 0 5px 5px rgb(0, 0, 0, 0.3);
`;

const Icon = styled.p`
  font-size: 30px;
`;

const Title = styled.p`
  margin-top: 10px;
  font-weight: bolder;
`;

const SubTitle = styled.p`
  padding: 0 5px;
  margin-top: 5px;
  font-size: 10px;
  font-weight: bolder;
  text-align: center;
  height: 20px;
  line-height: 20px;
  border-radius: 10px;
  font-size: 12px;
  background-color: #f8bbd0;
`;
