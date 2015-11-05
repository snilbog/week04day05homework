#Deploy Rails app

Deploying a rails app (like all things in rails) is simple and magical.

##Prepare for deployment

If your app is **already running postgres** all you have to do is add the 12factor gem to your Gemfile in the production group.

**Anywhere in Gemfile**

```
gem 'rails_12factor', group: :production
```

If your app is **running sqlite** you need to add the `pg` gem and move your sqlite gem into the development group.

####Bundle

Once this is done you have to run `bundle` which will automatically update the `Gemfile.lock` which must be done before you push to heroku.

##Pushing to heroku

To deploy to heroku we need to download the [heroku toolbelt](https://toolbelt.heroku.com/) which is a commandline tool used to interact with your heroku instance.

####Create a heroku app

First you need to create a heroku app (if you haven't already) this can be done in the web console or via commandline. I recommend using the commandline option as it sets up the git remotes for you automatically.

```
heroku create YOUR_APP_NAME_HERE
```

You can test that this worked by running `git remote -v` and you should see a new remote for heroku. If not try again (**pay attention** to any error messages).

####Push it... p-p-p-push it real good

Once that is done we are ready to push our site to heroku. First, run `git status` to make sure you've added and commited all changes then we just push to the newly added heroku remote.

```
git push heroku master
```

(this will take a while to complete)

##Production Database Setup

You can run any command on heroku by using `heroku run` followed by the command you want to execute. This will work for any command you'd normally run on your local development environment. This means that we can run `rake db:migrate` on the server.

**migrate the database**

```
heroku run rake db:migrate
```

You can also run `db:reset` or `db:seed` if you need to reset your database.

##Config / ENV / API keys

If your app depends on any environment variables (if you have a `.env` file) you'll need to set those values on heroku.

To see the currently set environment values run `heroku config`

To set a value run `heroku config:set TACO_KEY=xxxxxxx`

##Viewing your site

Once the push finishes you can go to your website. If you run `heroku open` it will automatically load your web browser at the appropriate URL.

##Updating

Once everything is set up all you have to do is run `git push heroku master` to push new changes to heroku (always make sure your changes are commited with `git status`).

##Troubleshooting

**What if something goes wrong?**

From your project directory you can run `heroku logs` to see the rails console output on heroku or `heroku logs --tail` to see a live feed.

You can also type `herkou run rails c` to access the rails console on the production server.


##Push development database to production

For information about database backup / restore or accessing your production database see [database\_advanced\_concepts.md](database_advanced_concepts.md) in this same directory.