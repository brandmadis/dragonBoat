import React from 'react'

const FormFields = ({formData, change, id, selectedGender, click}) => {

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
    const ConsoleLog = ({children}) => {
        console.log(children)
        return false
    }
    const renderTemplate = () => {
        // console.log("data: ", data.id)
        let formTemplate = null
        // let values = data.settings;
        switch(formData.element){
            case('input'):
                formTemplate = (
                    <div className="form-group">
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
                            className="form-control"
                            >
                                { formData.config.options.map((item, i) => (
                                    <option key={i} value={item.val}>{item.text}</option>
                                    ))}
                        </select>
                    </div>
                )   
                break
                case('radio'):
                formTemplate = (
                    <div style={{paddingTop:"10px", paddingBottom:'10px'}}>

                        {/* { formData.config.options.map((item, i)=>(
                            <div key={i+"i"}>
                            <ConsoleLog>
                            selectedGender{selectedGender}
                            item.val {item.val}</ConsoleLog>

                            <input
                                key={i}
                                type="radio"
                                name={item.id}
                                value={item.val}
                                checked={selectedGender=== item.val}
                                onChange={()=>change(item.val)}
                                className="form-check-input"
                                />
                                {item.text}
                        </div>
                        ))} */}
                            <ConsoleLog>{formData.config.options}</ConsoleLog>
                        { formData.config.options.map((item, i)=>(
                            
                            <button 
                                key={i}
                                type="button"
                                className={i === 0 ?
                                    (parseInt(formData.value) === (i + 1) ? 
                                        "ui left attached button primary" :
                                        `${typeof (i+1)} ${typeof parseInt(formData.value)} ui left attached button`
                                    )
                                    
                                    :
                                    (parseInt(formData.value) === (i + 1) ? 
                                        "ui right attached button primary" :
                                        "ui right attached button"
                                    )

                                }
                                onChange={()=>change(item.val)}
                                onClick={()=>click(item.val)}
                                >
                                {item.text}
                            </button>
                            ))}                        
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