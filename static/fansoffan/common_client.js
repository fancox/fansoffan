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
            The content and its associated images on this website are intellectual work of Fan Chen.
          </div>
          <div className="pull-right text-right">
            Contact: f9chen@gmail.com <a href="https://www.linkedin.com/in/fchen1" className="blue-text text-lighten-3">Linkedin</a>
          </div>
        </div>
    )
  }
});

/**
 * @props cssClassName
 * @props imageUrl
 * @props title
 */
var PhotoWithTitle = React.createClass({
  render: function () {
    return (
        <div className={this.props.cssClassName}/>
    )
  }
});
