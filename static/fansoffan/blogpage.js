var blogId = getQueryParams(window.location.search.substring(1)).id;

function getQueryParams(qs) {
  qs = qs.split('+').join(' ');

  var params = {}, tokens, re = /[?&]?([^=]+)=([^&]*)/g;

  while (tokens = re.exec(qs)) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }

  return params;
}

/**
 * @props html
 */
var BlogContent = React.createClass({
  render: function () {
    var actualContent;
    switch (blogId) {
      case 'honey-glazed-salmon':
        actualContent = <BlogHoneyGlazedSalmon id={blogId}/>;
        break;
      case 'peanut-butter-cookie':
        actualContent = <BlogPeanutButterCookie id={blogId}/>;
        break;
      case 'spinach-pasta':
        actualContent = <BlogSpinachPasta id={blogId}/>;
        break;
      //add new stuff here
      default:
        <div/>
    }
    return <div className="content">{actualContent}</div>
  }
});

React.render(<div>
  <NavBar/>
  <BlogContent/>
  <RcFooter/>
</div>, document.getElementById('container'));
