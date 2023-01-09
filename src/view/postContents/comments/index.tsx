/*
코드설명: 댓글을 보여주는 컴포넌트.
수정날짜: 2023-01-07
*/

import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Iprops } from "../../../types";
import getComments from "../../../controller/getComments";
import "./style.scss";
const Comments: React.FC<Iprops["CommentsProps"]> = (props) => {
    const profileImgList = useSelector(
        (state: { imageSlice: string[] }) => state.imageSlice
    );
    const [reply, setReply] = useState([
        {
            replyId: "",
            title: "",
            writer: "",
            reply: "",
            days: "",
            images: "",
        },
    ]);

    useEffect(() => {
        if (props.replyId !== null) {
            getComments(props.replyId, setReply);
        }
    }, []);
    return (
        <ul className="comment-list">
            {reply
                ? reply.map(({ writer, reply, days, images }, i) => {
                      return (
                          <li className="comment-items" key={i}>
                              <section className="users-info">
                                  <img
                                      className="users-img"
                                      src={profileImgList[Number(images)]}
                                      alt={profileImgList[Number(images)]}
                                  />
                                  <div className="users-user">
                                      <p>{writer}</p>
                                      <p>{days}</p>
                                  </div>
                              </section>
                              <span className="comments">{reply}</span>
                          </li>
                      );
                  })
                : null}
        </ul>
    );
};

export default Comments;
