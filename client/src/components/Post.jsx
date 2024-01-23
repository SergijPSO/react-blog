import React from "react";

export default function Post() {
  return (
    <div className='post'>
      <div className='image'>
        <img className='post-image' src='../assets/images/cat1.jpg' alt='cat' />
      </div>
      <div className='post-texts'>
        <h2 className='post-title'>Post title</h2>
        <p className='info'>
          <a className='author'> David Pazko</a>
          <time>23-01-06 16:45</time>
        </p>
        <p className='summary'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
          incidunt commodi tenetur sed odio minus dicta aliquid laborum eos ab
          beatae quo! Optio esse impedit vero assumenda earum doloribus quod?
        </p>
      </div>
    </div>
  );
}
