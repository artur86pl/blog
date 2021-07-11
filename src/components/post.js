import React from 'react';
import foto from './foto01.jpg'

function Post() {
    return(
        <div className="content__post">
            <img src={foto} alt="zdjęcie" height='150px'/>
            <p>
                <strong>11.07.2014: </strong>
                Duis at mauris tempor, semper nunc in, semper dui. Sed est arcu, interdum vel nisl vel, tempus lobortis ipsum. Nullam condimentum lacinia ex, ut efficitur orci cursus sed. Vivamus bibendum risus ac nisl interdum, egestas congue nunc vehicula. Sed vitae dolor efficitur, tempor nisi ut, varius nisi. Ut est tellus, efficitur et hendrerit sit amet, tempor sollicitudin lectus. Fusce iaculis lacinia iaculis.
            </p>
        </div>
    )
}

export default Post;