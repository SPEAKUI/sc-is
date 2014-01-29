var type = require( "./ises/type" ),
  is = {};

/**
 * Types
 */
is.arguments = type( "arguments" );
is.array = type( "array" );
is.boolean = type( "boolean" );
is.date = type( "date" );
is.fn = is.func = is[ "function" ] = type( "function" );
is.null = type( "null" );
is.number = is.integer = type( "number" );
is.object = type( "object" );
is.regexp = type( "regexp" );
is.string = type( "string" );
is.undefined = type( "undefined" );

/**
 * Helpers
 */
is.empty = require( "./ises/empty" );
is.nullOrUndefined = require( "./ises/null-or-undefined" );

module.exports = is;