import TopMenu from 'components/TopMenu';
import styled from 'styled-components';
import { useCallback, useState } from 'react';
import { Carousel } from 'antd';

import basketball from 'assets/img/basketball.jpg';
import soccer from 'assets/img/soccer.jpg';
import baseball from 'assets/img/baseball.png';
import SearChBox from 'components/SearchBox';

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
      <SearChBox />
      <BestSportBox>
        <BestTitle>⭐ Top 10 Sports ⭐</BestTitle>
        <SportBox>
          <SportKind>
            <div>⚽</div>
            <div>축구</div>
          </SportKind>
          <SportKind>축구</SportKind>
          <SportKind>축구</SportKind>
          <SportKind>축구</SportKind>
          <SportKind>축구</SportKind>
          <SportKind>축구</SportKind>
          <SportKind>축구</SportKind>
          <SportKind>축구</SportKind>
          <SportKind>축구</SportKind>
          <SportKind>축구</SportKind>
        </SportBox>
      </BestSportBox>
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

const BestSportBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

const BestTitle = styled.p`
  width: 100%;
  font-family: 'Anton', sans-serif;
  font-size: 40px;
  font-weight: bolder;
  text-align: center;
`;

const SportBox = styled.div`
  width: 80%;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-between;
`;

const SportKind = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 250px;
  border: 1px solid red;
`;
