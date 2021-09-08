import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('yusuf');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();     // menghilangkan refresh pada event
        const blog = { title, body, author };
        setIsPending(true);
        
        fetch("http://localhost:5000/blogs", {
          method: "POST",   // mengirim data ke server
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blog),
        }).then(() => {
            console.log('new blog added!');
            setIsPending(false);
            history.push('/');
        })
    }

    return (
      <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
          <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
          <label>Blog body:</label>
          <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
          <label>Blog author:</label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="yusuf">Yusuf</option>
            <option value="rizal">Rizal</option>
          </select>
          { !isPending && <button>Add Blog</button> }
          { isPending && <button disabled>Adding Blog...</button> }
        </form>
      </div>
    );
}

export default Create;