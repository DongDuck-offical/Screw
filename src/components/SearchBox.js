import { useCallback, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import { Sports } from 'config/constant';

const { Search } = Input;

export default function SearChBox() {
  const [inputValue, setInputValue] = useState('');

  const SearchSport = Sports.filter((a) => a.name.includes(inputValue));

  const onChange = useCallback(
    (e) => {
      setInputValue(e.target.value);
    },
    [inputValue],
  );

  console.log(inputValue);

  return (
    <>
      <SearchBox>
        <Title>스크루에서 다양한 사람들과 교류하세요!</Title>
        <SSearch
          value={inputValue}
          onChange={onChange}
          size="large"
          placeholder="원하는 스포츠를 입력해보세요."
        />
        {inputValue && (
          <HideBox>
            {SearchSport.length > 0 ? (
              SearchSport.map((a) => (
                <HideItem
                  key={a.id}
                  onClick={() => {
                    setInputValue(a.name);
                  }}
                >
                  {a.name}
                </HideItem>
              ))
            ) : (
              <NoItem>아직 개설이 안된 스포츠에요!... 😶</NoItem>
            )}
          </HideBox>
        )}
      </SearchBox>
    </>
  );
}

const Title = styled.p`
  font-weight: bold;
  font-size: 25px;
`;

const SearchBox = styled.div`
  position: relative;
  margin-top: 40px;
  width: 40%;
  min-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SSearch = styled(Search)`
  width: 100%;
  height: 200px;
  margin-top: 40px;
`;

const HideBox = styled.div`
  top: 110px;
  left: 0px;
  width: 94%;
  position: absolute;
  display: block;
  padding: 10px 0;
  background-color: white;
  box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: none;
  border-radius: 0 0 16px 16px;
  list-style-type: none;
`;

const HideItem = styled.li`
  padding: 15px 16px;
  border-bottom: 1px solid whitesmoke;
  cursor: pointer;
  &:hover {
    background-color: whitesmoke;
  }
  &.selected {
    background-color: lightgray;
  }
`;

const NoItem = styled.li`
  font-size: 12px;
  color: red;
  padding: 10px 16px;
`;
