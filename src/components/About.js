import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <h4>About Petty Cash Register </h4>
      <hr></hr><br></br>
      <div>
        Github Repository Link :<a href='https://github.com/OumaNyang/pettycash-register'>https://github.com/OumaNyang/pettycash-register</a>
        <p>What is Petty Cash register </p>
        This petty cash register can be used to record  petty cash expenditures in an office environment .
      </div>
      The project consist of  7 components
      <ul>
        <li>Header : <p>- Displays project title and  navigation buttons menu</p></li>
        <li>Footer : <p>- Displays project footer information</p></li>
        <li>About : <p>- Consist project details.</p></li>
        <li>AddBudget : <p>- The AddBudget Component  allows you to add petty cash item  to the data source. The record will then immediately be updated in the system and make it visible.
        </p>
        <p>- It also displays an error when no petty cash item  add record fails.</p>
        <p>- It otherwise takes the value that has been inputted and adds it to the others held at the data source. The addition takes place when the submit button is pressed.</p>
        <p>- It allows one to either set the reminder on or off for a particular item.</p>
        <p>- The application will then reload automatically on the added list</p>
        </li>
        <li>Budget :<p>- The Budget Component   enables you  to interact with a particular petty cash  item in the server displayed on the screen. One can delete a petty cash item  or toggle its paid out state.</p></li>
        <li>Budgets : <p>
        <p>- Displays the items in the list of the petty cash register.</p>
        <p>- Allows deletion of the items from the list, and from the data source.</p>
        <p>- It allows one to use a toggle function to set the paid out status  yes  or no.</p>
          </p></li>
        <li>Button : <p>- The Button Component  adds a reusable button component for multiple click actions. For example, this button can open the Add form and Close the form.</p></li>

      </ul>
      <p>Doube clicking on the petty cash record will updae its status as paid out or not paid out  </p>
      
    </div>
  )
}

export default About
