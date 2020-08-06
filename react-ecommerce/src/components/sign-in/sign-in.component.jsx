import React from 'react';

import './sign-in.style.scss';

import FormInput from '../../components/form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            email:'',
            password:''
        })
    }

    handleChange = event =>{
        const { value, name } = event.target;

        this.setState({
            [name]:value
        })
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" value={this.state.email} required 
                    handleChange={this.handleChange} name="email" id="" label='Email'/>

                    <FormInput type="password" value={this.state.password} required
                    handleChange={this.handleChange} name="password" id="" label='Password' />

                    <CustomButton type="button" value="submit"> Sign In </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;