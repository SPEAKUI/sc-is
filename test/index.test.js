var is = require( ".." ),
  should = require( "should" );

describe( "is", function () {

  it( "should check types", function () {

    is.arguments( arguments ).should.be.true;
    is.arguments( [] ).should.be.false;
    is.arguments().should.be.false;

    is.array( [] ).should.be.true;
    is.array( {} ).should.be.false;
    is.array().should.be.false;

    is.boolean( true ).should.be.true;
    is.boolean( false ).should.be.true;
    is.boolean( 1 ).should.be.false;
    is.boolean().should.be.false;

    is.date( new Date() ).should.be.true;
    is.date( "29 aug 1997" ).should.be.false;
    is.date().should.be.false;

    is.fn( function () {} ).should.be.true;
    is.fn( Object ).should.be.true;
    is.fn( describe ).should.be.true;
    is.fn( this ).should.be.false;
    is.fn().should.be.false;

    is.null( null ).should.be.true;
    is.null( undefined ).should.be.false;
    is.null( 0 ).should.be.false;
    is.null( -1 ).should.be.false;
    is.null( false ).should.be.false;
    is.null().should.be.false;

    is.number( 1 ).should.be.true;
    is.number( "1" ).should.be.false;
    is.number().should.be.false;

    is.object( {} ).should.be.true;
    is.object( this ).should.be.true;
    is.object().should.be.false;

    is.regexp( new RegExp() ).should.be.true;
    is.regexp( /^/ ).should.be.true;
    is.regexp().should.be.false;

    is.string( "a" ).should.be.true;
    is.string( "" ).should.be.true;
    is.string( true ).should.be.false;
    is.string().should.be.false;

    is.undefined( undefined ).should.be.true;
    is.undefined().should.be.true;
    is.undefined( "undefined" ).should.be.false;
    is.undefined( null ).should.be.false;
    is.undefined( false ).should.be.false;
    is.undefined( 0 ).should.be.false;
    is.undefined( -1 ).should.be.false;

  } );

  it( "should check if a value is empty", function () {

    is.empty( null ).should.be.true;
    is.empty( undefined ).should.be.true;
    is.empty( "undefined" ).should.be.false;
    is.empty( 0 ).should.be.true;
    is.empty( -1 ).should.be.true;
    is.empty( false ).should.be.true;
    is.empty( [] ).should.be.true;
    is.empty( {} ).should.be.true;

  } );

  it( "should check if a value is null or undefined", function () {

    is.nullOrUndefined( null ).should.be.true;
    is.nullOrUndefined( undefined ).should.be.true;
    is.nullOrUndefined( void 0 ).should.be.true;
    is.nullOrUndefined( "null" ).should.be.false;
    is.nullOrUndefined( "undefined" ).should.be.false;
    is.nullOrUndefined( 0 ).should.be.false;
    is.nullOrUndefined( false ).should.be.false;
    is.nullOrUndefined( {} ).should.be.false;

  } );

} );