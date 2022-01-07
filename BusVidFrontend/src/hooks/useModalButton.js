import {useState} from "react";
import useButton from "./useButton";
import {
  useDisclosure
} from "@chakra-ui/react"

const useModalButton = () => {
	const {buttonClicked , handleButtonClick} = useButton(); 
  const {isOpen, onOpen, onClose} = useDisclosure();

	const handleModalOpen = () => {
		handleButtonClick();
		onOpen();
	}

	return {
		buttonClicked,
		handleModalOpen,
		isOpen,
		onClose
	};
}

export default useModalButton;
