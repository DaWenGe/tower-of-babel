var inputs = process.argv.slice(2);
var result = inputs.map( (x) => x[0] )
					.reduce( (soFar, s) => soFar + s );

console.log(result);