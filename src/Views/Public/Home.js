import React , {useContext} from 'react';
import Navbar from '../../Components/Navbar';
import AdvancedGridList from '../../Components/CardsLayout';
import  UserContext  from '../../Context/UserContext';


const Home = () => {
    console.log(useContext(UserContext))
    console.log(localStorage.Ids)
    const grid = localStorage.isAuthenticated === 'true' ? <AdvancedGridList /> : <h1> Kindly Login To view the products. </h1>
    return ( 
        <div>
            <Navbar />
            <br />
            {grid}
            
        </div>  );
}
 
export default Home;