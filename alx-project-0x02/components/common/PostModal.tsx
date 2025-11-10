import React from 'react'

const PostModal = () => {
  return (
    <div>
        {/* implementing a form that accepts user input for title and content */}
        <form>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" required />
            <br />
            <label htmlFor="content">Content:</label>
            <textarea id="content" name="content" required></textarea>
            <br />
            <button type="submit">Submit Post</button>
        </form>
    </div>
  )
}

export default PostModal;
