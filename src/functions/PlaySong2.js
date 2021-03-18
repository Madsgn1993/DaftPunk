import {useRef} from 'react';

function PlaySong2(){

    const audio2 = useRef();

    return(

        <div>
            
            <button onClick={ () => {audio2.current.play()} }type="button">PLay Song 2</button>
            <audio preload="auto" ref={audio2}>
                <source src="data/2.mp3" type="audio/mpeg" />
            </audio>
        </div>


    )

}

export default PlaySong2