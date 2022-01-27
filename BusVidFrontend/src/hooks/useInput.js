import React, {useState} from 'react'
const useInput = (valor) => {
	const [input, setInput] = useState(valor);
	const handleInputChange = (e) => {
		const {name, value} =e.target;
		setInput((input) => ({
			...input,
			[name]: value
		}));
		console.log(input)
	}
	return {input, handleInputChange};
}

export default useInput;
