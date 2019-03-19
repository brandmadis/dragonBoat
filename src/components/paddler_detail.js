import React from 'react'

const PaddlerDetail = (props) => {
    console.log("props: ", props)
    return (
        <div>
            Paddler Detail  <br/>
            Id: {props.match.params.id}<br/>
            Name: {props.match.params.username}<br/>

        </div>
            
    )
}

export default PaddlerDetail