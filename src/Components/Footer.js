
import React from 'react';
import "./Footer.css";

const  Footer=()=>{
    return(

        <div class="foot">
<footer class="page-footer">
<div class="container">
  <div class="row">
    <div class="col l6 s12">
      <h5 class="white-text">About Us</h5>
      <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
    </div>
    <div class="col l4 offset-l2 s12">
      <h5 class="white-text">Contact Us</h5>
      <ul>
        <li><a class="grey-text text-lighten-3" href="#!">Facebook</a></li>
        <li><a class="grey-text text-lighten-3" href="#!">Twitter</a></li>
        <li><a class="grey-text text-lighten-3" href="#!">Instagram</a></li>
        <li><a class="grey-text text-lighten-3" href="#!">Mail</a></li>
      </ul>
    </div>
  </div>
</div>
<div class="footer-copyright">
  <div class="container">
  © 2020 Copyright All Rights Reserved.
  <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
  </div>
</div>
</footer>
  </div>
    )
}

export default Footer;

