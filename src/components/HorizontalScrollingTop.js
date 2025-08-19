import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from "keen-slider/react";

import html from '../assets/techno/html5.svg';
import css from '../assets/techno/css.svg';
import js from '../assets/techno/javascript.svg';
import typeScript from '../assets/techno/typescript.svg';
import react from '../assets/techno/reactjs.svg';
import node from '../assets/techno/nodejsicon.svg';
import mysql from '../assets/techno/mysqlicon.svg';
import tailwind from '../assets/techno/tailwind.svg'
import next from '../assets/techno/nextjs.svg'
import express from '../assets/techno/expressjs.svg'
import vscode from '../assets/techno/vscode.svg'
import vitejs from '../assets/techno/vitejsdev.svg'
import php from '../assets/techno/php.svg'
import prisma from '../assets/techno/prisma.svg'
import figma from '../assets/techno/figma.svg'
import framer from '../assets/techno/framer.svg'
import daisyui from '../assets/techno/daisyui.svg'


export const HorizontalScrollingTop = () => {
    const animation = { duration: 2000, easing: (t) => t };
    
    const [sliderRef] = useKeenSlider({
        loop: true,
        renderMode: "precision",
        drag: false,
        slides: { 
            origin: "center",
            perView: 5, // Commencez avec un nombre plus petit pour tester
            spacing: 5
        },
        created(s) {
            s.moveToIdx(1, true, animation);
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 1, true, animation);
        }
    });

    return (
        
        <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide">
                <img src={html} alt="HTML"  />
                <p>HTML</p>
            </div>
            <div className="keen-slider__slide">
                <img src={css} alt="CSS"  />
                <p>CSS</p>
            </div>
            <div className="keen-slider__slide">
                <img src={typeScript} alt="TYPESCRIPT"  />
                <p>TYPESCRIPT</p>
            </div>
            <div className="keen-slider__slide">
                <img src={js} alt="JAVASCRIPT"  />
                <p>JAVASCRIPT</p>
            </div>
            <div className="keen-slider__slide">
                <img src={react} alt="REACT"  />
                <p>REACT</p>
            </div>
            <div className="keen-slider__slide">
                <img src={node} alt="NODEJS"  />
                <p>NODEJS</p>
            </div>
            <div className="keen-slider__slide">
                <img src={mysql} alt="MYSQL"  />
                <p>MYSQL</p>
            </div>
            <div className="keen-slider__slide">
                <img src={tailwind} alt="TAILWIND"  />
                <p>TAILWIND</p>
            </div>
            <div className="keen-slider__slide">
                <img src={next} alt="NEXT.JS"  />
                <p>NEXT.JS</p>
            </div>
            <div className="keen-slider__slide">
                <img src={express} alt="EXPRESS.JS"  />
                <p>EXPRESS.JS</p>
            </div>
             <div className="keen-slider__slide">
                <img src={vscode} alt="VSCODE"  />
                <p>VSCODE</p>
            </div>
            <div className="keen-slider__slide">
                <img src={vitejs} alt="VITEJS"  />
                <p>VITEJS</p>
            </div>
            <div className="keen-slider__slide">
                <img src={php} alt="PHP"  />
                <p>PHP</p>
            </div>
            <div className="keen-slider__slide">
                <img src={prisma} alt="PRISMA"  />
                <p>PRISMA</p>
            </div>
            <div className="keen-slider__slide">
                <img src={figma} alt="FIGMA"  />
                <p>FIGMA</p>
            </div>
            <div className="keen-slider__slide">
                <img src={framer} alt="FRAMER"  />
                <p>FRAMER</p>
            </div>
             <div className="keen-slider__slide">
                <img src={daisyui} alt="DAISYUI"  />
                <p>DAISYUI</p>
            </div>
        </div>
        
    );
};