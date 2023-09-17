import React, {useState} from 'react'

function TextNodes(props) {

    const [count, setCount] = useState(0);

    const [text, setText] = useState('Enter default Value');

    const clickToCount = ()=>{
        setCount(count + 1)
    }

    const Counting = ()=>{
        setCount(count)
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
    // const boldText = ()=>{
    //    let button = document.querySelectorAll('textarea')[0];
    //    let bold = text.innerHTML =  button.style.fontWeight = 'bold';
    //    setText(bold);
    // }

    return (
        <div className="container my-3">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-8 my-3">
                    <div className="mb-3">
                        <h1 className='mb-3'>{props.heading}</h1>
                        <div className='d-flex justify-content-center'>
                            <textarea type="text" onChange={handelOnChange} value={text} rows='8' className="form-control" aria-describedby="emailHelp"/>
                            <textarea type="text" onChange={Counting} value={count} rows='8' className="form-control"/>
                        </div>
                    </div>

                    <button onClick={handelOnClick} className="btn btn-primary my-2">Convert To UpperCase</button>
                    <button onClick={clearTextArea} className="btn btn-primary my-2 ms-2">Clear Text Area</button>
                    {/* <button onClick={boldText} className="btn btn-primary my-2 ms-2">Bold Text</button> */}

                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-10">
                    <h1>Your Text Summery</h1>
                    <p>{text.split(' ').length} Words {text.length} Total Lenght To Read {0.008 * text.split(" ").length} Minute</p>
                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-10">
                    <h1 className='text-center'> {count} </h1>
                    <button className='ms-5 btn btn-danger' onClick={clickToCount}>Click to Increse</button>
                </div>
            </div>
        </div>

    )
    
}

export default TextNodes
