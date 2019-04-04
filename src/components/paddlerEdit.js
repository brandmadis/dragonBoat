import React, { Component } from 'react';
import FormFields from '../widgets/Forms/formFields2'
import { 
    firebaseDB, 
    // firebasePaddlers, 
    // firebaseLooper 
} from '../firebase'
import { Redirect } from 'react-router-dom'
import Uploader from '../widgets/FileUploader/fileUploaderEdit'



class PaddlerEdit extends Component {
    constructor(props){
        super(props)
        this.state = {
            paddlers: {},
            snapshot: {},
            redirect: false,
            formData: {
                firstName: {
                    element: 'input',
                    value: 'test',
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
                    element: 'input',
                    value: '',
                    label: true,
                    labelText: 'Image Url',
                    config: {
                        name: 'image_input',
                        type: 'text',
                        placeholder: ''
                    },
                    validation: {
                        required: false,
                        minLen: 2
                    },
                    valid: true,
                    touched: true,
                    validationMessage: ''
                },  
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
    }
    componentWillMount(){
        console.log("newState: " , this.state.formData)
        var newState = {...this.state.formData}
        var curr_this = this
        let refUrl = "paddlers/" + this.props.match.params.id
        firebaseDB.ref(refUrl).on('value', function(data){
            console.log("data: ", data.val().firstName)
            newState.firstName.value = data.val().firstName
            newState.lastName.value = data.val().lastName
            newState.Weight.value = data.val().Weight
            newState.image.value = data.val().image
            curr_this.setState({formData: newState})
        })

    }
    submitForm = (event) => {
        console.log("submit", this.state.formData)
        event.preventDefault()
        let dataToSubmit = {}
        let formIsValid = true
        var updates = {}
        for(let key in this.state.formData){
            dataToSubmit[key] = this.state.formData[key].value
            console.log(formIsValid)
        }
        for(let key in this.state.formData){
            formIsValid = this.state.formData[key].valid && formIsValid
        }
        updates[this.props.match.params.id] = dataToSubmit
        if(formIsValid){
            firebaseDB.ref('paddlers').update(updates)
                .then(() => {
                    console.log("paddler updated")
                    this.setState({ redirect: true })
                })
                .catch((e) => {
                    console.log("error: ", e)
                })
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
     
                // <FormFields 
                //     formData={this.state.formData}
                //     change={(newState) => this.updateForm(newState)}
                //     onblur={(newState) => this.updateForm(newState)}
                // /><br></br>
                
                // <button type='submit' className="btn btn-default">Submit</button>
    return (
        <div>
            Edit paddler
            
            <form onSubmit={this.submitForm}>
                <img src={`https://firebasestorage.googleapis.com/v0/b/dragon-d50ad.appspot.com/o/images%2F${this.state.formData.image.value}?alt=media`} alt="" width="150" height="150"/>
            
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
                { this.submitButton() }
                { this.showError() }            
            </form>
            
        </div>
        )
    }
}

export default PaddlerEdit