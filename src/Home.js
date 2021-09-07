import { useState, useEffect } from 'react';
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/blogs")
        .then((response) => {
          // console.log(response);
          // lakukan pengecekan terhadap response ok
          if (!response.ok) {
            throw Error('could not fetch the data for the resource!');
          }
          return response.json();
        })
        .then((data) => {
          // console.log(data);
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          setIsPending(false);
          setError(err.message);
        })
    }, 3000);
  }, []);

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> } 
      { blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
    </div>
  );
};

export default Home;
