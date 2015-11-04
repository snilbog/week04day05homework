#Sublime Setup

## Setting up Package Control in Sublime

* Open Sublime Text
* Bring up the console
	* Use CTRL + ` on OSX
	* or `View > Show Console`
* Go to https://packagecontrol.io/installation and paste the appropriate code into your Terminal
	* You should be using Sublime Text 3, so copy the Sublime Text 3 code.
* Restart Sublime

## Install Sublime Packages

* Type `COMMAND + SHIFT + P` to open the Command Palette
	* `CTRL + SHIFT + P` on Linux
* Type `Install Package` and select the first result (by pressing `ENTER`)
* Type the package you want to install, and press `ENTER` to begin installation.

### Useful Packages

* ColorPicker (pick colors by typing `COMMAND + SHIFT + c`, handy for CSS)
* Terminal (launch a terminal window from a folder on the sidebar)
* BracketHighlighter (highlight brackets and tabs)
* Bootstrap 3 Snippets (tab snippets for Bootstrap 3 elements)
* CodeFormatter (format your HTML/CSS/JS like a boss)

### Creating a Snippet

* Go to `Tools > New Snippet`
* Include the content of your snippet inside `<![CDATA[ ]]>` within the `<content>` element.
* To define how to trigger the snippet, uncomment the `<tabTrigger>` line and type the keyword for your tab trigger.
* To trigger the snippet only on certain files (for example, only HTML, or only JavaScript), uncomment the `<scope>` tag and change the scope to the language you need.
* More details and advanced functionality can be found in [this handy blog post](http://www.hongkiat.com/blog/sublime-code-snippets/)
