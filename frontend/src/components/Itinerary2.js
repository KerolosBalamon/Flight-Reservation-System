import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { withRouter } from "react-router-dom";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import DateTimePicker from 'react-datetime-picker';






export default class Summary extends Component {
  constructor(props) {
   
    super(props);
    this.state = {
        flights:[],
        flights2:[],f1:[],f2:[]
      }
      this.EmailItin = this.EmailItin.bind(this);
    
  }


  


  async componentDidMount() {
    
    await axios.get('http://localhost:5000/UserHomePage/SelectedFlight/' + window.location.pathname.substring(50,74))
      .then(response => {
        this.setState({ flights: response.data })
        
      })
      .catch((error) => {
        console.log(error);
      })

      await axios.get('http://localhost:5000/UserHomePage/SelectedFlight/' + window.location.pathname.substring(79,103))
      .then(response => {
        this.setState({ flights2: response.data })
        
      })
      .catch((error) => {
        console.log(error);
      })
      var f11={
        Num: "Flight Number: "+this.flightNumber()+" ",
        From: "From: "+this.flightFrom()+" ",
        To: "To: "+this.flightTo()+" ",
        Arrival: "Arrival: "+this.flightArrival()+" ",
        ArrivalDate: "Arrival Date: "+this.flightArrivalTime()+" ",
        Departure: "Departure: "+this.flightDeparture()+" ",
        DepartureDate: "Departure Date: "+this.flightDepartureTime()+" ",
        Duration: "Trip Duration: "+this.flightTripDurTime()
    }
    var f22={
        Num: "Flight Number: "+this.flightNumber2()+" ",
        From: "From: "+this.flightFrom2()+" ",
        To: "To: "+this.flightTo2()+" ",
        Arrival: "Arrival: "+this.flightArrival2()+" ",
        ArrivalDate: "Arrival Date: "+this.flightArrivalTime2()+" ",
        Departure: "Departure: "+this.flightDeparture2()+" ",
        DepartureDate: "Departure Date: "+this.flightDepartureTime2()+" ",
        Duration: "Trip Duration: "+this.flightTripDurTime2()
    }

    this.setState({f1:f11});
    this.setState({f2:f22});
    this.EmailItin();
      
  }



  flightFrom() {

    return this.state.flights.From;
 
  }
  flightTo() {

  return this.state.flights.To;

  }
flightArrival() {

  return (this.state.flights.Arrival+"").substring(0,10);

} 
flightArrivalTime() {

  return (this.state.flights.Arrival+"").substring(11,16);

} 
flightDeparture() {

  return (this.state.flights.Departure+"").substring(0,10);

}

flightDepartureTime() {

  return (this.state.flights.Departure+"").substring(11,16);

} 

flightTripDurTime() {
  const x= this.flightArrivalTime()+"";
  const y= this.flightDepartureTime()+"";
  const z= "Hours: "+Math.abs(Number.parseInt(x.substring(0,2))-Number.parseInt(y.substring(0,2)))+":"+ Math.abs(Number.parseInt(x.substring(3))-Number.parseInt(y.substring(3)));
  const x2=this.flightArrival()+"";
  const y2=this.flightDeparture()+"";
  const z2="Days: "+Math.abs(Number.parseInt(x2.substring(8))-Number.parseInt(y2.substring(8)));
  return z2 +" "+z ;

} 


flightNumber() {
 
  
  return window.location.pathname.substring(70,74);
} 


flightCabinClass() {
  if(window.location.pathname.substring(75,76)=="1")
    return "Business";
    if(window.location.pathname.substring(75,76)=="2")
    return "First Class";
    if(window.location.pathname.substring(75,76)=="3")
    return "Economy";
    return "";

}

flightBaggageAllowance() {

  if(window.location.pathname.substring(75,76)=="1"){
      return "2x40 1x20";
  }else{
    if(window.location.pathname.substring(75,76)=="2"){
      return "2x35 1x15";
    }else{
      return "2x30 1x15";
    }
  }
  return "";

}


flightFrom2() {

    return this.state.flights2.From;
 
  }
  flightTo2() {

  return this.state.flights2.To;

  }
flightArrival2() {

  return (this.state.flights2.Arrival+"").substring(0,10);

} 
flightArrivalTime2() {

  return (this.state.flights2.Arrival+"").substring(11,16);

} 
flightDeparture2() {

  return (this.state.flights2.Departure+"").substring(0,10);

}

flightDepartureTime2() {

  return (this.state.flights2.Departure+"").substring(11,16);

} 

flightTripDurTime2() {
  const x= this.flightArrivalTime()+"";
  const y= this.flightDepartureTime()+"";
  const z= "Hours: "+Math.abs(Number.parseInt(x.substring(0,2))-Number.parseInt(y.substring(0,2)))+":"+ Math.abs(Number.parseInt(x.substring(3))-Number.parseInt(y.substring(3)));
  const x2=this.flightArrival()+"";
  const y2=this.flightDeparture()+"";
  const z2="Days: "+Math.abs(Number.parseInt(x2.substring(8))-Number.parseInt(y2.substring(8)));
  return z2 +" "+z ;

} 


flightNumber2() {
  return window.location.pathname.substring(99,103);
} 


flightCabinClass2() {
  if(window.location.pathname.substring(77,78)=="1")
    return "Business";
    if(window.location.pathname.substring(77,78)=="2")
    return "First Class";
    if(window.location.pathname.substring(77,78)=="3")
    return "Economy";
    return "";

}

flightBaggageAllowance2() {

  if(window.location.pathname.substring(77,78)=="1"){
      return "2x40 1x20";
  }else{
    if(window.location.pathname.substring(77,78)=="2"){
      return "2x35 1x15";
    }else{
      return "2x30 1x15";
    }
  }
  return "";

}

EmailItin(){
    
    
    axios.post('http://localhost:5000/UserHomePage/EmailItin/'+window.location.pathname.substring(25,49),this.state)
      .then(res=>alert("Email Have Been Sent Successfully"));
    //   console.log(this.state.flightSearched)
    alert("Email has been Sent");


}
  

