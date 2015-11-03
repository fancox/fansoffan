/**
 * @props id
 */
var BlogHoneyGlazedSalmon = React.createClass({
  render: function () {
    return (
        <div>
          <div className={this.props.id + "-image"}>
            <div className="main-text white-text">Honey Glazed Salmon</div>
          </div>
          <div className="blog-content">
            <p>This recipe comes from internet: http://damndelicious.net/2014/08/18/honey-glazed-salmon/</p>

            <p>
              <i className="tiny material-icons">grade</i>Prep Time 10 minutes<br/>
              <i className="tiny material-icons">grade</i>Cook Time 20 minutes<br/>
              <i className="tiny material-icons">grade</i>Total Time 30 minutes<br/>
            </p>

            <p>
              Yield 2 servings<br/>
              The easiest, most flavorful salmon you will ever make. And that browned butter lime sauce is to die for!
            </p>
            <h4>INGREDIENTS</h4>
            <table className="striped">
              <thead>
              <tr>
                <th data-field="ingredient">Ingredient</th>
                <th data-field="quantity">Quantity</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Salmon Filet</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Kosher salt and freshly ground black pepper</td>
                <td>To taste</td>
              </tr>
              <tr>
                <td>All-purpose flour</td>
                <td>2 tsp</td>
              </tr>
              <tr>
                <td>Honey</td>
                <td>2 tsp</td>
              </tr>
              <tr>
                <td>Olive oil</td>
                <td>1 tsp</td>
              </tr>
              <tr>
                <td>Zest of lime</td>
                <td>1</td>
              </tr>
              </tbody>
            </table>
            <h5>FOR THE BROWNED BUTTER LIME SAUCE</h5>
            <table className="striped">
              <thead>
              <tr>
                <th data-field="ingredient">Ingredient</th>
                <th data-field="quantity">Quantity</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Unsalted butter</td>
                <td>3 tsp</td>
              </tr>
              <tr>
                <td>Garlic, pressed</td>
                <td>2 cloves</td>
              </tr>
              <tr>
                <td>Honey</td>
                <td>1 tsp</td>
              </tr>
              <tr>
                <td>Kosher salt and freshly ground black pepper</td>
                <td>To taste</td>
              </tr>
              <tr>
                <td>Zest of lime</td>
                <td>1 slice</td>
              </tr>
              </tbody>
            </table>
            <h4>INSTRUCTIONS</h4>
            <ol>
              <li>Preheat oven to 400 degrees F.</li>
              <li>To make the browned butter lime sauce, melt butter in a medium saucepan over medium heat. Cook,
                whisking
                constantly, until the foam subsides and the butter begins to turn a golden brown, about 3 minutes. Stir
                in
                garlic, honey and lime juice, salt and pepper, to taste; set aside.
              </li>
              <li>Season salmon with salt and pepper, to taste. Dredge each salmon filet with 1 tablespoon flour and
                drizzle with 1 tablespoon honey.
              </li>
              <li>Heat olive oil in a large oven-proof skillet over medium high heat. Working in batches, add salmon to
                the skillet and sear both sides until golden brown, about 1-2 minutes per side.
              </li>
              <li>Place into oven and bake until completely cooked through, about 8-10 minutes.</li>
              <li>Serve immediately with browned butter lime sauce and lime zest, if desired.</li>
            </ol>
            <h4>TIPS</h4>

            <p>
              <i className="tiny material-icons">favorite</i>Make sauce when salmon is in the oven. Save you so much
              time!<br/>
              <i className="tiny material-icons">favorite</i>Add roasted whole garlic when cooking salmon for snacks!
            </p>
          </div>
        </div>
    )
  }
});