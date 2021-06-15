import './App.css';
import {Router} from 'react-router'
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <header>
      <h1>Book Management App</h1>
      <hr />
      <div className="links">
        <Router>

          <NavLink to="/" className="link" activeClassName="active" exact>
            Book List
          </NavLink>
          <NavLink to="/add" className="link" activeClassName="active" >
            Add Book
          </NavLink>
        </Router>
      </div>
    </header>
  );
}

export default App;
