import React from "react";
import Nav from "../nav";
import {useTranslation} from "react-i18next";
import setText from "../../utils/i18n/textSetter";
import {FadeIn, FadeInTop} from "../animations";

const MainView = ({id}) => {
	const {t} = useTranslation();

	return (
		<section id={id} aria-labelledby="home" className="main-view">
			<FadeInTop><h3>{t("job", setText("HOME_JOB"))}</h3></FadeInTop>
			<FadeIn>
				<h1>{t("name", setText("HOME_OWNER"))}</h1>
			</FadeIn>

			
				<Nav />
			
		</section>
	);
};

export default MainView;
