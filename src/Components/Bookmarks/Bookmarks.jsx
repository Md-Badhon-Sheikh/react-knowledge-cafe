import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {

    return (
        <div className="md:w-1/3 bg-gray-300 pt-4">
            <div className='bg-green-200 rounded-xl p-4 mx-2 text-center'>
                <h3 className="text-3xl">Reading Time: {readingTime} min</h3>
            </div>
            <h2 className="text-3xl text-center mt-2">Bookmarks Blog: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, index) => <Bookmark key={index} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.function,
  readingTime: PropTypes.function,
}
export default Bookmarks;