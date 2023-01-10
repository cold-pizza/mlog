/*
코드설명: mbti 포스트가 정렬되어 있는 컴포넌트.
수정날짜: 2022-12-25
*/

import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { State } from "../../types";
import Nav from "../nav";
import MbtiNav from "../mbtiNav";
import getToday from "../../controller/time/getToday";
import getTimeForToday from "../../controller/time/getTimeForToday";
import "./style.scss";

const MbtiPost = () => {
    const history = useHistory();
    const [post, setPost] = useState<State["PostType"]>([
        {
            postId: "",
            mbti: "",
            title: "",
            writer: "",
            days: "",
            viewCount: 0,
        },
    ]);
    useEffect(() => {
        setPost(JSON.parse(localStorage.mbtiPost));
    }, []);
    return (
        <div className="mbti-post">
            <Nav />
            <MbtiNav />
            <div className="post-list">
                {post
                    ? post.map(({ title, days, writer }) => {
                          return (
                              <div className="post" key={title}>
                                  <div
                                      onClick={() =>
                                          history.push(
                                              `/post/${writer}/${days}`
                                          )
                                      }
                                      className="post-info"
                                  >
                                      <div className="post-header">
                                          <span className="title">{title}</span>
                                      </div>
                                      <div className="time-table">
                                          <span className="day">
                                              {getTimeForToday(getToday(days))}
                                          </span>
                                          <div className="text-line"></div>
                                          <span className="coment">
                                              {writer}
                                          </span>
                                      </div>
                                  </div>
                              </div>
                          );
                      })
                    : "게시물이 없습니다."}
            </div>
        </div>
    );
};

export default MbtiPost;
