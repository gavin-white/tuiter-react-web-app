const NavigationSidebar = () => {
  return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
        <i class="fab fa-twitter"></i></a>
        <li class="list-group-item"><i class="fa fa-house-user"></i> <span class="d-none d-xl-inline">Home</span></li>
        <li class="list-group-item active"><i class="fa fa-hashtag"></i> <span class="d-none d-xl-inline">Explore</span></li>
        <li class="list-group-item"><i class="fa fa-bell"></i> <span class="d-none d-xl-inline">Notifications</span></li>
        <li class="list-group-item"><i class="fa fa-envelope"></i> <span class="d-none d-xl-inline">Messages</span></li>
        <li class="list-group-item"><i class="fa fa-bookmark"></i> <span class="d-none d-xl-inline">Bookmarks</span></li>
        <li class="list-group-item"><i class="fa fa-list"></i> <span class="d-none d-xl-inline">Lists</span></li>
        <li class="list-group-item"><i class="fa fa-user"></i> <span class="d-none d-xl-inline">Profile</span></li>
        <li class="list-group-item"><i class="fa fa-dot-circle"></i> <span class="d-none d-xl-inline">More</span></li>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;