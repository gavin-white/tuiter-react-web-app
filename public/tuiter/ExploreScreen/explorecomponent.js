import PostSummaryList
  from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
           <div class="row">
              <i class="fa fa-search position-absolute pt-2 ps-4"></i>
              <span class="d-inline">
              <input type="text"
                 class="form-control ps-5 wd-override-bs"
                 id="searchinput"
                 placeholder="Search Tuiter">
              <a href="explore-settings.html" id="gear" class="ps-2"><i class="fa fa-cog"></i></a>
              </span>
           </div>
           <ul class="nav mb-2 nav-tabs">
              <ul class="nav nav-tabs mt-1 mb-1">
                <li class="nav-item">
                  <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                  <a class="nav-link" href="#" tabindex="-1">Entertainment</a>
                </li>
              </ul>
           </ul>
           <div class="position-relative">
              <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" class="wd-main-img">
              <div class="position-absolute wd-bottom-left"><strong>SpaceX's Starship</strong></div>
           </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
