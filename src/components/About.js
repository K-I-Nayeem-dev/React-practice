import React, {useState} from 'react'

function About() {

    const [toggleStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor : 'white'
    })

    const [btnText, setbtnText] = useState('Enable Dark Mode')

    const toggleDarkMode = ()=>{
        if(toggleStyle.color === 'black'){
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white',
            })
            setbtnText('Enable Light Mode')
        }
        else{
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtnText('Enable Dark Mode')
        }
    }


    return (
        <div className="contianer overflow-hidden">
            <div className="row my-4 dflex justify-content-center">
                <div className="col-lg-10">
                    <div className="accordion" id="accordionExample"> 
                        <div className="accordion-item" style={toggleStyle}>
                            <h2 className="accordion-header" style={toggleStyle}>
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={toggleStyle}>
                                Accordion Item #1
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={toggleStyle}>
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item" style={toggleStyle}>
                            <h2 className="accordion-header" style={toggleStyle}>
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={toggleStyle}>
                                Accordion Item #2
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={toggleStyle}>
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item"style={toggleStyle}>
                            <h2 className="accordion-header"style={toggleStyle}>
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"style={toggleStyle}>
                                Accordion Item #3
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body"style={toggleStyle}>
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>                                
                        </div>
                        <button className='btn btn-dark my-3'  onClick={toggleDarkMode} >{btnText}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
