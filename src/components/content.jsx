import React from 'react';
import Post from './post';
import story from '../storyTest';

const Content = () => {
    return(
        <div className="content">
            {story.map(post => 
                <Post 
                    key={post.massage}
                    year={post.year} 
                    month={post.month} 
                    day={post.day}
                    massage={post.massage}
                    img={post.imgSrc}
                    imgAlt={post.imgAlt}
                />)}
        </div>
    )
}

export default Content;
