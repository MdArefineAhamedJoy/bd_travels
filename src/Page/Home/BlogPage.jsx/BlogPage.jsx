import React, { useEffect, useState } from "react";
import BlogSideBar from "./BlogSideBar";
import BlogCart from "./BlogCart";



const BlogPage = () => {
  const [blogs , setBlogs]  = useState([])
  useEffect(()=> {
    fetch("blog.json")
    .then(response => response.json())
    .then(data =>  setBlogs(data))
  },[])
  console.log(blogs)
  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center w-9/12 mx-auto mt-20">
        <h1 className=" text-4xl pb-6">Latest News</h1>
        <p className="text-lg leading-8 backdrop-blur-xl font-thin ">
          Lorem ipsum dolor sit amet mattis. Proin gravida nibh vel velit auctor
          aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
          consequat ipsum, nec sagittis sem nibh id elit.
        </p>
      </div>
      <main className="flex my-20">
        <section className="w-9/12">
          {
            blogs.map(blog => <BlogCart blog={blog} key={blog.id}></BlogCart>)
          }
        </section>
        <section className="w-3/12">
          <BlogSideBar></BlogSideBar>
        </section>
      </main>
    </div>
  );
};

export default BlogPage;
