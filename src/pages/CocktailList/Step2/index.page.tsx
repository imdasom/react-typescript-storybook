import './index.css';
import { useState } from 'react';

const CocktailListPage = () => {
  // 입력한 검색어를 상태로 관리해요
  const [searchValue, setSearchValue] = useState('');

  // UI에 필요한 데이터의 모양을 정의해요
  const list: string[] = [
    '칵테일이름',
    '칵테일이름',
    '칵테일이름',
    '칵테일이름',
    '칵테일이름',
    '칵테일이름',
    '칵테일이름',
    '칵테일이름',
    '칵테일이름',
    '칵테일이름',
    '칵테일이름',
    '칵테일이름',
    '칵테일이름',
    '칵테일이름',
    '칵테일이름',
    '칵테일이름',
    '칵테일이름',
  ];

  // 이벤트는 처음단계에서는 alert으로 간단하게 만들어 줍니다
  const handleClickSearch = () => alert('검색 클릭!');

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
            onClick={() => alert('Vodka 클릭!')}
          >
            Vodka
          </button>
          <button
            className="shortcut-button"
            onClick={() => alert('Martini 클릭!')}
          >
            Martini
          </button>
          <button
            className="shortcut-button"
            onClick={() => alert('Blue 클릭!')}
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
