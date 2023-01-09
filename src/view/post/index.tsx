/*
코드설명: 통합게시글 컴포넌트.
수정날짜: 2022-12-22
*/

import "./style.scss";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { State } from "../../types";
import getTimeForToday from "../../controller/time/getTimeForToday";
import getToday from "../../controller/time/getToday";
import updateViewCount from "../../controller/update/updateViewCount";

const Post = function () {
    const history = useHistory();
    const [post, setPost] = useState<State["PostType"]>([
        {
            postId: "",
            title: "",
            writer: "",
            days: "",
            viewCount: 0,
        },
    ]);

    useEffect(() => {
        const post = JSON.parse(localStorage.post);
        setPost(post);
    }, []);

    return (
        <section className="post-list">
            {post
                ? post.map(({ title, days, writer, viewCount }) => {
                      return (
                          <div className="post" key={title}>
                              <div
                                  onClick={() => {
                                      updateViewCount(days, writer, viewCount);
                                      history.push(`/post/${writer}/${days}`);
                                  }}
                                  className="post-info"
                              >
                                  <span className="title">{title}</span>
                                  <div className="time-table">
                                      <span className="day">
                                          {getTimeForToday(getToday(days))}
                                      </span>
                                      <div className="text-line"></div>
                                      <span className="writer">{writer}</span>
                                  </div>
                              </div>
                          </div>
                      );
                  })
                : "게시물이 없습니다."}
        </section>
    );
};
export default Post;
