import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, [id]);

  if (!postInfo) return "";

  return (
    <div className='post-page'>
      <h1>{postInfo.title}</h1>
      <time className='post-time'>
        {formatISO9075(new Date(postInfo.createdAt))}
      </time>
      <div className='post-author'>by @{postInfo.author.username}</div>
      <div className='post-image'>
        <img src={`http://localhost:4000/${postInfo.cover}`} alt='cover' />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
    </div>
  );
}
