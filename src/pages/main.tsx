import TopMenu from 'components/TopMenu';
import styled from 'styled-components';
import { useCallback, useState } from 'react';
import { Input } from 'antd';
import { Carousel } from 'antd';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import basketball from 'assets/img/basketball.jpg';
import soccer from 'assets/img/soccer.jpg';
import baseball from 'assets/img/baseball.png';

const { Search } = Input;
const onSearch = (value: string) => console.log(value);

export default function Main() {
  return (
    <Content>
      <TopMenu />
      <Header>
        <Slider>
          <SCarousel dots={false} autoplay autoplaySpeed={5000}>
            <SliderBox>
              <SImg src={basketball} alt={'basketball'} />
            </SliderBox>
            <SliderBox>
              <SImg src={soccer} alt={'soccer'} />
            </SliderBox>
            <SliderBox>
              <SImg src={baseball} alt={'baseball'} />
            </SliderBox>
          </SCarousel>
        </Slider>
      </Header>
      <SearchBox>
        <div>스크루에서 다양한 사람들과 교류하세요!</div>
        <SSearch
          placeholder="원하는 스포츠를 입력해보세요."
          onSearch={onSearch}
          size="large"
        />
      </SearchBox>
    </Content>
  );
}

const Content = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
`;

const Slider = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  font-size: 50px;
  background-color: black;
`;

const SliderBox = styled.div`
  display: flex;
  justify-content: center;
`;

const SCarousel = styled(Carousel)`
  width: 1300px;
  height: 300px;
`;

const SImg = styled.img`
  width: 1300px;
  height: 300px;
`;

const SearchBox = styled.div`
  margin-top: 20px;
  width: 40%;
  height: 100px;
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SSearch = styled(Search)`
  width: 100%;
  margin-top: 15px;
`;
