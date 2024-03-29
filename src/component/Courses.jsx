/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import { FaReadme } from 'react-icons/fa';
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
const Courses = ({handleSelectedCourse}) => {

    const [allCourses, setAllCourses] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then((res) => res.json())
            .then((data) => setAllCourses(data.courses))


    }, []);
    // console.log(allCourses)


    return (
        <div className="grid md:grid-cols-3 gap-4">
            {
                allCourses.map((course) =>

                    <div key={course.id} className="card card-compact shadow-xl p-5  bg-slate-800 text-white">
                        <figure><img className="w-full " src={course.cover} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className=" text-lg font-medium">{course.name}</h2>
                            <p className="text-sm" >{course.details}</p>
                            <div className="flex gap-2 mt-4 justify-evenly">
                                <p >Price : $ {course.price} </p>
                                <div className="flex gap-2">
                                <button className="text-xl"><FaReadme></FaReadme></button>
                                <p><small> Credit: {course.hour} hr</small></p>
                                </div>
                            </div>
                            <div className="card-actions justify-center">
                                <button onClick={()=>handleSelectedCourse(course)} className="btn btn-primary w-full">Select</button>
                            </div>
                        </div>
                    </div>


                )



            }

        </div>
    );
};

Courses.proptypes = {
    handleSelectedCourse:PropTypes.func
}

export default Courses;