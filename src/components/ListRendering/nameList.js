import React from 'react'
import Person from './person'

function nameList() {

    let Persons = [
        {
            name : 'Dipanshu',
            age : '20',
            branch : 'ISE'
        },
        {
            name : 'Gian',
            age : '16',
            branch : 'AIML'
        },
        {
            name : 'Mundal',
            age : '18',
            branch : 'CSE'
        },
        {
            name : 'Ni-odean',
            age : '67',
            branch : '*Unk*'
        }
    ]
    
    
    const personList = Persons.map(person => <Person person={person} />)
  return (
    <div>
        {personList}
    </div>
  )
}

export default nameList
