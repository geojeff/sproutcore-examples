// ==========================================================================
// Project:   FlotSettingOptions.priceVersusExchangeRate.
// ==========================================================================
/*globals FlotSettingOptions */

/** @class

  @extends SC.Record
  @version 0.1
*/
FlotSettingOptions.rate = SC.Record.extend(
/** @scope FlotSettingOptions.rate.prototype */ {

  epoch: SC.Record.attr(Number),
  rate: SC.Record.attr(Number),

}) ;
