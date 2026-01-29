import quotes from '../assets/pictures/quote.png'

function Review() {
    return (
            <div className="review">
                <img src={quotes} alt="quotes" />
                <h3>Review</h3>
            <p>"qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem"</p>
            </div>
        )
    }
export default Review;