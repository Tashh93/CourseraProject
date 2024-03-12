import React from 'react';
import {link} from 'react-router-dom';
import bannerImg from '../images/banner';

const Header = () => {
    return (
        <header className='header'>
            <section>
                <div className='banner'>
                    <h2>
                        Little Lemon
                    </h2>
                    <h3>
                        Chicago
                    </h3>
                    <p>
                        We are a family owned mediterranean restaurant, focused on traditional recipes served witha modern twist.
                    </p>
                    <link to="/booking"><button aria-label='On Click'>Reserve Table</button></link>
                </div>

                <div className='banner-img'>
                    <img src={bannerImg} alt='banner-img' />
                </div>
            </section>
        </header>
    )
}

export default Header;
