var CoverPhoto = React.createClass({
  render: function() {
    return (
        (
            <div className="cover-image" >
              <div className="main-text">Welcome to Fans of Fan</div>
              <div className="secondary-text">You will be able to rate and comment on companies (and their associated stock tickers)
                in various categories such as market growth, profitability, etc.  With these ratings, you''ll
                be able to interact with other users and improve your speculations on your favorite stocks.</div>
            </div>)
    )
  }
});

React.render(
<div>
  <NavBar/>
  <CoverPhoto/>
</div>,
    document.getElementById('container')
);