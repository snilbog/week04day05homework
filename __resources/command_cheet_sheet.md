#Commands

List of command commands and what they ACTUALLY do.

It's hard to keep track of what all of these commands do / don't do. This table outlines exactly what each of the following commands does.

The "what it does" column lists EXACTLY what the command does. Nothing more, nothing less.


##\*nix

The following commands are just built in parts of any \*nix based operating system ("\*nix" means linux or unix... OSX is built on top of unix)

| command | What it does |
|---|---|
| pwd | Displays the full path to the current directory |
| ls | Displays files in the current directory |
| touch test.txt | creates a new empty file called `test.txt` |
| echo "blah" > test.txt | replaces the contents of `test.txt` with "blah" |
| echo "blah" >> test.txt | appends "blah" to the end of `test.txt` (creates if it doesn't exist) |
| CTRL+C | Stops any running operation. This is generally called "break" |

See also: [Linux command line cheat sheet](http://www.cheatography.com/davechild/cheat-sheets/linux-command-line/)

##Home brew (OSX only)

Package manager for OSX (must be installed via the [home brew site](http://brew.sh/)). Allows us to easily install command line tools.

| command | What it does |
|---|---|
| brew | display help screen |
| brew install git | install "git"  |
| brew update | updates the list of packages available to install from the server (should generally be ran before installing anything) |
| brew upgrade git | upgrades "git" to the latest version |
| brew search git | searches for any pakage containing the word "git" |

(I used "git" above as an example, but brew can be used to install any package available via homebrew)


##apt-get (linux only)

Package manager for debian based linux distributions. Redhat based distros (such as centos which is used on many production web servers) use a similar command called "yum" which works much the same way.

| command | What it does |
|---|---|
| apt-get | display help screen |
| apt-get install git | install "git"  |
| apt-get update | updates the list of packages available to install from the server (should generally be ran before installing anything) |
| apt-get upgrade git | upgrades "git" to the latest version |

(I used "git" above as an example, but apt-get can be used to install any package available via apt-get)


##Git

Git commands are available to us because of the git binary (aka "program" aka "software" aka "app") that we installed using our package manager (home brew or apt-get)

| command | What it does |
|---|---|
| git init | Creates the hidden `.git` folder. You must run this command (or git clone) before you can use any of the commands below. |
| git clone git://git@github.com/something | Downloads the repository from the provided url into a new directory with the same name as the repo name. This includes the `.git` folder as it is a previously init'd repo.  |
| git status | Lists the status of the git repository |
| git pull | gets changes from the default remote (usually origin, usually github) |
| git push | pushes changes to default remote (usually origin, usually github) |
| git push heroku master | pushes changes to the remote repository "heroku" on the branch "master" |
| git remote -v | Lists available remotes repositories (github, heroku, etc) |


##Npm

| command | What it does |
|---|---|
| npm init | Creates package.json |
| npm -l | Lists all available npm commands |
| npm search twitter | searches for packages containing the word "twitter" (note first search will take a while) |
| npm install express | downloads the express module into the `node_modules` folder (creates `node_modules` if needed) |
| npm install express --save | same as above PLUS adds the package to the dependencies secion of `package.json` |
| npm install nodemon -g | Installs the npm module "nodemon" GLOBALLY. This file is NOT put in `node_modules` or `package.json`. It is instead installed in a shared location.<br><br> **If the module has a command line component it must be installed with the -g flag** |


##Sequelize

The following commands are only available because we installed the npm module sequelize-cli with the -g (global) flag.

| command | What it does |
|---|---|
| sequelize init | Creates config/config.json and models/index.js |
| sequelize model:create | Creates a migration file in the migrations folder and a model in the models folder |
| sequelize migration:create | Creates a migration file in the migrations |
| sequelize db:migrate | Runs any migrations that havent been ran (create / modifies database) |


##Heroku

Heroku toolbelt allows us to use the `heroku` command and can be downloaded [directly from heroku](https://toolbelt.heroku.com/).

Before you can use the heroku toolbelt you must be in a project directory that is an active git repository (git init or clone).

| command | What it does |
|---|---|
| heroku | Display help screen |
| heroku create taco | Tries to create a heroku app called "taco" and if successful creates a new git remote called heroku that we can use to deploy changes.<br><br> **Must be ran before any other heroku commands below** |
| heroku config | displays current configuration settings (environment variables on the server) |
| heroku config:set abc=123 | sets an environment variable on the server called "abc" to the value "123" |
| heroku logs | displays the terminal output of the app running on the heroku server |
| heroku logs -t | displays a live view of the server terminal output (ctrl+c to exit) |
| heroku run bash | Runs "bash" on the remote server. This connects to the remote server and allows you to work within the command line on the server. You can use "heroku run" to execute any command on the server |
| git push heroku master | Technically this is a git command, but it is used to deploy your project to heroku. (see git commands for more info) |
| heroku pg:reset DATABASE\_URL | Completely empty the database on heroku (dangerous... there is no undo) |
| heroku pg:push local\_database\_name DATABASE_URL | upload local database to heroku. Replace `local_database_name` with your local database name.  |
| heroku pg:pull DATABASE\_URL local\_database\_name |  download database from heroku to local. Replace `local_database_name` with your local database name. (you may need to `drobdb` first.) |

##Postgres

| command | What it does |
|---|---|
| psql | load postgres terminal |
| createdb DB_NAME | creates a database |
| dropdb DB_NAME | deletes a database |

