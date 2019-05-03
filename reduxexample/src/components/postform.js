import React, { Component } from 'react'

export default class postform extends Component {
    constructor(){
        super();
        this.state={
            title:"",
            body:""
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value,
            [e.target.body]:e.target.value
            });

    }
    onSubmit(e){
        e.preventDefault();
        const post={
            title:this.state.title,
            body:this.state.body
        }
        fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(post)
    })  
    .then(res=>res.json())
    .then(data=>console.log(data))
    }
  render() {
    return (
      <div>
        <h1>Add Posts</h1>
        <form onSubmit={this.onSubmit}>
            <div>
                <label>Title:</label>
                <input 
                    type="text" 
                    onChange={this.onChange}
                    value={this.state.title}
                    name="title"
                    autofocus="true"
                />
            </div>
            <br/>
            <div>
                <label>Body:</label>
                <textarea
                    name="body" 
                    rows="4" cols="50"
                    value={this.state.body}
                    onChange={this.onChange}
                    autofocus="true"
                    maxlength="150"
                />
            </div>
            <br/>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
