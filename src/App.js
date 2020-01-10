import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'

import Users from './components/users/UserList'
import UserShow from './components/users/UserShow'
import PostsList from './components/posts/PostsList'
import PostShow from './components/posts/PostShow'


function App() {
  return (
    <BrowserRouter>
      <div>
        <h2 align ="center">BLOGGER</h2> 
        <hr/>
          <Link to="/"> HOME </Link> |
          <Link to="/Users"> USERS </Link> |
          <Link to="/Posts"> POSTS </Link>

       
        <Route path="/Users" component={Users} exact={true}/>
        <Route path="/Users/:id" component={UserShow}/>
        <Route path="/Posts" component={PostsList} exact={true}/>
        <Route path="/Posts/:id" component={PostShow}/>
      </div>
    </BrowserRouter>
  );
}

export default App;