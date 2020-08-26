import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import './Intro.scss';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const LINKEDIN_LINK = 'https://www.linkedin.com/in/naxin-fang-3821b4137/';
const GITHUB_LINK = 'https://github.com/fangnx';

const Intro = () => (
  <Router>
    <div className="intro">
      <section className="content">
        <div className="name">Naxin Fang</div>
        <article>
          <span className="underlined">
            <Link to="/about">About</Link>
          </span>
          <span className="underlined">
            <Link to="/experience">Experience</Link>
          </span>
          <span className="underlined">
            <Link to="/projects">Projects</Link>
          </span>
          {/* <span>
            <Link to="/contact">Contact</Link>
          </span> */}
        </article>

        <div className="info-cards">
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/about"></Redirect>}
            ></Route>

            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/experience">
              <Experience />
            </Route>

            <Route exact path="/projects">
              <Projects />
            </Route>

            {/* <Route exact path="/contact">
              <Contact />
            </Route> */}
          </Switch>
        </div>
      </section>
    </div>
  </Router>
);

export default Intro;
