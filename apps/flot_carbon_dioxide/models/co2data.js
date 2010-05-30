// ==========================================================================
// Project:   FlotCarbonDioxide.priceVersusExchangeRate.
// ==========================================================================
/*globals FlotCarbonDioxide */

/** @class

  @extends SC.Record
  @version 0.1
*/
FlotCarbonDioxide.co2data = SC.Record.extend(
/** @scope FlotCarbonDioxide.co2data.prototype */ {

  timestamp: SC.Record.attr(Number),
  year: SC.Record.attr(Number),
  month: SC.Record.attr(Number),
  averageCO2: SC.Record.attr(Number),
  interpolatedCO2: SC.Record.attr(Number),
  trendCO2: SC.Record.attr(Number),
  numberOfDays: SC.Record.attr(Number),

}) ;
