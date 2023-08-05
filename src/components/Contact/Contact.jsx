import React from 'react'
import "./contact.css"

export default function Contact({users}) {
    return (
        <li className="contactPerson">
            <div className="contactPersonContainer">
                <img src={users.profilePicture} alt="" className="contactImg" />
                <span className="contactOnline"></span>
                <span className="contactName">{users.username}</span>
            </div>
        </li>
    )
}
