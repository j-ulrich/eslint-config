const fs = require( 'fs' );
const stripJsonComments  = require( 'strip-json-comments' );

const fileContent = fs.readFileSync( __dirname + '/.eslintrc.json', 'utf8' );
const strippedContent = stripJsonComments( fileContent );
module.exports = JSON.parse( strippedContent );