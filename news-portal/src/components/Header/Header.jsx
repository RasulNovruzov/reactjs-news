import React from 'react';
import h from '../Header/Header.module.scss';

const Header = () => {
    return (
        <div className={h.parent}>
            <div className={h.earth}></div>
            <section className={h.newswrapper}>
                <div className={h.news}>
                    <div><span>HACKER NEWS</span></div>
                    <div><span>NovDev</span></div>
                </div>
            </section>
        </div >
    )
}

export default Header;