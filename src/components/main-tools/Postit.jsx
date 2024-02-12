import "../../styles/components-style/_postIt.scss";

function PostIt({
  title,
  description,
}) {
  return (
    <div className='postIt-bloc'>
      <div className='postIt-title-bloc'>
        <p className='postIt-title'>title :</p>
        <p className=''>{title}</p>
      </div>
      <div className='postIt-description-bloc'>
        <p className='postIt-description'>Task description :</p>
        <br />
        <p className=''>{description}</p>
      </div>
    </div>
  );
}

export default PostIt;
