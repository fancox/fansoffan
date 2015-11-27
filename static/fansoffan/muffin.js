/**
 * @props id
 */
var BlogMuffin = React.createClass({
  render: function () {
    return (
        <div>
          <div className={this.props.id + "-image"}>
            <div className="main-text white-text">Banana Crumb Muffins</div>
          </div>
          <div className="blog-content">
            <p>
              <span className="tag white-text teal lighten-2">Prep Time 15 minutes</span>
              <span className="tag white-text teal lighten-2">Cook Time 20 minutes</span>
              <span className="tag white-text teal lighten-2">Total Time 35 minutes</span>
              <span className="tag white-text teal lighten-2">Yield a dozen</span>
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
                <td>White sugar</td>
                <td>3/4 cup</td>
              </tr>
              <tr>
                <td>Bananas, mashed</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Salt</td>
                <td>1/2 tsp</td>
              </tr>
              <tr>
                <td>Baking soda</td>
                <td>1 tsp</td>
              </tr>
              <tr>
                <td>Baking powder</td>
                <td>1 tsp</td>
              </tr>
              <tr>
                <td>All-purpose flour</td>
                <td>1 1/2 cup</td>
              </tr>
              <tr>
                <td>Egg, lightly beaten</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Butter, melted</td>
                <td>1/3 cup</td>
              </tr>
              </tbody>
            </table>

            <h5>INGREDIENTS FOR CRUMB</h5>
            <table className="striped">
              <thead>
              <tr>
                <th data-field="ingredient">Ingredient</th>
                <th data-field="quantity">Quantity</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Packed brown sugar</td>
                <td>1/3 cup</td>
              </tr>
              <tr>
                <td>All-purpose flour</td>
                <td>2 tsp</td>
              </tr>
              <tr>
                <td>ground cinnamon</td>
                <td>1/8 tsp</td>
              </tr>
              <tr>
                <td>Butter</td>
                <td>1 tbsp</td>
              </tr>
              </tbody>
            </table>


            <h5>INSTRUCTIONS</h5>
            <ol>
              <li>Preheat oven to 375 degrees F (190 degrees C). Lightly grease 10 muffin cups, or line with muffin
                papers.</li>
              <li>In a large bowl, mix together 1 1/2 cups flour, baking soda, baking powder and salt. In another bowl,
                beat together bananas, sugar, egg and melted butter. Stir the banana mixture into the flour mixture just
                until moistened. Spoon batter into prepared muffin cups.</li>
              <li>In a small bowl, mix together brown sugar, 2 tablespoons flour and cinnamon. Cut in 1 tablespoon
                butter until mixture resembles coarse cornmeal. Sprinkle topping over muffins.</li>
              <li>Bake in preheated oven for 18 to 20 minutes, until a toothpick inserted into center of a muffin comes
                out clean.</li>
            </ol>

          </div>
        </div>
    )
  }
});