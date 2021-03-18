import {useRef} from 'react';


function PlayInstru(){

    const music = useRef();

    return(


        <div>
            
            <button onClick={ () => {music.current.play()} }type="button">PLay Music</button>
            <audio preload="auto" ref={music}>
                <source src="data/instru.mp3" type="audio/mpeg" />
            </audio>
        </div>

    )

}


export default PlayInstru