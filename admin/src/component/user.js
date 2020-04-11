import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {onDeleteUser} from  '../js/chat.js';
import UserConsumer from '../Context';



   
       

 class User extends Component {
     state={
         isVisible:false,
         list:[ {id:"1",name:"Ahmet",email:"ahmet@hotmail.com",online:"on float-right"},
                {id:"2",name:"Mehmet",email:"mehmet@hotmail.com",online:"of float-right"},
                ],
            changename:"",
            changemail:""
     }
     changeinfo=(name,email)=>{
        this.setState(
            {changename:name ,
            changemail:email,
            isVisible:true
        })
     }
     
    render() {

        const{isVisible,changename,changemail}=this.state;
         return( <UserConsumer>{
            
            value=>
            {
            const {dispatch}=value;
           
            return (
                
                <div>
                <div className="app sidebar-mini rtl">
                    
                    <main className="app-content">
                        <div className="app-title">
                            <div>
                                <h1><i className="fas fa-user"></i> {this.props.infoprops.user}</h1>
                            </div>
                            <ul className="app-breadcrumb breadcrumb">
                                <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
                                <li className="breadcrumb-item"><Link to="/admin/index/">{this.props.infoprops.user}</Link></li>
                            </ul>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-sm-5">
                                <p className="mb-2 btn btn-block" id="kullanici">{this.props.infoprops.user}</p>
                                <div className="tile p-0 scrollbar scrollbar-primary">
                                    <div className="tile-body">
                                        <ul className="nav nav-pills flex-column mail-nav" id="detay">
                                            <li className="nav-item">
                                                
                                                {this.state.list.map(mylist=>(
                                                    <span className="iletisim" key={mylist.id} onClick={()=>this.changeinfo(mylist.name,mylist.email)}><i className="fa fa-user"></i>&nbsp;{mylist.name}
                                                        <span className={mylist.online}></span>
                                                    </span>
                                                    ))
                                                }
                                            </li>                           
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-sm-7 mesaj_kutusu">
                                <div className="tile" id="mesajbaslik">

                    {
                        isVisible ? <div>
                        <h3 className="float-right">
                                            <span  className="color-red pointer" onClick={onDeleteUser.bind(this,dispatch)}>
                                                <i className="fa fa-trash etiketsil" ></i>
                                            </span>
                                            <span  className="yenile pointer etiket-a">
                                                <i className="fas fa-sync-alt"></i>
                                            </span>
                                        </h3>
                                        <span className="tile-title">
                                            <i className="fa fa-comments mr-1"></i>{changename}
                                        </span>
                                
                                        <div className="messanger">
                                            <div className="messages scrollbar scrollbar-info"  >
                                            </div>
                                            <div className="sender">
                                                <input type="text" id='mesaj" + k_id + "' placeholder="Send Message" ></input>
                                                <button className="btn btn-primary chat_send"  value="  k_id ">
                                                    <i className="fa fa-lg fa-fw fa-paper-plane"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    :<img src={require('../img/a.png')} id="mesajresim" alt="resim"></img>
                    }
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div>
                                    <p className="mb-2 btn btn-block" id="profil">Profil</p>
                                </div>
                                <div className="tile">
                                    <div className="row" id="profildiv">
                                        <div className="col-7">
                                        <img alt="User Pic"
                                            src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
                                            id="profile-image1" className="img-circle img-responsive"
                                        />
                                        </div>
                                        <div className="col-5 pro">
                                            <hr/>
                                            <h6>İSİM</h6>
                                            <p>{changename}</p>
                                            <h6>E-POSTA</h6>
                                            <p>{changemail}</p>
                                            <hr/>
                                            <h6>SON-ONLİNE</h6>
                                            <p>php son online</p>
                                            <hr/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                </div>
            )
        }
    }
</UserConsumer>)
 


}
}
export default User;