// ==========================================================================
// Project:   FlotSettingOptions
// ==========================================================================
/*globals FlotSettingOptions */

/** @namespace

  @extends SC.Object
*/
FlotSettingOptions = SC.Application.create(
  /** @scope FlotSettingOptions.prototype */ {

  NAMESPACE: 'FlotSettingOptions',
  VERSION: '0.1.0',

  store: SC.Store.create().from(SC.Record.fixtures)
  
}) ;
