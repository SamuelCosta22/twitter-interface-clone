import { useRef } from "react";
import PropTypes from "prop-types";

import { faCalendarAlt, faChartBar, faFilm, faImage, faMapMarkedAlt, faSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function TwitterForm({onTweet}){
    const textAreaRef = useRef()

    function handleSubmit(){
        if(textAreaRef.current.value){
            onTweet(textAreaRef.current.value)
            textAreaRef.current.value = ''
        }
    }

    return(
        <div className="border-b border-gray-800 p-4">
            <textarea placeholder="What's happening?" className="w-full text-white bg-transparent text-lg resize-none outline-none" ref={textAreaRef} />
            <div className="flex justify-between items-center mt-4">
                <div className="flex gap-3">
                    <FontAwesomeIcon icon={faImage} className="text-blue-400 cursor-pointer" />
                    <FontAwesomeIcon icon={faFilm} className="text-blue-400 cursor-pointer" />
                    <FontAwesomeIcon icon={faChartBar} className="text-blue-400 cursor-pointer" />
                    <FontAwesomeIcon icon={faSmile} className="text-blue-400 cursor-pointer" />
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-400 cursor-pointer" />
                    <FontAwesomeIcon icon={faMapMarkedAlt} className="text-blue-400 cursor-pointer" />
                </div>
                <button className="bg-twitter-blue text-white font-bold px-4 py-2 rounded-full hover:bg-blue-500 transition duration-200" onClick={handleSubmit}>Tweet</button>
            </div>
        </div>
    )
}

TwitterForm.propTypes = {
    onTweet: PropTypes.func
}