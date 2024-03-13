import { CiBookmark } from "react-icons/ci";
import PropTypes from 'prop-types'
const Blog = ({ blog, handleAddToBookmark }) => {
    const { title, cover, reading_time, author_img, author, posted_date, hashtags } = blog
    return (
        <div className='mb-20'>
            <img className='w-full rounded-lg' src={cover} alt={`cover picture of ${title}`} />

            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-6'>
                    <img className='size-16 object-cover rounded-full' src={author_img} alt="" />
                    <div>
                        <h2 className='text-2xl'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className="text-2xl"><CiBookmark /></button>
                </div>
            </div>


            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, ind) => <span key={ind} className='mr-3'><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}

export default Blog;