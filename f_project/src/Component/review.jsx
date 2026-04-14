import quotes from '../assets/pictures/user.png'

function Review() {
    return (
            <div className="review">
            <p>"qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem"</p>
            <img src={quotes} alt="quote" />
                <h4>User</h4>
{/*
                <h5>Hospital </h5>
*/}
            </div>
        )
    }
export default Review;