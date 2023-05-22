import { useRef } from "react";
import poster01 from "./images/poster_01.jpg";
import poster02 from "./images/poster_02.jpg";
import poster03 from "./images/poster_03.jpg";
import poster04 from "./images/poster_04.jpg";
import poster05 from "./images/poster_05.jpg";

function App() {
  const long = useRef()
  if(long.current){
    const text = long.current.innerText
    if(text.length > 15){
      long.current.innerText = text.substr(0,15) + "..."
    }
  }
  return (
    <div style={{display:"flex"}}>
      <div>
        <img src={poster01} alt="image01" />
        <div>movie title</div>
        <div>movie info</div>
      </div>
      <div>
        <img src={poster02} alt="image02" />
        <div>movie title</div>
        <div>movie info</div>
      </div>
      <div>
        <img src={poster03} alt="image03" />
        <div>movie title</div>
        <div>movie info</div>
      </div>
      <div>
        <img src={poster04} alt="image04" />
        <div>movie title</div>
        <div>movie info</div>
      </div>
      <div>
        <img src={poster05} alt="image05" />
        <div>movie title</div>
        <div ref={long}>movie info movie infomovie infomovie infomovie infomovie info</div>
      </div>
    </div>
  );
}

export default App;
