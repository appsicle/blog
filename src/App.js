import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import Projects from './Projects';
import Home from './Home';
import Writing from './Writing';
import WritingPost from './WritingPost';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route exact path='/projects'>
          <Layout>
            <Projects></Projects>
          </Layout>
        </Route>
        <Route exact path='/writing'>
          <Layout>
            <Writing></Writing>
          </Layout>
        </Route>
        <Route
          exact
          path='/writing/:title'
          render={(props) => (
            <Layout>
              <WritingPost {...props} />
            </Layout>
          )}></Route>
      </Switch>
    </Router>
  );
}

export default App;
