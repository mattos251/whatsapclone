import React from "react";
import "./ChatListItem.css";

export default () => {
    return(
        <div className="chatListItem">
            <img className="chatListItem--avatar" src="https://www.whodesigners.com.br/pixit/assets/img/avatars/avatar7_big.png" placeholder="avatar" />

            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">hflkashflsahflkashflkashflksahflkshflsahflk</div> 
                    <div className="chatListItem--date">4:20</div> 
                </div>

                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>vai se lascar?</p>
                    </div> 
                </div>
            </div>
        </div>
    );
}