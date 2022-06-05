import { connect } from 'react-redux';

import TokenCheckPage from './TokenCheckPage';
import { authActions } from 'redux/auth';
// const mapStateToProps =(state) => ({
//   onRefreshToken:
// })

const mapDispatchToProps = (dispatch) => ({
  onRefreshToken: (token) => dispatch(authActions.refreshToken(token)),
});

export default connect(null, mapDispatchToProps)(TokenCheckPage);
