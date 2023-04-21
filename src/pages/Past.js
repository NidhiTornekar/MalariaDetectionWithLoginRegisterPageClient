import React, { useEffect, useState } from "react";
import axios from "axios";

const Past = () => {
  const [images, setImages] = useState([]);
  //const [loading, setLoading] = useState(false);
  //const [error, setError] = useState(null);
  //const userEmail = "testmail1@yopmail.com";
  useEffect(() => {
    const email = localStorage.getItem("email");
    const imageData = new FormData();
    imageData.append("email", email);
    axios
      .post("http://localhost:5000/past-predictions", imageData)
      .then(function (response) {
        setImages(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {images.map((image) => (
        <div key={image._id}>
          <img
            src={`data:image/jpeg;base64,${image.image_b64}`}
            alt="Malaria cells"
          />
          <p>
            Actual Label: {image.actual }
          </p>
          <p>
            Predicted Label: {image.predicted }
          </p>
        </div>
      ))}
    </div>
  );
};

export default Past;