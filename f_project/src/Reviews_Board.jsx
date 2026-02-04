import Review from "./Component/review.jsx";

function Reviews_Board() {
    return (
        <div className="review-board">
        <h1 className="testimonial-title">Testimonial</h1>
        <div className="review-grid-3">
            <Review></Review>
            <Review style="background-color= #$495057"></Review>
            <Review></Review>
        </div>
        </div>)

}

export default Reviews_Board;