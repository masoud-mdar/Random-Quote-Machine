import React from "react"
import Load from "./Load";
import Main from "./Main"

class App extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            data:{},
            n:Math.floor(Math.random()*10),
            text: "",
            author: "",
            display: "block",
            size: "24px"
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        setTimeout( () =>
        fetch("https://type.fit/api/quotes")
            .then(response => response.json())
            .then(data => {
               this.setState({
                   data:data
               })
        }),2000)

    }
    

    handleClick(){
        const l = this.state.data.length;
        const number = Math.floor(Math.random()*l);
        let text = this.state.data[number].text
        let author = this.state.data[number].author

        if (text.length > 100) {
            this.setState({
                size: "14px"
            })
        } else if (text.length > 60) {
            this.setState({
                size: "18px"
            })
        } else {
            this.setState({
                size: "24px"
            })
        }

        this.setState({
            n:number,
            text: text,
            author: author
        })
        

        this.setState({
            display: "none"
        })
        setTimeout(() => {
            this.setState({
                display: "block"
            })
        }, 1)
    
    }

    componentWillUnmount() {
        clearTimeout()
    }

    render () {
        if(this.state.data.length){
            
            return (
                <Main 
                    text={this.state.text} 
                    author={this.state.author} 
                    handleClick={this.handleClick}
                    display={this.state.display}
                    size={this.state.size}

                />

            )
            
        } else {
            return(
                <Load />
            )
        }
    }
}


export default App