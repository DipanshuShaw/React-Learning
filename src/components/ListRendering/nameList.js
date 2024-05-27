import React from 'react'
import Person from './person'

function nameList() {

    let Persons = [
        {
            id : 1,
            name : 'Dipanshu',
            age : '20',
            branch : 'ISE'
        },
        {
            id : 2,
            name : 'Gian',
            age : '16',
            branch : 'AIML'
        },
        {
            id : 3,
            name : 'Mundal',
            age : '18',
            branch : 'CSE'
        },
        {
            id : 4,
            name : 'Ni-odu',
            age : '67',
            branch : '*Unk*'
        }
    ]
    
    
    const personList = Persons.map(person => <Person personContent={person} />)
  return (
    <div>
        {personList}
    </div>
  )
}

export default nameList
