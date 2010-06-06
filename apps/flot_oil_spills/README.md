FlotOilSpills
=================

This Sproutcore example uses the [Flot javascript library](http://code.google.com/p/flot/).

It shows data from from Wikipedia's [list of oil spills page](http://en.wikipedia.org/wiki/List_of_oil_spills).

FlotOilSpills illustrates Flot's [interactivity](http://people.iola.dk/olau/flot/examples/interacting.html) functionality within Sproutcore.

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

* So sc-build will build tmp/build/sc/flot_oil_spills/... 
     
        config :flot_oil_spill, :url_prefix => "/sc/flot_oil_spills/"
         
* To pull in flot.  NOTE: load_fixtures is set to true so that fixtures data for the graph will be loaded. Also, Ace theming is used.
                            
        config :flot_oil_spills, :required => [:sproutcore, "sproutcore/forms", 'flot'], :load_fixtures => true, :theme => "sproutcore/ace"
                                      ~


