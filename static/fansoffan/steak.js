/**
 * @props id
 */
var BlogSteak = React.createClass({
  render: function () {
    return (
        <div>
          <div className={this.props.id + "-image"}>
            <div className="main-text white-text">Steak</div>
          </div>
          <div className="blog-content">
            <p>
              <span className="blog-tag white-text teal lighten-2">Prep Time 20 minutes</span>
              <span className="blog-tag white-text teal lighten-2">Cook Time 10 minutes</span>
              <span className="blog-tag white-text teal lighten-2">Total Time 30 minutes</span>
              <span className="blog-tag white-text teal lighten-2">Yield 2 servings</span>
            </p>

            <h5>INGREDIENTS</h5>
            <table className="striped">
              <thead>
              <tr>
                <th data-field="ingredient">Ingredient</th>
                <th data-field="quantity">Quantity</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Steak, medium thick</td>
                <td>1 lb</td>
              </tr>
              <tr>
                <td>Hickory smoke sea salt</td>
                <td>To taste</td>
              </tr>
              <tr>
                <td>Soy sauce</td>
                <td>To taste</td>
              </tr>
              <tr>
                <td>Olive oil</td>
                <td>A dash</td>
              </tr>
              <tr>
                <td>Rosemary</td>
                <td>To taste</td>
              </tr>
              <tr>
                <td>Lemon garlic powder</td>
                <td>To taste</td>
              </tr>
              <tr>
                <td>Other spices</td>
                <td>To taste</td>
              </tr>
              </tbody>
            </table>
            <h5>INSTRUCTIONS</h5>
            <ol>
              <li>Marinate steak in soy sauce and other spices for 20min. Don’t make it too salty.</li>
              <li>Preheat the oven to 375F</li>
              <li>Preheat skillet over stop top.</li>
              <li>Medium heat, sear steak 2min each side.</li>
              <li>Baked in oven for 7 min for medium rear doneness.</li>
            </ol>

          </div>
        </div>
    )
  }
});