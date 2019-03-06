import React, { Component } from 'react';

import del from './del.jpg';
import hhs from './hhs.css';
class hh extends Component {
  render() {
    return (

    <div>
    <div class="column ">
    <h2>Nineleaps</h2>
    <p>checklist management</p>
    </div>

    <div class="rowq" >
    <input type="button" className="but" value="+"></input>
    </div>  

    <div class="row1" >
    <img src={del} className="im" alt="Profile image" onClick=" "></img>
    </div>

    <div class="row2" >
    <input type="text" value=""></input>
    <input type="button" className="buton" value="search"></input> </div>
    <div class="row3">
    <input type="button" className="butt" value="P"></input></div>

    <div class="column1 "></div>
    <div class="row4" ></div>
    <div class="column1 "></div>
    <div class="row5"></div>
    <div class="column3 "></div>
    <div class="row6"></div>
   
    
    </div>


    );
  }
}

export default hh;
