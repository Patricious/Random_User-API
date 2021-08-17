import './App.css';
import { useState } from "react";
import Button from './components/Button'

const App = () => {


    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activeUser, setActiveUser] = useState(false);
    const [activeLink, setActiveLink] = useState();


    return ( <
        div className = "App" >
        <
        h1 > Random User Generator < /h1>

        <
        Button / >

        <
        /div>
    );
}

export default App;