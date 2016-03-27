/**
 * @props id
 */
var BlogBurger = React.createClass({
  render: function () {
    return (
        <div>
          <div className={this.props.id + "-image"}>
            <div className="main-text white-text">Burger</div>
          </div>
          <div className="blog-content">
            <p>This recipe is inspired by a blueapron recipe <a href="https://www.blueapron.com/recipes/short-rib-burgers-on-a-pretzel-bun-with-hoppy-cheddar-sauce-roasted-sweet-potato-rounds">click here</a></p>
            <p>
              <div className="tag white-text teal lighten-2">Prep Time 15 minutes</div>
              <div className="tag white-text teal lighten-2">Cook Time 20 minutes</div>
              <span className="tag white-text teal lighten-2">Total Time 35 minutes</span>
              <span className="tag white-text teal lighten-2">Yield 2 servings</span>
            </p>
            <h5>
              MAKE THE SAUCE
            </h5>
            <table className="striped">
              <thead>
              <tr>
                <th data-field="ingredient">Ingredient</th>
                <th data-field="quantity">Quantity</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Milk</td>
                <td>¾ Cup</td>
              </tr>
              <tr>
                <td>Kosher salt and freshly ground black pepper</td>
                <td>To taste</td>
              </tr>
              <tr>
                <td>Cheddar cheese</td>
                <td>2 oz</td>
              </tr>
              </tbody>
            </table>

            <h6>INSTRUCTIONS</h6>
            <ol>
            <li>In a small pot, heat 2 tablespoons of olive oil on medium-high until hot. </li>
            <li>Add the flour and cook, whisking constantly, 1 to 2 minutes, or until golden. </li>
            <li>Gradually whisk in half the milk. Simmer, whisking frequently, 1 to 2 minutes, or until thickened; season with salt and pepper. </li>
            <li>Reduce the heat to low. Gradually add the cheese and cook, whisking constantly, 30 seconds to 1 minute, or until smooth.
             (If the sauce seems too thick, gradually add the remaining milk to achieve your desired consistency.) </li>
            <li>Season with salt and pepper to taste. Set aside in a warm place.</li>
            </ol>

            <h5>
              MAKE THE BURGER
            </h5>
            <table className="striped">
              <thead>
              <tr>
                <th data-field="ingredient">Ingredient</th>
                <th data-field="quantity">Quantity</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Ground beef</td>
                <td>half pound</td>
              </tr>
              <tr>
                <td>Red onion</td>
                <td>half</td>
              </tr>
              <tr>
                <td>Burger buns</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Vegetables of your choice</td>
                <td>To taste</td>
              </tr>
              <tr>
                <td>Guacamole (Optional)</td>
                <td>To taste</td>
              </tr>
              <tr>
                <td>Bacon (Optional)</td>
                <td>1</td>
              </tr>
              </tbody>
            </table>
            
            <h6>INSTRUCTIONS</h6>
            <ol>
              <li>Preheat oven to 425 degrees F.</li>
              <li>Toast buns for 6~7 min.</li>
              <li>Dice red onions. Save 1/4 for later use</li>
              <li>(Optional) Make guacamole and bacon bits.</li>
              <li>place the ground beef in a bowl. Season with salt and pepper; gently mix in red onion dices to incorporate. 
              Using your hands, form the mixture into two ½-inch-thick burgers.
              </li>
              <li>In a large pan (nonstick, if you have one), heat 2 teaspoons of olive oil on medium until hot. 
              Add the burgers and cook 3 to 4 minutes per side for medium, or until browned and cooked to your desired degree of doneness.
              </li>
              <li>Assembel the burgers.</li>
           </ol>
          </div>
        </div>
    )
  }
});
