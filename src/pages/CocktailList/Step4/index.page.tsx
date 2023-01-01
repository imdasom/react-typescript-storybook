import './index.css';
import { useEffect, useState } from 'react';
import CocktailDB from './db/CocktailDB';

const CocktailListPage = () => {
  const [searchValue, setSearchValue] = useState('');

  // 데이터가 변경될때 렌더링을 하라고 리액트에게 알려주려면 state로 관리해야 합니다
  const [list, setList] = useState<string[]>([]);

  const selectByName = (name: string) => {
    return CocktailDB.selectByName(name).map((item) => item.strDrink);
  };

  // 검색버튼을 클릭하면 검색어를 넣어서 조회한 후 list를 바꿔줍니다
  const handleClickSearch = () => {
    // 진짜 데이터를 렌더링해주기 위해서
    // 칵테일DBd의 selectByName을 이용합니다
    setList(selectByName(searchValue));
  };

  // 빠른검색은 searchValue에 검색어가 입력되고
  // 바로 조회가 되어요
  const handleClickShortcut = (value: string) => {
    setList(selectByName(value));
    setSearchValue(value);
  };

  // 페이지 로딩이 완료된 후
  // 초기화를 해주고 싶을 때에는 useEffect를 사용합니다
  useEffect(() => {
    handleClickSearch();
  }, []);

  return (
    <div>
      <div className="list-search-container">
        <div className="search-value-container">
          <input
            className="search-input"
            placeholder="음료의 이름을 입력하세요"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <button className="search-button" onClick={handleClickSearch}>
            search
          </button>
        </div>
        <div className="shortcut-button-container">
          <label>빠른검색</label>
          <button
            className="shortcut-button"
            onClick={() => handleClickShortcut('Vodka')}
          >
            Vodka
          </button>
          <button
            className="shortcut-button"
            onClick={() => handleClickShortcut('Martini')}
          >
            Martini
          </button>
          <button
            className="shortcut-button"
            onClick={() => handleClickShortcut('Blue')}
          >
            Blue
          </button>
        </div>
      </div>
      <div className="list-search-result">
        <ul className="list-container">
          {list.map((item, i) => (
            <li key={i}>
              <u className="drink-item">{item}</u>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CocktailListPage;
