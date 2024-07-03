import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/MainMenu.scss";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
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
      <Container className="main-top-ctr">
        <Container className="carousel-ctr mb-5">
          <Carousel>
            <Carousel.Item>
              <img
                className="carousel-img"
                src={firstSlideImage}
                alt="First Slide"
              />
              <Carousel.Caption className="carousel-capt">
                <Container>
                  <h2>Discover New Games</h2>
                  <p>
                    All News about many upcoming games in all <br /> Platform, Such
                    as Windows, Playstation, XBOX <br /> And Android.
                  </p>
                  <button className="crs-btn">
                    <h5 className="crs-btn-text">Learn More</h5>
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
                  <h2>Learn About Game</h2>
                  <p>
                    Learn about a game with their unique synopsis <br /> Without
                    spoiling the entire story For a quick review <br /> before
                    checking out the actual game.
                  </p>
                  <button className="crs-btn">
                    <h5 className="crs-btn-text">Learn More</h5>
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
                  <h2>Download & Buy Games</h2>
                  <p>
                    We provide a legit store & download link for the games by their{" "}
                    <br /> Developer to ensure user's safety.
                  </p>
                  <button className="crs-btn">
                    <h5 className="crs-btn-text">Learn More</h5>
                  </button>
                </Container>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
        {games.length > 0 ? (
          games.map((game) => (
            <Container className="thirdct">
              <Row key={game.id}>
                <Col sm={4}>
                  <img className="thirdimg" src={game.thumbnail} />
                </Col>
                <Col className="mt-2" sm={8}>
                  <h3>{game.title}</h3>
                  <p>{game.short_description}</p>
                  <Stack direction="horizontal" gap={2} className="mb-3">
                    <Badge pill bg="dark" className="badge">{game.genre}</Badge>
                    <Badge pill bg="dark" className="badge">{game.platform}</Badge>
                    <Badge pill bg="dark" className="badge">{game.publisher}</Badge>
                    <Badge pill bg="dark" className="badge">{game.developer}</Badge>
                  </Stack>
                  <button className="button-end">Learn More</button>
                </Col>
              </Row>
            </Container>
          ))
        ) : (
          <p>No games available</p>
        )}
        {games.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Platform</th>
                <th>Publicher</th>
                <th>Description</th>
                <th>Thumbnail</th>
              </tr>
            </thead>
            <tbody>
              {games.map((game) => (
                <tr key={game.id}>
                  <td>{game.title}</td>
                  <td>{game.genre}</td>
                  <td>{game.platform}</td>
                  <td>{game.publisher}</td>
                  <td>{game.short_description}</td>
                  <td><img src={game.thumbnail} alt="game thumbnail" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading...</p>
        )}
      </Container>
    </div>
  );
};

export default TableList;
