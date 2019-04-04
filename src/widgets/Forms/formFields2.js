import React from 'react'

const FormFields = ({formData, change, id}) => {

    const showError = () => {
        let errorMessage = null
        if(formData.validation && !formData.valid){
            errorMessage = (
                <div>
                    {formData.validationMessage}
                </div>
                )
        }
        return errorMessage
    }
    const renderTemplate = () => {
        // console.log("data: ", data.id)
        let formTemplate = null
        // let values = data.settings;
        switch(formData.element){
            case('input'):
                formTemplate = (
                    <div>
                        <input 
                            {...formData.config}
                            value={formData.value}
                            onBlur={(event) => change({event, id, blur:true})}
                            onChange={(event) => change({event, id, blur:false})}
                            className="form-control"
                            />
                        {showError()}
                    </div>
                    )
                break
            case('select'):
                formTemplate = (
                    <div>
                        <select
                            value={formData.value}
                            name={formData.config.name}
                            onBlur={(event)=> change({event, id, blur:true})}
                            onChange={(event)=> change({event, id, blur:false})}
                            >
                                { formData.config.options.map((item, i) => (
                                    <option key={i} value={item.val}>{item.text}</option>
                                ))}
                        </select>
                    </div>
                )   
                break
             default: 
                console.log("case default")
                formTemplate = null        }
        return formTemplate

    }
    
    return (
        <div>
            {renderTemplate()}
        </div>
        )

}

export default FormFields