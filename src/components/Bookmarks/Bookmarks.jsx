import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (

        <div className="max-w-[423px] flex flex-col gap-6">
            <div className='text-[#6047EC]  rounded-lg bg-[rgba(96,71,236,0.1)]'>
                <p className='text-2xl font-bold py-5 px-12'>Spent time on read: {readingTime} min</p>
            </div>
            <div className='bg-[rgba(17,17,17,0.05)] rounded-lg p-8'>
                <h2 className='text-2xl font-bold'>Bookmarked Blogs: {bookmarks.length} </h2>
                <div className='flex flex-col gap-4'>
                    {
                        bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                    }
                </div></div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    readingTime: PropTypes.object.isRequired
}

export default Bookmarks;