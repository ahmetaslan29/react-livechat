import React, { Component } from "react";
import { Link } from "react-router-dom";
import { onDeleteUser,DeleteFunctionContext } from "../js/chat.js";
import UserConsumer from "../Context";

class user_list extends Component {
    state={

        listtitle:{user:"KULLANICI",name:"İSİM",email:"EMAİL",lastonline:"SON-ONLİNE",delete:"SİL"},
        list:[  {id:"1",name:"Ahmet",surname:"Aslan",lastonline:"2019-12-18 13:50:50",delete:"2019-12-18 14:20:00",class:"color-red ",itag:"",props:""},
                {id:"2",name:"Murat",surname:"Salih",lastonline:"2018-12-18 13:40:23",delete:"2018-10-18 08:20:00",class:"color-red",itag:"",props:""},
                {id:"3",name:"Cihan",surname:"Yılmaz",lastonline:"2018-12-18 13:40:23",delete:"",class:"",itag:"fa fa-trash fa-lg pointer color-red", props:DeleteFunctionContext.bind(this)},
    ] 
    };

  render() {
    const { listtitle } = this.state;

    return (
      <UserConsumer>
        {(value) => {
          const {dispatch} = value;

          return (
            <div>
              <div className="app sidebar-mini rtl">
                <main className="app-content">
                  <div className="app-title">
                    <div>
                      <h1>
                        <i className="fa fa fa-edit"></i>
                        {this.props.infoprops.userlist}
                      </h1>
                    </div>
                    <ul className="app-breadcrumb breadcrumb">
                      <li className="breadcrumb-item">
                        <i className="fa fa-home fa-lg"></i>
                      </li>
                      <li className="breadcrumb-item">
                        <Link to="/admin/user_list">
                          {this.props.infoprops.userlist}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="tile">
                        <form>
                          <div className="row">
                            <div className="col-sm-5 mr-auto p-0 d-flex justify-content-start">
                              <span className="list-delete">
                                <label
                                  htmlFor="secenek_sil"
                                  className="mt-2 ml-2  d-inline-block">
                                  Listele
                                </label>
                              </span>
                              <select
                                className=" form-control secenek col-sm-6 mr-3 mb-2"
                                id="secenek">
                                <option value="hepsi">Hepsi</option>
                                <option value="silinmeyen">
                                  Silinmeyen Kayıtlar
                                </option>
                                <option value="silinen">
                                  Silinen Kayıtlar
                                </option>
                              </select>
                            </div>

                            <span className="col-sm-5 ml-auto p-0 d-flex justify-content-end">
                              <span className="list-delete ">
                                <span
                                  className="tarihegore_sil d-inline-block ml-2 mt-1 float-right color-red pointer"
                                  onClick={onDeleteUser.bind(this,dispatch)}>
                                  <i
                                    className="fa fa-trash fa-lg color-red mt-2 ml-1"
                                    aria-hidden="true"></i>
                                </span>
                              </span>
                              <div className="d-inline-block  col-sm-6 p-0 mr-3 mb-2">
                                <select
                                  className="form-control secenek_sil"
                                  id="secenek_sil">
                                  <option value="hepsi">Hepsi</option>
                                  <option value="son_yil">Son Yıl</option>
                                  <option value="son_ay">Son Ay</option>
                                </select>
                              </div>
                            </span>
                          </div>
                        </form>
                        <div className="tile-body">
                          <table
                            className="table table-hover table-bordered"
                            id="sampleTable">
                            <thead>
                              <tr>
                                <th>{listtitle.user}</th>
                                <th>{listtitle.name}</th>
                                <th>{listtitle.email}</th>
                                <th>{listtitle.lastonline}</th>
                                <th>{listtitle.delete}</th>
                              </tr>
                            </thead>
                            <tbody id="listele">
                              {this.state.list.map((mylist) => (
                                <tr key={mylist.id} className={mylist.class}>
                                  <td>{mylist.id}</td>
                                  <td>{mylist.name}</td>
                                  <td>{mylist.surname}</td>
                                  <td>{mylist.lastonline}</td>
                                  <td>
                                    <i
                                      className={mylist.itag}
                                      onClick={mylist.props}
                                      aria-hidden="true">
                                      {mylist.delete}
                                    </i>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
export default user_list;
