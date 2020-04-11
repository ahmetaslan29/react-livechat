import React, { Component } from 'react'
import {DeleteFunctionContext} from './js/chat.js';

const UserContext=React.createContext();

const reducer=(action,state)=>{
  
    switch (action.type) {
          case "DELETE_USER":
              const Delete=DeleteFunctionContext();
            return{Delete}
  
        default: 
            break;
    }
  }
export class UserProvider extends Component {
    constructor(){
        super();

        this.state={
        

         dispatch:action=>{
            this.setState(state=>reducer(action,state))
        }
        };
      }
    render() {
        return (
        <UserContext.Provider value={this.state}> 
            {this.props.children}
        </UserContext.Provider>
        
        )
    }
}
const UserConsumer=UserContext.Consumer;
export default UserConsumer;