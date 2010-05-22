// ==========================================================================
// Project:   RaphaelPlay
// ==========================================================================
/*globals RaphaelPlay */

/** @namespace

  RaphaelPlay features the "Australian states" example from Raphael, shown
  on a Sproutcore page.
  
  @extends SC.Object
*/
RaphaelPlay = SC.Application.create(
  /** @scope RaphaelPlay.prototype */ {

  NAMESPACE: 'RaphaelPlay',
  VERSION: '0.1.0',

  store: SC.Store.create().from(SC.Record.fixtures)
  
}) ;
