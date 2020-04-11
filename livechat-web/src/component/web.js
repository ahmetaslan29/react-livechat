import React, { Component } from 'react'
 class Web extends Component {
    
    render() {
        const{title}=this.props;
        return (
            <div>
                <div id="icon-popup">
                    <i className="fas fa-comment-dots" id="check"></i>
                </div>
                <div id="livechat">
                    <div id="chathead">
                        <i className="far fa-comments fa-2x" id="etiket"></i>
                        <i className="fa fa-window-minimize tooltipitem" id="minimizeicon" aria-hidden="true" data-placement="bottom" title="Minimize icon"></i>
                        <br/>
                        <label id="yazibaslik">{title}</label><br/><br/>
                        <label id="altbaslik">Bu menüden bize ulasarak istediginiz konuda yardım alabilirsiniz.</label>
                        <div className="row select_admin" style={{display:'none'}}>
                        </div>
                    </div>

                    <div id="chatbody" className="mesaj_kutusu">
                        <div id="giris">
                            <div className="inputetiket">
                                <h3 className="text-center font-bold py-2 girisyazi"><i className="fas fa-phone-alt girisetiket telefonetiket"></i>
                                    <strong>Bizimle İletisime Gec</strong>
                                </h3>
                             </div>
                        <div className="md-form" id="divisim">
                            <i className="fa fa-user prefix girisetiket" id="isimetiket"></i>
                            <input type="text" id="isim" className="form-control idname" name="isim" placeholder="Isim"></input>
                            
                        </div>
                        <div className="md-form" id="diveposta">
                            <i className="fa fa-envelope prefix girisetiket" id="epsotaetiket"></i>
                            <input type="text" id="eposta" className="form-control idmail" name="eposta" placeholder="Email"></input>
                            
                        </div>

                        <div className="uyari" style={{display:'none'}}>
                            <h5><strong>Eksik Alan Bırakmayınız!</strong></h5>
                        </div>

                        <div className="text-center py-4" id="detay">
                        <button  id='" . $row["Id"] . "' name='" . $row["Username"] . "' className='btn btn-outline-primary start_chat' >Start Chat<i className="fas fa-sign-in-alt ml-1"></i></button>
                        </div>
                        </div>
                    </div>
                    

                    <div id="footer">
                        <p>LiveChat by MLK Yazilim </p>
                    </div>

                </div>
            </div>
        )
    }
}
export default Web;
