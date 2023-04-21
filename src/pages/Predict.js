import React, { useState } from "react";
import {  useNavigate } from "react-router-dom"
import axios from "axios";

const Predict = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setFile(event.target.files[0]);
      setImage(reader.result);
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("imagefile", file);
    axios
      .post("http://localhost:5000/predict", formData)
      .then(function (response) {
        console.log(response);
        setPrediction(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleCorrect = (event) => {
    event.preventDefault();
    const email = localStorage.getItem("email");
    const imageData = new FormData();

    imageData.append("image_b64", file);
    imageData.append("predicted", prediction === "parasitized" ? "parasitized" : "uninfected");
    imageData.append("actual", prediction === "parasitized" ? "parasitized" : "uninfected");
    // imageData.append("email", 'testmail@yopmail.com');
    imageData.append("email", email);
    axios
      .post("http://localhost:5000/store-image", imageData)
      .then(function (response) {
        console.log(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
      
  };

  const handleWrong = (event) => {
    event.preventDefault();

    const imageData = new FormData();
    imageData.append("image_b64", file);
    imageData.append("predicted", prediction === "parasitized" ? "parasitized" : "uninfected");
    imageData.append("actual", prediction === "parasitized" ? "uninfected" : "parasitized");
    //imageData.append("email",'testmail@yopmail.com');
    axios
      .post("http://localhost:5000/store-image", imageData)
      .then(function (response) {
        console.log(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handlehistory=(event) =>{
    event.preventDefault();
      navigate("/user/past");
   
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Predict</button>
      </form>
      {prediction && <p>Prediction: {prediction}</p>}

      {image && <img src={image} alt="Malaria cells" />}
      {prediction && (
        <div>
          <button onClick={handleCorrect}>Correct</button>
          <button onClick={handleWrong}>Wrong</button>
          <p></p>
          <button onClick={handlehistory}>See user history</button>
        </div>
      )}
    </div>
  );
};

export default Predict;