# [WIP] Example JavaScript Application

_WIP means I have no idea what I'm doing right now. Or if it makes sense. I hope when I'm finished I will have learned both._

**Content:**
- [Preface](#preface)
- [0. Setup Environment](#0-setup-environment)
- [1. Dependency Management](#1-dependency-management)
- [2. Transpile Code](#2-transpile-code)
- [3. Tests](#3-tests)
- [4. Create WebApp](#4-create-webapp)
- [5. Deploy Finished Product](#5-deploy-finished-product)
- [6. Hook to CI Server](#6-hook-to-ci-server)
- [7. Localization](#7-localization)
- [Conclusion](#conclusion)
  - [ External Links](#external-links)



# Preface

Let me preface this tutorial by saying: I'm not a JavaScript developer. I don't *want* to be a JavaScript developer. I've over ten years in Java and I don't plan to change that any time soon. 

But I'm a firm believer of using the right tool for the job, so I'm trying to learn how to swing the JavaScript pocket knife, just in case I need something different than my Java hammer someday.

I was sorely disappointed to learn there is evidently no standard environment to develop JavaScript, so I'm trying to figure out how to do it on my own.

For Java the de facto standard is to use Maven, which does the following:

1. Manage dependencies
2. Compile the code
3. Test
4. Create a distribution (JAR for Java)
5. Deploy the finished product
6. Run on CI server

So I figure the same is needed for a JavaScript project (except we don't need a compiler, but maybe a transpiler (to create older code that is supported by more browsers) and / or a minimizer (to strip whitespaces and stuff like that)).

So that's what I'm trying to get into this environment.

Oh, and localization, even though that's a plain Java feature and not Maven. But it's needed in every application.

So let's go!



# 0. Setup Environment

The only thing almost everyone seems to agree on is that we need NodeJS. You can get it from [nodejs.org](https://nodejs.org/en/). NodeJS let's you run JavaScript outside of the browser. Which can be used to create JavaScript servers (I've yet to find out why that would be a *good* idea) or of course for executing tests.

So if you've installed NodeJS correctly you should get the following output on the command line:

```
>node --version
v10.16.3
```



# 1. Dependency Management

For this setup dependency management is done by NodeJS's very own package manager: npm.

It should be available if NodeJS is installed, so check that by using the command line:

```
>npm --version
6.11.2
```

Since npm updates more frequently than NodeJS it's probable this version is outdated. Use this to update:

```
npm install npm@latest -g
```

So now we can create a project:

```
mkdir example
cd example
npm init
```

npm will now play twenty questions with you, but you can just press enter to use the defaults.

This will generate a file _package,json_. A basic one looks something like this:

```json
{
  "name": "example",
  "version": "1.0.0",
  "description": "My first project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Stef Schulz <s.schulz@slothsoft.de>",
  "license": "MIT"
}

```

You can see my _[package,json](package,json)_ for a more comprehensive example. Although maybe finish reading this document first, some properties will be explained.



# 2. Transpile Code 

So evidently NodeJS is only for creating server applications with JavaScript. Maybe I'll tackle this later but right now I want to create a simple website. 

So… simple website, right? I created a small HTML page ([index.html](dist\index.html), a very basic CSS file ([style.css](dist\resources\css\style.css) and copied an image from my last vacation ([image](dist\resources\images\DSC00372.jpg)). The structure of the project is from [appcropolis](http://appcropolis.com/blog/web-technology/organize-html-css-javascript-files/).



# 3. Tests



# 4. Create WebApp



# 5. Deploy Finished Product



# 6. Hook to CI Server

Before letting a CI server do anything to the code, we need to commit it. You can use this handy [.gitignore template for NodeJS](https://github.com/github/gitignore/blob/master/Node.gitignore) to figure out what to commit.

[...more...]



# 7. Localization




# Conclusion

## External Links

I've read a lot of stuff to come this far (which is not very far to be sure), but here are some of my resources:

- [Configuring a basic environment for JavaScript development](https://italonascimento.github.io/configuring-a-basic-environment-for-javascript-development/)
- [How to Build a reusable Javascript development environment.](https://medium.com/the-andela-way/how-to-build-a-reusable-javascript-development-environment-f13146b77fdf)
- [A crash course on testing with Node.js](https://hackernoon.com/a-crash-course-on-testing-with-node-js-6c7428d3da02)
- [.gitignore Template for NodeJS](https://github.com/github/gitignore/blob/master/Node.gitignore)
- [browserify on GitHub](https://github.com/browserify)
- [How to organize your HTML, CSS, and Javascript files](http://appcropolis.com/blog/web-technology/organize-html-css-javascript-files/)
- [QUnit](https://qunitjs.com/)