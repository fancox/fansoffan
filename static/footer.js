
var React = require('react');

module.exports = {
  Footer: React.createClass({
    render: function() {
        return (
          <div className="rc-footer">
            <div className="text-center rc-collapse-height">
              Copyright © Fans of Fan 2017 All rights reserved.<br />
              Design and made by Fan Chen, with ❤️
            </div>
            <div className="pull-right text-right">
              Contact: f9chen@gmail.com
            </div>
          </div>
        )
      }
  }),
}