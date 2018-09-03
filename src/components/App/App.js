import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Loading from './Loading';
import NavBar from '../NavBar/NavBar';
import Login from '../Auth/Login';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { loginFromLocalStorage } from './actions';

const theme = createMuiTheme({
  palette: {
    primary: blue
  },
  // overrides: {
  // }
});

class App extends React.Component {

  componentWillMount() {
    loginFromLocalStorage();
  }

  render() {
    const { loading, user } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div>
            <NavBar />
            {loading && <Loading />}
            {user ? <p>hello user</p> : <Login />}
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
