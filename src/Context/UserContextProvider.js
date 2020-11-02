import React, { createContext , useState } from 'react';
import data from '../Backend/db.js';
import UserContext from './UserContext';
import { Redirect } from 'react-router';

const UserContextProvider = (props) => {
    const [authorisation,setAuthorisation] = useState(false);//not of use and will be removed 
    const [user, setUser] = useState({});
    const userData = data.users;
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [cart, setCart] = useState({change: "false" , open: false,message : "",add: 0 ,color:"primary", productId: []});
    localStorage.setItem("Ids", JSON.stringify({ "ids":[null]}));
    const handleEmail=(e)=>{
        setEmail(e.target.value);
     }
    const handlePassword=(e)=>{
        setPassword(e.target.value);
     }
    
     const login=(e)=>{

        //console.log('Log In Worked')
        const user=userData.filter(a=>a.email==email && a.password==password)
        //console.log(user)
           
        if(user.length==0) //none of the entries matches
        {
            alert('Not a authorised user.. Please register!');
            setEmail(' ')
            setPassword(' ')
        }
        if (user.length===1) //user must be authenticated
        {
            //console.log(user)
            setUser(user)
            setAuthorisation(true)//to be removed
            localStorage.setItem("isAuthenticated", true);
            alert('Logged In Successfully!');
            <Redirect to='/' />
        }
        e.preventDefault();
        console.log(authorisation)
    }
    const logout = e => {
        e.preventDefault();
        setUser({});
        localStorage.setItem("isAuthenticated", false);
        localStorage.setItem("Ids", JSON.stringify({ "ids":[null]}));
        <Redirect to='/' />
      };
      
    return(
        <UserContext.Provider value={{authorisation, user, cart , setCart, login , logout , handleEmail , handlePassword }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;