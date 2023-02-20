const PostSummaryItem = (post) => {
  return(`
   <li class="list-group-item">
      <div class="row">
        <div class="col-9">
          <div>${post.topic}</div>
          <div><strong>${post.userName}</strong> <i class="fa fa-check-circle"></i> - ${post.time}</div>
          <div><strong>${post.title}</strong></div>
        </div>
        <div class="col-3 ps-5">
          <img src="../../images/${post.image}" class="wd-tuit-image">
        </div>
      </div>
    </li>
 `);
}
export default PostSummaryItem;