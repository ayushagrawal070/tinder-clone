import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";
import axios from "../../axios";
function TinderCards() {

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/tinder/card");

            setPeople(req.data);
        }
        fetchData();
    }, []);

    console.log(people);

    return (
        < div className="tinderCards" >
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        onSwipe={onSwipe}
                        onCardLeftScreen={() => onCardLeftScreen(`${person.name}`)}
                        preventSwipe={['up', 'down']}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.imgUrl})` }}
                            className="card"
                        > <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div >
    )
}

export default TinderCards
