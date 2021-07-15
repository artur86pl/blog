import React from 'react';

const Post = ( {year, month, day, massage, img, imgAlt}) => {
    return(
        <article>
            <div className="content__post">
                <img src={img} alt={imgAlt}  height="120px"/>
                <div>
                    <header>
                        <p>
                            {day}.{month}.{year}
                        </p>
                    </header>
                    <p>
                        {massage}
                    </p>
                </div>
            </div>
        </article>
    )
}

export default Post;