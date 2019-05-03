// import React from "react";
// import Axios from "axios";
// var token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJkZWVwYWsuYmVsd2FsQG5pbmVsZWFwcy5jb20iLCJpYXQiOjE1NTU2NTcwOTMsImV4cCI6MTU1NTY4NTg5M30.fI3tjxkrYSY_xoykzCSfqWHgGKdc62j9oSb8nUu432Y"
// class App extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         searchString: "",
//         users: []
//       };
//       this.handleChange = this.handleChange.bind(this);
//     }
  
//     componentDidMount() {
//         Axios.get(`https://e2d9eda4.ngrok.io/searchdata`
//                         ,{headers:{
//                             'Authorization' :'Bearer ' + token 
//                         }})
//                         .then(res=>{
//                             this.setState({
//                                 users: res.data.searchdata
//                               });
//                               this.refs.search.focus();

//                         })
//                     }
  
//     handleChange() {
//       this.setState({
//         searchString: this.refs.search.value
//       });
//     }
  
//     render() {
//       let _users = this.state.users;
//       let search = this.state.searchString.trim().toLowerCase();
  
//       if (search.length > 0) {
//         _users = _users.filter(function(user) {
//           return user.name.toLowerCase().match(search);
//         });
//       }
  
//       return (
//         <div>
//           <h3>React - simple search</h3>
//           <div>
//             <input
//               type="text"
//               value={this.state.searchString}
//               ref="search"
//               onChange={this.handleChange}
//               placeholder="type name here"
//             />
//             <ul>
//               {_users.map(l => {
//                 return (
//                   <li>
//                     {l.name} <a href="#">{l.email}</a>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </div>
//       );
//     }
//   }
//   export default App;
























// import React, { Component } from 'react';
// import Modal from 'react-modal';
// import Button from "react-bootstrap/Button";
// import ButtonToolbar from "react-bootstrap/ButtonToolbar";
// import {Redirect} from 'react-router-dom';
// import MDSpinner from "react-md-spinner";
// import Axios from "axios";
 
// // import './Search.css';
// const customStyles ={
//   content : {
//     maxHeight:"500px",
 
//     width:                 "500px",
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)',
//     border                : '10px solid #ccc',
//     background            : 'green',
//     overflow              : 'auto',
//     WebkitOverflowScrolling: "touch",
//     borderRadius:"4px",
//     outline:"#808080",
//     padding:"20px",
//     effect: "fadeInRight",
//   }
// };
 
// Modal.setAppElement('#root')
// var token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJpc2hpdGEuc2hhcm1hQG5pbmVsZWFwcy5jb20iLCJpYXQiOjE1NTU2NTEwMTYsImV4cCI6MTU1NTY3OTgxNn0._kHbaUtw8PFF80khhwL2kbhJHxotqc7g-ZrNRtrYNRQ"
// class Search extends Component {
//   constructor(){
//     super();
//     this.state = {
//    query: '',
//    topicBox: undefined,
//    modalIsOpen : false,
//    gotoview : false,
//    items:[],
//    isLoaded: true,
//  };
//    this.closeModal = this.closeModal.bind(this);
//    this.search = this.search.bind(this);
 
// }
 
//   handleChange({ target }) {
//       console.log("Im in handle click")
//       this.setState({[target.name]: target.value});
//       localStorage.setItem("searchItem",target.value);
 
//     }
//   open(item,index){
//   window.localStorage.removeItem('emails');
// //  sessionStorage.setItem("searched_client_id",item.client_id);
//  sessionStorage.setItem("search_email",item.checklist_name);
//  this.setState({gotoview: true});
//   console.log(item.email);
//   console.log(index);
 
// }
 
// closeModal() {
//   window.localStorage.removeItem('emails');
//   this.setState({modalIsOpen: false});
//   window.location.reload();
 
// }
 
