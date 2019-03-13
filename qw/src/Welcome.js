import React, {Component} from 'react';

import GoogleLogin from 'react-google-login';
import {PostData} from './PostData';
import {Redirect} from 'react-router-dom';

import './Welcome.css';


class Welcome extends Component {
constructor(props) {
    super(props);
       this.state = {
       loginError: false,
       redirect: false
};
this.signup = this.signup.bind(this);
}

signup(res, type) {
     let postData;
 
    if (type === 'google' && res.w3.U3) {
    postData = {
      name: res.w3.ig,
      provider: type,
      email: res.w3.U3,
      provider_id: res.El,
      token: res.Zi.access_token,
      provider_pic: res.w3.Paa
    };
}

if (postData) {
PostData('signup', postData).then((result) => {
   let responseJson = result;
   sessionStorage.setItem("userData", JSON.stringify(responseJson));
   this.setState({redirect:true});
});
} else {}
}

render() {

if (this.state.redirect || sessionStorage.getItem('userData')) {
    return (<Redirect to={'./hh'}/>)
}



const responseGoogle = (response) => {
    console.log("google console");
    console.log(response);
    this.signup(response, 'google');
}

return (

<div >
 
<GoogleLogin
 clientId="411712102453-i5s2q52lkrav2nlji4075pqs8lmbi9cs.apps.googleusercontent.com"
 buttonText="Login with Google"  
 onSuccess={responseGoogle}
 onFailure={responseGoogle} className="row"/>


</div>

);
}
}
export default Welcome;



// https://www.youtube.com/watch?v=Ins-7Ze29IQ  14:23