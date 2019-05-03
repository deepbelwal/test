import React, { Component } from 'react';
import './App.css';
import SearchInput, {createFilter} from 'react-search-input';
import Axios from "axios";
import emails from './mails';
 
const KEYS_TO_FILTERS = ['user.name', 'subject', 'dest.name']
 
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }
  componentDidMount(){
    Axios.get()
    Axios.get(`"https://542e1263.ngrok.io/searchdata`
    ,{headers:{
        'Authorization' :'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJpc2hpdGEuc2hhcm1hQG5pbmVsZWFwcy5jb20iLCJpYXQiOjE1NTUwNTg1NDQsImV4cCI6MTU1NTA4NzM0NH0.imdyBpd9nQkO-qiKjiX46QMiFJVD1vHigvK3H5HEvu8"
    },params:{
        
        category: category,
        checklist_id: checklist_id
    }})
  }

 
  render () {
    const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
 
    return (
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        {filteredEmails.map(email => {
          return (
            <div className="mail" key={email.id}>
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
