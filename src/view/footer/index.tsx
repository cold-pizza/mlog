/*
코드설명: 사이트 소개 및 부가적인 항목 컴포넌트.
수정날짜: 2023-01-01
*/

import "./style.scss";
const Footer = () => {
    const footerList1 = ["회사소개", "이용약관", "운영정책"];
    const footerList2 = ["개인정보처리방침", "청소년보호정책", "고객센터"];
    return (
        <footer className="footer">
            <h2 className="footer-titles">mlog</h2>
            <div className="container">
                <section className="list-items">
                    <ul className="footer-list">
                        {footerList1.map((list, i) => {
                            return (
                                <li
                                    onClick={() => alert("준비중입니다.")}
                                    key={i}
                                >
                                    {list}
                                </li>
                            );
                        })}
                    </ul>
                    <ul className="footer-list">
                        {footerList2.map((list, i) => {
                            return (
                                <li
                                    onClick={() => alert("준비중입니다.")}
                                    key={i}
                                >
                                    {list}
                                </li>
                            );
                        })}
                    </ul>
                </section>
                <p
                    onClick={() => {
                        alert("준비중입니다.");
                    }}
                    className="scroll-up"
                >
                    맨위로
                </p>
            </div>
            <footer className="trade-mark">(C) mlog.™</footer>
        </footer>
    );
};

export default Footer;
