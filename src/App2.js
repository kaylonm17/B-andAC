import './App.css';
import './Form.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import React from 'react';
import Footer from './footer';
import App3 from './App3';
import App4 from './App4';

function App2() {
    return (
    
        <div className="App">

      <div className="app" >
      </div>
        <h1 className="app-color">GET your FREE estimate!</h1>

    <body className="app-color">
    <div className="form-container">
    <div class="field">
  <label class="label"> First Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="First Name"></input>
  </div>
</div>

<div class="field">
  <label class="label">Last Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Last Name"></input>
  </div>
</div>

<div class="field">
  <label class="label">Address</label>
  <div class="control has-icons-right">
    <input class="input" type="text" placeholder="Address here"></input>
  </div>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class=" has-icons-right">
    <input class="input " type="email" placeholder="Email here" ></input>

  </div>
  <p class="help is-danger">This email is invalid</p>
</div>

<div class="checkbox-container">
    <label class="checkbox-label">
      <input type="checkbox" name="issue" value="ac"></input>
      Air Conditioning
    </label>
    <label class="checkbox-label">
      <input type="checkbox" name="issue" value="fridge"></input>
      Refrigerator
    </label>
  </div>


<div class="field">
  <label class="label">Message</label>
  <div class="control">
    <textarea class="textarea" placeholder="Describe what you're expreriencing"></textarea>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox"></input>
      I agree to the <a href="./App3">terms and conditions</a>
    </label>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="radio">
      <input type="radio" name="question"></input>
      Yes
    </label>
    <label class="radio">
      <input type="radio" name="question"></input>
      No
    </label>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <ul>
        <li>
        <Link to="/App4">
          <button className="button is-link">Submit</button>
        </Link>
        </li>
    </ul>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>
</div>
    </body>

    </div>

    );
}

export default App2;
