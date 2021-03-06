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

Although, with this example, the graph view does not call FlotView in the flot-integration package, a view with that functionality is created in place.
    
Buildfile entries:
------------------
         
* For flot:
 
        config :flot, :required => [:sproutcore]

* So sc-build will build tmp/build/sc/flot_oil_spills/... 
     
        config :flot_oil_spill, :url_prefix => "/sc/flot_oil_spills/"
         
* To pull in flot.  NOTE: load_fixtures is set to true so that fixtures data for the graph will be loaded. Also, Ace theming is used.
                            
        config :flot_oil_spills, :required => [:sproutcore, "sproutcore/forms", 'flot'], :load_fixtures => true, :theme => "sproutcore/ace"


ToDos
-----

* When a selection is active, and the highlight circle is drawn, a window resize will clear the highlight, and it is not redrawn after completion of the
  window resizing. 

* The sc_require in main_page.js is not getting Flot included properly (this app has its own flot view, and does not use the view in flot-integration).
  Errors show with sc-server and sc-build, but Flot still works. Something wrong on the require though.

* A debugging console.error() message in the code to fix the x for rightmost points, showed that there are two calls to render for each mouseover triggering
  a tooltip. Furthermore, the message also showed that on one call the plotOffset is 61 and the second time 101, which is odd, indeed.

* [DONE (with drawOverlay hook function)] Basic highlighting works (see DONE todo), but the default Flot highlighting takes a data point marker and makes it slightly larger, which is too hard
  to see. Perhaps the internal Flot function for this can be overridden, so that highlights can be larger, in brighter, or higher contrast color.

* [DONE] Add logic to control tooltip placement when near edges, to keep tooltip from extending out of the window.

* [DONE (highlights working)] When you click a list item, the graph should highlight the item on the graph (so far haven't learned how to make that plot.highlight() call).  
  The Flot "interactivity example" shows small circular highlights associated with hovering, and also shows a permanent marker circle for the
  clicked data item. The permanent highlight isn't appropriate for this app, but it would be nice for showing the current selection.



