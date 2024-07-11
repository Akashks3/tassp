import UserCartComponent from './UserCartComponent';
const deleteCourseFromCartFunction = (GFGCourse) => {
    const updatedCart = cartCourses
        .filter(item => item.product.id !== GFGCourse.id);
    setCartCourses(updatedCart);
};

const totalAmountCalculationFunction = () => {
    return cartCourses
        .reduce((total, item) =>
            total + item.product.price * item.quantity, 0);
};




<UserCartComponent
cartCourses={cartCourses}
deleteCourseFromCartFunction={deleteCourseFromCartFunction}
totalAmountCalculationFunction={
    totalAmountCalculationFunction
}
setCartCourses={setCartCourses}
/>