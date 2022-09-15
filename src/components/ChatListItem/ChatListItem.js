import React from "react";
import "./ChatListItem.css";

export default ({onClick, active, data}) => {
    return(
        <div 
            className={`chatListItem ${active? 'active': '' }`}
            onClick={onClick}
        >
            <img className="chatListItem--avatar" src={data.img} placeholder="avatar" />

            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">{data.name}</div> 
                    <div className="chatListItem--date">{data.datas}</div> 
                </div>

                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>{data.msg}</p>
                    </div> 
                </div>
            </div>
        </div>
    );
}