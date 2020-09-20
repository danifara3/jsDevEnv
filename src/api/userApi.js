//ensures code runs on browser not supporting fetch as at es5
import 'whatwg-fetch';
//from  baseUrl
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();


//boiler plate code
export function getUsers(){
  return get('users')
}

export function deleteUser(id){
  return del(`users/${id}`);
}

//this does not explain how
//hardcoded data is been displayed
function get(url){
  return fetch(baseUrl + url).then(onSuccess, onError);
}

//can't call func delete since it is reserved
function del(url){
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });
  return fetch(request).then(onSuccess, onError);
}

function onSuccess(response){
  return response.json();
}

function onError(error){
  console.log(error); //eslint-disable-line no-console
}