import React from 'react';
import Swal from 'sweetalert2';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: '',
      education: '',
      housevalue: '',
      age: '',
      olexp: '',
      custpsy: '',
      marriage: '',
      child: '',
      occupation: '',
      mortgage: '',
      houseowner: '',
      region: '',
      carprob: '',
      famincome: ''
    };
  }

  changeGender(event){this.setState({gender: event.target.value});}
  changeEducation(event){this.setState({education: event.target.value});}
  changeHouseValue(event){this.setState({housevalue: event.target.value});}
  changeAge(event){this.setState({age: event.target.value});}
  changeOlExp(event){this.setState({olexp: event.target.value});}
  changeCustPsy(event){this.setState({custpsy: event.target.value});}
  changeMarriage(event){this.setState({marriage: event.target.value});}
  changeChild(event){this.setState({child: event.target.value});}
  changeOccupation(event){this.setState({occupation: event.target.value});}
  changeMortgage(event){this.setState({mortgage: event.target.value});}
  changeHouseOwner(event){this.setState({houseowner: event.target.value});}
  changeRegion(event){this.setState({region: event.target.value});}
  changeCarProb(event){this.setState({carprob: event.target.value/10});}
  changeFamIncome(event){this.setState({famincome: event.target.value});}

  submit(flag){
    var data = {
      gender: document.getElementById("gender").value,
      education: document.getElementById("education").value,
      house_val: document.getElementById("housevalue").value,
      age: document.getElementById("age").value,
      online: document.getElementById("olexp").value,
      customer_psy: document.getElementById("custpsy").value,
      marriage: document.getElementById("marriage").value,
      child: document.getElementById("child").value,
      occupation: document.getElementById("occupation").value,
      mortgage: document.getElementById("mortgage").value,
      house_owner: document.getElementById("houseowner").value,
      region: document.getElementById("region").value,
      car_prob: document.getElementById("carprob").value,
      fam_income: document.getElementById("famincome").value
    }
    console.log(JSON.stringify(data))

    var xmlhttp = new XMLHttpRequest();
    var url = "https://predict-aib.herokuapp.com/predict";
    
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            console.log("success")
        }
    };
    xmlhttp.send(JSON.stringify(data));

    if(flag === "success"){
      Swal.fire(
        'Customer Prediction',
        'The customer potentially buy your product',
        flag,
        3000
      )
    } else{
      Swal.fire(
        'Customer Prediction',
        'The customer not potentially buy your product',
        flag,
        3000
      )
    }
  }

  render (){
    return(
      <div className="App">
        <header className="App-header">
          <div>II4042 AI For Business</div>
          <div className = "App-title">CUSTOMER PREDICTION</div>
        </header>
        <body className="App-body">
        <form>
          <div className="App-form">
          <div className="Form-section">
            <div className="Form-field"><label>
              Gender : 
              <select  id="gender" className="field" onChange={this.changeGender.bind(this)} value={this.state.gender} name="gender">
                <option value="M">M</option>
                <option value="F">F</option>
              </select>
            </label></div>
            <div className="Form-field"><label>
              Education : 
              <select id="education" className="field" onChange={this.changeEducation.bind(this)} value={this.state.education} name="education">
                <option value="0. <HS">0. &lt;HS</option>
                <option value="1. HS">1. HS</option>
                <option value="2. Some College">2. Some College</option>
                <option value="3. Bach">3. Bach</option>
                <option value="4. Grad">4. Grad</option>
              </select>
            </label></div>
            <div className="Form-field"><label>
              <div>House Value : {this.state.housevalue}</div>
              <input id="housevalue" type="range" min="0" max="10000000" class="slider" onChange={this.changeHouseValue.bind(this)} name="house_val"/>
            </label></div>
            <div className="Form-field"><label>
              Age : 
              <select id="age" className="field" value={this.state.age} onChange={this.changeAge.bind(this)} name="age">
                <option value="2_<=25">2_&lt;=25</option>
                <option value="3_<=35">3_&lt;=35</option>
                <option value="4_<=45">4_&lt;=45</option>
                <option value="5_<=55">5_&lt;=55</option>
                <option value="6_<=65">6_&lt;=65</option>
                <option value="7_>65">7_&gt;65</option>
              </select>
            </label></div>
            <div className="Form-field"><label>
              Online Experience : 
              <select id="olexp" className="field" onChange={this.changeOlExp.bind(this)} value={this.state.olexp} name="experience">
                <option value="Y">Y</option>
                <option value="N">N</option>
              </select>
              <div className="keterangan"> had online shopping experience</div>
            </label></div>
            <div className="Form-field"><label>
              Customer Psychology : 
              <select id="custpsy" className="field" onChange={this.changeCustPsy.bind(this)} value={this.state.custpsy} name="customer_psy">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="G">G</option>
                <option value="H">H</option>
                <option value="I">I</option>
                <option value="J">J</option>
              </select>
              <div className="keterangan"> based on area of residence</div>
            </label></div>
            <div className="Form-field"><label>
              Marriage Status : 
              <select id="marriage" className="field" onChange={this.changeMarriage.bind(this)} value={this.state.marriage} name="marriage">
                <option value="Married">Married</option>
                <option value="Single">Single</option>
              </select>
            </label></div>
          </div>
          <div className="Form-section">
            <div className="Form-field"><label>
              Child Status : 
              <select id="child" className="field" onChange={this.changeChild.bind(this)} value={this.state.child} name="child">
                <option value="Y">Y</option>
                <option value="N">N</option>
              </select>
            </label></div>
            <div className="Form-field"><label>
              Occupation : 
              <select id="occupation" className="field" onChange={this.changeOccupation.bind(this)} value={this.state.occupation} name="occupation">
                <option value="Professional">Professional</option>
                <option value="Sales/Service">Sales/Service</option>
                <option value="Blue Collar">Blue Collar</option>
                <option value="Retired">Retired</option>
                <option value="Others">Others</option>
              </select>
            </label></div>
            <div className="Form-field"><label>
              Mortgage :
              <select id="mortgage" className="field" onChange={this.changeMortgage.bind(this)} value={this.state.mortgage} name="mortgage">
                <option value="1Low">1Low</option>
                <option value="2Med">2Med</option>
                <option value="3High">3High</option>
              </select>
            </label></div>
            <div className="Form-field"><label>
              House Owner :
              <select id="houseowner" className="field" onChange={this.changeHouseOwner.bind(this)} value={this.state.houseowner} name="house_owner">
                <option value="Owner">Owner</option>
                <option value="Renter">Renter</option>
              </select>
            </label></div>
            <div className="Form-field"><label>
              Region :
              <select id="region" className="field" onChange={this.changeRegion.bind(this)} value={this.state.region} name="region">
                <option value="South">South</option>
                <option value="West">West</option>
                <option value="Midwest">Midwest</option>
                <option value="Northeast">Northeast</option>
                <option value="Rest">Rest</option>
              </select>
            </label></div>
            <div className="Form-field"><label>
              <div>Car Probability : {this.state.carprob}</div>
              <input id="carprob" type="range" min="1" max="10" class="slider" onChange={this.changeCarProb.bind(this)} name="car_prob"/>
              <div className="keterangan"> probability for buy a car</div>
            </label></div>
            <div className="Form-field"><label>
              Family Income :
              <select id="famincome" className="field" value={this.state.famincome} onChange={this.changeFamIncome.bind(this)} name="fam_income">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="G">G</option>
                <option value="H">H</option>
                <option value="I">I</option>
                <option value="J">J</option>
                <option value="K">K</option>
                <option value="L">L</option>
              </select>
              <div className="keterangan"> A: lowest L: highest</div>
            </label></div>
          </div>
          </div>
          <div className="Form-submit">
            <input className="field-submit" type="button" onClick={() => this.submit('error')} value="Submit" />
          </div>
        </form>
        </body>
      </div>
    )
  }
}

export default App;


