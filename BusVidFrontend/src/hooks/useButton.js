import {useState} from "react";

const useButton = () => {
	const [buttonClicked, setButtonClicked] = useState(false);
	const handleButtonClick = () => {
		setButtonClicked(true);
	}
	return {
		buttonClicked,
		handleButtonClick
	};
}

export default useButton;
