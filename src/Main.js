import React from "react"

const Main = (props) => {

    return (

        <div className="container">
            <div className="title">
                <h1>Random Quote Generator</h1>
            </div>
            <div className="main-wrapper">
                <div className="quote-box" id="quote-box">
                    <div className="text-box" id="text">
                        <p className="text" style={{"display": props.display, "fontSize": props.size}}>{props.text}</p>
                    </div>
                    
                    <div className="author-box">
                    <p className="author" id="author">{props.author} </p>
                    </div>
                    
                </div>
            </div>
            <div className="btn" id="new-quote" onClick={props.handleClick}>
                        Generate
            </div>
        </div>
                

    )
}

export default Main