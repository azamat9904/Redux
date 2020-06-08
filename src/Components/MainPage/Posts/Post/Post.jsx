import React from "react";
import s from "../Posts.module.scss";

const Post = ({post})=>{
    return (
        <div className={s.posts__item}>
            {post.text}
        </div>
    );
};
export default Post;
