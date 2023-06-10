import { styled } from 'styled-components';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

const onSearch = (value: string) => console.log(value);

export default function Header() {
  return (
    <Content>
      <div>만들기</div>
      <SearchBox>
        <div>스크루에서 다양한 사람들과 교류하세요!</div>
        <SSearch
          placeholder="원하는 스포츠를 입력해보세요."
          onSearch={onSearch}
          size="large"
        />
      </SearchBox>

      <div>내정보</div>
    </Content>
  );
}

const Content = styled.div`
  width: 100vw;
  height: 100px;
  border: 1px solid red;
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
  border: 1px solid red;
`;

const SSearch = styled(Search)`
  width: 100%;
  margin-top: 15px;
`;
