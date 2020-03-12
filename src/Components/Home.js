
import React from 'react';
import img1 from './images/2.jpg'
import img2 from './images/3.jpg'
import img3 from './images/4.jpg'
import {Link } from 'react-router-dom';

import "./Home.css";

const Home=()=>{
    return(
<div>
        
        
       <div class= "move"> 
       <h1>Breaking News</h1>
       <div class="seeall"><p1>See all</p1></div>
        <div class="row">
        <div class="col s3">
        <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src={img1} alt="hi"/>
          <span class="card-title"  >Putin backs amendment allowing him to remain in power</span>
        </div>
        <div class="card-content">
          <p>MOSCOW — Russian President Vladimir Putin on Tuesday backed a proposed constitutional amendment that would allow him to seek re-election after his current term ends in 2024, </p>
        </div>
        <div class="card-action">
          <nav class= "navi"> <Link to ="/berlin"><li>Click for more news</li>
    </Link> </nav>
        
        </div>
      </div>
    </div>
  </div>
        
        </div>
        <div class="col s3">
        <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src={img2} alt="hi"/>
          <span class="card-title">UPDATE: Berlin cancels large cultural events over coronavirus fears</span>
        </div>
        <div class="card-content">
          <p>Large cultural events in Berlin's theatres, operas and concert houses will be cancelled from Wednesday to prevent coronavirus contagion, authorities in the German capital said.</p>
        
        </div>
        <div class="card-action">
        <nav class= "navi"> <Link to ="/berlin"><li>Click for more news</li>
    </Link> </nav>
        </div>
      </div>
    </div>
  </div>
        
        </div>
        <div class="col s3">

        <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src={img3} alt="hi"/>
          <span class="card-title">Lufthansa to cancel 23,000 flights in April over coronavirus</span>
        </div>
        <div class="card-content">
          <p>German airline Lufthansa said Wednesday it would cancel 23,000 flights across the group, a 50-percent reduction, as it tries to deal with the fallout from the coronavirus crisis.</p>
          
        </div>
        <div class="card-action">
        <nav class= "navi"> <Link to ="/berlin"><li>Click for more news</li>
    </Link> </nav>
        </div>
      </div>
    </div>
  </div>
        
        </div>
        <div class="col s3">

        <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src={img1} alt="hi"/>
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
        <nav class= "navi"> <Link to ="/berlin"><li>Click for more news</li>
    </Link> </nav>
        </div>
      </div>
    </div>
  </div>
        
     </div>   
          </div>   
            </div>

   
<div class= "news"> 
<h1>Latest Events</h1>
 <div class="row">
 <div class="col s3">
 <div class="row">
<div class="col s12 m7">
<div class="card">
 <div class="card-image">
   <img src={img1} alt="hi"/>
   <span class="card-title">Card Title</span>
 </div>
 <div class="card-content">
   <p>I am a very simple card. I am good at containing small bits of information.
   I am convenient because I require little markup to use effectively.</p>
 </div>
 <div class="card-action">
 <nav class= "navi"> <Link to ="/berlin"><li>Click for more news</li>
    </Link> </nav>
 </div>
</div>
</div>
</div>
 
 </div>
 <div class="col s3">
 <div class="row">
<div class="col s12 m7">
<div class="card">
 <div class="card-image">
   <img src={img1} alt="hi"/>
   <span class="card-title">Card Title</span>
 </div>
 <div class="card-content">
   <p>I am a very simple card. I am good at containing small bits of information.
   I am convenient because I require little markup to use effectively.</p>
 </div>
 <div class="card-action">
 <nav class= "navi"> <Link to ="/berlin"><li>Click for more news</li>
    </Link> </nav>
 </div>
</div>
</div>
</div>
 
 </div>
 <div class="col s3">

 <div class="row">
<div class="col s12 m7">
<div class="card">
 <div class="card-image">
   <img src={img1} alt="hi"/>
   <span class="card-title">Card Title</span>
 </div>
 <div class="card-content">
   <p>I am a very simple card. I am good at containing small bits of information.
   I am convenient because I require little markup to use effectively.</p>
 </div>
 <div class="card-action">
 <nav class= "navi"> <Link to ="/berlin"><li>Click for more news</li>
    </Link> </nav>
 </div>
</div>
</div>
</div>
 
 </div>
 <div class="col s3">

 <div class="row">
<div class="col s12 m7">
<div class="card">
 <div class="card-image">
   <img src={img1} alt="hi"/>
   <span class="card-title">Card Title</span>
 </div>
 <div class="card-content">
   <p>I am a very simple card. I am good at containing small bits of information.
   I am convenient because I require little markup to use effectively.</p>
 </div>
 <div class="card-action">
 <nav class= "navi"> <Link to ="/berlin"><li>Click for more news</li>
    </Link> </nav>


 </div>

 
</div>
</div>
</div>

 
</div>   

   </div>   
   <h5>Videos</h5>
   <div  class = "videos">
    
   <div class="row">
        <div class="col s3">
        <div class="video-container">
        <iframe width="981" height="552" src="https://www.youtube.com/embed/cCmobVdUNNk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
          </div>
          <div class="col s3">
        <div class="video-container">
        <iframe width="981" height="552" src="https://www.youtube.com/embed/C2_P2Vgc_D4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      </div>
          </div>
          <div class="col s3">
        <div class="video-container">
        <iframe width="981" height="552" src="https://www.youtube.com/embed/l5twUq9iPSE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      </div>
          </div>
          <div class="col s3">
        <div class="video-container">
        <iframe width="981" height="552" src="https://www.youtube.com/embed/HSVqpWkoK30" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      </div>
          </div>
          </div>
   </div>
     </div>             
  </div>
    )
}
export default Home;