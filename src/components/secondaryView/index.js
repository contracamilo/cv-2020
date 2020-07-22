import React, { useEffect, useState } from 'react';
import Nav from '../nav';
import { FadeIn } from '../animations';
import useObserver from '../../hooks/useIntersectionObserver'
import Title from '../title';
import Card from '../card';
import ContactItem from '../contactItem';

const SecondaryView = ({
  id,
  ariaLabel,
  title,
  sectionTitle,
  content,
  children,
  light,
  withButtons,
  withCircle,
  optionalContent,
  optionalContent2,
  cards,
  list,
  openModal
}) => {

  const [jobs, setJobs] = useState(optionalContent);
  const [contactLinks, setContactLinks] = useState(optionalContent2);

  useEffect(() => {
    setJobs(optionalContent);
    setContactLinks(optionalContent2)
  }, [optionalContent, optionalContent2])

  const [observer, setElements, entries] = useObserver({
    threshold: 0.25,
    root: null
  });

  const renderCards = (info = []) => info.map((info, index) => <Card {...info} action={openModal} key={index}/>);
  const renderContactList = (info = []) => info.map((info, index) => <ContactItem {...info} key={index}/>);

  useEffect(() => {
    entries.forEach(entry => {
      const box = entry.target;
      if (entry.isIntersecting) {
        box.classList.add("effect");
        //if you need put the class only once
        //observer.unobserve(box);
      } else {
        box.classList.remove("effect");
      }
    });
  }, [entries, observer]);

  useEffect(() => {
    const images = document.querySelectorAll(".secondary-view");
    setElements(images);
  }, [setElements]);

  const { body, secondaryText } = content;
  return (
    <section
      id={id}
      aria-labelledby={ariaLabel}
      className={`secondary-view secondary-view--${light ? 'light' : 'dark'}`}
    >
      {withCircle && <div className="secondary-view__circle user-pic" />}
        <div className="secondary-view__title">
          <FadeIn>
            <h2>{sectionTitle}</h2>
            <Nav />
          </FadeIn>
        </div>
      <div className="secondary-view__content">
        <div className="secondary-view__content--inner">
            <Title {...content}/>
            <div className="secondary-view__body">
              {body && <p>{body}</p>}
              {secondaryText && <p>{secondaryText}</p>}
              {cards && <div className="secondary-view__card-box">{renderCards(jobs)}</div>}
              {list && <ul className="secondary-view__list-box">{renderContactList(contactLinks)}</ul>}
            </div>
            {withButtons &&
            <div className={`secondary-view__buttons`}>{children}</div>
            }
        </div>
      </div>
    </section>
  );
};

export default SecondaryView;
