import Button from 'react-bootstrap/Button';


function Post() {
  return (
    <div className='border border-2 rounded m-1 w-100 shadow-lg' style={{height:"630px"}}>
      <div className='post-headline border m-2'>
        <p>Sample text</p>
       </div> 
       <div className='border mx-2 ' style={{height:"400px"}}>
             <h1>img</h1>        
       </div>
       <div className='border m-2 h-25'>
           <h1>text</h1>
       </div>
    </div>
  );
}

export default Post;