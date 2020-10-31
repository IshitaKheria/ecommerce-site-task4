import React , {useContext} from 'react';
import Navbar from '../../Components/Navbar'
import AdvancedGridList from '../../Components/CardsLayout';
import  DataContext  from '../../Context/DataContext';
import  UserContext  from '../../Context/UserContext';


const Home = () => {
    console.log(useContext(DataContext))
    console.log(useContext(UserContext))
    return ( 
        <div>
            <Navbar />
            <AdvancedGridList />
            
        </div>  );
}
 
export default Home;