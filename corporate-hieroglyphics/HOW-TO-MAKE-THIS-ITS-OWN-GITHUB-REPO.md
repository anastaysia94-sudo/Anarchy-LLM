# How to make this its own GitHub repo

The atlas is ready. The session that wrote it could not create a second GitHub repository (the connected GitHub app is only allowed to work inside Anarchy LLM). You can split this folder into **https://github.com/anastaysia94-sudo/Corporate-Hieroglyphics** in a few minutes.

## Fast way (GitHub website + this folder)

1. Go to [github.com/new](https://github.com/new).
2. Repository name: `Corporate-Hieroglyphics`
3. Description: `A word-definition atlas that translates tech and corporate jargon into plain English.`
4. Public. Do **not** add a README, license, or gitignore on GitHub (this folder already has the README).
5. Create repository.
6. On your computer, from a copy of Anarchy LLM:

```bash
mkdir Corporate-Hieroglyphics
cp -R corporate-hieroglyphics/. Corporate-Hieroglyphics/
cd Corporate-Hieroglyphics
git init
git add .
git commit -m "Initial atlas: Corporate Hieroglyphics"
git branch -M main
git remote add origin https://github.com/anastaysia94-sudo/Corporate-Hieroglyphics.git
git push -u origin main
```

## Fast way (GitHub CLI, if you are logged in as yourself)

From inside the `corporate-hieroglyphics` folder:

```bash
gh repo create anastaysia94-sudo/Corporate-Hieroglyphics \
  --public \
  --source=. \
  --remote=origin \
  --description "A word-definition atlas that translates tech and corporate jargon into plain English." \
  --push
```

If that folder is not already its own git project, run `git init` first, add files, commit, then run the command above.

## What “repo” means

See [ATLAS.md](ATLAS.md#repository-repo). Short version: a GitHub repo is a named project folder the internet can see, with history.
