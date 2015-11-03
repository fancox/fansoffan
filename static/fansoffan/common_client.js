var NavBar = React.createClass({
  render: function() {
    return (
        <nav>
          <div className="green">
            <div>
              <a href={common.routes.homepage}>
                <img src="/img/fan1.png" className="nav-logo pull-left" />
              </a>
              <div className="nav-subtitle">Fans of Fan</div>
            </div>
          </div>
        </nav>
    )
  }
});