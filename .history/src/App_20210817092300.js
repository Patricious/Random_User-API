import './App.css';
import { useState } from "react";
import axios from 'axios';
import Button from './components/Button';

const App = () => {


    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activeUser, setActiveUser] = useState(false);
    const [activeLink, setActiveLink] = useState(0);

    const onClickHandler = () => {
        setLoading(true);
        axios.get('https://randomuser.me/api/')
            .then((response) => {
                console.log(response);
                setUserData(response.data.results);
            }).catch((error) => {
                console.log(error);
                setLoading(true);
            }).finally

    }


    return ( <
        div className = "App" >
        <
        h1 > Random User Generator < /h1>

        <
        Button isActive = { activeUser }
        clicked = { onClickHandler }
        / >

        <
        /div>
    );
}

export default App;