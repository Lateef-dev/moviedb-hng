import React from 'react';
import { ReactComponent as Logo } from "../../assets/TV Show.svg";
import { ReactComponent as MenuLogo } from '../../assets/Menu.svg';

const Nav = () => {
    return (
        <div className="nav">
            <div className="left">
                <Logo />
                <h2>MovieBox</h2>
            </div>
            <div className="search__box">
                <input type="search"
                    placeholder='What do you want to watch'
                />
            </div>

            <div className="right">
                <h2>Sign In</h2>
                <MenuLogo />
            </div>
        </div>
    )
}

export default Nav;