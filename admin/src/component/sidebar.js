import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import $ from 'jquery';




export default class sidebar extends Component {
  
    componentDidMount(){
        $('[data-toggle="sidebar"]').click(function(event) {
            event.preventDefault();
            $('.app').toggleClass('sidenav-toggled');
        }); 
    }
render() {
    return (
<div>
    <div className="app-sidebar__overlay" data-toggle="sidebar"></div>
        <aside className="app-sidebar">
            <div className="app-sidebar__user">    
                <img className="app-sidebar__user-avatar" src={require('../img/1.png')} alt="User"></img>
                <div>
                    <p className="app-sidebar__user-name">Username</p>
    <p className="app-sidebar__user-designation">{this.props.infoprops.managament}</p>
                </div>
            </div>
        <ul className="app-menu">
            <li>                      
                 <Link to="/admin/index"> 
                    <span className="app-menu__item" href="/">
                        <i className="app-menu__icon fa fa-user"></i>
    <span className="app-menu__label">{this.props.infoprops.user}</span>
                    </span>
                </Link>
            </li>
            <li>
                        
                <Link to="/admin/inbox"> 
                    <span className="app-menu__item" href="/" >
                        <i className="app-menu__icon fa fa-inbox"></i>
                        <span className="app-menu__label">{this.props.infoprops.inbox}</span>
                    </span>
                </Link>
            </li>
            <li>                     {/*  <?php active("user-list.php"); ?>" href="user-list.php"*/}
                <Link to="/admin/user_list">
                    <span className="app-menu__item" href="/">
                        <i className="app-menu__icon fa  fa-edit"></i>
                        <span className="app-menu__label">{this.props.infoprops.userlist}</span>
                    </span>
                </Link>
            </li>
            <li>                     {/*  <?php active("profile-edit.php"); ?>" href="profile-edit.php"*/}
                <Link to="/admin/profile_user">
                    <span className="app-menu__item" href="/">
                        <i className="app-menu__icon fa  fa-cog"></i>
                        <span className="app-menu__label">{this.props.infoprops.profil}</span>
                    </span>
                </Link>
            </li>

        </ul>

    </aside>
</div>
        )
    }
}
