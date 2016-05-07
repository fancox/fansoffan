/**
 * @props id
 */
var BlogCurry = React.createClass({
  render: function () {
    return (
        <div>
          <div className={this.props.id + "-image"}>
            <div className="main-text white-text">Curry</div>
          </div>
          <div className="blog-content">
             <p>
              <div className="tag white-text teal lighten-2">Prep Time 15 minutes</div>
              <div className="tag white-text teal lighten-2">Cook Time 20 minutes</div>
              <span className="tag white-text teal lighten-2">Total Time 35 minutes</span>
              <span className="tag white-text teal lighten-2">Yield 2 servings</span>
            </p>

            <table className="striped">
              <thead>
              <tr>
                <th data-field="ingredient">Ingredient</th>
                <th data-field="quantity">Quantity</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>S&B Golden Curry</td>
                <td>2 cube mild;1 cube spicy</td>
              </tr>
              <tr>
                <td>Half a potato</td>
                <td>Diced</td>
              </tr>
              <tr>
                <td>Half a yellow onion</td>
                <td>Roughly cut</td>
              </tr>
              <tr>
                <td>Carrot</td>
                <td>3 oz, diced</td>
              </tr>
              <tr>
                <td>Thinly sliced beef</td>
                <td>0.4 pound</td>
              </tr>
              <tr>
                <td>Rice</td>
                <td>Half a cup</td>
              </tr>
              </tbody>
            </table>

            <h6>INSTRUCTIONS</h6>
            <ol>
              <li>Make rice.</li>
              <li>Wash and prepare the potatoes, onions and carrots.</li>
              <li>Heat up cast iron skillet with some olive oil to medium high.</li>
              <li>Stir fry beef for about a minute. When you just about to see all the redness disappear, dish the beef
                to a plate for later use.</li>
              <li>Add potatoes to the skillet used to cook beef with medium high heat. Wipe out any extra oil that was
                left in the skillet for healthier diet. Slightly frying the potatoes for 30s. Add 2 cups of water.
                Turn head to medium. Cook with lid for 8min. </li>
              <li>Use a form to test if potatoes are soft enough. When ready, add onions and carrots. Cook for another
              1 min.</li>
              <li>Turn heat to medium low. Add curry cubes. Stir curry cubes into water and vegetable until reach
                desired consistency. This may take 5 min.</li>
              <li>Add beef back. Stir for 30s. Ready to serve!</li>
            </ol>
          </div>
        </div>
    )
  }
});
