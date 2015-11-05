# Rails Cheat Sheet

## Create a new Rails app

We pass a couple flags as well. `-T` disables tests, `-d` sets the database to whatever we
pass to it (in our case, `postgresql`).

```
# in a new folder
> rails new app_name -T -d postgresql


# in an existing folder
> rails new ./ -T -d postgresql

```

### Creating and Migrating the Database
```
> rake db:create
> rake db:migrate
```

## Create a new model

**unless many-to-many, this model is singular**.

```
> rails g model Cat attr1:string attr2:text attr3:boolean attr4:integer
```

### One to Many Model

When creating a model, add the model using `references`.
```
# create a model called Player (many) that belongs to a team (one)

> rails g model Player name:string Team:references
```

### Many to Many Model

Pass the model names and reference both models. **The model names should be included in alphabetical
order, be plural, and include the --force-plural tag.**

```
> rails g model Cats_Dogs Cat:references Dog:references --force-plural
```

Also, don't forget to go to the `Cat` and `Dog` models and add the `has_to_and_belongs_to_many`
associations. Read more [here](http://guides.rubyonrails.org/association_basics.html#the-has-and-belongs-to-many-association).

## Create a new controller

Pass the controller name (usually the plural model name, if available).

```
> rails g controller cats
> rails g controller dogs index create

# doesn't have a model, so we'll name this whatever we want
> rails g controller main
```

## Setting up your routes

If you're in doubt of what's going on, run `rake routes` in the terminal and you'll receive a
list of routes.

```
# include all CRUD routes
resources :cats

# include specific routes from the default CRUD routes
resources :dogs, only: [:create, :new]

# exclude specific routes from the default CRUD routes
resources :dogs, except: [:destroy, :edit]
```

Or set them up explicitly.

```
# set the root path, where the controller is `main` and the action is `index`.
root 'main#index'

# set a get method for a specific route, where the controller is `cats` and the action is `index`.
get 'cats' => 'cats#index'

# here, the controller is `cats` and the action is `show`, and we're passing a parameter through the URL.
get 'cats/:id' => 'cats#show'
```

## Controller actions and general use

* `index`
  * index page for the controller
* `show`
  * generally shows an instance of a model
* `new`
  * display a page for making a new model instance (usually via a form)
* `create`
  * take form params from `new` and create a new model instance
* `edit`
  * display a page for editing an existing model instance (usually via a form)
* `update`
  * take form params from `edit` and update an existing model instance
* `destroy`
  * delete a model instance


## Handy Helpers

### Link
```
<%= link_to "Name of the link", method: :delete, link_path, class: "my-class" %>
```

### Image
```
<%= image_tag 'link/to/my/image.jpg' %>
```

### Bootstrap form (requires `bootstrap_form` gem)
```
<%= bootstrap_form_for @model_instance do |m| %>
  <%= m.text_field :name %>
  <%= m.text_area :description %>

  <%= m.primary %>
<% end %>
```

## Partials (keeping it DRY)

Partials are views that start with an underscore. Put them in an appropriate folder, and use them
via the `render` form helper (minus the underscore).
```
# rendering a form partial, saved in app/views/cats/_form.html.erb
<%= render 'cats/form' %>
```

## Resources

* General
  * [Rails Command Line tools](http://guides.rubyonrails.org/command_line.html)
* Models
  * [Model Migrations](http://guides.rubyonrails.org/active_record_migrations.html)
  * [Model Associations](http://guides.rubyonrails.org/association_basics.html)
  * [Validations](http://guides.rubyonrails.org/active_record_validations.html)
* Views
  * [Bootstrap Forms in Rails](https://github.com/bootstrap-ruby/rails-bootstrap-forms)
  * [Asset Pipeline](http://guides.rubyonrails.org/asset_pipeline.html)
  * [JavaScript in Rails](http://guides.rubyonrails.org/working_with_javascript_in_rails.html)
* Controllers
  * [Controller overview](http://guides.rubyonrails.org/action_controller_overview.html)
  * [Routing](http://guides.rubyonrails.org/routing.html)

## Rails App Layout (general)

* app_name
  * app
    * assets - JS, CSS, images
    * controllers - controller files
    * helpers
    * mailers
    * models - model files
    * views - views, separated by controller
  * bin
  * config
    * `routes.rb` - setting routes to your controller actions
  * db
    * migrate - stores migration files for your database
  * lib
  * log
  * public - publicly accessible files, like 404 pages, favicons.
  * tmp
  * vendor
  * `Gemfile` - add gems here, then run `bundle`
  * `Gemfile.lock` - don't touch
  * Rakefile
  * .gitignore

## Understanding Errors

Errors will occur when creating Rails apps, either in the browser or the console window. Part of
becoming a great programmer is understanding errors and knowing how to fix them. Suggestions:

1. Find the error message. In the browser, it should appear on the page. In the console, there will
be a long message. Scroll up to the top and find the first couple lines.

2. Read the error message. What does it say? What does it mean? If unsure, Google it.

3. Look for context clues in the error message. Does it refer to a specific line number in a file?
That's a great place to start. If it's a syntax error, you likely have a typo. If something is
"undefined" or "uninitialized", see if that variable or method exists.

4. Verify that variables and parameters have the correct values. Print them to the screen or console.

5. If no error message appears, you likely have a **logic error**, which means your code runs, but
gives unexpected results.

6. When all else fails, ask for help.

