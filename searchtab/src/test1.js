import React,{Component} from 'react';
import ReactDOM from "react-dom"
// import Select from 'react-select-search'
// import Axios from 'axios';
import SearchField from "react-search-field";
var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJkZWVwYWsuYmVsd2FsQG5pbmVsZWFwcy5jb20iLCJpYXQiOjE1NTUwNzE4NzMsImV4cCI6MTU1NTEwMDY3M30.E8nU1v10F8upSNxYHtG-q-yb2pHL6MUdwUTmfE7gdMk"

// let users = [
//   {
//     name: "Leonard Rogers",
//     email: "egestas@justonecante.org"
//   },
//   {
//     name: "Walker Pace",
//     email: "erat.eget.tincidunt@idsapienCras.org"
//   },
//   {
//     name: "Lance Mcintyre",
//     email: "Nam.ligula@quamvel.net"
//   },
//   {
//     name: "Rudyard Conway",
//     email: "sit@nunc.org"
//   },
//   {
//     name: "Chadwick Oneal",
//     email: "laoreet@dictum.edu"
//   },
//   {
//     name: "Isaiah Kent",
//     email: "diam.dictum@lobortisquam.co.uk"
//   },
//   {
//     name: "Griffith Perkins",
//     email: "congue@acfermentumvel.ca"
//   },
//   {
//     name: "Lawrence Wheeler",
//     email: "ac.libero@Duisac.org"
//   },
//   {
//     name: "Preston Walker",
//     email: "egestas.rhoncus@eudui.co.uk"
//   },
//   {
//     name: "Simon Brewer",
//     email: "nunc.sed@Fuscediamnunc.co.uk"
//   }
// ];

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchString: "",
//       users: []
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   componentDidMount() {
//     console.log(token)
//           await Axios.get(`https://542e1263.ngrok.io/searchdata`
//           ,{headers:{
//               'Authorization' :'Bearer ' + token 
//           }})
//           .then(res=>{
//             console.log(res.data)
//             let searchdata = res.data.searchdata.map(i => {
//               return({name: i.checklist_name, value: i.checklist_id})
//             })
//             this.setState({data:searchdata})
//             options.push(searchdata)
//             console.log(options)
//           })
//     this.setState({
//       users: users
//     });
//     this.refs.search.focus();
//   }
//   handleChange() {
//     this.setState({
//       searchString: this.refs.search.value
//     });
//   }

//   render() {
//     let _users = this.state.users;
//     let search = this.state.searchString.trim().toLowerCase();

//     if (search.length > 0) {
//       _users = _users.filter(function(user) {
//         return user.name.toLowerCase().match(search);
//       });
//     }

//     return (
//       <div>
//         <h3>React - simple search</h3>
//         <div>
//           <input
//             type="text"
//             value={this.state.searchString}
//             ref="search"
//             onChange={this.handleChange}
//             placeholder="Type Checklist Name Here"
//           />
//           <ul>
//             {_users.map(l => {
//               return (
//                 <li>
//                   {l.name} <a href="#">{l.email}</a>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }
// export default App;
// // ReactDOM.render(<Search />, document.getElementById("app"));

// let users = [
//   {
//     name: "Leonard Rogers",
//     email: "egestas@justonecante.org"
//   },
//   {
//     name: "Walker Pace",
//     email: "erat.eget.tincidunt@idsapienCras.org"
//   },
//   {
//     name: "Lance Mcintyre",
//     email: "Nam.ligula@quamvel.net"
//   },
//   {
//     name: "Rudyard Conway",
//     email: "sit@nunc.org"
//   },
//   {
//     name: "Chadwick Oneal",
//     email: "laoreet@dictum.edu"
//   },
//   {
//     name: "Isaiah Kent",
//     email: "diam.dictum@lobortisquam.co.uk"
//   },
//   {
//     name: "Griffith Perkins",
//     email: "congue@acfermentumvel.ca"
//   },
//   {
//     name: "Lawrence Wheeler",
//     email: "ac.libero@Duisac.org"
//   },
//   {
//     name: "Preston Walker",
//     email: "egestas.rhoncus@eudui.co.uk"
//   },
//   {
//     name: "Simon Brewer",
//     email: "nunc.sed@Fuscediamnunc.co.uk"
//   }
// ];

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchString: "",
//       users: []
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   componentDidMount() {
//     this.setState({
//       users: users
//     });
//     this.refs.search.focus();
//   }

//   handleChange() {
//     this.setState({
//       searchString: this.refs.search.value
//     });
//   }

//   render() {
//     let _users = this.state.users;
//     let search = this.state.searchString.trim().toLowerCase();

//     if (search.length > 0) {
//       _users = _users.filter(function(user) {
//         return user.name.toLowerCase().match(search);
//       });
//     }

//     return (
//       <div>
//         <h3>React - simple search</h3>
//         <div>
//           <input
//             type="text"
//             value={this.state.searchString}
//             ref="search"
//             onChange={this.handleChange}
//             placeholder="type name here"
//           />
//           <ul>
//             {_users.map(l => {
//               return (
//                 <li>
//                   <label>
//                   {l.name} <a href="#">{l.email}</a>
//                   </label>
                 
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }
// export default App
// var options = [];

// class App extends Component {
//     constructor(){
//       super()
//       this.state = {
//       selectedOption: null,
//       data:[],
//       options: []
//     }
//     }
//     handleChange = (selectedOption) => {
//       this.setState({ selectedOption });
//       console.log(`Option selected:`, selectedOption);
//     }
//     async componentDidMount(){
//       console.log(token)
//       await Axios.get(`https://542e1263.ngrok.io/searchdata`
//       ,{headers:{
//           'Authorization' :'Bearer ' + token 
//       }})
//       .then(res=>{
//         console.log(res.data)
//         let searchdata = res.data.searchdata.map(i => {
//           return({name: i.checklist_name, value: i.checklist_id})
//         })
//         this.setState({data:searchdata})
//         options.push(searchdata)
//         console.log(options)
//       })
//     }
//     render() {
//       const { selectedOption,options } = this.state;
//       return (
//         /* Simple example */
//         <div className="select-search-box">
//            <SelectSearch options={options} 
//            value={selectedOption} 
//            name="language" 
//            placeholder="Search For Checklist" />
//         </div>
//       );
//     }
//   }
//   export default App;




  // class SelectBox1 extends Component {
  //   constructor(props) {
  //     super(props);
      
  //     this.state = { value: 'select'};
  //   }
  //   onChange(e) {
  //     this.setState({
  //       value: e.target.value
  //     })
  //   }
  //   render() {
  //     return (
  //       <div className="form-group">
  //         <label htmlFor="select1" >Select1</label>
  //         <select value={this.state.value} onChange={this.onChange.bind(this)} className="form-control">
  //           <option value="select">Select an Option</option>
  //           <option value="First">First</option>
  //           <option value="Second">Second</option>
  //           <option value="Third">Third</option>
  //         </select>
  //       </div>
  //     )
  //   }
  // }
  
  // // a select with dynamically created options
  // const options = ["Select an Option", "First Option", "Second Option", "Third Option"]
  
  // class SelectBox2 extends React.Component {
  //   constructor(props) {
  //     super(props);
      
  //     this.state = { value: 'Select an Option'};
  //   }
  //   onChange(e) {
  //     this.setState({
  //       value: e.target.value
  //     })
  //   }
  //   render() {
  //     return (
  //       <div className="form-group">
  //         <label htmlFor="select2" >Select2</label>
  //         <select value={this.state.value} onChange={this.onChange.bind(this)} className="form-control">
  //         {options.map(option => {
  //           return <option value={option} key={option} >{option}</option>
  //         })}
  //       </select>
  //       </div>
        
  //     )
  //   }
  // }
  
  // const App = () => {
  //   return (
  //     <div className="container">
  //       <div className="row">
  //         <div className="col-sm-4 col-sm-push-4">
  //           <SelectBox1 />
  //           <SelectBox2 />
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }
  
  
  // ReactDOM.render(<App />, document.getElementById('root'));
  // export default App;

























class App extends Component {
  constructor(){
    super()
    this.state = {
    selectedOption: null,
    data:[],
    options: []
  }
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  async componentDidMount(){
    console.log(token)
    await Axios.get(`https://9d52af2b.ngrok.io/searchdata`
    ,{headers:{
        'Authorization' :'Bearer ' + token 
    }})
    .then(res=>{
      console.log(res.data)
      let searchdata = res.data.searchdata.map(i => {
        return({label: i.checklist_name, value: i.checklist_id, category: i.category, sub: i.sub})
      })
      this.setState({data:searchdata})
      this.state.options.push(searchdata)
      console.log(this.state.options)
    })
  }
  render() {
    const { selectedOption } = this.state;

    return (
     
 
      <SearchField
        placeholder="Search..."
        onChange={onChange}
        searchText="This is initial search text"
        classNames="test-class"
/>



      // <Select
      //   value={selectedOption}
      //   onChange={this.handleChange}
      //   options={this.state.options}
      //   placeholder="Search the Checklist"
      // />
    );
  }
}
export default App;