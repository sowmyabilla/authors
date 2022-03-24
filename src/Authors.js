import React, { useState } from 'react';
import { Data } from './Data';

const Author = ({ posts }) => {
    // const [posts, setPosts] = useState(Data);

    return (
        <div className='authors'>
                {
                    posts.map((Data) => (
                        <div className='authormain'>
                                <div className='author1'>
                                    <img src={Data.image} alt={Data.Name} className='person-img'></img>
                                </div>
                                <div className='author2'>
                                    <div className='name'>{Data.Name}</div><br />
                                    <div className='desig'>{Data.designation}</div><br />
                                    <div className='articlesnumb'>{Data.articlesnumb}</div>
                                </div>
                        </div>
                    ))
                }
        </div>
    );
}

export default Author;
