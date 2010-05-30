// ==========================================================================
// Project:   FlotGraphTypes
// ==========================================================================
/*globals FlotGraphTypes */

/** @namespace

  @extends SC.Object
*/
FlotGraphTypes = SC.Application.create(
  /** @scope FlotGraphTypes.prototype */ {

  NAMESPACE: 'FlotGraphTypes',
  VERSION: '0.1.0',

  store: SC.Store.create().from(SC.Record.fixtures)
  
}) ;
