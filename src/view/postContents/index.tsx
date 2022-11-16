import "./style.scss";

import Nav from "../nav";

const PostContents = function () {
    return (
        <div className="post-contents">
            <Nav />
            <section className="post-contents-box">
                <div className="post-contents-info">
                    <header className="post-contents-title">포스트 제목</header>
                    <div className="post-conents-meta-info">
                        <span>작성자</span>
                        <span>2022/11/04</span>
                    </div>
                </div>
                <img className="post-contents-image" src="#" alt="#" />
                <section className="post-contents-writing">
                    <span className="writing">컨텐츠 내용</span>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ipsam soluta quisquam repellat aliquid. Omnis, in?
                        Adipisci vel quas facere voluptate similique saepe amet
                        aliquam itaque velit, sapiente debitis. Consequatur,
                        nemo?
                    </span>
                </section>
            </section>
        </div>
    );
};

export default PostContents;
