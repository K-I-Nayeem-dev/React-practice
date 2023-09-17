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

    const handelLoClick = ()=>{        
        setText(text.toLowerCase());
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

    const colorChage = (event)=>{
        let color = event.target.value;
        // let textarea = document.querySelectorAll('textarea')[0].value;
        setText(color);
    }

    const handleCopy = (event)=>{
        let text = document.getElementById('myBox');
        // let textarea = document.querySelectorAll('textarea')[0].value;
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const removeSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
    }

    return (
        <div className="container my-3">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-8 my-3">
                    <div className="mb-3">
                        <h1 className='mb-3' style={{ color: props.mode === 'light'? 'black': 'white' }}>{props.heading}</h1>
                        <div className='d-flex justify-content-center'>
                            <textarea style={{ color: props.mode === 'light'? 'black': 'white', backgroundColor: props.mode === 'light'? 'white': 'black'}} type="text" onChange={handelOnChange} value={text} rows='8' id='myBox' className="form-control" aria-describedby="emailHelp"/>
                            <textarea style={{ color: props.mode === 'light'? 'black': 'white', backgroundColor: props.mode === 'light'? 'white': 'black' }} type="text" onChange={Counting} value={count} rows='8' className="form-control"/>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center'>
                    <button onClick={handelOnClick} className="btn btn-primary my-2">Convert To UpperCase</button>
                    <button onClick={handelLoClick} className="btn btn-primary my-2 ms-2">Convert To LowerCase</button>
                    <button onClick={clearTextArea} className="btn btn-primary my-2 ms-2">Clear Text Area</button>
                    <button onClick={handleCopy} className="btn btn-primary my-2 ms-2">Copy Text</button>
                    <button onClick={removeSpace} className="btn btn-primary my-2 ms-2">Remove Space</button>
                    <div>
                        <p style={{ color: props.mode === 'light'? 'black': 'white' }} className='ms-3'>Text Color Change</p>
                        <input style={{ border:'none', outline:'none',width:'100px'}} className=' ms-3' onChange={colorChage} type="color"/>   
                    </div>
                    {/* <button onClick={boldText} className="btn btn-primary my-2 ms-2">Bold Text</button> */}
                    </div>

                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-10">
                    <h1 style={{ color: props.mode === 'light'? 'black': 'white' }}>Your Text Summery</h1>
                    <p style={{ color: props.mode === 'light'? 'black': 'white' }}>{text.split(' ').length} Words {text.length} Total Lenght To Read {0.008 * text.split(" ").length} Minute</p>
                    <h2 style={{ color: props.mode === 'light'? 'black': 'white' }}>Preview</h2>
                    <p style={{ color: props.mode === 'light'? 'black': 'white' }}>{text.length > 0 ? text : 'Enter Some Value to Preview'}</p>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-10">
                    <h1 style={{ color: props.mode === 'light'? 'black': 'white' }} className='text-center'> {count} </h1>
                    <button className='ms-5 btn btn-danger' onClick={clickToCount}>Click to Increse</button>
                </div>
            </div>
        </div>

    )
    
}

export default TextNodes
