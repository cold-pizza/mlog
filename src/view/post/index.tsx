import "./style.scss";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { PostType } from "../../types";

const Post = function () {
    const history = useHistory();
    const [post, setPost] = useState<PostType>([
        {
            title: "",
            writer: "",
            days: "",
        },
    ]);
    useEffect(() => {
        const localPost = localStorage.getItem("post");
        if (typeof localPost === "string") {
            const post = JSON.parse(localPost);
            setPost(post);
        }
    }, []);

    return (
        <section className="post-list">
            {post
                ? post.map(({ title, days, writer }) => {
                      return (
                          <div className="post" key={title}>
                              <div
                                  onClick={() =>
                                      history.push(`/post/${writer}/${days}`)
                                  }
                                  className="post-info"
                              >
                                  <div className="post-header">
                                      <span className="title">{title}</span>
                                      {/* <span className="coment">세부내용..</span> */}
                                  </div>
                                  <div className="time-table">
                                      <span className="day">{days}</span>
                                      <div className="text-line"></div>
                                      <span className="coment">{writer}</span>
                                  </div>
                              </div>
                              {/* <img
                                  className="post-info-image"
                                  src="#"
                                  alt="#"
                              /> */}
                          </div>
                      );
                  })
                : "게시물이 없습니다."}
        </section>
    );
};
export default Post;
