import React, { Component } from 'react'
import {Route,Switch,Redirect,HashRouter} from "react-router-dom";
import Login from "./component/login";
import Header from "./component/header";
import Modal from "./component/modal";
import Sidebar from "./component/sidebar";
import Edit from "./component/edit";
import User from "./component/user";
import Profiledit from "./component/profile_edit";
import Inbox from "./component/inbox";
import Userlist from "./component/user_list";
import Readmail from "./component/read_mail";

/*
,HashRouter
const login=()=>{
  return (
    <Login/>
  )
}
*/
let loginprops={title:"LiveChat", giris:"GİRİŞ"}
let headerprops={title:"LiveChat"}
let sidebarprops={managament:"Yönetim Paneli",user:"Kullanıcılar", inbox:"Gelen Kutusu", userlist:"Kullanıcı Listesi",profil:"Profil Ayarları"}
let userprops={user:"Kullanıcılar"}
let profile_userprops={profil:"Profil Ayarları",newmanagament:"Yeni Yönetici",name:"İsim",email:"E-mail",pass:"Parola",passconfirm:"Parola Onayla"}
let inboxprops={inbox:"Gelen Kutusu",outbox:"Giden Kutusu",folders:"Folders",createmail:"Mail Oluştur"}
let user_listprops={userlist:"Kullanıcı Listesi"}
let readmailprops={inbox:"Gelen Kutusu",message:"Gelen Mesaj",readmail:"Mail içeriği"}
 class App extends Component {

  constructor(){
    super();
    this.state=({
      db:[]
    });
  }

  render() {
    return (
     
      <HashRouter>
        <Switch>
          <Route exact path="/" render={(props) => <Login {...props} infoprops={loginprops} />}/>
          <Route exact path="/login" render={(props) => <Login {...props} infoprops={loginprops} />}/>
          <Route path="/admin">
          <Header infoprops={headerprops}/>,
          <Modal/>
          <Sidebar infoprops={sidebarprops}/>

            <Redirect from="/admin" to="/admin/index"/>
            <Route exact path="/admin/edit" component={Edit}/>
            <Route exact path="/admin/index" render={(props) => <User {...props} infoprops={userprops}  />}/>
            <Route exact path="/admin/profile_user" render={(props) => <Profiledit {...props} infoprops={profile_userprops} />}/>
            
            <Route exact path="/admin/inbox"  render={(props) => <Inbox {...props} infoprops={inboxprops} />}/>
            <Route exact path="/admin/inbox/readmail" render={(props) => <Readmail {...props} infoprops={readmailprops} />}/>

            <Route exact path="/admin/user_list" render={(props) => <Userlist {...props} infoprops={user_listprops} />}/>
          </Route>
          
          
        </Switch>
      
      </HashRouter>
     
    )
  }
}
export default App; 