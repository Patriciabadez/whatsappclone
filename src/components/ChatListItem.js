import React from 'react'
import './ChatListItem.css'

export default () => {
    return(
    <div className="chatListItem">
        <img className="chatListItem--avatar" src="https://www.w3schools.com/w3images/avatar2.png" alt="" />
        <div className="chatListItem--lines">
            <div className="chatListItem--line">
                <div className="chatListItem--name">Patricia</div>
                <div className="chatListItem--date">18:00</div>
            </div>
            <div className="chatListItem--line">
                <div className="chatListItem--lastMsg">
                    <p>Olá, tudo certo?</p>
                </div>
            </div>
        </div>
    </div>
    );
}
