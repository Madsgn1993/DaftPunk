import {useRef} from 'react';

function PlaySong1(){

    const audio1 = useRef();

    return(

        <div>
            
            <button onClick={ () => {audio1.current.play()} }type="button">PLay Song 1</button>
            <audio preload="auto" ref={audio1}>
                <source src="data/1.mp3" type="audio/mpeg" />
            </audio>
        </div>


    )

}

export default PlaySong1