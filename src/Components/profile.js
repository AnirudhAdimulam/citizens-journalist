import React from 'react'
import "./profile.css"
import img1 from './images/2.jpg'
import {Link} from 'react-router-dom';
//import img1 from './images/2.jpg'
import img2 from './images/3.jpg'
import img3 from './images/4.jpg'
const profile =()=>
{
 return(
    <div class="move">
  <h2>My profile</h2>
  <div class="inner">

  <label for="updatenews"/><h5>Update News</h5>

<textarea id="updatenews" rows="4" cols="50" class="h-prop" >
What's happening around you?
</textarea >
<a class="waves-effect waves-light btn"><i class="material-icons right">cloud</i>upload media</a>
<button class="btn waves-effect waves-light" type="submit" name="action">Submit
    <i class="material-icons right">send</i>
  </button>
      
      <label for="location"/><h6>Add Location</h6>
<input type="text" id="Addlocation" name="Addlocation"></input>

<h6> Category </h6>
<a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>

  </div>

  <div class= "move"> 
       <h1>My Uploads</h1>
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
          <h6><p>MOSCOW — Russian President Vladimir Putin on Tuesday backed a proposed constitutional amendment that would allow him to seek re-election after his current term ends in 2024, </p>
      
        </h6>
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
         <h6> <p>Large cultural events in Berlin's theatres, operas and concert houses will be cancelled from Wednesday to prevent coronavirus contagion, authorities in the German capital said.</p>
        
        </h6>
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
         <h6> <p>German airline Lufthansa said Wednesday it would cancel 23,000 flights across the group, a 50-percent reduction, as it tries to deal with the fallout from the coronavirus crisis.</p>
          </h6>
        
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
        <h6>  <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
       </h6>
        </div>
      </div>
    </div>
  </div>
        
     </div>   
          </div>   
            </div>

   
           
  





            
  </div>   


    
    )
}

export default profile; 