import PropTypes from 'prop-types'
import Bookmark from "./Bookmark/Bookmark";


const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:1/3 bg-gray-300 ml-4 rounded-xl">
            <h3 className='text-3xl font-bold'>Reading time: {readingTime}</h3>
            <h2 className='text-3xl text-center '>Bookmarked blogs: {bookmarks.length} </h2>
            {
           bookmarks.map((bookmark)=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.PropTypes={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}
export default Bookmarks;