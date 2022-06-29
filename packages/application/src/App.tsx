import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Header } from '@chin2km/ui-components';
import { BluePage } from './pages/Blue.lazy';
import { GreenPage } from './pages/Green.lazy';
import { RedPage } from './pages/Red.lazy';
import './App.css';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />

      <nav>
        <Link to={'/'}>Green</Link>
        <Link to={'/blue'}>Blue</Link>
        <Link to={'/red'}>Red</Link>
      </nav>

      <Layout>
        <React.Suspense fallback={'Loading...'}>
          <Switch>
            <Route exact={true} path="/" component={GreenPage} />
            <Route exact={true} path="/blue" component={BluePage} />
            <Route exact={true} path="/red" component={RedPage} />
          </Switch>
        </React.Suspense>
      </Layout>
    </>
  )
};


const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
  }

  summary {
    cursor: pointer;
  }
`;

const Layout = styled.article`
  padding: 0 20px;
  display: flex;
`;

export default App;
