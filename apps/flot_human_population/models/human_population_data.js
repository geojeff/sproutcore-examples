// ==========================================================================
// Project:   FlotHumanPopulation.priceVersusExchangeRate.
// ==========================================================================
/*globals FlotHumanPopulation */

/** @class

  @extends SC.Record
  @version 0.1
*/
FlotHumanPopulation.human_population_data = SC.Record.extend(
/** @scope FlotHumanPopulation.human_population_data.prototype */ {

  timestamp: SC.Record.attr(Number),
  year: SC.Record.attr(Number),
  world: SC.Record.attr(Number),
  africa: SC.Record.attr(Number),
  asia: SC.Record.attr(Number),
  europe: SC.Record.attr(Number),
  latin_america: SC.Record.attr(Number),
  northern_america: SC.Record.attr(Number),
  oceania: SC.Record.attr(Number),

}) ;
