import React, { Component } from 'react';
import FormFields from '../widgets/Forms/formFields'
import { 
    firebaseDB, 
    // firebasePaddlers, 
    // firebaseLooper 
} from '../firebase'
import { Redirect } from 'react-router-dom'


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
                Image: {
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
                Active: {
                    element: 'input',
                    value: true,
                    label: true,
                    labelText: 'active',
                    config: {
                        name: 'active_input',
                        type: 'text',
                        placeholder: ''
                    },
                    validation: {
                        required: false,
                        minLen: 0
                    },
                    valid: true,
                    touched: true,
                    validationMessage: ''
                },             
            }
        }
        
    }
    componentWillMount(){
        console.log("newState: " , this.state.formData)
        var newState = {...this.state.formData}
        var curr_this = this
   
            
// var someProperty = {...this.state.someProperty}
// someProperty.flag = true;
// this.setState({someProperty})


        let refUrl = "paddlers/" + this.props.match.params.id
        firebaseDB.ref(refUrl).on('value', function(data){
            console.log("data: ", data.val().firstName)
            newState.firstName.value = data.val().firstName
            newState.lastName.value = data.val().lastName
            newState.Weight.value = data.val().Weight
            newState.Image.value = data.val().Image
            
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
            console.log(this.state.formData[key])
        }
        for(let key in this.state.formData){
            formIsValid = this.state.formData[key].valid && formIsValid
        }
        updates[this.props.match.params.id] = dataToSubmit
        console.log("updates: ", updates)
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
            Edit paddler
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

export default PaddlerEdit