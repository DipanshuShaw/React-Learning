import react from 'react'

// function Greet(){
//     return <h1>Welcome to the first react app</h1>
// }


const Greet = (prop)=> {
    return (
        <div>
            <h1>
                Hello {prop.name}
            </h1>
            {prop.children}
        </div>
    )
}

export default Greet