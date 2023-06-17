import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function BestSport({ id, icon, name, number }) {
  const navigate = useNavigate();
  return (
    <Content onClick={() => navigate(`sports/${id}`)}>
      <Icon>{icon}</Icon>
      <Title>{name}</Title>
      <SubTitle>{number} 명</SubTitle>
    </Content>
  );
}

const Content = styled.div`
  text-align: center;
  margin-top: 20px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: whitesmoke;
  cursor: pointer;
  &:hover {
    transition: all 0.4s linear;
    transform: scale(1.2);
  }
  box-shadow: 0 5px 5px rgb(0, 0, 0, 0.3);
`;

const Icon = styled.p`
  margin-top: 8px;
  font-size: 30px;
`;

const Title = styled.p`
  margin-top: 10px;
  font-weight: bolder;
`;

const SubTitle = styled.p`
  margin-top: 3px;
  font-size: 10px;
`;
