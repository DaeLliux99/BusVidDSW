import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie/es6";

const useCerrarSesion = () => {
	const cookies = new Cookies();
	const navigate = useNavigate();
	const cerrarSesion = () => {
		cookies.remove("id", {path: "/"});
		cookies.remove("nombre", {path: "/"});
		cookies.remove("dni", {path: "/"});
		navigate('/');
	}
	return {cerrarSesion}
} 
export default useCerrarSesion;
