import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types'
import '../assets/autocomp.css'

class Autocomplete extends Component {
    static propTypes = {
        suggestions: PropTypes.instanceOf(Array)
    }
    static defaultProps = {
        suggestions: []
    }
     constructor(props){
         super(props)
         this.state = {
             activeSuggestion: 0,
             filteredSuggestions: [],
             showSuggestions: false,
             userInput: ''
         }
     }
    
     onChange = e => {
        console.log("paddlers", this.props.suggestions)

         console.log("onChange", e.currentTarget.value)
         const { suggestions } = this.props
         const userInput = e.currentTarget.value


         const filteredSuggestions = suggestions.filter(
             suggestion =>{
                console.log("suggestion: ",  suggestion, "userInput: ", userInput)
                return suggestion.fullName.toLowerCase().startsWith(userInput.toLowerCase())
            }
         )
         console.log("filteredSuggestions: ", filteredSuggestions)
         this.setState({
             activeSuggestion: 0,
             filteredSuggestions,
             showSuggestions: true,
             userInput: e.currentTarget.value
         })
     }
     onClick = e => {
         console.log("onClick")
         this.setState({
             activeSuggestion: 0,
             filteredSuggestions: [],
             showSuggestions: false,
             userInput: e.currentTarget.innerText
         })
     }
     onKeyDown = e => {
         console.log("onKeyDown")
         const { activeSuggestion, filteredSuggestions } = this.state
         // enter key
         if (e.keyCode === 13 || e.keyCode === 9){
             this.props.addToSubs(filteredSuggestions[activeSuggestion])
             this.setState({
                 activeSuggestion: 0,
                 showSuggestions: false,
                 userInput: ""
             })
             
         }
         // up arrow
         else if (e.keyCode === 38){
             if (activeSuggestion === 0){
                 return
             }
             this.setState({ activeSuggestion: activeSuggestion - 1})
         }
         // down arrow
         else if (e.keyCode === 40){
             if(activeSuggestion - 1 === filteredSuggestions.length){
                 return
             }
             this.setState({ activeSuggestion: activeSuggestion + 1})
         }
     }
     render(){
         const {
             onChange,
             onClick,
             onKeyDown,
             state: {
                 activeSuggestion,
                 filteredSuggestions,
                 showSuggestions,
                 userInput
             }
         } = this

         let suggestionsListComponent
         if (showSuggestions && userInput){
             if(filteredSuggestions.length){
                 suggestionsListComponent = (
                     <ul className="suggestions">
                        {filteredSuggestions.map((suggestion, index) => {
                            let className;
                            if(index === activeSuggestion){
                                className = 'suggestion-active'
                            }
                            return (
                                <li
                                    className={className}
                                    key={index}
                                    onClick={onClick}
                                    >
                                    {suggestion.fullName}
                                </li>
                            )
                        })}
                     </ul>
                 )
             }
         } else {
             suggestionsListComponent = (
                 <div className="no-suggestions">
                 </div>
             )
         }
         return (
             <Fragment>
            <input
                id="autocomplete"
                type="text"
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={userInput}
                />
                {suggestionsListComponent}
         </Fragment>
     )
    }
}

export default Autocomplete