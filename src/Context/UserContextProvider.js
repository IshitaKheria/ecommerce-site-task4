import React, { createContext , useState } from 'react';
import data from '../Backend/db.js';
import UserContext from './UserContext';


const UserContextProvider = (props) => {
    const [authorisation,setAuthorisation] = useState(false);
    const [user, setUser] = useState({});
    const userData = data.users;
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
  
    const toggleAuth = () =>{
        setAuthorisation(!authorisation)
    }

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
            console.log(user)
            setUser(user)
            setAuthorisation(true)
        }
        e.preventDefault();
        console.log(authorisation)
    }
    const logout = e => {
        e.preventDefault();
        setUser({});
      };

    return(
        <UserContext.Provider value={{authorisation, user, login , logout , handleEmail , handlePassword}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;