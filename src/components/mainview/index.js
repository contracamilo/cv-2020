import React, {useEffect} from "react";
import Nav from "../nav";
import {useTranslation} from "react-i18next";
import setText from "../../utils/i18n/textSetter";
import {FadeIn, FadeInTop} from "../animations";
import useObserver from '../../hooks/useIntersectionObserver';

const MainView = ({id}) => {
	const {t} = useTranslation();


	const [observer, setElements, entries] = useObserver({
		threshold: 0.25,
		root: null
	  });

	  useEffect(() => {
		entries.forEach(entry => {
		  const box = entry.target;
		  if (entry.isIntersecting) {
			setTimeout(() => {
				box.classList.add("effect");
			}, 600);
			//if you need put the class only once
			//observer.unobserve(box);
		  } else {
			box.classList.remove("effect");
		  }
		});
	  }, [entries, observer]);
	
	  useEffect(() => {
		const images = document.querySelectorAll(".main-view");;
		setElements(images);
	  }, [setElements]);

	return (
		<section id={id} aria-labelledby="home" className="main-view bg-img">
			<FadeInTop><h3>{t("job", setText("HOME_JOB"))}</h3></FadeInTop>
			<FadeIn>
				<h1>{t("name", setText("HOME_OWNER"))}</h1>
			</FadeIn>
			<Nav />	
		</section>
	);
};

export default MainView;
