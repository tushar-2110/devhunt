import { useState } from "react";
import { Button } from "react-bootstrap";

const CreatePost = ({ modal, setModal }) => {
  const [userPost, setUserPost] = useState({
    user: "",
    image: "",
    text: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(userPost); // Log the user post data to the console

    // Toggle modal after handling submission
    setModal(!modal);
  };

  return (
    <div
      className="p-3 h-75 border border-primary rounded position-fixed z-5 top-50 start-50 translate-middle bg-white shadow-lg"
      style={{ width: "700px", fontFamily: "Arial" }}
    >
      <h2 className="mb-3 text-center text-white bg-success rounded">
        Create a New Post
      </h2>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column align-items-center h-75"
      >
        {/* Image URL Input */}
        <label
          className="ps-2 border border-2 border-dark w-75 rounded mt-2"
          style={{ height: "45px" }}
        >
          ImageUrl:
          <input
            type="text"
            className="ms-5 p-2 w-75 border-0"
            placeholder="Enter your image URL here"
            value={userPost.image}
            onChange={(e) =>
              setUserPost({ ...userPost, image: e.target.value })
            }
          />
        </label>

        {/* Post Text Input */}
        <label
          className="border border-2 border-dark w-75 rounded mt-2"
          style={{ height: "300px", position: "relative" }}
        >
          <textarea
            className="w-100 border-0 h-100 p-2"
            style={{ resize: "none", textAlign: "left", verticalAlign: "top" }}
            placeholder="Enter your post text here"
            value={userPost.text}
            onChange={(e) =>
              setUserPost({ ...userPost, text: e.target.value })
            }
          />
        </label>

        <Button type="submit" variant="outline-success"  className="mt-2">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreatePost;
