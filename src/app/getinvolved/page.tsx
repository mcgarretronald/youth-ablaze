import React from 'react'
import Joinus from '../Components/GetInvolvedComponents/Joinus'
import ImpactSect from '../Components/GetInvolvedComponents/Impact'
import Membership from '../Components/GetInvolvedComponents/Membership'
import ContactInvolve from '../Components/GetInvolvedComponents/Contact'
import ContactDetails from '../Components/GetInvolvedComponents/Contact/ContactDetails'

export default function GetInvolved() {
  return (
      <div className=''>
        <Joinus/>
        <ImpactSect/>
        < Membership/>
        <ContactInvolve/>
        <ContactDetails/>
      
      </div>

  )
}
