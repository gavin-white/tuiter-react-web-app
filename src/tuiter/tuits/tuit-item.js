import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";
const TuitItem = (
    {
      tuit = {
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        "image": "tesla.png",
        "handle": "spacex"
      }
    }
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }
  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-2">
            <img width={50} height={50} className="float-end rounded-circle" src={`/images/${tuit.image}`}/>
          </div>
          <div className="col-10">
            <i className="bi bi-x-lg float-end"
    onClick={() => deleteTuitHandler(tuit._id)}/>
            <div><strong>{tuit.userName}</strong> <i
    className="fa fa-check-circle text-info"/> @{tuit.handle} - {tuit.time}</div>
            <div>{tuit.tuit}</div>
            <TuitStats startTuit={tuit}/>
          </div>
        </div>
      </li>
  );
};

export default TuitItem;