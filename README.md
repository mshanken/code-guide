# Code Guide
Code Guide is a project for documenting standards for developing flexible, durable, and sustainable HTML and CSS (and JS). This should be a start point of company style guide, contribution are always welcome.
Now, you can create your own theme with theme-builder (create your own CSS file with these tool).

Site documentation (gh-pages site) was built using [Harp-Boilerplate](https://github.com/mshanken/harp-boilerplate)

# Front-End development
As this is an starting point and only front-end is mentioned here, it can grow as company standard. pending on future contributions and request.

# What's in here so far
This document not only highlights HTML, CSS and JS [code guide](https://github.com/mshanken/code-guide) but also brings a .editconfig file for your editor to standarized how we write HTML/CSS/JS, lint files (htmllint/csslint/jslint) to run with your preffered task runner (grunt/gult) and sample files so you can modify and use in your next web project like human.txt, sitemap, browserconfig.xml (to define pinned site customizations for windows), crossdomain.xml, robots.txt.

# How contribute
Clone/Fork this project, cd into it, then run `grunt server _site`, use your browser to preview the site [localhost:9000](http://localhost:9000) dig in the _site/public/ and read the index file to add/delete/update

# New
1. A theme builder, create your own css file with this tool using less.
2. Patterns, you now can see and show your theme working by using this HTML patterns documentation

#Theme-Builder How to

##Theming Concepts

Theme-Builder uses an inheritance system similar to <a href="https://www.sublimetext.com/docs/2/settings.html" target="_blank">Sublime Text</a> designed to facilitate an ecosystem of theming.

| Theme-Builder | Theme | Site |
|---|---|---|
| Library Defaults | Package Defaults | User Overrides |

Theme-Builder definitions are compiled with(LESS)[http://lesscss.org/] using only simple, well adopted CSS pre-processing features like **css variables**, **color adjustment functions**, and **unit conversions**, but not language-specific features like nested rule declarations, guards, or mix-ins.


> A SCSS port is underway for those who are persnickety about which indicating character precedes their variable declarations.

###Elements of a Theme

Themes are composed of two separate files: a `.variable` file, which has values that modify variables for a component, and an `.overrides` file, which includes LESS rules which will be included after the default css of a definition.


###Global Inheritance

Each component in Theme-Builder, inherits from `site.variables`. This file contains many important site-wide defaults like **base EM values**, **brand colors and named colors**, **sizing defaults**, **font settings** and more. Keeping site wide defaults central allow you to quickly adjust constraints for all components for your site, by adjusting values like global `@borderRadius` `@fontSize` or `@anyvariable` ().

`site.variables` is a "global definition" file with the same three levels of inheritance as other definitions.

###Component Inheritance

Each component in Theme-Builder, begins its inheritance with default values from `site.variables`, and then defines its own variables as part of a default theme. The default theme then can be modified by a packaged theme, or by a site theme.

For example, `ui button` loads variables from six separate files in order:


1. Site variables
  1. Defaults pulled from `theme-builder/themes/default/site.variables`
  2. Packaged theme overrides pulled for site from `theme-builder/themes/{themename}/site.variables`
  3. Site overrides pulled from `theme-builder/site/site.variables`

2. Button variables
  1. Button default variables from `theme-builder/themes/default/elements/button.variables`
  2. Button packaged-theme variables from `theme-builder/themes/{themename}/elements/button.variables`
  3. Button's site theme from `theme-builder/site/elements/button.variables`


###CSS Overrides

If additional CSS, not included in the definition, is necessary for a theme, or to adjust an element for your site, it is recommended to use an `.override` file.

Overrides are parsed and **written after the definition's css** and allows developers to include arbitrary css inside the definition. Overrides are parsed as **LESS** files and all component variables are available inside an override file.

Theme overrides are used to add css rules which are not available in the source definition, but are necessary for the theme to work.

Site theme overrides are home to the **arbitrary** or **temporaneous** aspects of an element for integrating it on a site. Hacks, one-time fixes, shortcuts, etc are all sometimes important parts of making a website work, but aren't things we want to re-use from project to project. Using a **site override** file for an element, allows you to make these concessions without sullying the re-usability of the rest of your code.

#####CSS Write Order
<div class="ui large bulleted list">
  <div class="item">
    CSS compiled from `theme-builder/definitions/elements/button.less`
  </div>
  <div class="item">
    CSS compiled from `theme-builder/themes/{themeName}/elements/button.overrides`
  </div>
  <div class="item">
    CSS compiled from `theme-builder/site/elements/button.overrides`
  </div>
</div>

###Overrides in Practice

Some definitions files may even include override files as part of its default theme. This is to move the arbitrary bits outside of a definition. For example `icon` has the UTF content in its override file, so that themes do not inherit these arbitrary properties.

>/*******************************<br />
            Icons<br />
*******************************/<br />
 /* Web Content */<br />
.icon.search:before { content: "\f002"; }<br />
.icon.mail.outline:before { content: "\f003"; }<br />
.icon.external.link:before { content: "\f08e"; }<br />
.icon.wifi:before { content: "\f012"; }<br />
.icon.setting:before { content: "\f013"; }<br />
.icon.home:before { content: "\f015"; }<br />
.icon.inbox:before { content: "\f01c"; }<br />
.icon.browser:before { content: "\f022"; }

##What's next?
