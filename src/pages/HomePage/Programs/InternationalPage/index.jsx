import React from 'react'
import Educational from './educational.jsx'
import CourseInfo from './CourseInfo.jsx'
import CourseList from './CourseCard.jsx'
import Payment from './payment.jsx'
import Services from './Services.jsx'
import Workshop from '../../_components/Workshop.jsx'
const Index = () => {
  return (
    <>
      <Educational/>
      <CourseInfo/>
      <CourseList/>
      <Payment/>
      <Services/>
    <div className='p-0 md:p-4 lg:p-8' >
        <Workshop />
    </div>
    </>
  )
}

export default Index