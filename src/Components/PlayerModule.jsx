import React, { useEffect, useRef, useState } from 'react'

export default function PlayerModule() {
    const playerRef = useRef(null);
    const [volume, setVolume] = useState(50)
    const loadScript = function (src) {
        var tag = document.createElement('script');
        tag.async = false;
        tag.src = src;
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(tag);
      }
    useEffect(()=>{
        loadScript("https://w.soundcloud.com/player/api.js");
    },[]);

    const changeVolume = function(e) {
        window.SC.Widget(playerRef.current).setVolume(e.target.value);
        setVolume(e.target.value);
    }


  return (
    <div>
        <iframe width="50%" height="166" scrolling="no" frameborder="no" allow="autoplay" title="Player" ref={playerRef}
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293">
        </iframe>
        <div>
            <input type="range" id="volume" name="volume"
                min="0" max="100" value={volume} onChange={changeVolume}/>
            <label for="volume">Volume</label>
        </div>
    </div>
  )
}
