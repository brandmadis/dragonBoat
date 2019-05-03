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
         console.log("onChange")
         const { suggestions } = this.props
         const userInput = e.currentTarget.value

         // add filter by startsWith

         const filteredSuggestions = suggestions.filter(
             suggestion =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase())
         )
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
         if (e.keyCode === 13){
             this.setState({
                 activeSuggestion: 0,
                 showSuggestions: false,
                 userInput: filteredSuggestions[activeSuggestion]
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
                     <ul class="suggestions">
                        {filteredSuggestions.map((suggestion, index) => {
                            let className;
                            if(index === activeSuggestion){
                                className = 'suggestion-active'
                            }
                            return (
                                <li
                                    className={className}
                                    key={suggestion}
                                    onClick={onClick}
                                    >
                                    {suggestion}
                                </li>
                            )
                        })}
                     </ul>
                 )
             }
         } else {
             suggestionsListComponent = (
                 <div className="no-suggestions">
                    <em>No suggestions, you're on your own!</em>
                 </div>
             )
         }
         return (
             <Fragment>
            <input
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