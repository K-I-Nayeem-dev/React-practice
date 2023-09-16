import React, {useState} from 'react'

function TextNodes(props) {

    const [count, setCount] = useState(0);
    const [text, setText] = useState('Enter default Value');

    const clickToCount = ()=>{
        setCount(count + 1)
    }

    const handelOnClick = ()=>{        
        setText(text.toUpperCase());
    }

    const handelOnChange = (event)=>{
        setText(event.target.value);
    }

    const clearTextArea = ()=>{
        setText('');
    }

    return (
        <>
        <div className="container my-3">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-8 my-3">
                    <div className="mb-3">
                        <h1 className='mb-3'>{props.heading}</h1>
                        <div className='d-flex justify-content-center'>
                            <textarea type="text" onChange={handelOnChange} value={text} rows='8' className="form-control" aria-describedby="emailHelp"/>
                            <textarea type="text" value={count} rows='8' className="form-control" aria-describedby="emailHelp"/>
                        </div>
                    </div>

                    <button onClick={handelOnClick} className="btn btn-primary my-2">Convert To UpperCase</button>
                    <button onClick={clearTextArea} className="btn btn-primary my-2 ms-2">Clear Text Area</button>

                </div>
            </div>
        </div>

        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-10">
                    <h1 className='text-center'> {count} </h1>
                    <button className='ms-5 btn btn-danger' onClick={clickToCount}>Click to Increse</button>
                </div>
            </div>
        </div>

        </>

    )
    
}

export default TextNodes
