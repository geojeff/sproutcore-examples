// ==========================================================================
// Project:   FlotDualAxis
// ==========================================================================
/*globals FlotDualAxis */

/** @namespace

  @extends SC.Object
*/
FlotDualAxis = SC.Application.create(
  /** @scope FlotDualAxis.prototype */ {

  NAMESPACE: 'FlotDualAxis',
  VERSION: '0.1.0',

  store: SC.Store.create().from(SC.Record.fixtures)
  
}) ;
