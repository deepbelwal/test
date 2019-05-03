import React, { Component } from 'react';
import Modal from 'react-modal';
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import {Redirect} from 'react-router-dom';
import MDSpinner from "react-md-spinner";
 
import './Search.css';
const customStyles ={
  content : {
    maxHeight:"500px",
 
    width:                 "500px",
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    border                : '10px solid #ccc',
    background            : '#4F97A3',
    overflow              : 'auto',
    WebkitOverflowScrolling: "touch",
    borderRadius:"4px",
    outline:"#808080",
    padding:"20px",
    effect: "fadeInRight",
  }
};
 
 Modal.setAppElement('#root')
 
class Search extends Component {
  constructor(){
    super();
 this.state = {
   query: '',
   topicBox: undefined,
   modalIsOpen : false,
   gotoview : false,
   items:[],
   isLoaded: true,
 };
   this.closeModal = this.closeModal.bind(this);
   this.search = this.search.bind(this);
 
}
 
  handleChange({ target }) {
 
      this.setState({[target.name]: target.value});
      localStorage.setItem("emails",target.value);
 
    }
  open(item,index){
  window.localStorage.removeItem('emails');
 sessionStorage.setItem("searched_client_id",item.client_id);
 sessionStorage.setItem("search_email",item.email);
 this.setState({gotoview: true});
  console.log(item.email);
  console.log(index);
 
}
 
closeModal() {
  window.localStorage.removeItem('emails');
  this.setState({modalIsOpen: false});
  window.location.reload();
 
}
 
  search(e) {
    e.preventDefault();
      const result = localStorage.getItem('emails');
 
 
        const token = sessionStorage.getItem('token_id');
    fetch(`https://0295d672.ngrok.io/usersearch?name=${result}`,{
    mode:"cors",
    headers:{
      'Authorization':token,
      'Accept':'application/json',
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin': '*'
    },
  })
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded : true,
          modalIsOpen: true,
          items: json,
          topicBox:'',
        })
      });
    }
 
 render() {
   if (this.state.gotoview) {
       return (<Redirect to={'/searcheduser'}/>)
}
    var {isLoaded, items} = this.state;
 
    if (!isLoaded) {
      return (
        <div>
          <MDSpinner />
        </div>
      );
    }
    else{
   return (
     <form><b>
 
      <i><input className="alert alert-success" role="alert" value={ this.state.topicBox }  onChange={ this.handleChange.bind(this) }
         placeholder="Search..." style ={{width: "500px", height: "49px",borderRadius: "6px",marginLeft: "-300px",color:"black",fontFamily:"Garamond",fontSize:"17px"}}
 
       /> </i></b>
     <button onClick={this.search} name="button" className="btn btn-primary btn-md" ><span className="glyphicon glyphicon-search"></span>    Search</button><br></br><br></br>
          <Modal
                     isOpen = {this.state.modalIsOpen}
                     onRequestClose = {this.closeModal}
                     style = {customStyles}
                     contentLabel = "Learning Modal">
         <span onClick = {this.closeModal}>&times;</span>
<br /><br />
                     {items.map((item,index) => (
                              <ul>
                               <li key={`${item.name}_{item.email}`}>
                                 <div>
                         {item.name}<br></br>Email - {item.email}
                        <ButtonToolbar>
                    <Button style={{backgroundColor:"white",marginLeft:"325px", marginTop:"-36px"}} onClick={this.open.bind(this,item, index)} variant="Danger">View Profile</Button>
                             </ButtonToolbar>
                         </div>
                               </li>
                               <br /><br />
                              </ul>
 
 
                           ))}
 
                   </Modal>
 
 
     </form>
   );
 }
 }
}
 
export default Search