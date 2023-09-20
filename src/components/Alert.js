import React from 'react'

function Alert(props) {

    const capitalize = (word)=>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        props.alert &&  <div className="container">
            <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                    <div class={`alert alert-${props.alert.typ} alert-dismissible fade show mt-1 text-center" role="alert`}>
                        <strong>{capitalize(props.alert.typ)} : </strong> {props.alert.msg}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alert
