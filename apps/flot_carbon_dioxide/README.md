FlotCarbonDioxide
=================

This Sproutcore example uses the [Flot javascript library](http://code.google.com/p/flot/).

It shows data from NOAA's Earth System Research Laboratory, [Trends in Atmospheric Carbon Dioxide](http://www.esrl.no@.gov/gmd/ccgg/trends/).

DEPENDS ON:
-----------

[Bo Xiao's flot-integration](http://github.com/imxiaobo/iamxiaobo/tree/master/flot-integration)

I cloned the flot-integration code, which is a full Sproutcore project
with Buildfile. I got the flot-integration demo working. Then I copied
flot-integration/frameworks/flot into the frameworks dir of sproutcore-examples.
    
Buildfile entries:
------------------
         
* For flot:
 
        config :flot, :required => [:sproutcore]

* So sc-build will build tmp/build/sc/flot_carbon_dioxide/... NOTE: load_fixtures is
  set to true so that fixtures data for the graph will be loaded.
     
        config :flot_dual_axis, :url_prefix => "/sc/flot_carbon_dioxide/", :load_fixtures => true
         
* To pull in flot:
                            
        config :flot_dual_axis, :required => [:sproutcore, 'flot']
                                      ~
