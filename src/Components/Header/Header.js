import React from 'react';
import "./Header.css";
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>
            <img
                className="header_logo"
                src="https://cdn2.iconfinder.com/data/icons/social-media-icons-23/800/tinder-128.png"
                alt="tinder logo"
            />
            <IconButton>
                <ForumIcon fontSize="large" className="header_icon" />
            </IconButton>

        </div>
    )
}

export default Header
