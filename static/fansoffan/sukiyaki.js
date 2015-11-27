/**
 * @props id
 */
var BlogSukiyaki = React.createClass({
  render: function () {
    return (
        <div>
          <div className={this.props.id + "-image"}>
            <div className="main-text white-text">Sukiyaki</div>
          </div>
          <div className="blog-content">
            <p>
              <span className="tag white-text teal lighten-2">Prep Time 10 minutes</span>
              <span className="tag white-text teal lighten-2">Cook Time 15 minutes</span>
              <span className="tag white-text teal lighten-2">Total Time 25 minutes</span>
              <span className="tag white-text teal lighten-2">Yield 2 servings</span>
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
                <td>Sukiyaki beef</td>
                <td>2 plates from nijiya market</td>
              </tr>
              <tr>
                <td>Green onion</td>
                <td>8 to 10 of 1-inch slices</td>
              </tr>
              <tr>
                <td>Mushroom</td>
                <td>6</td>
              </tr>
              <tr>
                <td>Tofu</td>
                <td>1 box</td>
              </tr>
              <tr>
                <td>Eggs</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Clear noodle</td>
                <td>20 g</td>
              </tr>
              <tr>
                <td>Jalapeño(optional)</td>
                <td>1</td>
              </tr>
              <tr>
                <td>sukiyaki sauce</td>
                <td>100ml</td>
              </tr>
              </tbody>
            </table>
            <h5>INSTRUCTIONS</h5>
            <ol>
              <li>Stir fry the beef</li>
              <li>Pour in wet ingredients. Water 250ml: sukiyaki sauce 100ml.</li>
              <li>Add vegetables. Be creative and add any of your choice :)</li>
              <li>Add more vegetables based on how fast they can be cooked.</li>
              <li>Add clear noodles! Yay!</li>
              <li>Add tofu. Put the lid on and wait for 5 min.</li>
            </ol>
            
          </div>
        </div>
    )
  }
});