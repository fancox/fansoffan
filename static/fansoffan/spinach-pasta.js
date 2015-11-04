/**
 * @props id
 */
var BlogSpinachPasta = React.createClass({
  render: function () {
    return (
        <div>
          <div className={this.props.id + "-image"}>
            <div className="main-text white-text">Spinach Parmesan Pasta</div>
          </div>
          <div className="blog-content">
            <p>This recipe comes from internet: http://damndelicious.net/2014/08/18/honey-glazed-salmon/</p>

            <p>
              <span className="blog-tag white-text teal lighten-2">Prep Time 5 minutes</span>
              <span className="blog-tag white-text teal lighten-2">Cook Time 10 minutes</span>
              <span className="blog-tag white-text teal lighten-2">Total Time 15 minutes</span>
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
                <td>Uncooked pasta (we used whole wheat Capellini)</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Butter</td>
                <td>2 tbsp</td>
              </tr>
              <tr>
                <td>garlic, minced</td>
                <td>2 cloves</td>
              </tr>
              <tr>
                <td>Packed baby spinach</td>
                <td>2-3 cups</td>
              </tr>
              <tr>
                <td>Grated Parmesan cheese</td>
                <td>1/2 cup</td>
              </tr>
              <tr>
                <td>Salt and freshly ground black pepper</td>
                <td>To taste</td>
              </tr>
              <tr>
                <td>Seafood of your choice</td>
                <td>To taste</td>
              </tr>
              </tbody>
            </table>
            <h5>INSTRUCTIONS</h5>
            <ol>
              <li>Add the pasta to a large pot of boiling salted water and cook until al dente. Drain the pasta,
                reserving 1/2 cup of the pasta water. Set pasta aside.
              </li>
              <li>Stir fry seafood to cooked.</li>
              <li> Using the same pot, melt the butter over medium heat. Add the garlic and cook for 2-3 minutes. Add in
                the pasta and spinach. Gently toss and cook until spinach leaves are wilted. If the pasta starts to dry
                out, add in some of the reserved pasta water. We usually add about 1/3 cup. Stir in 1/4 cup of the
                Parmesan cheese and toss until combined. Season with salt and freshly ground black pepper, to taste.
              </li>
              <li> Pour pasta into a large bowl. Garnish with additional Parmesan cheese and serve immediately.</li>
            </ol>

          </div>
        </div>
    )
  }
});