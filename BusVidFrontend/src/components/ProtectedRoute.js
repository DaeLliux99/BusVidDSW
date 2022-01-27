import {Navigate} from 'react-router-dom'
import Cookies from 'universal-cookie/es6'

const AuthRoute = ({children}) => {
	const cookies = new Cookies();
	console.log(cookies.get("id"));
	if (!cookies.get("id")) {
		return <Navigate to="/"/>;
	}
	return children;
}
export default AuthRoute;
