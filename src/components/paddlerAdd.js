import React, { Component } from 'react';
import FormFields from '../widgets/Forms/formFields'
import { firebaseDB } from '../firebase'
import { Redirect } from 'react-router-dom'


class PaddlerAdd extends Component {
    state = {
        redirect: false,
        formData: {
            firstName: {
                element: 'input',
                value: 'test firstName',
                label: true,
                labelText: 'First Name',
                config: {
                    name: 'firstName_input',
                    type: 'text',
                    placeholder: ''
                },
                validation: {
                    required: true,
                    minLen: 2
                },
                valid: true,
                touched: true,
                validationMessage: ''
            },
            LastName: {
                element: 'input',
                value: 'test lastName',
                label: true,
                labelText: 'Last Name',
                config: {
                    name: 'lastName_input',
                    type: 'text',
                    placeholder: ''
                },
                validation: {
                    required: true,
                    minLen: 2
                },
                valid: true,
                touched: true,
                validationMessage: ''
            },    
            Weight: {
                element: 'input',
                value: '150',
                label: true,
                labelText: 'Weight',
                config: {
                    name: 'weight_input',
                    type: 'text',
                    placeholder: ''
                },
                validation: {
                    required: true,
                    minLen: 2
                },
                valid: true,
                touched: true,
                validationMessage: ''
            },   
            Pref: {
                element: 'select',
                value: 'either',
                label: true,
                labelText: 'Side Preference',
                config: {
                    name: 'pref_input',
                    option: [
                        {val: 'either', text: 'Either'},
                        {val: 'left', text: 'Left'},
                        {val: 'right', text: 'Right'}
                        ]
                },
                validation: {
                    required: true,
                },
                valid: true,
                touched: true,
                validationMessage: ''
            },             
        }
    }
    submitForm = (event) => {
        console.log("submit", this.state.formData)
        event.preventDefault()
        let dataToSubmit = {}
        let formIsValid = true
        
        for(let key in this.state.formData){
            dataToSubmit[key] = this.state.formData[key].value
            
            console.log(formIsValid)
            console.log(this.state.formData[key])
        }
        for(let key in this.state.formData){
            formIsValid = this.state.formData[key].valid && formIsValid
        }
        
        if(formIsValid){
            firebaseDB.ref('paddlers').push(dataToSubmit)
                .then(() => {
                    console.log("new paddler added")
                    this.setState({ redirect: true })
                })
                .catch((e) => {
                    console.log("error: ", e)
                })
        }
    }
    updateForm = (newState) => {
        this.setState({
            formData: newState
        })
    }
    render() {
    const { redirect } = this.state;

     if (redirect) {
         console.log("redirect hit")
       return <Redirect to='/paddlers'/>;
     }
    return (
        <div>

            <form onSubmit={this.submitForm}>
                <FormFields 
                    formData={this.state.formData}
                    change={(newState) => this.updateForm(newState)}
                    onblur={(newState) => this.updateForm(newState)}
                /><br></br>
                <button type='submit' className="btn btn-default">Submit</button>
            </form>
        </div>
        )
    }
}

export default PaddlerAdd