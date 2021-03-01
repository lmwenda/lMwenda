import React from "react";
import { Spring } from 'react-spring/renderprops'

import '../Styles/dist/Main.css';
import Hero from "../Images/hero.svg";

function Main(){
    const mql = window.matchMedia('(max-width: 600px)');
    let mobileView = mql.matches;
    if(!mobileView){
        return(
            <Spring from={{opacity: 0}} to={{opacity: 1}}>
                {props => (
                    <div id="wrapper" style={{props}}>
                        <div style={{props}} className="container">
                        <div className="content">
                            <h1 style={{paddingRight: '190px'}}>lMwenda</h1>
                            <p>
                            Hey, I am a teenager who is studying Software Engineering!
                            I've decided to freelance to gather money to help those in need and to 
                            build up my future dream setup. 
                            I've been studying (Self-Taught) Software Engineering for about a year now,
                            and I've personally enjoyed Backend the most!
                            Payment isn't a big deal I can take low payments. Just DM me on discord or email me
                            to discuss!  
                            <br />
                            <bold style={{fontWeight: 'bold'}}> Discord: number 1 dev#1019</bold>
                            <br />
                            <bold style={{fontWeight: 'bold'}}>Email: Lukemwen@hotmail.com</bold>
                            </p>
                            <button><a style={{color: '#fff'}}
                            href="https://www.fiverr.com/lmwenda">Learn more</a></button>
                        </div>

                        <div style={{props}} className="img">
                            <img src={Hero} alt="" />
                        </div>

                    </div>
                </div>
                )}
            </Spring>
        ); 
        } else{
            return(
                <div>
                    <div id="phone-wrapper">
                        <div className="phone-container">
                        <div className="phone-content">
                            <h1 style={{paddingRight: '190px'}}>lMwenda</h1>
                            <p>
                            Hey, I am a teenager who is studying Software Engineering!
                            I've decided to freelance to gather money to help those in need and to 
                            build up my future dream setup. 
                            I've been studying (Self-Taught) Software Engineering for about a year now,
                            and I've personally enjoyed Backend the most!
                            Payment isn't a big deal I can take low payments. Just DM me on discord or email me
                            to discuss!  
                            <br />
                            <bold style={{fontWeight: 'bold'}}> Discord: number 1 dev#1019</bold>
                            <br />
                            <bold style={{fontWeight: 'bold'}}>Email: Lukemwen@hotmail.com</bold>
                            </p>
                            <button>Learn more</button>
                        </div>

                        <div className="phone-img">
                            <img src={Hero} alt="" />
                        </div>

                    </div>
                </div>
                </div>
            );
    }
}

export default Main;