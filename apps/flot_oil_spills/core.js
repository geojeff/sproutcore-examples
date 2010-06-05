// ==========================================================================
// Project:   FlotOilSpills
// ==========================================================================
/*globals FlotOilSpills */

/** @namespace

  @extends SC.Object
*/
FlotOilSpills = SC.Application.create(
  /** @scope FlotOilSpills.prototype */ {

  NAMESPACE: 'FlotOilSpills',
  VERSION: '0.1.0',

  store: SC.Store.create().from(SC.Record.fixtures)
  
}) ;
