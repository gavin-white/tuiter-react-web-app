import React, {useState} from "react";
import {toggleLike} from "./tuits-reducer";
import {useDispatch, useSelector} from "react-redux";
import {todoDoneToggle} from "../../labs/a7/redux-examples/reducers/todos-reducer";


const TuitStats = (
    {
      startTuit = {
        "liked": true,
        "likes": 10,
        "replies": 10,
        "retuits": 10,
      }
    }
) => {
  const [tuit, setTuit] = useState(startTuit);
  const toggleLikeHandler = (tuit) => {
    const newTuit = {
      ...tuit,
      "likes": tuit.likes + (tuit.liked ? -1 : 1),
      "liked": !tuit.liked
    };
    setTuit(newTuit);
  }
  const likeColor = tuit.liked ? "text-danger": "";
  return(
        <div className="row">
          <div className="col-3">
            <i className="fa fa-comment"/> {tuit.replies}
          </div>
          <div className="col-3">
            <i className="fa fa-recycle"/> {tuit.retuits}
          </div>
          <div className="col-3">
            <i onClick={() =>
                toggleLikeHandler(tuit)} className={`fa fa-heart ${likeColor}`}/> {tuit.likes}
          </div>
          <div className="col-3">
            <i className="fa fa-share"/>
          </div>
        </div>

  );
};
export default TuitStats;