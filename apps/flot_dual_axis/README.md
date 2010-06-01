FlotDualAxis
============

This Sproutcore example uses the [Flot javascript library](http://code.google.com/p/flot/).

It shows data from [Flot's dual axis example](http://people.iola.dk/olau/flot/examples/dual-axis.html).

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

* So sc-build will build tmp/build/sc/flot_dual_axis/... NOTE: load_fixtures is set
  so that fixtures data for the graph is loaded correctly.
     
        config :flot_dual_axis, :url_prefix => "/sc/flot_dual_axis/", :load_fixtures => true
         
* To pull in flot:
                            
        config :flot_dual_axis, :required => [:sproutcore, 'flot']
