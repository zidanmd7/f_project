function EmailFeature() {
    return (
        <div className="email-feature">
            <form>
            <h1 className="TitleFeature">PrescriptShare</h1>
                <div className="contact-form">
                    <input type="text" className="contact-name" placeholder="Name"/>
                    <input type="email" className="reference-email" placeholder="Email"/>
                    <textarea
                        className="information-input"
                        placeholder="Please describe your current symptoms, including when they started and how long they have lasted."
                    ></textarea>

                    <textarea
                        className="information-input"
                        placeholder="List any specific questions or concerns you would like the provider to address during your visit."
                    ></textarea>
                    <div className="dob-gender-div">
                        <label for="birthday" className="information-input-shorter">Date of Birth</label>
                        <input type="date" className="dob_field" name="birthday"/>
                        <label htmlFor="Gender" className="information-input-short">Gender</label>
                        <select className="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="alt">Prefer not to say</option>
                        </select>
                        <textarea
                            className="information-input-short"
                            placeholder="Provide Pharmacy information here."
                        ></textarea>
                    </div>
                    <label id="drop-zone">
                        Drop files here, or click to upload.
                        <input type="file" id="file-input" multiple accept="image/*"/>
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
