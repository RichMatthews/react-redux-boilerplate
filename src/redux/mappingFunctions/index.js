import Types from '../types';

export const mapStateToProps = state => ({
});

export const mapDispatchToProps = (dispatch) => ({
  fetchUsers: (users) => {
    console.log(users, 'the users');
    dispatch({
      type: Types.FETCH_USERS,
      users,
    })
  }
});
