import whoList from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
  return (`
    <ul class="list-group">
        <li class="list-group-item"><strong>Who to follow</strong></li>
         ${
          whoList.map(who => {
            return(WhoToFollowListItem(who));
          }).join('')
          }
    </ul>`
  );
}

export default WhoToFollowList;

