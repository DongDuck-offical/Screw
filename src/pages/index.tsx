import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import { useCallback, useState } from 'react';
import { Input } from 'antd';
import TopMenu from '@/components/TopMenu';
import { Carousel } from 'antd';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import basketball from '@/asset/img/basketball.jpg';
import soccer from '@/asset/img/soccer.jpg';
import baseball from '@/asset/img/baseball.png';

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

const Home: NextPage = () => {
  return (
    <Content>
      <TopMenu />
      <Header>
        <Slider>
          <SCarousel dots={false} autoplay autoplaySpeed={5000}>
            <SliderBox>
              <Image src={basketball} width={1300} height={300} alt={'basketball'} />
            </SliderBox>
            <SliderBox>
              <Image src={soccer} width={1300} height={300} alt={'soccer'} />
            </SliderBox>
            <SliderBox>
              <Image src={baseball} width={1300} height={300} alt={'baseball'} />
            </SliderBox>
          </SCarousel>
        </Slider>
        <MainHeader>
          <div>만들기</div>
          <SearchBox>
            <div>스크루에서 다양한 사람들과 교류하세요!</div>
            <SSearch placeholder="원하는 스포츠를 입력해보세요." onSearch={onSearch} size="large" />
          </SearchBox>
          <div>내정보</div>
        </MainHeader>
        <div>하이!!</div>
      </Header>
    </Content>
  );
};

export default Home;

const Content = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
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

const MainHeader = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;

const SearchBox = styled.div`
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SSearch = styled(Search)`
  width: 100%;
  margin-top: 15px;
`;
