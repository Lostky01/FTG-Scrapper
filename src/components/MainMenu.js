import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/MainMenu.scss";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import firstSlideImage from "../image/god-of-war.jpg";
import secondSlideImage from "../image/elden-ring.jpg";
import thirdSlideImage from "../image/the-last-of-us.jpg";

const TableList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/games")
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="carousel-img"
            src={firstSlideImage}
            alt="First Slide"
          />
          <Carousel.Caption className="carousel-capt">
            <Container>
              <h1>Discover New Games</h1>
              <p>
                All News about many upcoming games in all <br /> Platform, Such
                as Windows, Playstation, XBOX <br /> And Android.
              </p>
              <button className="crs-btn">
                <span>Learn More</span>
              </button>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src={secondSlideImage}
            alt="Second Slide"
          />
          <Carousel.Caption className="carousel-capt">
            <Container>
              <h1>Learn About Game</h1>
              <p>
                Learn about a game with their unique synopsis <br /> Without
                spoiling the entire story For a quick review <br /> before
                checking out the actual game.
              </p>
              <button className="crs-btn">
                <span>Learn More</span>
              </button>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src={thirdSlideImage}
            alt="Third Slide"
          />
          <Carousel.Caption className="carousel-capt">
            <Container>
              <h1>Download & Buy Games</h1>
              <p>
                We provide a legit store & download link for the games by their{" "}
                <br /> Developer to ensure user's safety.
              </p>
              <button className="crs-btn">
                <span>Learn More</span>
              </button>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {games.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Platform</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <tr key={game.id}>
                <td>{game.title}</td>
                <td>{game.genre}</td>
                <td>{game.platform}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TableList;
