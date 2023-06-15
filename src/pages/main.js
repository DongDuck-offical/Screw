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
