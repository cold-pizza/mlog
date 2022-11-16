import "./style.scss";
import Nav from "../nav";

const Search = function () {
    return (
        <div className="search">
            <Nav />
            <form action="#" className="search-form">
                <input type="text" placeholder="검색어를 입력하세요." />
                <button type="button">검색</button>
            </form>
            <section className="search-list"></section>
        </div>
    );
};

export default Search;
