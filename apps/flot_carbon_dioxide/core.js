// ==========================================================================
// Project:   FlotCarbonDioxide
// ==========================================================================
/*globals FlotCarbonDioxide */

/** @namespace

  @extends SC.Object
*/
FlotCarbonDioxide = SC.Application.create(
  /** @scope FlotCarbonDioxide.prototype */ {

  NAMESPACE: 'FlotCarbonDioxide',
  VERSION: '0.1.0',

  store: SC.Store.create().from(SC.Record.fixtures)
  
}) ;