//   search(e) {
//     e.preventDefault();
//     const result = localStorage.getItem('searchItem');                          
//     // const token = sessionStorage.getItem('token_id');
//     console.log(token)
//                         Axios.get(`https://e2d9eda4.ngrok.io/searchdata`
//                         ,{headers:{
//                             'Authorization' :'Bearer ' + token 
//                         }})
//       .then(res => {
//         console.log(res.data.searchdata)
//         var data = res.data.searchdata.map(i =>{
//           if(i.category === 'O' && i.sub === 'M'){
//             return({
//               checklist_name: i.checklist_name,
//               checklist_id: i.checklist_id,
//               category: i.category,
//               sub: i.sub,
//               status: 'Org Admin'
//             })
//           } else if(i.category === 'O' && i.sub === 'S'){
//             return({
//               checklist_name: i.checklist_name,
//               checklist_id: i.checklist_id,
//               category: i.category,
//               sub: i.sub,
//               status: 'Dashboard'
//             })
//           } else if(i.category === 'I' && i.sub === 'M'){
//             return({
//               checklist_name: i.checklist_name,
//               checklist_id: i.checklist_id,
//               category: i.category,
//               sub: i.sub,
//               status: 'Personal My Own'
//             })
//           } else if(i.category === 'P' && i.sub === 'M'){
//             return({
//               checklist_name: i.checklist_name,
//               checklist_id: i.checklist_id,
//               category: i.category,
//               sub: i.sub,
//               status: 'Team My Own'
//             })
//           } else if(i.category === 'I' && i.sub === 'S'){
//             return({
//               checklist_name: i.checklist_name,
//               checklist_id: i.checklist_id,
//               category: i.category,
//               sub: i.sub,
//               status: 'Personal Shared'
//             })
//           } else if(i.category === 'P' && i.sub === 'S'){
//             return({
//               checklist_name: i.checklist_name,
//               checklist_id: i.checklist_id,
//               category: i.category,
//               sub: i.sub,
//               status: 'Team Shared'
//             })
//           } else{
//             return null
//           }

//         })
//         this.setState({
//           isLoaded : true,
//           modalIsOpen: true,
//           items: data,
//           topicBox:'',
//         })
//         this.state.items.map(i=>{

//         })
//       });
//     }
 
//  render() {
//    if (this.state.gotoview) {
//        return (<Redirect to={'/searcheduser'}/>)
// }
//     var {isLoaded, items} = this.state;
 
//     if (!isLoaded) {
//       return (
//         <div>
//           <MDSpinner />
//         </div>
//       );
//     }
//     else{
//    return (
//      <form><b>
 
//       <i>
//        <input type='text'className="alert alert-success" role="alert" value={ this.state.topicBox }  onChange={ this.handleChange.bind(this) }
//          placeholder="Search..." /> </i></b>

//      <button onClick={this.search} name="button" className="btn btn-primary btn-md" ><span className="glyphicon glyphicon-search"></span>    Search</button><br></br><br></br>
//           <Modal
//                      isOpen = {this.state.modalIsOpen}
//                      onRequestClose = {this.closeModal}
//                      style = {customStyles}
//                      contentLabel = "Learning Modal">
//                     <span onClick = {this.closeModal}>&times;</span>
//                     <br /><br />
//                      {items.map((item,index) => (
//                               <ul>
//                                <li key={`${item.checklist_name}_{item.checklist_name}`}>
//                                  <div>
//                          {item.status}<br></br>Checklist Name - {item.checklist_name}
//                         <ButtonToolbar>
//                         <Button style={{backgroundColor:"white",marginLeft:"325px", marginTop:"-36px"}} onClick={this.open.bind(this,item, index)} variant="Danger">View Checklist</Button>
//                              </ButtonToolbar>
//                          </div>
//                                </li>
//                                <br /><br />
//                               </ul>
 
 
//                            ))}
 
//                    </Modal>
 
 
//      </form>
//    );
//  }
//  }
// }
 
// export default Search