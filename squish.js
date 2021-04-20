function squishA(input)
{
  var output = 1 / (1 + Math.exp(-input));
  return output;
}
var inputs = [-1337.1337, -10.5, -5.5, -1.5, -1, -0.3, -0.113, 0, 0.31, 0.76, 1.3, 1.99, 7.4, 160, 1337];
console.log("squishA");
for(var i=0;i<inputs.length;i++)
{
  console.log("Input: " + inputs[i] + "  Out: " + squishA(inputs[i]));
}
function derivative(input2)
{
  var output = input2 * (1-input2);

  return output;
}
var inputs2 = [0, 0.000027535691114583473, 0.004070137715896128, 0.18242552380635635, 0.2689414213699951, 0.425557483188341, 0.47178002201963243, 0.5, 0.5768852611320463, 0.6813537337890256, 0.7858349830425586, 0.8797431375322491, 0.9993891206405656, 1, 1];
console.log("CloseToBoundaryA");
for(var i = 0;i<inputs2.length;i++)
{
  console.log("Input: " + inputs2[i] + "  Output: " + derivative(inputs2[i]));
}
