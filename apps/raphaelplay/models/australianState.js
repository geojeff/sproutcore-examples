// ==========================================================================
// Project:   RaphaelPlay.australianstate.
// ==========================================================================
/*globals RaphaelPlay */

/** @class

  Description of a single Australian state

  @extends SC.Record
  @version 0.1
*/
RaphaelPlay.australianState = SC.Record.extend(
/** @scope RaphaelPlay.australianState.prototype */ {

  name: SC.Record.attr(String),
  description: SC.Record.attr(String),
  population: SC.Record.attr(String),
  path: SC.Record.attr(String)

}) ;
