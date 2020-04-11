/* eslint-disable */
import React, { Component } from 'react'
import { Link } from 'react-router-dom';



 class Header extends Component {
   
    render() {
        return (
<div>
<header className="app-header">         {/*index.php*/}
        <Link to="/admin/index"><span className="app-header__logo" >{this.props.infoprops.title}</span></Link>
    {/* Sidebar toggle button*/}
    <span className="app-sidebar__toggle"  data-toggle="sidebar"aria-label="Hide Sidebar"></span>
 
 {/* Navbar Right Menu*/}
    <ul className="app-nav">
        <li className="app-search">
            <input className="app-search__input" type="search" placeholder="Search"></input>
            <button className="app-search__button"><i className="fa fa-search"></i></button>
        </li>

    {/*Notification Menu */}
        <ul className="app-notification dropdown-menu dropdown-menu-right">
            <li className="app-notification__title">You have 4 new notifications.</li>
            <div className="app-notification__content">   {/*javascript:; */}
                <li><span className="app-notification__item" >
                    <span className="app-notification__icon">
                        <span className="fa-stack fa-lg">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-envelope fa-stack-1x fa-inverse"></i>
                        </span>
                    </span>
                    <div>
                        <p className="app-notification__message">Lisa sent you span mail</p>
                        <p className="app-notification__meta">2 min ago</p>
                    </div>
                    </span>
                </li>
                                                        {/*javascript:; */}
                <li><span className="app-notification__item">
                    <span className="app-notification__icon">
                        <span className="fa-stack fa-lg">
                            <i className="fa fa-circle fa-stack-2x text-danger"></i>
                            <i className="fa fa-hdd-o fa-stack-1x fa-inverse"></i>
                        </span>
                    </span>
                    <div>
                        <p className="app-notification__message">Mail server not working</p>
                        <p className="app-notification__meta">5 min ago</p>
                    </div>
                </span></li>                                 {/*javascript:; */}
                <li><span className="app-notification__item" >
                    <span className="app-notification__icon">
                        <span className="fa-stack fa-lg">
                            <i className="fa fa-circle fa-stack-2x text-success"></i>
                            <i className="fa fa-money fa-stack-1x fa-inverse"></i>
                        </span>
                    </span>
                    <div>
                        <p className="app-notification__message">Transaction complete</p>
                        <p className="app-notification__meta">2 days ago</p>
                    </div>
                    </span>
                </li>
                <div className="app-notification__content">     {/*javascript:;*/}
                    <li><span className="app-notification__item" >
                        <span className="app-notification__icon">
                            <span className="fa-stack fa-lg">
                                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                <i className="fa fa-envelope fa-stack-1x fa-inverse"></i>
                            </span>
                        </span>

                        <div>
                            <p className="app-notification__message">Lisa sent you span mail</p>
                            <p className="app-notification__meta">2 min ago</p>
                        </div>
                    </span></li>
                                                            {/*javascript:; */}
                    <li><span className="app-notification__item" >
                        <span className="app-notification__icon">
                            <span className="fa-stack fa-lg">
                                <i className="fa fa-circle fa-stack-2x text-danger"></i>
                                <i className="fa fa-hdd-o fa-stack-1x fa-inverse"></i>
                            </span>
                        </span>
                        <div>
                            <p className="app-notification__message">Mail server not working</p>
                            <p className="app-notification__meta">5 min ago</p>
                        </div>
                        </span>
                    </li>
                                                                {/*javascript:; */}
                    <li><span className="app-notification__item" >
                        <span className="app-notification__icon">
                            <span className="fa-stack fa-lg">
                                <i className="fa fa-circle fa-stack-2x text-success"></i>
                                <i className="fa fa-money fa-stack-1x fa-inverse"></i>
                            </span>
                        </span>

                        <div>
                            <p className="app-notification__message">Transaction complete</p>
                            <p className="app-notification__meta">2 days ago</p>
                        </div>
                        </span>
                    </li>
                </div>
            </div>
            <li className="app-notification__footer"><span >See all notifications.</span></li>
        </ul>


        <li className="dropdown"><span className="app-nav__item"  data-toggle="dropdown" aria-label="Open Profile Menu"><i
                className="fa fa-user fa-lg"></i></span>
            <ul className="dropdown-menu settings-menu dropdown-menu-right">
                <li><Link to="/admin/profile_user"><span className="dropdown-item" ><i className="fa fa-user fa-lg"></i> Profil</span></Link></li>
                <li><Link to="/login"><span className="dropdown-item" ><i className="fa fa-sign-out-alt fa-lg"></i>Çıkış</span></Link></li>
            </ul>
        </li>
    </ul>
</header>
</div>
        )
    }
}


export default Header;
