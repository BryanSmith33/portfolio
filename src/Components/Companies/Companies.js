import React, { Component } from 'react';
import './Companies.css';
import Overstock from './images/overstock.png';
import Contacts from './images/contacts.png';
import Fashionphile from './images/fashionphile.png';
import DevMountain from './images/devMountain.png';

class Companies extends Component {
  render() {
    let employerImages = [Overstock, Contacts, Fashionphile, DevMountain];
    return (
      <div className='companies-container'>
        <ul className="companies">
          {employerImages.map(image =>{
            return(
              <li key={image}>
                <img src={image} alt='company logo'/>
              </li>
            )
          })
          }
        </ul>
      </div>
    );
  }
}

export default Companies;