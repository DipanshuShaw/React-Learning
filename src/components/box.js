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
    render(){
        return(
            <div>
            <h2>Box Title</h2>
            <p>Hello This is box content</p>
            </div>
        )
    }
}

export default Box;