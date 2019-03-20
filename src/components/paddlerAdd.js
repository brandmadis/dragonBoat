import React, { Component } from 'react';
import FormFields from '../widgets/Forms/formFields'
import { firebaseDB } from '../firebase'
import { Redirect } from 'react-router-dom'


class PaddlerAdd extends Component {
    state = {
        formData: {
            firstName: {
                element: 'input',
                value: '',
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
                valid: false,
                touched: false,
                validationMessage: ''
            },
            LastName: {
                element: 'input',
                value: '',
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
                valid: false,
                touched: false,
                validationMessage: ''
            },    
            Weight: {
                element: 'input',
                value: '',
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
                valid: false,
                touched: false,
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
                touched: false,
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
        // console.log(formIsValid)
        
        if(formIsValid){
            firebaseDB.ref('paddlers').push(dataToSubmit)
                .then(() => {
                    console.log("new paddler added")
                    return <Redirect to="/paddlers" />
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
    return (
        <div>

            <form onSubmit={this.submitForm}>
                <FormFields 
                    formData={this.state.formData}
                    change={(newState) => this.updateForm(newState)}
                    onblur={(newState) => this.updateForm(newState)}
                />
                <button type='submit' className="btn btn-default">Submit</button>
            </form>
        </div>
        )
    }
}

export default PaddlerAdd