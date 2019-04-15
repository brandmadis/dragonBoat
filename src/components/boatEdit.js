import React, { Component } from 'react';
import FormFields from '../widgets/Forms/formFields2'
import { 
    firebaseDB, 
    config
    // firebasePaddlers, 
    // firebaseLooper 
} from '../firebase'
import { Redirect } from 'react-router-dom'
import Uploader from '../widgets/FileUploader/fileUploaderEdit'
import { Button, Icon } from 'semantic-ui-react'




class BoatEdit extends Component {
    constructor(props){
        super(props)
        this.state = {
            redirect: false,
            formData: {
                name: {
                    element: 'input',
                    value: '',
                    label: true,
                    labelText: 'Boat Name',
                    config: {
                        name: 'boatName_input',
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
                }
        }
    }
    }
    componentWillMount(){
        console.log("newState: " , this.state.formData)
        console.log("paddleredit config: ", config.storageBucket)
        
        var newState = {...this.state.formData}
        var curr_this = this
        let refUrl = "boat/" + this.props.match.params.id
        firebaseDB.ref(refUrl).on('value', function(data){
            console.log("data: ", data.val().name)
            newState.name.value = data.val().name
            curr_this.setState({formData: newState})
        })

    }
    submitForm = (event) => {
        console.log("submit", this.state.formData)
        event.preventDefault()
        let formIsValid = true
        if(formIsValid){
            firebaseDB.ref('boat/'+this.props.match.params.id+"/name")
                .set(this.state.formData.name.value)
                .then(() => {
                    console.log("boat updated")
                    this.setState({ redirect: true })
                })
                .catch((e) => {
                    console.log("error: ", e)
                })
        }
    }
    updateForm = (element, content = '') => {
        console.log("e: ", element)
        
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
            console.log("newE: ", newElement)
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
        console.log("element.validation: ", element)
        let error = [true, '']
        if(element.validation.required){
            const valid = element.value.trim() !==''
            const message = `${!valid ? 'This field is required':''}`
            error = !valid ? [valid, message]: error
        }
        return error
    }    
    submitButton = () => (
            <div>
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
    
    cancel() {
        console.log("cancel")
        this.props.history.push(`/boats`);
        
    }
    render() {
    const { redirect } = this.state;

     if (redirect) {
         console.log("redirect hit")
       return <Redirect to='/boats'/>;
     }
     
    return (
        <div>
            <p>Edit paddler</p>
            <form onSubmit={this.submitForm}>
                <FormFields 
                    id={'name'}
                    formData={this.state.formData.name}
                    change={(element) => this.updateForm(element)}
                /> 
                { this.submitButton() }
                <div>
                    <Button animated onClick={()=>this.cancel()}>
                        <Button.Content visible>Cancel</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                    </Button>
                </div>
            </form>
            
        </div>
        )
    }
}

export default BoatEdit