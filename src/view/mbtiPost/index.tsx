import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { PostType } from "../../types";

import Nav from "../nav";
import MbtiNav from "../mbtiNav";
import getToday from "../../controller/getToday";
import getTimeForToday from "../../controller/getTimeForToday";

import "./style.scss";
const MbtiPost = function () {
    const history = useHistory();
    const [post, setPost] = useState<PostType>([
        {
            title: "",
            writer: "",
            days: "",
        },
    ]);
    useEffect(() => {
        const mbtiPost = JSON.parse(localStorage.mbtiPost);
        setPost(mbtiPost);
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
