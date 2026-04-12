import Review from "./Component/review.jsx";

function Reviews_Board() {
    return (
        <div className="review-board">
            <h1 className="testimonial-title">Testimonial</h1>

            <div className="review-grid-3">
                <div className="review-track">
                    <Review />
                    <Review />
                    <Review />

                    {/* duplicate */}
                    <Review aria-hidden="true" />
                    <Review aria-hidden="true" />
                    <Review aria-hidden="true" />
                    <Review aria-hidden="true" />
                    <Review aria-hidden="true" />
                    <Review aria-hidden="true" />

                </div>
            </div>
        </div>)

}

export default Reviews_Board;