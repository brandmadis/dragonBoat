import React, { Component } from 'react'
import { firebase } from '../../firebase'
import FileUploader from 'react-firebase-file-uploader'

class Uploader extends Component {
    state = {
        name:'',
        isUploading: false,
        progress: 0,
        fileUrl: ''
    }
    handleUploadStart = () => {
        console.log("upload start")
        this.setState({ isUploading: true, progress: 0 })
    }
    handleUploadError = (error) => {
        this.setState({ isUploading: false })
        console.log("upload error: ", error)
    }
    handleUploadSuccesss = (filename) => {
        console.log("upload success")
        this.setState({
            name: filename,
            progress: 100,
            isUploading: false
        })
        firebase.storage().ref('images')
        .child(filename).getDownloadURL()
        .then( url => {
            this.setState({ fileURL: url })
        })
        this.props.filename(filename)
    }
    handleProgress = (progress) => {
        this.setState({
            progress
        })
    }
    render(){
        return (
            <div>
                <label style={{backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4, cursor: 'pointer'}}>
                Browse for image...
                <FileUploader
                    hidden
                    accept='image/*'
                    name='image'
                    randomizeFilename
                    storageRef={firebase.storage().ref('images')}
                    onUploadStart={this.handleUploadStart}
                    onUploadError={this.handleUploadError}
                    onUploadSuccess={this.handleUploadSuccesss}
                    onProgress={this.handleProgress}
                    />
                { this.state.isUploading ?
                    <p>Progress: {this.state.progress} </p>
                    : null }
                { this.state.fileURL ?
                    <img
                        style={{ width: '100px', borderRadius: '15px' }}
                        src={this.state.fileURL }
                        alt=""/>
                    : null }
                </label>
            </div>
            
        )
    }
}

export default Uploader