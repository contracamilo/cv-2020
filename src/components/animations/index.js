import React from 'react';
import {Tween, Reveal} from 'react-gsap';




export const FadeIn = ({children, ref, duration}) => (
  <Reveal repeat trigger={ref}>
    <Tween from={{opacity: 0}} duration={duration}>
      {children}
    </Tween>
  </Reveal>
);



export const FadeInTop = ({ children }) => (
    <Tween 
      from={{ opacity: 0, transform: 'translate3d(0, -100vw, 0)' }}
      ease="back.out(1.7)"
    >
      {children}
    </Tween>
);

export const FadeInLeft = ({ children }) => (
    <Tween
      from={{ opacity: 0, transform: 'translate3d(-100vw, 0, 0)' }}
      ease="back.out(1.2)"
    >
      {children}
    </Tween>
  );
