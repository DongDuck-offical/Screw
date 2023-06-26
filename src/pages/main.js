import TopMenu from 'components/TopMenu';
import styled from 'styled-components';
import { useCallback, useState } from 'react';
import { Carousel } from 'antd';
import SearChBox from 'components/SearchBox';
import BestSport from 'components/BestSport';
import Group from 'components/Group';
import basketball from 'assets/img/basketball.jpg';
import soccer from 'assets/img/soccer.jpg';
import baseball from 'assets/img/baseball.png';
import github from 'assets/img/github.png';
import notion from 'assets/img/notion.png';

export default function Main() {
  let now = new Date();

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
        <BestTitle> {now.getMonth() + 1}월 인기 스포츠 </BestTitle>
        <SportBox>
          <BestSport id="3" icon="🏀" name="농구" number="110" />
          <BestSport id="2" icon="⚽" name="풋살" number="90" />
          <BestSport id="16" icon="🏃‍♀️" name="러닝" number="200" />
          <BestSport id="6" icon="🥎" name="테니스" number="110" />
        </SportBox>
        <SportBox>
          <BestSport id="5" icon="🎳" name="볼링" number="170" />
          <BestSport id="14" icon="🏊‍♀️" name="수영" number="80" />
          <BestSport id="11" icon="🏓" name="탁구" number="80" />
          <BestSport id="4" icon="⚾" name="야구" number="70" />
        </SportBox>
      </BestSportBox>
      <RecommendBox>
        <RecommendTitle>OO님께 추천드리는 모임</RecommendTitle>
        <Group id="1" title="붐테니스" region="서초구" like="30" sport="댄스" />
        <Group id="2" />
        <Group id="3" />
        <Group id="4" />
        <Group id="5" />
        <Group id="6" />
        <Group id="7" />
        <Group id="8" />
      </RecommendBox>
      <RecommendBox>
        <RecommendTitle>따끈따끈, 신규모임을 만나보세요! 🙋🏻‍♀️</RecommendTitle>
        <Group id="1" title="붐테니스" region="서초구" like="30" sport="댄스" />
        <Group id="2" />
        <Group id="3" />
        <Group id="4" />
        <Group id="5" />
        <Group id="6" />
        <Group id="7" />
        <Group id="8" />
      </RecommendBox>
      <Footer>
        <FooterTitle>Screw</FooterTitle>
        <FooterTitle2>©2023 DongDuck.ALL RIGHTS RESERVED</FooterTitle2>
        <FooterLink>
          <a target="blank" href="https://github.com/DongDuck-offical">
            <SImg2 src={github} alt={'github'} />
          </a>
          <a
            target="blank"
            href="https://www.notion.so/f4ed22a4e12a4c8f81e87aa7fd806bc4?pvs=4l"
          >
            <SImg2 src={notion} alt={'notion'} />
          </a>
        </FooterLink>
      </Footer>
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
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-width: 600px;
  background-color: aliceblue;
`;

const BestTitle = styled.p`
  width: 100%;
  font-family: 'Gasoek One', sans-serif;
  font-size: 50px;
  text-align: center;
  color: #90caf9;
  text-shadow: 3px 3px 5px grey;
`;

const SportBox = styled.div`
  width: 50%;
  min-width: 420px;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-between;
`;

const RecommendBox = styled.div`
  width: 900px;
  min-width: 420px;
  margin-top: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-between;
`;

const RecommendTitle = styled.p`
  width: 100%;
  font-weight: 550;
  font-size: 25px;
`;

const Footer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
  color: white;
  width: 100%;
  background-color: #424242;
`;

const FooterTitle = styled.p`
  width: 100%;
  font-weight: bolder;
  font-size: 20px;
  text-align: center;
`;

const FooterTitle2 = styled.p`
  margin-top: 6px;
  width: 100%;
  font-size: 11px;
  text-align: center;
`;

const FooterLink = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  width: 80px;
  font-size: 12px;
  text-align: center;
`;

const SImg2 = styled.img`
  width: 30px;
  height: 30px;
`;
