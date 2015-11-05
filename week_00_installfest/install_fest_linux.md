![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

#Ubuntu install instructions

**TIP:** On ubuntu you can paste into terminal by using `CTRL+SHIFT+V`

##Slack

We will be using slack to communicate throughout the course. You should've received an invite to our channels via e-mail. You can login via the web browser, but downloading / installing the app is highly recommended.

[Download Slack](https://slack.com/downloads)

##Install Oh My ZSH

```
sudo apt-get update
sudo apt-get install git-core zsh
chsh -s /bin/zsh
wget --no-check-certificate http://install.ohmyz.sh -O - | sh
sudo shutdown -r 0
```
(the last command will restart your computer)


##Install Sublime

[download link](http://www.sublimetext.com/3)

Download the `.deb` file and run it to install. Follow on screen prompts


##Install Node

```
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -

sudo apt-get install -y build-essential nodejs
```

##Install postgres

```
sudo apt-get install postgresql-client postgresql postgresql-contrib
```

####configure postgres user

```
sudo -u postgres psql postgres

\password postgres

```

Choose an easy to remember password then type `\quit` to exit psql


####create postgres alias

Edit your zshrc file by typing `subl ~/.zshrc` add these lines to the bottom of the file:

```
alias psql="sudo -u postgres psql"
alias pgserver="sudo -u postgres service postgresql start"
```

**pgserver** will be used to start the postgres server

**psql** will be used to access the psql termainal


##Install Postgres GUI

```
sudo apt-get install pgadmin3
```

##Testing setup

###Node

```

node -v

npm -v

```

###Postgres

**Start Server**

```
pgserver
```

**enter psql terminal**

```
psql
```

Should enter psql terminal and have no error.

**exit psql**

```
\q
```


#Installing Ruby on Rails

####Install dependencies

```
sudo apt-get update
sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev python-software-properties libffi-dev
```

###Install rbenv / ruby

rbenv lets us change ruby verions on the fly, useful for working with diffrent rails apps.

```
cd ~
git clone git://github.com/sstephenson/rbenv.git .rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(rbenv init -)"' >> ~/.zshrc
exec $SHELL

git clone git://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.zshrc
exec $SHELL

git clone https://github.com/sstephenson/rbenv-gem-rehash.git ~/.rbenv/plugins/rbenv-gem-rehash

rbenv install 2.2.2
rbenv global 2.2.2
ruby -v
```

####Install Rails

```
sudo gem update
echo "gem: --no-ri --no-rdoc" > ~/.gemrc
gem install bundler
sudo gem install rails
```


#Verify your installation

Run each of these commands and then call someone over to validate your installation is correct.

```
rails -v
ruby -v

which ruby
which rails
which bundle
which gem

node -v
npm -v

git --version
psql --version
subl -v

```
