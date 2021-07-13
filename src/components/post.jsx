import React from 'react';

const Post = ( {year, month, day, massage, img, imgAlt}) => {
    return(
        <div className="content__post">
            <img src={img} alt={imgAlt}  height="120px"/>
            <div>
                <p>
                    <strong>
                    {day}.{month}.{year}
                    </strong>
                </p>
                <p>
                    {massage}
                </p>
            </div>
        </div>
    )
}

export default Post;