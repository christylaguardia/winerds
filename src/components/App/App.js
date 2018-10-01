import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Loading from './Loading';
import Routes from './Routes';
import MenuAppBar from '../Nav/MenuAppBar';
import BottomNavBar from '../Nav/BottomNavBar';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './muiTheme';

class App extends React.Component {
  render() {
    const { loading, user } = this.props;
    const isAuthenticated = user ? !!user.idToken : false;
    console.log('>>>> isAuthenticated <<<<', isAuthenticated);

    return <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <div>
          <MenuAppBar isAuthenticated={isAuthenticated} />
          {loading && <Loading />}
          <Routes isAuthenticated={isAuthenticated} />
          {isAuthenticated && <BottomNavBar />}
        </div>
      </BrowserRouter>
    </MuiThemeProvider>;
  }
}

export default connect(
  ({ loading, user }) => ({ loading, user }),
  null
)(App);
