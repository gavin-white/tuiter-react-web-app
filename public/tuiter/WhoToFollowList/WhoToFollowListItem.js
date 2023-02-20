const WhoToFollowListItem = (who) => {
  return(`
   <li class="list-group-item">
      <div class="row">
        <div class="col-2">
          <img src="../../images/${who.avatarIcon}" class="wd-profile-img">
        </div>
        <div class="col-6">
          <strong>${who.userName}</strong> <i class="fa fa-check-circle"></i>
          </br>@${who.handle}
        </div>
        <div class="col-4">
          <button class="btn btn-primary wd-override-bs">
            Follow
          </button>
        </div>
      </div>
    </li>
 `);
}
export default WhoToFollowListItem;