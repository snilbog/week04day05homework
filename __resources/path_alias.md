# Creating Path Variables

Often you will have different directories you want to be able to switch between easily. For example, your notes folder and your homework folder

To make this simple we can create environment variables that we can use like a "speed dial" for directories we need to access regularly.

##Creating an environment variable

Every time we open a terminal window it loads zshell which automatically executes the `~/.zshrc` file. Therefore, we can define variables in this file and have access to them.

To get started open `.zshrc` in sublime:

```
subl ~/.zshrc
```

Define a variable called `WDI` that is the path to my WDI directory.

```
export WDI="/Users/Lenny/Dropbox/work/GA/WDI"
```

##Using environment variables

To use environment variables we need to prepend the name of the variable with a `$` character.

**examples**

```
echo $WDI
# outputs: /Users/Lenny/Dropbox/work/GA/WDI

ls $WDI
# lists the files in /Users/Lenny/Dropbox/work/GA/WDI

cd $WDI
# changes directory to /Users/Lenny/Dropbox/work/GA/WDI

open $WDI
# opens /Users/Lenny/Dropbox/work/GA/WDI in finder

subl $WDI
# opens /Users/Lenny/Dropbox/work/GA/WDI in sublime
```

