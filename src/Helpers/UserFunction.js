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
	.post('http://localhost:5000/cycle-it-be434/us-central1/api/register', {
		firstName: newUser.firstName,
		lastName: newUser.lastName,
		email: newUser.email,
		mobileNo: newUser.mobileNo,
		rollNo: newUser.rollNo,
		password: newUser.password,
	})
    .then(resp => {
		return resp;
    })
}

export const login = user => {
	return axios
	.post('http://localhost:5000/cycle-it-be434/us-central1/api/login', {
		email: user.email,
		password: user.password,
	})
	.then(resp => {
		const token =  `Bearer ${resp.data.token}`
		localStorage.setItem('usertoken',token);
		axios.defaults.headers.common['Authorization'] = token;
		return resp;
	})
}

export const userProfile = async () => {
	const token = localStorage.getItem('usertoken');
	const resp = await axios
		.get('http://localhost:5000/cycle-it-be434/us-central1/api/profile', {
			headers: {
				Authorization: token
			}
		});
	return resp;
}

export const userImage = async (formData) => {
	const token = localStorage.getItem('usertoken');
	const resp = await axios
		.post('http://localhost:5000/cycle-it-be434/us-central1/api/users/image', formData, {
			headers: {
				Authorization: token
			}
		});
	return resp;
}

export const bicycleImage = async (formData,bicyclefrmNo) => {
	const token = localStorage.getItem('usertoken');
	const resp = await axios
		.post(`http://localhost:5000/cycle-it-be434/us-central1/api/addBicycleImage/${bicyclefrmNo}`, formData, {
			headers: {
				Authorization: token
			}
		});
	return resp;
}

export const userBicycle = async () => {
	const token = localStorage.getItem('usertoken');
	const resp = await axios
		.get('http://localhost:5000/cycle-it-be434/us-central1/api/getBicycle', {
			headers: {
				Authorization: token
			}
		});
	return resp;
}

export const addAvailibility = async (bicycle,bicyclefrmNo) => {
	const token = localStorage.getItem('usertoken');
	const bicycleData = {
		startTime: bicycle.startTime,
		endTime: bicycle.endTime,
		price: bicycle.price,
		bicyclefrmNo: bicyclefrmNo,
		caption: bicycle.caption,
	}
	const resp = await axios
		.post(`http://localhost:5000/cycle-it-be434/us-central1/api/addBicycleAvail/${bicyclefrmNo}`, bicycleData, {
			headers: {
				Authorization: token
			}
		});
	return resp;
}

export const deleteAvailibility = async (bicyclefrmNo) => {
	const resp = await axios
		.post(`http://localhost:5000/cycle-it-be434/us-central1/api/deleteBicycleAvail/${bicyclefrmNo}`)
	return resp;
}

export const addBicycle = async (bicycle) => {
	const token = localStorage.getItem('usertoken');
	const bicycleData = {
		company: bicycle.company,
		model: bicycle.model,
		bicyclefrmNo: bicycle.bicyclefrmNo,
		color: bicycle.color
	}
	const resp = await axios
		.post(`http://localhost:5000/cycle-it-be434/us-central1/api/addBicycle`, bicycleData, {
			headers: {
				Authorization: token
			}
		});
	return resp;
}

export const getBicycleAvail = async () => {
	const token = localStorage.getItem('usertoken');
	const resp = await axios
		.get("http://localhost:5000/cycle-it-be434/us-central1/api/getBicycleAvail", {
			headers: {
				Authorization: token
			},
		});
	return resp;
}

export const getSingleBike = async (bicyclefrmNo) => {
	const token = localStorage.getItem('usertoken');
	const resp = await axios
		.get(`http://localhost:5000/cycle-it-be434/us-central1/api/getSingleBike/${bicyclefrmNo}`, {
			headers: {
				Authorization: token
			}
		});
	return resp;	
}

export const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
export const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}
