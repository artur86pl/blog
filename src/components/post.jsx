import React from 'react';

const Post = ( {year, month, day, massage, img, imgAlt}) => {

    const dateFormat = date => date < 10 ? date = '0' + date : date;

    return(
        <article>
            <div className="content__post">
                <img src={img} alt={imgAlt}  height="120px"/>
                <div>
                    <header>
                        <p>
                            {dateFormat(day)}.{dateFormat(month)}.{year}
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