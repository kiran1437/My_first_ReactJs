import React from 'react';
import faker from 'faker';
const CommentDetails = (props) => {
    return(
    <div className = "comment">
        <a href = "/" className = "avatar">
            <img alt='avatar' src = {props.image} />
        </a>
        <div className = "content">
            <a href ="/" className="author">
            {props.author}
            </a>
            <div className="metadata">
                <span className="date">{props.timeAgo}</span>
            </div>
            <div className="text">Nice blog post</div>
        </div>
     </div>
    );
};

export default CommentDetails