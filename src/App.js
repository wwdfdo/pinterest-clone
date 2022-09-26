import "./App.css";
import Header from "./components/Header";
import MainBoard from "./components/MainBoard";
import unsplash from "./api/unsplash";
import { useState, useEffect } from "react";

function App() {
  const [pins, setPins] = useState([]);
  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
    });
  };

  const onSearchSubmit = (term) => {
    getImages(term).then((res) => {
      let results = res.data.results;
      let newPins = [...results, ...pins];

      newPins.sort(function (a, b) {
        return 0.5 - Math.random();
      });
      setPins(newPins);
    });
  };

  const getNewpins = () => {
    let promises = [];
    let pinData = [];

    let pins = ["cats", "dogs", "cars", "van"];

    pins.forEach((pinterm) => {
      promises.push(
        getImages(pinterm).then((res) => {
          let results = res.data.results;

          pinData = pinData.concat(results);

          pinData.sort(function (a, b) {
            return 0.5 - Math.random();
          });
        })
      );
    });

    Promise.all(promises).then(() => {
      setPins(pinData);
    });
  };

  useEffect(() => {
    getNewpins();
  }, []);

  return (
    <div className="app">
      <Header onSubmit={onSearchSubmit} />
      <MainBoard pins={pins} />
    </div>
  );
}

export default App;
