import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunk";


const TuitStats = (
    {
      startTuit = {
        "liked": true,
        "likes": 10,
        "replies": 10,
        "retuits": 10,
        "dislikes": 2
      }
    }
) => {
  const dispatch = useDispatch();
  const [tuit, setTuit] = useState(startTuit);
  const toggleLikeHandler = (tuit) => {
    const newTuit = {
      ...tuit,
      "likes": tuit.likes + (tuit.liked ? -1 : 1),
      "liked": !tuit.liked
    };
    setTuit(newTuit);
    dispatch(updateTuitThunk({
      ...tuit,
      likes: newTuit.likes,
      liked: newTuit.liked
    }))
  }
  const toggleDislikeHandler = (tuit) => {
    const newTuit = {
      ...tuit,
      "dislikes": tuit.dislikes + (tuit.disliked ? -1 : 1),
      "disliked": !tuit.disliked
    };
    setTuit(newTuit);
    dispatch(updateTuitThunk({
      ...tuit,
      dislikes: newTuit.dislikes,
      disliked: newTuit.disliked
    }))
  }
  const likeColor = tuit.liked ? "bi-heart-fill text-danger": "bi-heart";
  const dislikeColor = tuit.disliked ? "text-info bi-hand-thumbs-down-fill": "bi-hand-thumbs-down";
  return(
        <div className="row">
          <div className="col-3">
            <i className="fa fa-comment"/> {tuit.replies}
          </div>
          <div className="col-3">
            <i className="fa fa-recycle"/> {tuit.retuits}
          </div>
          <div className="col-3">
            <div>
              <i onClick={() =>
                  toggleLikeHandler(tuit)} className={`bi ${likeColor}`}/>
               {tuit.likes}
            </div>
          </div>
          <div className="col-3">
            <div>
              <i onClick={() =>
                  toggleDislikeHandler(tuit)} className={`bi ${dislikeColor}`}/>
               {tuit.dislikes}
            </div>
          </div>
          {/*<div className="col-2">*/}
          {/*  <i className="fa fa-share"/>*/}
          {/*</div>*/}
        </div>

  );
};
export default TuitStats;