import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  async function createNewPost(e) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);

    e.preventDefault();
    console.log(files);
    const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: data,
    });

    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <form className='app-new-post' onSubmit={createNewPost}>
      <input
        className='app-new-post_input'
        type='title'
        placeholder={"Title"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className='app-new-post_input'
        type='summry'
        placeholder={"Summary"}
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />

      <input
        className='app-new-post_input'
        type='file'
        onChange={(e) => setFiles(e.target.files)}
      />
      <ReactQuill
        value={content}
        modules={modules}
        formats={formats}
        onChange={(newValue) => setContent(newValue)}
      />
      <button
        style={{
          widtgh: "100%",
          marginTop: "4px",
          fontSize: "14px",
          fontWeight: "bold",
          marginTop: "5px",
          background: "purple",
          color: "#fff",
          padding: "12px",
          border: 0,
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Create post
      </button>
    </form>
  );
}
