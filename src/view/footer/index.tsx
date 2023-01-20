/*
코드설명: 사이트 소개 및 부가적인 항목 컴포넌트.
수정날짜: 2023-01-01
*/

import { useHistory } from "react-router";
import "./style.scss";
const Footer = () => {
    const history = useHistory();
    const footerList1 = [
        { item: "회사소개", url: "/intro-company" },
        { item: "이용약관", url: "/terms-conditions" },
        { item: "운영정책", url: "/operation-policy" },
    ];
    const footerList2 = [
        { item: "개인정보처리방침", url: "/personal-information" },
        { item: "청소년보호정책", url: "/teenager-protect" },
        { item: "고객센터", url: "/customer-center" },
    ];
    return (
        <footer className="footer">
            <h2 className="footer-titles">mlog</h2>
            <div className="container">
                <section className="list-items">
                    <ul className="footer-list">
                        {footerList1.map(({ item, url }, i) => {
                            return (
                                <li onClick={() => history.push(url)} key={i}>
                                    {item}
                                </li>
                            );
                        })}
                    </ul>
                    <ul className="footer-list">
                        {footerList2.map(({ item, url }, i) => {
                            return (
                                <li onClick={() => history.push(url)} key={i}>
                                    {item}
                                </li>
                            );
                        })}
                    </ul>
                </section>
                <p
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="scroll-up"
                >
                    맨위로
                </p>
            </div>
            <footer className="trade-mark">mlog™</footer>
        </footer>
    );
};

export default Footer;
