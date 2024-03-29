import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../images/zaveri-kart.png';
import shoppingBag from '../images/shopping-bag.png';

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
    
    staticLinks = [
        {
            name:'Jewellery Set',
            route:'/jewellery'
        },
        {
            name:'Earrings',
            route:'/earrings'
        },
        {
            name:'Contact us',
            route:'/contact'
        }
    ]

    toggleNavbar = () => {
        this.setState({
            navbarOpen: !this.state.navbarOpen,
            openSearch: false
        })
    }


    toggleSearch = () => {
        this.setState({
            navbarOpen: false,
            openSearch: true
        })
    }

    render(){
        const { navbarOpen, openSearch } = this.state
        return(
        <>    
        <div className="navbar-lg">
            <Link to='/' className="logo-container"><img className="logo-lg" src={logo} alt=''/></Link>
            <div className="link-lg">
                {
                    this.staticLinks.map(e =>  <Link to={e.route} className="link-item-lg">{e.name}</Link> )
                }
            </div>
            <div className="left-nv">
                 <Link to='/signin' className="bag-icon-btn"> 
                    <img className="shopping-logo" src={shoppingBag} alt=''/> 
                    <div className="cart-count">9+</div>
                </Link>
            </div>
            
        </div>
        <div className="navbar-md">
            <div className="menu-btn" onClick={this.toggleNavbar}>
                <i className={navbarOpen ? "fas fa-angle-left" :"fas fa-align-left" }></i>
            </div>
            <Link to='/' className="logo-container"><img className="logo-md" src={logo} alt=''/></Link>
            <div className="left-nv">
                 <Link to='/signin' className="bag-icon-btn"> 
                    <img className="shopping-logo" src={shoppingBag} alt=''/> 
                    <div className="cart-count">9+</div>
                </Link>
            </div>
            <div className={navbarOpen ? "menu-list show" : "menu-list"}>
                {
                    this.staticLinks.map(e =>  <Link to={e.route} className="menu-item">{e.name}</Link> )
                }
             </div>
        </div>
        {/* <div className="navbar">
            <Link to='/'><img className="logo" src={logo} alt=''/></Link>
            <div className="items-container">
                <div className="item">
                    <div className="search-box-container">
                        <input className="search-box" placeholder="Search" type="text"  />
                        <i className="fas fa-search"></i>
                    </div>
                </div>
                
                <Link to='/signin' className="item fa-icon"><i className="far fa-user"></i></Link>
                <Link to='/contact' className="item">Contact Us</Link>
            </div>
            <div className="mobile-nav-item">
                <Link to='/signin' className="menu-item fa-icon"><i className="far fa-user"></i></Link>
                <div className="menu-btn fa-icon" onClick={this.toggleNavbar}><i className={navbarOpen ? "fas fa-angle-left" :"fas fa-align-right" }></i></div>
            </div>
        </div> */}
        {/* <div className={navbarOpen ? "menu-list show" : "menu-list"}>
            <div className="m-s-container">
                <input className="mobile-search" placeholder="Search" type="text"  />
                <i className="fas fa-search"></i>
            </div>
            <Link to='/earing' className="menu-item">Earings</Link>
            <Link to='/necklace' className="menu-item">Necklace</Link>
            <Link to='/contact' className="menu-item">Contact Us</Link>
        </div> */}
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