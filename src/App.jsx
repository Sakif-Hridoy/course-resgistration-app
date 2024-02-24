import { useState } from 'react';
import './App.css';
import swal from 'sweetalert';
import Courses from './component/Courses';
import Cart from './component/Cart';


function App() {
  // States
  const [selectedCourse, setSelectedCourse] = useState([])
  const [price, setPrice] = useState(0)
  const [hour, setHour] = useState(0)
  const [remainingHour, setRemainingHour] = useState(0)
  // handle select button 
  const handleSelectedCourse = (courseDetails) => {
    const isExist = selectedCourse.find((item) => item.id == courseDetails.id)

    let count = courseDetails.price;
    let hour = courseDetails.hour;

    // Toasts
    // Conditions
    if (isExist) {
      return swal(
        'Attention',
        'Already Selected this One',
        'warning'
      )
    }
    else {
      

      selectedCourse.forEach((item) => {
        count = count + item.price
        hour = hour + item.hour
        // console.log(count)
      })
      const totalRemaining = 20 - hour;
// Toasts
      if (totalRemaining < 0) {
        return swal(
          'Sorry!!!',
          'Your Credit Limit is Over',
          'warning'
        )
      }
      else {
        setHour(hour)
        setPrice(count)
        setRemainingHour(totalRemaining)
        setSelectedCourse([...selectedCourse, courseDetails])
      }
    }
  }
  // console.log(selectedCourse);
  return (
    <>

      <section className='max-w-screen-xl mx-auto'>
        <header className='text-4xl text-center uppercase mt-5 mb-5'>Course Registration</header>
        <div className='md:flex gap-5 justify-center'>
          <div className='w-3/4'>
            <Courses
              handleSelectedCourse={handleSelectedCourse}

            ></Courses>
          </div>

          <div className='w-1/4'>
            <Cart
              selectedCourse={selectedCourse}
              price={price}
              hour={hour}
              remainingHour={remainingHour}


            ></Cart>
          </div>

        
        </div>
      </section>

    </>
  )
}

export default App
