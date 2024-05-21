import React,{Component} from 'react';


//Statefull Function Components
// function Box(){
//     return (
//         <div>
//         <h2>Box Title</h2>
//         <p>Hello This is box content</p>
//         </div>
//     )
// }


//Statefull Class Components
class Box extends Component{
    // val = prompt("Enter the value:-")
    render(){
        return(
            <div>
            <h2>{this.props.value.map(
                function valueMap(item,i){
                    return(
                        "Student" + (i+1) + ": " + item + ((i<3)?", ": "\n")
                    )
                }
            )}</h2>
            <p>Hello This is box content</p>
            </div>
        )
    }
}

export default Box;