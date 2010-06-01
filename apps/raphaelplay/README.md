RaphaelPlay
===========

This Sproutcore example takes the code of the Raphael Javacript library's 
[Australia example](http://raphaeljs.com/australia.html), and puts it in a 
Sproutcore View. 

Questions:
----------

* Can the Raphael object be put in its own controller, or in the existing
  Australian states controller?
  
* Is updateLayer() the place for the Raphael setup? (couldn't get it to work
  by putting it in an init function).  Look at SCUI/Sai, which is a wrapper 
  that already exists for Raphael. Look at how render(), didAppendToDocument(), 
  and willDestroyLateri() are used.
  
* Evaluate the use of SC.runloop.begin() and .end(). Needed? When? Initially, 
  and perhaps permanently, these .begin() and .end() calls wrap the code within
  the callback from Raphael (onmouseover, onmouseout) events. On irc one day
  Alex Iskander answered a question about this:
    
  Under what circumstances would runloop.begin() and runloop.end() be used?
    
        > If you have a custom event that does not go through SproutCore
        > basically, all events start a run loop
        > and then trigger the event in SproutCore
        > then end the run loop.
        > and technically, everything is an event: the application 
          starts; the application receives a click; a request to 
          the server is answered; and so on
        > ... a timer activates...

DEPENDS ON:
-----------

[Raphael Javascript Library](http://raphaeljs.com/).

I copied raphael into the frameworks dir of sproutcore-examples, without setting up a
proper git submodule for it (yet)..
    
Buildfile entries:
------------------

* So sc-build will build tmp/build/sc/flot_dual_axis/... 
     
        config :raphaelplay, :url_prefix => "/sc/raphaelplay/"
         
* To pull in raphael.  NOTE: load_fixtures is set so that fixtures data for the graph is loaded correctly.
                            
        config :raphaelplay, :required => [:sproutcore, :raphael], :load_fixtures => true

