import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from "react-router-dom";
import PageRoutes from './Components/Pages/PageRoutes/PageRoutes';


function App() {
  return (
    <Router>
        <PageRoutes/>
    </Router>
  );
}

export default App;
