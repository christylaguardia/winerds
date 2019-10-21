import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Loading from '../../components/Loading/Loading';
import MenuAppBar from '../../components/Nav/MenuAppBar';
import BottomNavBar from '../../components/Nav/BottomNavBar';
import Routes from './Routes';
import { theme } from '../../muiTheme';

class App extends React.Component {
  render() {
    const { loading, user } = this.props;
    const isAuthenticated = user ? !!user.idToken : false;

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
