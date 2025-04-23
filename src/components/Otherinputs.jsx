import { useState } from "react";

const Otherinputs = () => {
  const [review, setReview] = useState("");
  const [agree, setAgree] = useState(false);
  const [picture, setPicture] = useState(null);
  const handleForm = (e) => {
    e.preventDefault();
    console.log(review, agree);
  };
  const [preview, setPreview] = useState(null);
  const handleFileChange = (e) => {
    setPicture(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div>
      <form className="myform " onSubmit={handleForm}>
        <label htmlFor="pic"> Upload photo</label>
        <input
          type="file"
          id="pic"
          className="myinput"
          onChange={handleFileChange}
          accept="image/*"
        />
        {preview && (
          <img
            src={preview}
            alt="your photo"
            className="h-16 w-16 object-cover rounded-md"
          />
        )}
        <textarea
          placeholder="Write a Review"
          className="myinput"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        <input
          type="Checkbox"
          id="agree"
          value={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        <label htmlFor="agree"> Agree to Terms and Condition </label>
        <button className="mybtn block mt-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Otherinputs;
