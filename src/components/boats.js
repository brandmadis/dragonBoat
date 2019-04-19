import React, { Component } from 'react'
// import { Link, withRouter } from 'react-router-dom'
import { firebaseBoats, firebaseLooper, firebaseDB } from '../firebase'
import FormFields from '../widgets/Forms/formFields2'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'

class Boats extends Component {
    constructor(props){
        super(props)
        this.state = {
            postError: '',
            boats: [],
            value:'',
            formData: {
                boatName: {
                    element: 'input',
                    value: '',
                    label: false,
                    labelText: 'Boat Name',
                    config: {
                        name: 'boatName_input',
                        type: 'text',
                        placeholder: 'New Boat Name'
                    },
                    validation: {
                        required: true,
                        minLen: 1
                    },
                    valid: false,
                    touched: true,
                    validationMessage: ''
                },
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.createBoat2 = this.createBoat2.bind(this)
    }
    componentWillMount(){
        if(this.state.boats.length < 1){
            firebaseBoats.once('value')
            .then((snapshot) => {
                const boats = firebaseLooper(snapshot)
                this.setState({
                    boats
                })
            })
        }
    }
    createBoat(){
        console.log("create boat")
        var newRef = firebaseBoats.push()
        var key = newRef.key
        var data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        newRef.set(data)
        this.props.history.push(`/boats/${key}`);
        console.log("key: ", key)

    }
    createBoat2(event){
            var newRef = firebaseBoats.push()
            var key = newRef.key
            var data = {
                'name': 'Unnamed',
                'boat': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
            newRef.set(data)
            console.log("data: ", data)
            this.props.history.push(`/heat/${key}`);
       
    }
    handleChange(event){
        this.setState({value: event.target.value});
    }
    redirect(id){
        console.log("redirect", id)
        this.props.history.push(`/heat/${id}`);

    }
    updateForm = (element, content = '') => {
        console.log("updateform")
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
        console.log("validate error")
        let error = [true, '']
        if(element.validation.required){
            const valid = element.value.trim() !==''
            const message = `${!valid ? 'This field is required':''}`
            error = !valid ? [valid, message]: error
        }
        if(element.validation.minLen){
            const valid = element.value.length >= element.validation.minLen
            const message = `${ !valid ? 'Length must be at least '+ element.validation.minLen  : ''}`
            error = !valid ? [valid, message] : error
        }        
        return error
    }    
    showError = () => (
        this.state.postError !== '' ?
            <div>{this.state.postError} </div> :
            ''
    )     
    
    // deleteBoat = (id, index) => {
    //     console.log("delete boat", id, index)
    //     firebaseDB.ref('boat/' + id).remove()
    //     this.setState({
    //         boats: this.state.boats.filter((_, i)=> i !== index)

    //     })
    // }
    editName = (id) => {
        console.log("edit name")
        this.props.history.push(`/boatedit/${id}`);
        
    }
    clone = (originalName, originalId) => {
        console.log("clone")
        let boatData = []
        let refUrl = `boat/${originalId}/boat`
        // await firebaseDB.ref(refUrl).once('value')
        //     .then((snapshot) => {
        //         console.log("snap: ", snapshot)
        //     })
        
        
        // let boatDataGet = firebaseDB.ref(`boat/${originalId}/boat`).on("value", function(snapshot){
        //     console.log("hit: ",snapshot.val())
        //     this.boatData.push(snapshot.val())
        // })
        // console.log("boatData: ", boatData)
        
        let newRef = firebaseBoats.push()
        let key = newRef.key
        let name = `${originalName}-clone`
        let data = {
            'name': name,
            'boat': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
        newRef.set(data)
        console.log("data: ", data)
        this.props.history.push(`/heat/${key}/${name}`);
        
    }
    render() {
        const boatList = this.state.boats.map((item, i) => {
            return (
                <tr key={i}
                    onClick={()=> this.redirect(item.id)}
                    >
                    <td>{item.name} </td>
                    <td>{item.id} </td>
                    <td><button onClick={ () => this.editName(item.id)}>
                        Edit Name</button></td>
                    <td><button onClick={ ()=> this.clone(item.name, item.id)}>Clone</button>
                    </td>
                </tr>
                )
        })
        
                    // <input type='text' 
                    //     placeholder='new boat name'
                    //     value={this.state.value} 
                    //     onChange={this.handleChange}
                    //     className="form-control"
                    //     />
        return (
            <div>
                <form className="form-inline" onSubmit={this.createBoat2}>
                <FormFields 
                    id={'boatName'}
                    formData={this.state.formData.boatName}
                    change={(element) => this.updateForm(element)}
                />    
                <div>
                    <input 
                        type='submit' value="create new boat" 
                        className="btn btn-default" 
                        />
                { this.showError() }
                </div>
                </form>
                
                <table className="table table-hover" id="boats">
                    <thead>
                        <tr>
                            <th>
                                <div onClick={()=>this.createBoat2()}
                                    style={{display:'inline', marginRight: '10px'}}>

                                    <FontAwesomeIcon icon={'plus'} />
                                </div>
                                Name</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Clone</th>
                        </tr>
                    </thead>
                    <tbody>
                        { boatList }
                    </tbody>
                </table>
            </div>
            )
    }
}

export default Boats