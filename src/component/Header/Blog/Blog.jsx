import PropTypes from 'prop-types';
import {FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleBookmark,handleTime}) => {
    const {id,title,author,cover,author_img,posted,reading_time,hashtags}=blog;
    return (
        <div className='mb-20 space-y-5'>
           <img className='w-full' src={cover} alt="" />
           <div className='flex justify-between items-center'>
            
            <div className='flex gap-5 justify-center items-center'>
                <div className='w-14 h-14 mt-5'>
                    <img className='rounded-full' src={author_img} alt="" />
                </div>
                <div>
                <h2>{author}</h2>
                <p>{posted}</p>
                </div>
            </div>
            <div>
                {reading_time} minit
                <button onClick={()=>handleBookmark(blog)} className='ml-4 text-2xl'><FaBookmark></FaBookmark></button>
            </div>
           </div>
           <h2 className='text-4xl font-bold'>{title}</h2>
           <p>
           {
            hashtags.map((hash, idx) =><span key={idx}><a href="">{hash}</a></span>)
           }
           </p>
           <button className='text-purple-500 font-bold underline' onClick={()=>handleTime(reading_time,id)}>Mark as read</button>
        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleBookmark:PropTypes.function,
    handleTime:PropTypes.func
}
export default Blog;