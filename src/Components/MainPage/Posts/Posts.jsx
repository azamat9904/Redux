import React from 'react';
import s from './Posts.module.scss';
import Post from './Post/Post';

const Posts = ({posts})=>{
    const postsComponent = posts.map(post =><Post post = {post} />)
    return (
        <div className={s.posts}>
            {postsComponent}
        </div>
    );
};
export default Posts;
