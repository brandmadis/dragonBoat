import React, { Component } from 'react';
import FormFields from '../widgets/Forms/formFields'
import { firebaseDB } from '../firebase'
import { Redirect } from 'react-router-dom'
import Uploader from '../widgets/FileUploader/fileUploader'

class PaddlerAdd extends Component {
    state = {
        redirect: false,
        loading: false,
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
                valid: true,
                touched: true,
                validationMessage: ''
            },
            lastName: {
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
                valid: true,
                touched: true,
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
                    minLen: 2,
                    number: true
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
            gender: {
                element: 'select',
                value: 'female',
                label: true,
                labelText: 'Gender',
                config: {
                    name: 'gender_input',
                    option: [
                        {val: 'female', text: 'Female'},
                        {val: 'male', text: 'Male'}
                        ]
                },
                validation: {
                    required: true,
                },
                valid: true,
                touched: true,
                validationMessage: ''
            },             
            // Image: {
            //     element: 'input',
            //     value: '',
            //     valid: true,
                // label: true,
                // labelText: 'Image Url',
                // config: {
                //     name: 'image_input',
                //     type: 'text',
                //     placeholder: ''
                // },
                // validation: {
                //     required: false,
                //     minLen: 2
                // },
                // touched: true,
                // validationMessage: ''
            // },  
            // Active: {
            //     element: 'input',
            //     value: true,
            //     label: true,
            //     labelText: 'active',
            //     config: {
            //         name: 'active_input',
            //         type: 'text',
            //         placeholder: ''
            //     },
            //     validation: {
            //         required: false,
            //         minLen: 0
            //     },
            //     valid: true,
            //     touched: true,
            //     validationMessage: ''
            // },             
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
    
    updateForm = (newFormData, element_id) => {
        console.log("updateform", newFormData[element_id])
        
        // const copyFormData = {
        //     ...this.state.formData
        // }
        // const newElement = {
        //     ...newFormData[element.id]
        // }
        // const newElement = newFormData[element_id]
        
        // if(element[id].value === ''){
        //     newElement.value = element.event.target.value
        // } else {
        //     newElement.value = content
        // }
        // if(newElement.blur){
        //     let validData = this.validate(newElement)
        //     newElement.valid = validData[0]
        //     newElement.validationMessage = validData[1]
        // }
        // newElement.touched = element.blur
        // console.log(newElement)
        // copyFormData[element_id] = newElement
        
        this.setState({
            formData: newFormData
        })
    }
    
    // updateForm = (element, content = 'test') => {
    //     console.log("updateform", element.id)
        
    //     const newFormData = {
    //         ...this.state.formData
    //     }
    //     const newElement = {
    //         ...newFormData[element.id]
    //     }
    //     // const newElement = newFormData[element.id]
        
    //     if(content === ''){
    //         newElement.value = element.event.target.value
    //     } else {
    //         newElement.value = content
    //     }
    //     if(element.blur){
    //         let validData = this.validate(newElement)
    //         newElement.valid = validData[0]
    //         newElement.validationMessage = validData[1]
    //     }
    //     newElement.touched = element.blur
    //     console.log(newElement)
    //     newFormData[element.id] = newElement
        
    //     this.setState({
    //         formData: newFormData
    //     })
    // }
    validate = (element) => {
        let error = [true, '']
        console.log("element", element)
        if(element.validation.required){
            const valid = element.value.trim() !== ''
            const message = `${!valid ? 'This field is required' : ''}`
            error = !valid ? [valid, message] : error
        }
        return error
    }
    storeFilename = (filename) => {
        this.updateForm({id: 'image'}, filename)
    }
    submitButton = () => (
        this.state.loading ?
            'loading...' :
            <div>
                <button type="submit">Submit</button>
            </div>
    )
    showError = () => (
        this.state.postError !== '' ?
            <div>{this.state.postError} </div> :
            ''
    )
    render() {
    const { redirect } = this.state;

     if (redirect) {
         console.log("redirect hit")
       return <Redirect to='/paddlers'/>;
     }
    return (
        <div> 
            Add new paddler
            <form onSubmit={this.submitForm}>
                <Uploader 
                    filename={(filename)=>this.storeFilename(filename)}
                    />
                <FormFields 
                    formData={this.state.formData}
                    change={(newState, id) => this.updateForm(newState, id)}
                    onblur={(newState) => this.updateForm(newState)}
                /><br></br>
                { this.submitButton() }
                { this.showError() }
                {/*
                <button type='submit' className="btn btn-default">Submit</button>
                */}
            </form>
        </div>
        )
    }
}

export default PaddlerAdd