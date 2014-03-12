var is = require( ".." ),
  should = require( "should" );

var noop = function () {},
  args;

( function () {
  args = arguments;
} )();

var data = [ {
  name: "arguments",
  valid: [ args ],
  invalid: [
    [],
    [ 1 ]
  ]
}, {
  name: "array",
  valid: [
    [],
    [ 1 ]
  ],
  invalid: [ {} ]
}, {
  name: "boolean",
  valid: [ true, false ],
  invalid: [ 1, 0, null, undefined, "true", "false" ]
}, {
  name: "date",
  valid: [ new Date() ],
  invalid: [ "29 Aug 1997", new Date().getTime() ]
}, {
  name: [ "function", "fn", "func" ],
  valid: [ describe, noop, Object ],
  invalid: [ this, {},
    []
  ]
}, {
  name: "null",
  valid: [ null ],
  invalid: [ 0, -1, false, undefined ]
}, {
  name: [ "number", "integer", "int" ],
  valid: [ 0, 1, -1, 1.2, -1.2 ],
  invalid: [ "1" ]
}, {
  name: "object",
  valid: [ {},
    this
  ],
  invalid: [ noop, /^/, new Date(), [], args, Object ]
}, {
  name: "regexp",
  valid: [ /^/, new RegExp( "^" ) ],
  invalid: [ "/^/", null, undefined ]
}, {
  name: "string",
  valid: [ "", "a" ],
  invalid: [ true, 1, undefined ]
}, {
  name: "undefined",
  valid: [ undefined, void 0 ],
  invalid: [ "undefined", null, "", -1, 0, false ]
}, {
  name: "empty",
  valid: [ -1, 0, false, "", undefined, null, void 0, [], {} ],
  invalid: [ "null", "undefined", [ 1 ], noop ]
}, {
  name: [ "nullOrUndefined", "nullorundefined" ],
  valid: [ null, undefined, void 0 ],
  invalid: [ "null", "undefined", 0, -1, false ]
}, {
  name: "guid",
  valid: [ "369e6d5b-cb7f-4b4d-90d0-1c462770e9f7", "{369e6d5b-cb7f-4b4d-90d0-1c462770e9f7}", "8a9c86bc-1125-4ec4-9aeb-a429fd7f8c7c", "7d1b397e-2cb3-4132-a2b1-6dcdde46946c" ],
  invalid: [ "369e6d5b-cb7f-3b4d-90d0-1c462770e9f7", "369e6d5bcb7f4b4d90d01c462770e9f7", "null", "undefined", 0, -1, false ]
} ]

describe( "is", function () {

  data.forEach( function ( obj ) {

    var name = Array.isArray( obj.name ) ? obj.name : [ obj.name ];

    name.forEach( function ( nameKey ) {

      it( "should return **true** when valid values are passed to _" + name + "_", function () {

        obj.valid.forEach( function ( val ) {
          is[ nameKey ]( val ).should.be.true;
          is.a[ nameKey ]( val ).should.be.true;
          is.an[ nameKey ]( val ).should.be.true;
          is.not[ nameKey ]( val ).should.be.false;
          is.not.a[ nameKey ]( val ).should.be.false;
          is.not.an[ nameKey ]( val ).should.be.false;
        } );
      } );

      it( "should return **false** when invalid values are passed to _" + name + "_", function () {
        obj.invalid.forEach( function ( val ) {

          is[ nameKey ]( val ).should.be.false;
          is.a[ nameKey ]( val ).should.be.false;
          is.an[ nameKey ]( val ).should.be.false;
          is.not[ nameKey ]( val ).should.be.true;
          is.not.a[ nameKey ]( val ).should.be.true;
          is.not.an[ nameKey ]( val ).should.be.true;

          if ( !/empty|undefined/i.test( nameKey ) ) {
            is[ nameKey ]().should.be.false;
            is.a[ nameKey ]().should.be.false;
            is.an[ nameKey ]().should.be.false;
            is.not[ nameKey ]().should.be.true;
            is.not.a[ nameKey ]().should.be.true;
            is.not.an[ nameKey ]().should.be.true;
          }

        } );

      } );

    } );

  } );

} );