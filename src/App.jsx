import './App.css';
import { useState, Fragment } from "react";
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
            console.log(response.data.results);
            setUserData(response.data.results);
        }).catch((error) => {
            console.log(error);
            setLoading(true);
        }).finally(() => {
            setLoading(false);
            setActiveUser(true);
        })

}

const icons =[
    'fas fa-user fa-4x',
    'fas fa-envelope fa-4x',
    'fas fa-calendar fa-4x',
    'fas fa-map-marker fa-4x',
    'fas fa-phone fa-4x',
    'fas fa-lock fa-4x',
];

const PhraseGenerator = ({user})=>{
    const phrases = [
        <p>Hello my name is {user.name.first} {user.name.first}</p>,
         <p>My email address is  {user.email}</p>,
          <p>I was born on  {user.dob.date.slice(0,10)}</p>,
           <p>I reside in {user.location.country}</p>,
            <p>My contact number is {user.phone}</p>,
            <p>My password is{user.login.password}</p>,
      
    ]
    return(
        <h2>{phrases[activeLink]}</h2>
    )
}

const activeLinkHandler = (index)=>{
    setActiveLink(index);
}
return ( 
    <div className = "App" >
   
     <h1 > Random User Generator </h1>
<Button isActive = { activeUser }
    clicked = { onClickHandler }/>
    {loading ? (
        <h2>Loading...</h2>
    ):(
        <div className="app_user">
        {userData.map((user, index)=>{
            return (
                <Fragment key={user.cell}>
                <img src= {user.picture.large} alt="#"/>
                <PhraseGenerator user={user} />
                <div className="app_icons">
                {icons.map((icon,index)=>{
                    return(
<i className={icon} key={index} onMouseEnter={()=> activeLinkHandler(index)}></i>
                    )

                })}
                </div>
                
                </Fragment>
            )
        })}

        </div>

    )}
   
</div>

);
}


export default App;