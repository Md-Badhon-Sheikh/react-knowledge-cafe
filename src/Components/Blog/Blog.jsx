import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";


const Blog = ({blog, handleBookmark, handleMarkAsRead}) => {
    const {title, cover, author, author_img, reading_time,posted_date,hashtags} = blog;
    // console.log(blog);
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex gap-3'>
                    <img className='w-14' src={author_img} alt=""  />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className=''>
                    <span>{reading_time} min read</span>
                    <button className='ml-2 text-2xl' onClick={()=> handleBookmark (blog)}><FaRegBookmark /></button>
                    
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, index) =><span key={index}><a href="">#{hash}</a></span>)
                }
            </p>
            <button 
            onClick={()=>handleMarkAsRead (reading_time)}
             className='text-purple-600 font-bold underline'
             >Mark As Red</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.function,
    handleMarkAsRead: PropTypes.function,
}
export default Blog;