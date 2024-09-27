import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBell, faBookmark, faEllipsisH, faEnvelope, faFeatherAlt, faHashtag, faHome, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { Navitem } from './Navitem'

export function Sidebar(){
    return(
        <div className="xl:w-65 sticky top-0 px-2 h-screen">
            <FontAwesomeIcon icon={faTwitter} className='text-blue-400 text-3xl m-4' />
            <nav className='flex flex-col justify-start'>
                <Navitem icon={faHome} text="Home" />
                <Navitem icon={faHashtag} text="Explore" />
                <Navitem icon={faBell} text="Notifications" />
                <Navitem icon={faEnvelope} text="Messages" />
                <Navitem icon={faBookmark} text="Bookmarks" />
                <Navitem icon={faUserFriends} text="Communities" />
                <Navitem icon={faTwitter} text="Premium" />
                <Navitem icon={faUser} text="Profile" />
                <Navitem icon={faEllipsisH} text="More" />
            </nav>
            <button className='bg-twitter-blue text-white rounded-full font-bold xl:px-4 xl:py-3 mt-4 xl:w-36 cursor-pointer hover:bg-blue-500 transition duration-200'>
                <FontAwesomeIcon icon={faFeatherAlt} className='text-white inline xl:hidden' />
                <span className='hidden xl:inline'>Twitter</span>
            </button>
        </div>
    )
}