function EmailFeature() {
    return (
        <div className="email-feature">
            <form>
            <h1 className="TitleFeature">PrescriptShare</h1>
            <div className="contact-form">
            <input type="text" className="contact-name" placeholder="Name"/>
                <input type="email" className="reference-email" placeholder="Email"/>
                <textarea
                    className="message-email"
                    placeholder="Write your message"
                ></textarea>
                <label id="drop-zone">
                    Drop files here, or click to upload.
                    <input type="file" id="file-input" multiple accept="image/*" />
                </label>
                <ul id="preview"></ul>
                <button id="clear-btn">Clear</button>

            </div>
            <div className="email-buttons">
                <input type="submit" className="btn1 send-email"/>

            </div>

            </form>

        </div>
);

}

export default EmailFeature;
