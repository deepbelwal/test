import React, {Component} from 'react'
import SearchInput, {createFilter} from 'react-search-input'
import Axios from "axios";
// import emails from './mails'
const KEYS_TO_FILTERS = ['Checklist_id', 'Checklist_name', 'dest.name']
var token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJpc2hpdGEuc2hhcm1hQG5pbmVsZWFwcy5jb20iLCJpYXQiOjE1NTUxNDY4NTgsImV4cCI6MTU1NTE3NTY1OH0.XViRHoRHaPAtcBTGV05VrMcYclTH0tEJuuJB01rBSJg"

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: '',
      source:[]
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }
  async componentDidMount(){
            console.log(token)
            await Axios.get(`https://6ba1ec95.ngrok.io/searchdata`
            ,{headers:{
                'Authorization' :'Bearer ' + token 
            }})
            .then(res=>{
              console.log(res.data)
              let searchdata = res.data.searchdata.map(i => {
                return({label: i.checklist_name, value: i.checklist_id, category: i.category, sub: i.sub})
              })
              this.setState({source:searchdata})
              this.state.source.push(searchdata)
              console.log(this.state.source)
            })
          }
  render () {
    const filteredEmails = this.state.source.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        {filteredEmails.map(email => {
          return (
            <div className="mail" key={this.state.source.checklist_id}>
              <div className="from">{email.user.name}</div>
              <div className="subject">{email.subject}</div>
            </div>
          )
        })}
      </div>
    )
  }

  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}

export default App;