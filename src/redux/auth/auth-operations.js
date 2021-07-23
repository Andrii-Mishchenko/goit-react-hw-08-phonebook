import axios from 'axios';
import authActions from './auth-actions';

// https://lpj-tasker.herokuapp.com
// https://connections-api.herokuapp.com
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const token = {
//   // set(token) {
//   //   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   // },
//   // unset() {
//   //   axios.defaults.headers.common.Authorization = '';
//   // },
// };

/*
 * POST @ /users/signup
 * body { name, email, password }
 *
 * После успешной регистрации добавляем токен в HTTP-заголовок
 */
const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest())
  
  try {
    const response = await axios.post('/users/signup', credentials);

    dispatch(authActions.registerSuccess(response.data))
  } catch (error) {

    dispatch(authActions.registerError(error));
  }
}
/*
 * POST @ /users/login
 * body:
 *    { email, password }
 *
 * После успешного логина добавляем токен в HTTP-заголовок
 */
const logIn = credentials => async dispatch => {

};

/*
 * POST @ /users/logout
 * headers:
 *    Authorization: Bearer token
 *
 * 1. После успешного логаута, удаляем токен из HTTP-заголовка
 */
const logOut = () => async dispatch => {

};

/*
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираем токен из стейта через getState()
 * 2. Если токена нет, выходим не выполняя никаких операций
 * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 */
const getCurrentUser = () => async (dispatch, getState) => {

};

export default { register, logOut, logIn, getCurrentUser };