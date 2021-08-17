import './App.css';
import { use State }
import Button from './components/Button'

const App = () => {


    const [userData, setUserData] = useState([];)


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