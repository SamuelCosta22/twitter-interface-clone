import { faChartBar, faComment, faEllipsisH, faHeart, faRetweet, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types'
import { useState } from 'react';

export function Tweet({tweet}){
    const [comments, setComments] = useState(0);
    const [retweets, setRetweets] = useState(0);
    const [likes, setLikes] = useState(0);

    function handleAction(action){
        switch (action) {
            case 'comment':
                setComments(comments + 1)
                break;
            case 'retweet':
                setRetweets(retweets + 1)
                break;
            default:
                setLikes(likes + 1)
                break;
        }
    }

    return(
        <div className='border-b border-gray-800 p-4 hover:bg-gray-800 transition duration-200'>
            <div className='flex space-x-3'>
                <img src={tweet.avatar} alt="User Avatar" className='rounded-full w-10 h-10' />
                <div className='flex-1 space-y-2'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <span className='font-bold'>{tweet.name}</span>
                            <span className='text-gray-500 text-sm ml-2'>@{tweet.userName}</span>
                            <span className='text-gray-500 text-sm ml-2'>{tweet.time}</span>
                        </div>
                        <FontAwesomeIcon icon={faEllipsisH} className='text-gray-500' />
                    </div>
                    <p className='mt-2'>{tweet.content}</p>
                    {tweet.image && <img src={tweet.image} alt='User Image Content' className="mt-3 rounded-2xl max-w-full h-auto" />}
                    <div className='flex justify-between text-gray-500'>
                        <div className='flex items-center cursor-pointer hover:text-blue-400' onClick={() => handleAction('comment')}>
                            <FontAwesomeIcon icon={faComment} />
                            <span className='ml-2'>{comments}</span>
                        </div>
                        <div className='flex items-center cursor-pointer hover:text-green-400' onClick={() => handleAction('retweet')}>
                            <FontAwesomeIcon icon={faRetweet} />
                            <span className='ml-2'>{retweets}</span>
                        </div>
                        <div className='flex items-center cursor-pointer hover:text-red-400' onClick={() => handleAction('like')}>
                            <FontAwesomeIcon icon={faHeart} />
                            <span className='ml-2'>{likes}</span>
                        </div>
                        <div className='flex items-center cursor-pointer hover:text-blue-400'>
                            <FontAwesomeIcon icon={faChartBar} />
                        </div>
                        <div className='flex items-center cursor-pointer hover:text-blue-400'>
                            <FontAwesomeIcon icon={faUpload} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


// Definindo PropTypes para a estrutura do tweet
Tweet.propTypes = {
    tweet: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        userName: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        image: PropTypes.string, // Pode ser null ou uma string, então não é 'isRequired'
        likes: PropTypes.number.isRequired,
        retweets: PropTypes.number.isRequired,
        comments: PropTypes.number.isRequired,
    }).isRequired,
};