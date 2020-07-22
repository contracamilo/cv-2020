import React, {useState} from "react";
import Viewport from "../components/viewport";
import SecondaryView from "../components/secondaryView";
import MainView from "../components/mainview";
import Button from "../components/button";
import {useTranslation} from "react-i18next";
import setText from "../utils/i18n/textSetter";
import {jobsInfo, contactInfo, practices, jobOneInfo, jobTwoInfo} from "./jobsInfo";
import Modal from "../components/modal";
import ModalBody from "../components/modal/ModalBody";
import LogoGrid from "../components/logoGrid";
import NormalList from "../components/normalList";

const OnePage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPrcModalOpen, setIsPrcModalOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isDetailsTwoOpen, setIsDetailTwosOpen] = useState(false);
	const {t} = useTranslation();

	const homeProps = () => {
		return {
			mainClass: "one-page__home one-page--size",
		};
	};

	const aboutProps = () => {
		return {
			mainClass: "one-page__about one-page--size",
		};
	};

	const expProps = () => {
		return {
			mainClass: "one-page__experience one-page--size",
		};
	};

	const contactProps = () => {
		return {
			mainClass: "one-page__contact one-page--size",
		};
	};

	const setMainViewProps = () => {
		return {
			id: "Home",
		};
	};

	const setAboutProps = () => {
		const sectionName = "About";
		return {
			id: sectionName,
			ariaLabel: sectionName,
			sectionTitle: sectionName,
			title: "whoAmi",
			content: {
				before: "const",
				main: "WhoAmI",
				after: "=(dev)=>",
				dark: true,
				body: t("name", setText("ABOUT_BODY")),
				secondaryText: t("name", setText("ABOUT_BODY_SEC")),
			},
			light: true,
			withButtons: true,
			withCircle: true,
		};
  };
  
  const openDetailsModal = (job) => {
    if(job === 'Tambourine'){
      setIsDetailTwosOpen(true);
    }
    if(job === 'Globant'){
      setIsDetailsOpen(true);
    }
		
	};

	const setExpProps = () => {
		const sectionName = "Experience";
		return {
			id: sectionName,
			ariaLabel: sectionName,
			sectionTitle: sectionName,
			title: "whoAmi",
			content: {
				before: "const",
				main: "DoThis",
				after: "=(work)=>",
				dark: false,
			},
			light: false,
			withButtons: true,
			withCircle: false,
      optionalContent: jobsInfo,
			cards: true,
      list: false,
      openModal: openDetailsModal,
		};
	};

	const setContactProps = () => {
		const sectionName = "Contact";
		return {
			id: sectionName,
			ariaLabel: sectionName,
			sectionTitle: sectionName,
			title: "whoAmi",
			content: {
				before: "const",
				main: "KeepInTouch",
				after: "=(mail)=>",
				dark: true,
				body: t("name", setText("CONTACT_BODY")),
			},
			light: true,
			withButtons: true,
			withCircle: false,
			optionalContent2: contactInfo,
			cards: false,
			list: true,
		};
	};

	const techModal = () => {
		setIsModalOpen(true);
	};

	const prcModal = () => {
		setIsPrcModalOpen(true);
	};

	const techButton = () => {
		return {
			text: t("button-tech", setText("ABOUT_BUTTON_TECH")),
			dark: false,
			type: "button",
			action: techModal,
		};
	};

	const practicesButton = () => {
		return {
			text: t("button-practices", setText("ABOUT_BUTTON_PRC")),
			dark: true,
			type: "button",
			action: prcModal,
		};
	};

	const expButton = () => {
		return {
			text: t("button-experience", setText("EXP_BUTTON_PRJ")),
			dark: false,
			type: "button",
			action: () => {},
		};
	};

	const onCloseModal = () => {
		setIsModalOpen(false);
    setIsPrcModalOpen(false);
    setIsDetailsOpen(false);
    setIsDetailTwosOpen(false);
	};

	return (
		<div className={"one-page"}>
			<Viewport {...homeProps()}>
				<MainView {...setMainViewProps()} />
			</Viewport>
			<Viewport {...aboutProps()}>
				<SecondaryView {...setAboutProps()}>
					<Button {...techButton()} />
					<Button {...practicesButton()} />
				</SecondaryView>
			</Viewport>
			<Viewport {...expProps()}>
				<SecondaryView {...setExpProps()}>
					<Button {...expButton()} />
				</SecondaryView>
			</Viewport>
			<Viewport {...contactProps()}>
				<SecondaryView {...setContactProps()} />
			</Viewport>
			{isModalOpen && (
				<Modal
					component={
						<ModalBody title={"Tech and Tools"} close={onCloseModal}>
							<LogoGrid />
						</ModalBody>
					}
				/>
			)}
			{isPrcModalOpen && (
				<Modal
					component={
						<ModalBody title={"Practices"} modalType="normal" close={onCloseModal}>
							<NormalList info={practices} />
						</ModalBody>
					}
				/>
			)}
      {isDetailsOpen && (
				<Modal
					component={
						<ModalBody title={"Details"} modalType="normal" close={onCloseModal}>
							<NormalList info={jobOneInfo} />
						</ModalBody>
					}
				/>
			)}
      {isDetailsTwoOpen && (
				<Modal
					component={
						<ModalBody title={"Details"} modalType="normal" close={onCloseModal}>
							<NormalList info={jobTwoInfo} />
						</ModalBody>
					}
				/>
			)}
		</div>
	);
};

export default OnePage;
