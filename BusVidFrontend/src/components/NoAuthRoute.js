import {Navigate, Route} from 'react-router-dom'
import Cookies from 'universal-cookie/es6'
const NoAuthRoute = ({children}) => {
	const cookies = new Cookies();
	console.log(cookies.get("id"));
	if (cookies.get("id")) {
		return <Navigate to="/AdminView"/>;
	}
	return children;
}
export default NoAuthRoute;
