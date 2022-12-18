import { useState } from "react";
import { useHistory } from "react-router";
import "./style.scss";
import Nav from "../nav";

const Search = function () {
    const history = useHistory();
    const post = JSON.parse(localStorage.post);
    const [list, setList] = useState(post);
    const [search, setSearch] = useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <div className="search">
            <Nav />
            <form action="#" className="search-form">
                <input
                    onChange={(e) => onChange(e)}
                    name="search"
                    value={search}
                    type="text"
                    placeholder="검색어를 입력하세요."
                />
            </form>
            <section className="search-list">
                {list
                    .filter((val: any) => {
                        if (search === "") {
                            return val;
                        } else if (val.title.includes(search)) {
                            return val;
                        }
                    })
                    .map((list: any) => {
                        return (
                            <div className="post" key={list.title}>
                                <div
                                    onClick={() =>
                                        history.push(
                                            `/post/${list.writer}/${list.days}`
                                        )
                                    }
                                    className="post-info"
                                >
                                    <div className="post-header">
                                        <span className="title">
                                            {list.title}
                                        </span>
                                    </div>
                                    <div className="time-table">
                                        <span className="day">{list.days}</span>
                                        <div className="text-line"></div>
                                        <span className="coment">
                                            {list.writer}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </section>
        </div>
    );
};

export default Search;
