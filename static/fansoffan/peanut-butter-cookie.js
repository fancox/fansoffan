/**
 * @props id
 */
var BlogPeanutButterCookie = React.createClass({
  render: function () {
    return (
        <div>
          <div className={this.props.id + "-image"}>
            <div className="main-text white-text">Peanut Butter Nutella Sea Salt Cookie</div>
          </div>
          <div className="blog-content">
            <p>
              <span className="blog-tag white-text teal lighten-2">Prep Time 30 minutes</span>
              <span className="blog-tag white-text teal lighten-2">Cook Time 60 minutes</span>
              <span className="blog-tag white-text teal lighten-2">Total Time 90 minutes</span>
              <span className="blog-tag white-text teal lighten-2">Yield about 2 dozens</span>
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
                <td>Nut butter (combination of your choice)</td>
                <td>1 cup</td>
              </tr>
              <tr>
                <td>Butter</td>
                <td>1 cup</td>
              </tr>
              <tr>
                <td>Brown sugar</td>
                <td>1 cup</td>
              </tr>
              <tr>
                <td>White sugar</td>
                <td>1 cup</td>
              </tr>
              <tr>
                <td>Eggs</td>
                <td>2</td>
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
                <td>Vanilla extract(Optional)</td>
                <td>1/2 tsp</td>
              </tr>
              <tr>
                <td>Flour</td>
                <td>2 1/2 cup</td>
              </tr>
              <tr>
                <td>Sea salt</td>
                <td>roughly 1 tsp</td>
              </tr>
              <tr>
                <td>White chocolate chips (optional)</td>
                <td>1/4 cup</td>
              </tr>
              </tbody>
            </table>
            <h5>INSTRUCTIONS</h5>
            <ol>
              <li>Preheat oven to 370 F.</li>
              <li>Mix flour, baking soda and baking powder.</li>
              <li>In another big bowl, cream together butter, nut butters, and sugars.</li>
              <li>Beat egg into 3), also vanilla if used.</li>
              <li>Stir 2) into 3)</li>
              <li>Sprinkle and fold in sea salt, also chocolate chips if used.</li>
              <li>Bake for 9 min.</li>
            </ol>

            <div class="row">
              <div className="col s12 m5">
                <div className="card-panel orange white-text">
                  <h6>TIPS</h6>
                  <ol>
                    <li>Freeze dough for about 30 min for a fatter cookie.</li>
                    <li>Use muffin pan for shaping.</li>
                    <li>Cookie crumbles can be used for muffin top or cake bottom.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
});