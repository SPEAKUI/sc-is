var guid = require( "sc-guid" );

module.exports = function ( value ) {
  return guid.isValid( value );
};