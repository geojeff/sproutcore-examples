FlotHumanPopulation
=================

This Sproutcore example uses the [Flot javascript library](http://code.google.com/p/flot/).

It shows data from from Wikipedia's [world population page](http://en.wikipedia.org/wiki/World_populationA).

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

* So sc-build will build tmp/build/sc/flot_human_population/... 
     
        config :flot_human_population, :url_prefix => "/sc/flot_human_population/"
         
* To pull in flot.  NOTE: load_fixtures is set to true so that fixtures data for the graph will be loaded. Also, Ace theming is used.
                            
        config :flot_human_population, :required => [:sproutcore, "sproutcore/forms", 'flot'], :load_fixtures => true, :theme => "sproutcore/ace"
                                      ~
