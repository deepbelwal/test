import React,{Component} from 'react';
// import ReactDOM from "react-dom"
// import Select from 'react-select-search'
import Axios from 'axios';
// import SearchField from "react-search-field";
var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJkZWVwYWsuYmVsd2FsQG5pbmVsZWFwcy5jb20iLCJpYXQiOjE1NTUwNzE4NzMsImV4cCI6MTU1NTEwMDY3M30.E8nU1v10F8upSNxYHtG-q-yb2pHL6MUdwUTmfE7gdMk"

class App extends Component {
  constructor(){
    super()
    this.state = {
    selectedOption: null,
    data:[],
    options: []
  }
  this.handleChange = this.handleChange.bind(this);
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.items
    });
  }
 
  handleChange(e) {
    // Variable to hold the original version of the list
let currentList = [];
    // Variable to hold the filtered list before putting into state
let newList = [];

    // If the search bar isn't empty
if (e.target.value !== "") {
        // Assign the original list to currentList
    currentList = this.props.items;

        // Use .filter() to determine which items should be displayed
        // based on the search terms
    newList = currentList.filter(item => {
            // change current item to lowercase
    const lc = item.toLowerCase();
            // change search term to lowercase
    const filter = e.target.value.toLowerCase();
            // check to see if the current list item includes the search term
            // If it does, it will be added to newList. Using lowercase eliminates
            // issues with capitalization in search terms and search content
    return lc.includes(filter);
  });
} else {
        // If the search bar is empty, set newList to original task list
  newList = this.props.items;
}
    // Set the filtered state based on what our rules added to newList
this.setState({
  filtered: newList
});
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
    this.setState({
      filtered: this.props.items
    });
  }
  render() {
    // const { selectedOption } = this.state;

    return (
     
      <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
//       <SearchField
//         placeholder="Search..."
//         onChange={this.handleChange.bind(this)}
//         searchText="This is initial search text"
//         classNames="test-class"
// />
    );
  }
}
export default App;