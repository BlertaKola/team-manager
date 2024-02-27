import { useEffect, useState } from "react"
import axios from 'axios'
import './Buttons.css'

import ManagePlayers from "./ManagePlayers"
const Players = (props) => {
    const [players, setPlayers] = useState([])
    const [updated, setUpdated] = useState(false)
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/players')
            .then(res => {
                setPlayers(res.data)
                setUpdated(!updated)
            })
    }, [updated])
    const deletePlayer = (id) => {
        console.log(id)
        axios
          .delete(`http://localhost:8000/api/players/${id}`)
          .then((response) => {
            const newList = players.filter(
              (player, index) => player._id !== id
            );
            setPlayers(newList);
          })
          .catch((err) => console.log(err.response));
      };
    return(
        <>
            <ManagePlayers/>
            
      <table>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Preferred Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => {
            return (
              <tr key={player._id}>
                <td>{player.name}</td>
                <td>{player.position}</td>
                <td>
                  <button
                    className="red-button"
                    onClick={() => deletePlayer(player._id)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
        </>
    )
}
export default Players