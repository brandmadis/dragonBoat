import React from 'react'

const FormFields = (props) => {
    const renderFields = () => {
        const formArray = []
        for(let elementName in props.formData){
            formArray.push({
                id: elementName,
                settings: props.formData[elementName]
            })
        }
        return formArray.map((item, i) => {
            return ( 
                <div key={i}>
                    {renderTemplates(item)}
                </div>
                )
        })
    }
    const showLabel = (show, label) => {
        return show ?
            <label>{label}</label>
        : null
    }
    const changeHandler = (event, id, blur) => {
        const newState = props.formData;
        newState[id].value = event.target.value
        if(blur){
            let validData = validate(newState[id])
            newState[id].valid = validData[0]
            newState[id].validationMessage = validData[1]
        }
        newState[id].touched = blur
        props.change(newState)
    }
    const validate = (element) => {
        let error = [true, '']
        if(element.validation.minLen){
            const valid = element.value.length >= element.validation.minLen
            const message = `${ !valid ? 'Length must be at least '+ element.validation.minLen  : ''}`
            error = !valid ? [valid, message] : error
        }
        if(element.validation.required){
            const valid = element.value.trim() !== ''
            const message = `${ !valid ? 'This field is required' : ''}`
            error = !valid ? [valid, message] : error
        }
        return error
    }
    const showValidation = (data) => {
        let errorMessage = null;
        if(data.validation && !data.valid){
            errorMessage = (
                <div className="label_error">
                    {data.validationMessage}
                </div>
                )
        }
        return errorMessage;
    }
    const renderTemplates = (data) => {
        // console.log("data: ", data.id)
        let formTemplate = null
        let values = data.settings;
        switch(values.element){
            case('input'):
                formTemplate = (
                    <div>
                        {showLabel(values.label, values.labelText)}
                        <input 
                            {...values.config}
                            value={values.value}
                            onBlur={(event) => changeHandler(event, data.id, true)}
                            onChange={(event) => changeHandler(event, data.id, false)}
                            className="form-control"
                            />
                        {showValidation(values)}
                    </div>
                    )
                break
            case('select'):
                formTemplate = (
                    <div>
                        {showLabel(values.label, values.labelText)}
                        <select 
                            value={values.value}
                            name={values.config.name}
                            className="form-control"
                            onChange={(event) => changeHandler(event, data.id, false)}
                            >
                            {values.config.option.map((item, i) => (
                                <option key={i} value={item.val}>
                                    {item.text}
                                </option>
                            ))}
                        </select>
                    </div>
                    
                    )
                break
             default: 
                // console.log("switch input type default hit")
        }
        return formTemplate

    }
    
    return (
        <div>
            {renderFields()}
        </div>
        )

}

export default FormFields