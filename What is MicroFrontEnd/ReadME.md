# What are micro fornt ends ?

* Dividing monolithic app into smaller apps
* Each smaller app responsible for distinct feature    of the product

# Why use them ?
* Multiple team can work
* smaller app easier to understand
* easy to make change
* can use multiple UI framework base on feature requirement

# How integrate or orstrate MFE
* There is no single peefect solution
* Each solution have pros and cons
* Look at what is our requirement and then pick solution

# Major categories of integration
## Build time integration / compile time integration
    ### Before Container gets loaded in the browser, it get access to the feature (for example lets say product list) source code
    # Steps : - 
    1. Engineer develop feature product list 
    2. Time to deploy 
    3. publish product list feature as NPM package
    4. Team in charge of feature install dependency
    5. container team builds their app
    6. outpur bundle that include all the code for product list

    ### Pros and cons 
    1. Easy to setup
    2. Container has to redeploy everytime
    3. Tigthly couple with container and feature

## Run-time integration / client side
    ### After container gets loaded in the browser , it get access to the feature source code
    # Steps : - 
    1. Engineer develop feature product list 
    2. Time to deploy 
    3. product list feature build and deployed at fpr example https://myapp.com/product/product.js
    4. user navigate to myapp.com container gets loaded
    5. container app fetch product list.js and execute it

    ### Pros and cons 
    1. Product list can be deployed independently at any point
    2. different version of feature can deployed and container can decide which one to use
    3. Tooling + setup is complicated

## Server side integration
    While sending JS down load up container, a server will decide wheather or not include MFE source code for perticuler feature


# Implementation of module Federation
    ## Designate one app  as HOST (Container) and  one as remote (Product)
    ## In remote deside which module we want to make available to other project
    ## Set up module federation plugin
    ## In host deside which file we want to get from remote
    ## set up module federation to get those file
    ## in the host refractor entry point to load async
    ## In host import file which we need from remote


# Share dependency betwenn apps
    ## To share common module accross app we need to add below code into ModuleFedration function in webpack of app 
      shared: ['faker']
    by doing this continer will load faker module one time only.
    also if we done this and run app independently we will get error related to faker this is because after adding faker in shared
    it will load that module asyc by the time code exec it will not found faker module hence to get over this we need to do below code
    in index.js file do import('./bootstrap) and add index.js file where we import share dep into bootstarp file
    import('./bootstrap) => exec this as func load file asyc and hence by time faker module is avalible.

    # version of shared module
    If differentr app load different version of shared module then dependency load seperatly webpak config check version module inside
    package json

# Context/Situation1
    Ruuning file in development isolaton
    we use local index.html
    which definetly have element with required id
    we want immediatly render app into that id

# Context/Situation2
    we are running file in dev and prod
    through container app
    No gurrenty that an element with id present into index.html of comtainer
    We do not want to try immediatly render app    