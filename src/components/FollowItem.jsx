import PropTypes from "prop-types";

import { getAvatar } from "../utils/generateImages";

export function FollowItem({name, userName}){
    const avatar = getAvatar(`${name}${Math.floor(Math.random() * 1000)}@email.com`)
    return(
        <div className="flex items-center justify-between py-3">
            <div className="flex items-center">
                <img src={avatar} alt="User Avatar" className="w-10 h-10 rounded-full" />
                <div className="ml-2">
                    <p className="font-bold">{name}</p>
                    <p className="text-gray-500">{userName}</p>
                </div>
            </div>
            <button className="bg-white text-black font-bold px-4 py-2 rounded-full hover:bg-gray-300 transition duration-200">Follow</button>
        </div>
    )
}

FollowItem.propTypes = {
    name: PropTypes.string,
    userName: PropTypes.string,
}