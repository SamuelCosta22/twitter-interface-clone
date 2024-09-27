import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Navitem({icon, text}){
    return(
        <div className='inline-flex items-center p-3 rounded-full cursor-pointer hover:bg-gray-600 transition duration-200'>
            <FontAwesomeIcon icon={icon} className='text-lg mr-4' />
            <span className='text-base hidden xl:inline'>{text}</span>
        </div>
    )
}

Navitem.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string
}