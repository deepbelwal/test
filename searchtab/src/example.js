import _ from 'lodash';
// import faker from "faker";
import React, { Component } from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react';
import Axios from "axios";
import './example.css';
// var token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJkZWVwYWsuYmVsd2FsQG5pbmVsZWFwcy5jb20iLCJpYXQiOjE1NTU3NTIyMDQsImV4cCI6MTU1NTc4MTAwNH0.y6XGHjercKrAkgpk6j049eBkNR3lYXMsQiJVK3xAgd8"
var token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJkZWVwYWsuYmVsd2FsQG5pbmVsZWFwcy5jb20iLCJpYXQiOjE1NTU5MTcxODAsImV4cCI6MTU1NTk0NTk4MH0.pMcFgB6VaxkPpMbE81DYiHObFlBwA4Jnx11jXmZqIck"
var source={}
export default class SearchExample extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            selCheckId:0,
            selCheckCat:""
        
        }
    }
  componentWillMount() {
      console.log("Hii")
    this.resetComponent()
  }


     componentDidMount(){
                        console.log(token)
                        Axios.get(`https://9a3cb009.ngrok.io/searchdata`
                        ,{headers:{
                            'Authorization' :'Bearer ' + token 
                        }})
                        .then(async res=>{
                          console.log(res.data)
                          var data = res.data.searchdata.map(i => {
                            return({title: i.checklist_name, checklist_id: i.checklist_id, category: i.category, sub: i.sub})
                            
                          })  
                        source=data
                        console.log(this.state.data)
                        return [this.setState.data];
                          
                        })
                      }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = async (e, { result }) => {
      await this.setState({ value: result.title,
                    selCheckId:result.checklist_id,
                    selCheckCat:result.category })
                    console.log(this.state.selCheckCat)
                    console.log(this.state.selCheckId)
        this.getTask(token,this.state.selCheckId,this.state.selCheckCat).then(res=>{
            console.log(res.data)
            this.setState({data:res.data.checklistdata})
            console.log('data', this.state.data)
        })
          
    }
    async getTask(t ,checklist_id, category){   
        console.log('hhiiiii')                     //checklkistmodificationorg.js
        return await Axios.get(`https://e2d9eda4.ngrok.io/getalltasks`
        ,{headers:{
            'Authorization' :'Bearer ' + t
        },params:{
            category: category,
            checklist_id: checklist_id
        }})
        }     
  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state
    return (
      <div>
      <Grid >
        <Grid.Column width={6} >
          <Search
          className="searchbox"
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
            results={results}
            value={value}
            {...this.props}
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment>
            <Header>State</Header>
            <pre style={{ overflowX: 'auto' }}>{JSON.stringify(this.state, null, 2)}</pre>
            <Header>Options</Header>
            <pre style={{ overflowX: 'auto' }}>{JSON.stringify(source, null, 2)}</pre>
          </Segment>
        </Grid.Column>
      </Grid>
      </div>
    )
  }
}
