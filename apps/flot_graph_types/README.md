FlotGraphTypes
==============

This Sproutcore example uses the [Flot javascript library](http://code.google.com/p/flot/).

It shows data from [Flot's graph types example](http://people.iola.dk/olau/flot/examples/graph-types.html).

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

* So sc-build will build tmp/build/sc/flot_graph_types/...
     
        config :flot_graph_types, :url_prefix => "/sc/flot_graph_types/"
         
* To pull in flot:
                            
        config :flot_graph_types, :required => [:sproutcore, 'flot']
