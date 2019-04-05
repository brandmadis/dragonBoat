import React, { Component } from 'react';
import FormFields from '../widgets/Forms/formFields2'
import { firebasePaddlers } from '../firebase'
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
                    placeholder: 'First Name'
                },
                validation: {
                    required: true,
                    minLen: 2
                },
                valid: false,
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
                    placeholder: 'Last Name'
                },
                validation: {
                    required: true,
                    minLen: 2
                },
                valid: false,
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
                    type: 'number',
                    placeholder: 'Weight'
                },
                validation: {
                    required: true,
                    minLen: 2,
                    number: true
                },
                valid: false,
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
                    options: [
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
            image: {
              element: 'image',
              value: '',
              valid: true
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
    updateForm = (element, content = '') => {
        const newformData = {
            ...this.state.formData
        }
        const newElement = {
            ...newformData[element.id]
        }
        if(content === ''){
            newElement.value = element.event.target.value
        } else {
            newElement.value = content
        }
        
        if(element.blur){
            let validData = this.validate(newElement)
            newElement.valid = validData[0]
            newElement.validationMessage = validData[1]
        }
        newElement.touched = element.blur
        
        newformData[element.id] = newElement
        
        this.setState({
            formData: newformData
        })
    }
    validate = (element) => {
        let error = [true, '']
        if(element.validation.required){
            const valid = element.value.trim() !==''
            const message = `${!valid ? 'This field is required':''}`
            error = !valid ? [valid, message]: error
        }
        return error
    }
    
    submitForm = (event) => {
        event.preventDefault()
            let dataToSubmit = {}
            let formIsValid = true;        
            for(let key in this.state.formData){
                dataToSubmit[key] = this.state.formData[key].value
            }
            for(let key in this.state.formData){
                formIsValid = this.state.formData[key].valid && formIsValid;
            }    
            console.log(dataToSubmit)
            if(formIsValid){
                this.setState({
                    loading: true,
                    postError: ''
                })
              firebasePaddlers.orderByChild('id')
              .limitToLast(1).once('value')
              .then( snapshot => {
                  snapshot.forEach(childSnapshot => {
                  })
                   
                   
                    firebasePaddlers.push(dataToSubmit)
                    .then( article => {
                        this.props.history.push(`/paddlers/`)
                    }).catch( e => {
                        this.setState({
                            postError: e.message
                        })
                    })
                     
               })

            } else {
                console.log("not valid")
                this.setState({
                    postError: 'Something went wrong'
                })
            }

    }
    submitButton = () => (
        this.state.loading ? 
            'loading...' :
            <div>
                <button type="submit"> Submit</button>
            </div>
    )  
    showError = () => (
        this.state.postError !== '' ?
            <div>{this.state.postError} </div> :
            ''
    ) 
    
    storeFilename = (filename) => {
        this.updateForm({id: 'image'}, filename)
        
    }
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
                    id={'firstName'}
                    formData={this.state.formData.firstName}
                    change={(element) => this.updateForm(element)}
                />
                <FormFields 
                    id={'lastName'}
                    formData={this.state.formData.lastName}
                    change={(element) => this.updateForm(element)}
                />
                <FormFields 
                    id={'Weight'}
                    formData={this.state.formData.Weight}
                    change={(element) => this.updateForm(element)}
                />
                <FormFields 
                    id={'Pref'}
                    formData={this.state.formData.Pref}
                    change={(element) => this.updateForm(element)}
                />                
                
                <br></br>
                { this.submitButton() }
                { this.showError() }
            </form>
        </div>
        )
    }
}

export default PaddlerAdd