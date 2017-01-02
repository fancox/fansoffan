
var React = require('react');
var ReactDOM = require('react-dom');
var Footer = require('./footer').Footer;

ReactDOM.render(
  <div>
    <div>
      <img src="images/hero.png" className="max-width" />
      </div>
    <div className="row vertical-margin-thick">
      <div className="col s12 m4 center">
        <div>
          <img src="images/cooking_icon.png" />
        </div>
        <div>
          Cooking
        </div>
      </div>
      <div className="col s12 m4 center">
        <div>
          <img src="images/photography_icon.png" />
        </div>
        <div>
          Photograph
        </div>
      </div>
      <div className="col s12 m4 center">
        <div>
          <img src="images/blog_icon.png" />
        </div>
        <div>
          Blog
        </div>
      </div>
    </div>
    <div className="row vertical-padding-thick green darken-4">
     <div className="col s12 offset-l3 m4 l3">
        <img className="bordered max-width" src="images/fan_headshot.png" />
      </div>
      <div className="col s12 m8 l4 white-text text-huge">
        Hi, I am Fan.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
      </div>
    </div>
    <Footer />
  </div>,
  document.getElementById('container')
);

