import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Loading from './Loading';
import Routes from './Routes';
import NavBar from '../NavBar/NavBar';
import Login from '../Auth/Login';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: blue
  },
  // overrides: {
  // }
});


class App extends React.Component {

  render() {
    const { loading, user } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div>
            <NavBar />
            {loading && <Loading />}
            {user ? <Routes /> : <Login />}
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default connect(
  ({ loading, user }) => ({ loading, user }),
  null
)(App);
