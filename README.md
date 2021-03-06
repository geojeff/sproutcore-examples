Introduction
============

This repository was set up for posting and maintaining small projects illustrating
Sproutcore functionality. I started with Sproutcore in April 2009, and soon
found a compelling case for using it for web development. I started learning by
going through the Todos example on the Sproutcore web site, then gave embedding
Raphael javascript in a Sproutcore view (raphaelplay example) a try. After that,
attention turned to work done by Alex Iskander, who was very helpful with learning 
the latest and greatest, showcased in several apps, which are descendants of his 
[test_controls app](http://create.tpsitulsa.com/sc/test_controls.html).

Help on the #sproutcore irc channel was really important for getting tips.  One
tip was about how to use layerNeedsUpdate along with updateLayer for placing the
Raphael code.  See this [post](http://colincodes.tumblr.com/post/512234561/sproutcore-and-flot)
by Colin Campbell that explains why.

Another tip was how to use SC.RunLoop.begin() and .end() in the interfacing 
between Raphael and Sproutcore. Using these calls around a block of code will
issue a kind of pause in the action of Sproutcore bindings and other things,
so the code in the block is executed immediately. It is a performance tweak.

Github Setup
------------

Richard Klancer helped me one afternoon to set up my github account, 
through creating this repository.  It might be useful to see the steps taken
to set this up.  I already had raphaelplay within my own dev area on my system
(Macbook Pro), so it was a matter of creating the repository on github through
the github web interface, followed by command line steps to send it up. From 
my command line history, here are steps, which include those to avoid putting
unneeded tmp and vi ~ files in the repo (something realized along the way):

1. Create github account (geojeff) and fill in basic info.
2. Generate public ssh key for setting up communications between my local
   system and github.

        cd ~/.ssh                 // - .ssh in my home dir has personal ssh info
        ssh-keygen                // - generate the key
        cat id_rsa.pub | pbcopy   // - copy the key using handy pipe to pbcopy
        ssh git@github.com        // - hit github.com to initialize

3. Make a sproutcore-examples directory in my development area, on a Macbook Pro. 
   Move raphaelplay, the first app I started, into the apps directory of 
   sproutcore-examples, then proceed with git configuration and initialization steps.

4. For setting up to run the examples on my local computer, inside the
   sproutcore-examples project directory, created a frameworks directory, along
   with the Buildfile, the README.md file, the apps, directory. The development
   branch of SproutCore was cloned into this frameworks directory, as were the
   flot and raphael directories, giving at the highest level:

   sproutcore-examples
       Buildfile
       README.md
       apps
       frameworks
       tmp (where the generated app goes)

  As of November 2010, to get the latest development version of SproutCore,
  clone from http://github/sproutcore into the frameworks directory (And
  you will also need flot and raphale in there; see below).

Flot
----

In late May 2010 several examples of graphs using the Flot javascript library were
added, with the help of Avi and others  on the irc channel (#sproutcore).

For flot, you can clone Bo Xiao's [flot-sproutcore](http://github.com/imxiaobo/flot-sproutcore), which will
get you a demo app in a separate flot-integration directory, with its own apps
and frameworks directories. I did that, played with the demo, looked things
over, then copied flot-integration/frameworks/flot into the same place in
sproutcore-examples (sproutcore-examples/frameworks/). 
  
Raphael
-------

Clone this into the sproutcore-examples/frameworks directory also.

Other
-----

For phone_controls there are metatags needed in the root html page. Depending on your dev
tools, you may or may not have to add these manually. See this page at Apple describing
(metatags)[http://developer.apple.com/safari/library/documentation/appleapplications/reference/safarihtmlref/articles/metatags.html] for background, but the needed tags are
something like:

    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name = "viewport" content = "initial-scale = 1.0, width = 320, height = 480, user-scalable = no">

