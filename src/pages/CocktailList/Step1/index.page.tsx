import './index.css';

const CocktailListPage = () => {
  return (
    <div>
      <div className="list-search-container">
        <div className="search-value-container">
          <input
            className="search-input"
            placeholder="음료의 이름을 입력하세요"
          />
          <button className="search-button">search</button>
        </div>
        <div className="shortcut-button-container">
          <label>빠른검색</label>
          <button className="shortcut-button">Vodka</button>
          <button className="shortcut-button">Martini</button>
          <button className="shortcut-button">Blue</button>
        </div>
      </div>
      <div className="list-search-result">
        <ul className="list-container">
          <li>
            <u className="drink-item">칵테일이름</u>
          </li>
          <li>
            <u className="drink-item">칵테일이름</u>
          </li>
          <li>
            <u className="drink-item">칵테일이름</u>
          </li>
          <li>
            <u className="drink-item">칵테일이름</u>
          </li>
          <li>
            <u className="drink-item">칵테일이름</u>
          </li>
          <li>
            <u className="drink-item">칵테일이름</u>
          </li>
          <li>
            <u className="drink-item">칵테일이름</u>
          </li>
          <li>
            <u className="drink-item">칵테일이름</u>
          </li>
          <li>
            <u className="drink-item">칵테일이름</u>
          </li>
          <li>
            <u className="drink-item">칵테일이름</u>
          </li>
          <li>
            <u className="drink-item">칵테일이름</u>
          </li>
          <li>
            <u className="drink-item">칵테일이름</u>
          </li>
          <li>
            <u className="drink-item">칵테일이름</u>
          </li>
          <li>
            <u className="drink-item">칵테일이름</u>
          </li>
          <li>
            <u className="drink-item">칵테일이름</u>
          </li>
          <li>
            <u className="drink-item">칵테일이름</u>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CocktailListPage;
