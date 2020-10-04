import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../images/zaveri-kart-white.png';
import search from '../images/search-icon.png';
import mobileSearch from '../images/search.png';
import ham from '../images/ham.png';

type State = {
    navbarOpen:boolean,
    openSearch:boolean
}

class Navbar extends React.Component <any, State> {
    constructor(props:any){
        super(props);
        this.state = {
            navbarOpen: false,
            openSearch:false
        };
        // this.toggleNavbar = this.toggleNavbar.bind(this);
    }
    
    toggleNavbar = () => {
        this.setState({
            navbarOpen: !this.state.navbarOpen,
            openSearch: false
        });
        // this.state.navbarOpen ?  
        console.log("yes");
    }

    onBlurHandler = () => {
        this.setState({
            navbarOpen: false,
            openSearch: false
        })
    }

    toggleSearch = () => {
        this.setState({
            navbarOpen: false,
            openSearch: !this.state.openSearch
        })
    }

    render(){
        return(
        <>    
        <div className="navbar">
            <div className="menu-btn" onClick={this.toggleNavbar}><img src={ham} className="menu-icon" alt=''/></div>

            <Link to='/'><img className="logo" src={logo} alt=''/></Link>

            <div className="search-box-container">
                <input className="search-box" placeholder="Search" type="text"  />
                <img className="icon" src={search} alt='' />
            </div>

            <div className="mobile-search-btn" onClick={this.toggleSearch}><img className="menu-icon" src={mobileSearch} alt='' /></div>

            <div className="items-container">
                <Link to='/signin' className="item">Login</Link>
                <Link to='/contact' className="item contact-us">Contact Us</Link>
            </div>
        </div>
        {this.state.navbarOpen && (
            <div className="menuList" ref="menu-list" tabIndex={0} onBlur={this.onBlurHandler}>
                <Link to='/signin' className="menu-item">Login</Link>
                <Link to='/contact' className="menu-item">Contact Us</Link>
            </div>
        )}
        {this.state.openSearch && (
            <div className="mobileSearch" ref="mobile-search" tabIndex={0} onBlur={this.onBlurHandler} >
                <input className="search-box" placeholder="Search" type="text"  />
            </div>
        )}
        </>
        )
    }
}

// const Navbar1 = () => (
//     <div className="navbar">
//         <div className="menu-btn" onClick={toggleNavbar}><img src={ham} className="menu-icon" alt=''/></div>

//         <Link to='/'><img className="logo" src={logo} alt=''/></Link>

//         <div className="search-box-container">
//             <input className="search-box" placeholder="Search" type="text"  />
//             <img className="icon" src={search} alt='' />
//         </div>

//         <div className="mobile-search"><img className="menu-icon" src={mobileSearch} alt='' /></div>

//         <div className="items-container" onClick={toggleNavbar}>
//             <Link to='/signin' className="item">Login</Link>
//             <Link to='/contact' className="item contact-us">Contact Us</Link>
//         </div>

//         {navbarOpen && 
//         (<div>
//             <div>Item1</div>
//             <div>Item2</div>
//             <div>Item3</div>
//         </div>)}
//     </div>
// )

export default Navbar;