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




class PaddlerEdit extends Component {
    constructor(props){
        super(props)
        this.state = {
            paddlers: {},
            snapshot: {},
            redirect: false,
            
            selectedGender: '',
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
                    value: '',
                    label: true,
                    labelText: 'Gender',
                    config: {
                        name: 'gender_input',
                        options: [
                            {val: '1', text: 'Female'},
                            {val: '2', text: 'Male'}
                            ]
                    },
                    validation: {
                        required: false,
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
        console.log("paddleredit config: ", config.storageBucket)
        
        var newState = {...this.state.formData}
        var curr_this = this
        let refUrl = "paddlers/" + this.props.match.params.id
        let selectedGender = null
        firebaseDB.ref(refUrl).once('value', function(data){
            console.log("data: ", data.val().firstName)
            newState.firstName.value = data.val().firstName
            newState.lastName.value = data.val().lastName
            newState.Weight.value = data.val().Weight
            newState.image.value = data.val().image
            newState.Pref.value = data.val().Pref
            newState.gender.value = data.val().gender
            newState.Time.value = data.val().Time
            newState.Attendance.value = data.val().Attendance
            if(
                newState.gender.value === 'female' ||
                newState.gender.value === 'Female' ||
                newState.gender.value === '1' 
                ){
                selectedGender = '1'
            } else {
                selectedGender = '2'
            }
            
            curr_this.setState({
                formData: newState,
                selectedGender
            })
        })

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
    submitForm = (event) => {
        console.log("submit", this.state.formData)
        event.preventDefault()
        let dataToSubmit = {}
        let formIsValid = true
        var updates = {}
        for(let key in this.state.formData){
            dataToSubmit[key] = this.state.formData[key].value
            console.log("form valid: ", formIsValid)
        }
        for(let key in this.state.formData){
            formIsValid = this.state.formData[key].valid && formIsValid
        }
        updates[this.props.match.params.id] = dataToSubmit
        console.log("hit 1", formIsValid)
        if(formIsValid){
            console.log("before firebase update")
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
        console.log("element: ", element)
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
    cancel() {
        console.log("cancel")
        this.props.history.push(`/paddlers`);
        
    }
    deletePaddler(id){
        console.log("delete Paddler")
        firebaseDB.ref('paddlers/' + id).remove()
        this.props.history.push(`/paddlers`);
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
        const imgStyle = { borderRadius: '15px'}
        
    return (
        <div>
            <p>Edit paddler</p>
            <form onSubmit={this.submitForm}>
                <img 
                    src={`https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/images%2F${this.state.formData.image.value}?alt=media`} 
                    style={ imgStyle }
                    alt="" width="100" height="100"/>
            
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
                { this.submitButton() }
                <div style={{display: 'inline'}}>
                    <Button animated onClick={()=>this.cancel()}>
                        <Button.Content visible>Cancel</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow left' />
                        </Button.Content>
                    </Button>
                </div>
            </form>
                <div style={{display: 'inline'}}>
                    <Button 
                        color="red"
                        type="button"
                        animated onClick={()=>{
                            if(window.confirm('Are you sure you want to delete this paddler?'))
                        this.deletePaddler(this.props.match.params.id)}}>
                        <Button.Content visible>Delete</Button.Content>
                        <Button.Content hidden><Icon name='delete' /></Button.Content>
                    </Button>
                </div>
                {/* <button
                onClick={
                    ()=>this.deletePaddler(this.props.match.params.id)}>
                    Delete</button> */}
            
        </div>
        )
    }
}

export default PaddlerEdit