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

var RcFooter = React.createClass({
  render: function() {
    return (
        <div className="rc-footer green white-text">
          <div className="text-center rc-collapse-height">
            Copyright © Fansoffan 2015 All rights reserved.<br />
            The Fansoffan content and its associated images are intellectual work of Fansoffan.
          </div>
          <div className="pull-right text-right">
            Contact: [to be added]
          </div>
        </div>
    )
  }
});