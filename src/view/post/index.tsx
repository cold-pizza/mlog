import "./style.scss";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { PostType } from "../../types";

const Post = function () {
    const history = useHistory();
    const [post, setPost] = useState<PostType>([
        {
            postId: "",
            title: "",
            writer: "",
            days: "",
            contents: "",
            viewCount: 0,
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
                ? post.map(({ title, days, postId, writer }) => {
                      return (
                          <div className="post" key={postId}>
                              <div
                                  onClick={() => history.push("/postcontents")}
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
                : "데이터를 가져오고 있습니다.."}
            {/* <div className="post">
                <div
                    onClick={() => history.push("/postcontents")}
                    className="post-info"
                >
                    <div className="post-header">
                        <span className="title">
                            {post ? post[0].title : null}
                        </span>
                        <span className="coment">세부내용..</span>
                    </div>
                    <div className="time-table">
                        <span className="day">{post[0].days}</span>
                        <div className="text-line"></div>
                        <span className="coment">댓글 0</span>
                    </div>
                </div>
                <img className="post-info-image" src="#" alt="#" />
            </div> */}
        </section>
    );
};
export default Post;
