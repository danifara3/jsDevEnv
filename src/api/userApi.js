//ensures code runs on browser not supporting fetch as at es5
import 'whatwg-fetch';

//boiler plate code
export function getUsers(){
  return get('users')
}

function get(url){
  return fetch(url).then(onSuccess, onError);
}

function onSuccess(response){
  return response.json();
}

function onError(error){
  console.log(error); //eslint-disable-line no-console
}