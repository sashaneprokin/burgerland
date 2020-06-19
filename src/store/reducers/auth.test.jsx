import reducer  from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
  it('ought return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: '/'
    });
  });

  it('ought to store token upon login', () => {
    expect(reducer({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: '/'
    }, {
      type: actionTypes.AUTH_SUCCESS,
      idToken: 'some-token',
      useriId: 'some-user-id'
    })).toEqual({
      token: 'some-token',
      userId: 'some-user-id',
      error: null,
      loading: false,
      authRedirectPath: '/'
    })
  })
});