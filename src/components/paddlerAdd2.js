import React, { Component } from 'react';
import FormFields from '../widgets/Forms/formFields2'
import { firebasePaddlers } from '../firebase'
import { Redirect } from 'react-router-dom'
import Uploader from '../widgets/FileUploader/fileUploader'
import { Button, Icon } from 'semantic-ui-react'

class PaddlerAdd extends Component {
    state = {
        redirect: false,
        loading: false,
        selectedGender: '1',

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
            Time: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Time',
                config: {
                    name: 'time_input',
                    type: 'text',
                    placeholder: 'Time'
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
            Attendance: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Attendance',
                config: {
                    name: 'attendance_input',
                    type: 'number',
                    placeholder: 'Attendance'
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
                    options: [
                        {val: 1, text: 'Strong Left'},
                        {val: 2, text: 'Left'},
                        {val: 3, text: 'Either'},
                        {val: 4, text: 'Right'},
                        {val: 5, text: 'Strong Right'}
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
                element: 'radio',
                value: 'female',
                label: true,
                labelText: 'Gender',
                config: {
                    name: 'gender_input',
                    type: 'radio',
                    options: [
                        {val: '1', text: 'Female', checked: 'True'},
                        {val: '2', text: 'Male', checked: 'False'}
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
    updateRadio = (item) => {
        console.log("update radio hit", item)
        const newformData = {
            ...this.state.formData
        }
        const newElement = {
            ...newformData['gender']
        }
        newElement.value = item
        newformData['gender'] = newElement
        this.setState({
            selectedGender: item,
            formData: newformData
        })
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
            <div style={{display:'inline'}}>
                <Button animated>
                    <Button.Content visible>Submit</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
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
        <div className="form-group"> 
            Add new paddler
            <form onSubmit={this.submitForm}>
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
                    id={'Time'}
                    formData={this.state.formData.Time}
                    change={(element) => this.updateForm(element)}
                /> 
                <FormFields 
                    id={'Attendance'}
                    formData={this.state.formData.Attendance}
                    change={(element) => this.updateForm(element)}
                />                               
                <FormFields 
                    id={'Pref'}
                    formData={this.state.formData.Pref}
                    change={(element) => this.updateForm(element)}
                />   
                <FormFields 
                    id={'gender'}
                    formData={this.state.formData.gender}
                    selectedGender={this.state.selectedGender}
                    change={(element) => this.updateRadio(element)}
                />                 
                <Uploader 
                    filename={(filename)=>this.storeFilename(filename)}
                    />
                
                <br></br>
                { this.submitButton() }
                <div style={{display: 'inline'}}>
                    <Button animated onClick={()=>this.cancel()}>
                        <Button.Content visible>Cancel</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow left' />
                        </Button.Content>
                    </Button>
                </div>                
                { this.showError() }
            </form>
        </div>
        )
    }
}

export default PaddlerAdd