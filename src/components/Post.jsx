import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Post() {
  return (
    <div 
      className='border border-2 rounded m-1 shadow-lg' 
      style={{ maxWidth: "100%", height: "auto" }}
    >
      {/* Header Section */}
      <div 
        className='post-headline m-1 d-flex flex-column flex-md-row justify-content-between align-items-center'
      >
        <Link to="/profile/:id">
          <button 
            className='text-center m-1 fw-bold border-0' 
            style={{ backgroundColor: 'transparent', fontSize: "1rem" }}>
            Tushar Sharma
          </button>
        </Link>
        <div className='d-flex justify-content-center mt-2 mt-md-0'>
          <button 
            className="border-0 mx-2" 
            style={{ backgroundColor: 'transparent', fontSize: "1.5rem" }}>
            ✏️
          </button>
          <button 
            className="border-0 mx-2" 
            style={{ backgroundColor: 'transparent', fontSize: "1.5rem" }}>
            🗑
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div 
        className='border border-2 rounded border-dark mx-2'
        style={{ height: "auto", maxHeight: "400px", overflow: "hidden" }}
      >
        <Image 
          src="https://images.unsplash.com/photo-1521575107034-e0fa0b594529?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvc3R8ZW58MHx8MHx8fDA%3D" 
          className='w-100 rounded p-2 shadow-lg' 
          style={{ height: "90%", objectFit: "cover" }} 
        />
      </div>

      {/* Text Section */}
      <div 
        className='m-2'
        style={{ fontSize: "0.9rem", lineHeight: "1.4", textAlign: "justify" }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quibusdam ipsam labore nostrum sit maiores temporibus et possimus dolorem doloribus? Cupiditate voluptatibus nihil libero dicta sint inventore, commodi aperiam aliquam!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur omnis alias ab nobis neque optio fugit dolorem! Perferendis maiores nihil hic aliquid ipsa praesentium dicta in vel, temporibus at porro.
        </p>
      </div>
    </div>
  );
}

export default Post;
