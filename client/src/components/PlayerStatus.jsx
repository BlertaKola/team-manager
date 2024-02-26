import axios from 'axios'
import { useState, useEffect } from 'react';
import ManagePlayerStatus from './ManagePlayerStatus';
import './Buttons.css'
import { useParams } from 'react-router-dom';
const PlayerStatus = (props) => {
    const { id } = useParams();
    const [players, setPlayers] = useState([]);
    const [updated, setUpdated] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then((response) => {
                console.log(response.data);
                setPlayers(response.data);
            })
            .catch((err) => console.log(err.response));
    }, [updated]);

    const handleChangeGameOne = (playerID , newStatus) => {
        axios.patch(`http://localhost:8000/api/players/${playerID}`, { game1: newStatus })

                                .then(res => {
                                    console.log(res)
                                    setUpdated(!updated)
                                })
                                .catch(err => console.log(err)) 
                                                        
    };

    const handleChangeGameTwo = (playerID, newStatus ) => {
        axios.patch(`http://localhost:8000/api/players/${playerID}`, {game2: newStatus})
            .then(res => {
                console.log(res)
                setUpdated(!updated)
            })
            .catch(err => console.log(err))
    }


    const handleChangeGameThree = (playerID, newStatus) => {
        axios.patch(`http://localhost:8000/api/players/${playerID}`, {game3: newStatus})
            .then(res => {
                console.log(res)
                setUpdated(!updated)
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <ManagePlayerStatus/>

            <h1>Player Status - Game {id}</h1>
            {players.map((item, indx) => {
                 const gameStatus = id === "1" ? item.game1 : id === "2" ? item.game2 : id === "3" ? item.game3 : "";
                return (
                    <div key={item._id}>
                        <h3>{item.name}</h3>
                        
                        {id === "1" ?
                            <div>

                                <button className={gameStatus === "playing" ? "playing" : ""} onClick={() => handleChangeGameOne(item._id, "playing")}>Playing</button>
                                <button className={gameStatus === "not playing" ? "not-playing" : ""} onClick={() => handleChangeGameOne(item._id, "not playing")}>Not playing</button>
                                <button className={gameStatus === "undecided" ? "undecided" : ""} onClick={() => handleChangeGameOne(item._id, "undecided")}>Undecided</button>
                            </div>
                            : id === "2" ?
                                <div>
                                    <button className={gameStatus === "playing" ? "playing" : ""} onClick={() => handleChangeGameTwo(item._id,  "playing")}>Playing</button>
                                    <button className={gameStatus === "not playing" ? "not-playing" : ""} onClick={() => handleChangeGameTwo(item._id, "not playing")}>Not playing</button>
                                    <button className={gameStatus === "undecided" ? "undecided" : ""} onClick={() => handleChangeGameTwo(item._id,  "undecided")}>Undecided</button>
                                </div> : id === "3" ?
                                    <div>
                                        <button className={gameStatus === "playing" ? "playing" : ""} onClick={() => handleChangeGameThree(item._id,  "playing")}>Playing</button>
                                        <button className={gameStatus === "not playing" ? "not-playing" : ""} onClick={() => handleChangeGameThree(item._id,  "not playing")}>Not playing</button>
                                        <button className={gameStatus === "undecided" ? "undecided" : ""} onClick={() => handleChangeGameThree(item._id,  "undecided")}>Undecided</button>
                                    </div> : ""
                        }


                    </div>
                )
            })}

        </>
    );
};

export default PlayerStatus;