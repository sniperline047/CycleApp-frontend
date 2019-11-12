import axios from 'axios';

export function getName(value) {
    if(value === 'Login'|| value === 'Register') return value;
    else if(value === 'rides') return 'Rides';
    else if(value === 'my-rides') return 'MyRides';
    else if(value === 'profile') return 'Profile';
    else if(value === 'dashboard') return 'Dashboard';
    else return '';
}

export function getLink(value) {
    if(value === 'Login') return 'Register';
    else if(value === 'Register') return 'Login';
    else if(value === 'dashboard') return '';
    else return 'Dashboard';
}

export function getRoute(value) {
    if(value === 'Login'|| value === 'Register') return '/';
    else return '/dashboard/?name=dashboard';
}

export const register = newUser => {
	return axios
	.post('https://cycle-it-api.herokuapp.com/users/register', {
		first_name: newUser.first_name,
		last_name: newUser.last_name,
		email: newUser.email,
		mob: newUser.mob,
		dob: newUser.dob,
		password: newUser.password,
	})
    .then(user => {
        if (user) {
            return user;
        }
    })
}

export const login = user => {
	return axios
	.post('https://cycle-it-api.herokuapp.com/users/login', {
		email: user.email,
		password: user.password,
	})
	.then(res => {
		if(res) {
			localStorage.setItem('usertoken', res.data);
			return res.data;
		}
	})
	.catch(err => {
		console.log(err);
	})
}

export const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
export const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}
