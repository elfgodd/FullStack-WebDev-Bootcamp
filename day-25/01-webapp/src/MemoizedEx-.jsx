import React, { useState } from 'react'

const MemoizedEx = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  return (
    <>
      <form action=''>
        <fieldset>
          <input
            type='text'
            name='firstName'
            id='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            autocomplete='off'
            placeholder='enter first name'
          />
          <input
            type='text'
            name='lastName'
            id='lastName'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            autocomplete='off'
            placeholder='enter last name'
          />
        </fieldset>
      </form>
      <Greeting name={firstName} />
    </>
  )
}

const Greeting = ({ name }) => {
  console.log('Greeting rendered', new Date().toString())
  return <h1>Hello {name}!</h1>
}

export default MemoizedEx
