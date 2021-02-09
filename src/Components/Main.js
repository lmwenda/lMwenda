import React from "react";
import { Spring } from 'react-spring/renderprops'

import '../Styles/dist/Main.css';

function Main(){
    return(
        <Spring from={{opacity: 0}} to={{opacity: 1}}>
            {props => (
                <div style={{props}}>
                    <div style={{props}} className="container">
                    <div className="content">
                        <h1>lMwenda</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros elementum tristique.
                            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                            Nunc ut sem vitae risus tristique posuere.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros elementum tristique.
                            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                            Nunc ut sem vitae risus tristique posuere.</p>
                        <button>Learn more</button>
                    </div>

                    <div style={{props}} className="img">

                    </div>

                </div>
            </div>
            )}
        </Spring>
    );
}

export default Main;