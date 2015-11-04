var CoverPhoto = React.createClass({
  render: function () {
    return (
        <div className="cover-image"/>
    )
  }
});

var CoverText = React.createClass({
  render: function () {
    return (
        <div className="cover-text">
          <div className="main-text">Fan's secret recipes</div>
          <div className="secondary-text">This is a food blog that collects recipes Fan has tried. Follow these
            recipes to feed your loved ones into a fat kitty.
          </div>
        </div>
    )
  }
});

/**
 * @prop imageLink
 * @prop articleTitle
 * @prop articleLink
 * @prop preparationTime
 * @prop cookingTime
 */
var HomePageCard = React.createClass({
  render: function () {
    return (
        <div className="col s4 m4">
          <div className="card medium">
            <div className="card-image">
              <img src={this.props.imageLink}/>
            </div>
            <div className="card-content">
              <p>Preparation time: {this.props.preparationTime} </p>

              <p>Cooking time: {this.props.cookingTime} </p>
            </div>
            <div className="card-action">
              <a href={this.props.articleLink}>{this.props.articleTitle}</a>
            </div>
          </div>
        </div>
    )
  }
});

var Content = React.createClass({
  render: function () {
    return (
        <div className="content">
          <div className="row">
            <HomePageCard imageLink="img/honey-glazed-salmon.jpg"
                          articleTitle="Honey Glazed Salmon"
                          articleLink="/blog?id=honey-glazed-salmon"
                          preparationTime="10 min"
                          cookingTime="20 min"/>
            <HomePageCard imageLink="img/peanut-butter-cookie.jpg"
                          articleTitle="Peanut Butter Nutella Sea Salt Cookie"
                          articleLink="/blog?id=peanut-butter-cookie"
                          preparationTime="30 min"
                          cookingTime="60 min"/>
            <HomePageCard imageLink="img/spinach-pasta.jpg"
                          articleTitle="Spinach Parmesan Pasta"
                          articleLink="/blog?id=spinach-pasta"
                          preparationTime="5 min"
                          cookingTime="10 min"/>
          </div>
          <div className="row">
            <HomePageCard imageLink="img/sukiyaki.jpg"
                          articleTitle="Sukiyaki"
                          articleLink="/blog?id=sukiyaki"
                          preparationTime="10 min"
                          cookingTime="15 min"/>

          </div>
          {/*add new stuff here*/}
        </div>
    )
  }
});

React.render(<div>
  <NavBar/>
  <CoverPhoto/>
  <CoverText/>
  <Content/>
  <RcFooter/>
</div>, document.getElementById('container'));
