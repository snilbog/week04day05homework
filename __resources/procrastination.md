# Procrastination

If you'd like to procrastinate on styling your page, or debugging deeply nested control statements, here's some tech-friendly ways to procrastinate.

## Terminal addons

* Terminal train

```bash
brew install sl
```

* Cow says... what?

```bash
brew install cowsay
```

* Enter the matrix

```bash
brew install cmatrix
```

* Make your `cat` commands pretty and colorful

```bash
gem install lolcat
```


## Make your own Soundboard

You can play sound files from the terminal using `afplay`. Note that you may need mp3 codecs to play mp3s.

`afplay ~/sounds/justdoit.mp3`

To be able to type a word and play the sound, set up an alias:

* Open `~/.zshrc` in sublime.
* towards the end of the file, add an alias (replace the alias_name with the keyword you want to type, and sound_file.mp3 with the actual location of your sound file.)

```bash
alias justdoit="afplay ~/soundboard/justdoit.mp3"
```

* save the file and restart your terminal. If you don't feel like closing your tabs, `source ~/.zshrc` works as well.
