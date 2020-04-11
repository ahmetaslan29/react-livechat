import React, { Component } from 'react'
import { Link } from 'react-router-dom';



class Login extends Component {
   
    state={
        password:"login-box"
    }
    OnClickEvent=(e)=>{
        this.setState({
            password:"login-box flipped"
        })
     }
     OnClickEvent2=(e)=>{

        this.setState({
            password:"login-box"
        })
     }
    render() {
        return (
<div>

 
    <section className="material-half-bg">
        <div className="cover"></div>
    </section>
    <section className="login-content">
        <div className="logo">
            <h1>{this.props.infoprops.title}</h1>
        </div>
        <div className={[this.state.password]}>
            <form className="login-form" method="POST" action="inc/login-redirect.php">
                <h3 className="login-head"><i className="fa fa-lg fa-fw fa-user"></i>{this.props.infoprops.giris}</h3>
                <div className="form-group">
                    <label className="control-label">KULLANICI ADI</label>
                    <input className="form-control" type="text" placeholder="Email" name="eposta" autoFocus></input>
                </div>
                <div className="form-group">
                    <label className="control-label">PAROLA</label>
                    <input className="form-control" type="password" placeholder="Password" name="parola"></input>
                </div>
                <div className="form-group">
                    <div className="utility">
                        <div className="animated-checkbox">
                            <label>
                                
                            <input type="checkbox"/><span className="label-text">Hatırla</span>
                            </label>
                        </div>
                        <p className="semibold-text mb-2"><span className="passwordforget" onClick={this.OnClickEvent} >Parolamı Unuttum</span></p>
                    </div>
                </div>
                <div className="form-group btn-container">
                <Link to="/admin/index"> <button className="btn btn-primary btn-block" ><i className="fa fa-sign-in-alt fa-lg fa-fw"></i>GİRİŞ</button></Link>
                </div>
            </form>
            <form className="forget-form" >
                <h3 className="login-head"><i className="fa fa-lg fa-fw fa-lock"></i>Forgot Password ?</h3>
                <div className="form-group">
                    <label className="control-label">EMAIL</label>
                    <input className="form-control" type="text" placeholder="Email"></input>
                </div>
                <div className="form-group btn-container">
                    <span className="btn btn-primary btn-block"><i className="fa fa-unlock fa-lg fa-fw"></i>RESET</span>
                </div>
                <div className="form-group mt-3">
                    <p className="semibold-text mb-0"><span className="passwordforget" onClick={this.OnClickEvent2}><i className="fa fa-angle-left fa-fw"></i> Back to Login</span></p>
                </div>
            </form>
        </div>
    </section>
  
</div>
        )
    }
}
export default Login;