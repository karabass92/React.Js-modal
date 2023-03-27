import React, { useState } from 'react';
import './index.scss';

const App = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="App">
            <button className="open-modal-btn" onClick={ () => setOpen(true) }>Open modal</button>
            <div className={`overlay animated ${open && 'show'}`}>
                <div className="modal">
                    <svg height="200" viewBox="0 0 200 200" width="200" onClick={ () => setOpen(false) }>
                        <title />
                        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                    </svg>
                    <img src="http://giffun.ru/wp-content/uploads/2019/04/kachat_krasivye_kartinki_na_telefon_besplatno_29_23075447-500x313.jpg" />
                </div>
            </div>
        </div>
    );
}

export default App;