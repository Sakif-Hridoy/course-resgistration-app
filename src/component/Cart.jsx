import PropTypes from "prop-types"

const Cart = ({selectedCourse , price,hour,remainingHour}) => {
    console.log(selectedCourse)
    let number = 0;
    return (
        <div className="p-5 border border-violet-500 rounded-xl  ">
             <h2 className="text-center font-semibold text-base text-purple-500 mb-4">Credit hours Remaining : <span className="text-red-500"> {remainingHour}</span> hr </h2> 
             <hr  />
             <div>
                <h3 className="text-center font-semibold font-serif text-xl text-white-500 mt-4 mb-4">Course Name</h3>
                <hr />
                
                <div className="mt-4">
                
               
                
                {
                    selectedCourse.map((name)=>(
                        <h4 key={name.id} className=" font-medium text-sm text-white-500 mb-1">{number=number+1}. {name.name}</h4>
                             
                    ))
                }
                </div>
                <h5 className=" font-semibold text-lg text-white-500 mb-4">Total Credit Hour :{hour} </h5>
                <hr />
                <h5 className=" font-semibold text-lg text-white-500 mb-4">Total Price : {price} USD</h5>
             </div>
        </div>
    );
};

Cart.propTypes = {
    selectedCourse:PropTypes.array,
    price:PropTypes.number,
    hour:PropTypes.number,
    remainingHour:PropTypes.number

}

export default Cart;