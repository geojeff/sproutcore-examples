// ==========================================================================
// Project:   FlotHumanPopulation
// ==========================================================================
/*globals FlotHumanPopulation */

/** @namespace

  @extends SC.Object
*/
FlotHumanPopulation = SC.Application.create(
  /** @scope FlotHumanPopulation.prototype */ {

  NAMESPACE: 'FlotHumanPopulation',
  VERSION: '0.1.0',

  store: SC.Store.create().from(SC.Record.fixtures)
  
}) ;