  render() {
    return (

        <div>
        <div className=" ">
        <nav className="navbar navColor navbar-dark navbar-expand-lg ">
        <Link to={"/UserHomePage/"+window.location.pathname.substring(25,49)} className="navbar-brand">FSR</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
        <li><Link to={"/UserHomePage/userSearch/"+window.location.pathname.substring(25,49)} className="nav-link">Search</Link></li>
        <li><Link to={"/UserHomePage/reservationList/"+(window.location.pathname.substring(25,49))} className="nav-link">Reservations</Link></li>
        <li><Link to={"/UserHomePage/editUser/"+(window.location.pathname.substring(25,49))} className="nav-link">Edit Personal Information</Link></li>
        <li className='signoutPos'><Link to="/" className="nav-link">Sign out</Link></li>
        </ul>
        </div>
      </nav>
      <div className='container'>
      <h3>Selected Departure Flight</h3>
      <table className="table container">
      
          <thead className="thead-light">
            <tr>
            <th>Flight Number</th>
            <th>Cabin Class</th>
            <th>Flight Baggage Allowance</th>
            <th>From</th>
            <th>To</th>
            <th>Departure Date</th>
            <th>Departure Time</th>
            <th>Arrival Date</th>
            <th>Arrival Time</th>
            <th>Duration Time</th>       
            </tr>
          </thead>
          <tbody>
          <td>{this.flightNumber()}</td>
          <td> {this.flightCabinClass()}</td>
          <td>{this.flightBaggageAllowance()}</td>
          <td>{this.flightFrom()}</td>
          <td>{this.flightTo()}</td>
          <td>{this.flightArrival()}</td>
          <td>{this.flightArrivalTime()}</td>
          <td>{this.flightDeparture()}</td>
          <td>{this.flightDepartureTime()}</td>
          <td>{this.flightTripDurTime()}</td>
          </tbody>
        </table>
        <br></br>
        <br></br>
        <br></br>
        <h3>Selected Return Flight</h3>
      <table className="table container">
      
          <thead className="thead-light">
            <tr>
            <th>Flight Number</th>
            <th>Cabin Class</th>
            <th>Flight Baggage Allowance</th>
            <th>From</th>
            <th>To</th>
            <th>Departure Date</th>
            <th>Departure Time</th>
            <th>Arrival Date</th>
            <th>Arrival Time</th>
            <th>Duration Time</th>       
            </tr>
          </thead>
          <tbody>
          <td>{this.flightNumber2()}</td>
          <td> {this.flightCabinClass2()}</td>
          <td>{this.flightBaggageAllowance2()}</td>
          <td>{this.flightFrom2()}</td>
          <td>{this.flightTo2()}</td>
          <td>{this.flightArrival2()}</td>
          <td>{this.flightArrivalTime2()}</td>
          <td>{this.flightDeparture2()}</td>
          <td>{this.flightDepartureTime2()}</td>
          <td>{this.flightTripDurTime2()}</td>
          </tbody>
        </table>
        <button className='GButton' onClick={() =>{ this.EmailItin() }}>Email</button>
        <Link to ={"/UserHomePage/"+window.location.pathname.substring(25,49)}> <button className='GButton'>HomePage</button></Link>
      </div>
      </div>
      </div>




    )
  }
}