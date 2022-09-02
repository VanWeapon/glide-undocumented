# GlideUndocumented

This is a for-fun project looking to see if we can figure out what all the undocumented methods in ServiceNow's Glide APIs do and write them down.

[Live Documentation Site](https://vanweapon.github.io/glide-undocumented/)

# Contribution

#### Finding and testing undocumented Glide methods

Run the following in a background script to see all the accessible methods for a given Glide class. Note that this only works for some classes and not others. E.g. GlideDateTime cannot be accessed this way.

```js
// Sub out GlideRecord for your given class
var methods = Object.getOwnPropertyNames(GlideRecord.prototype);

for (var x in methods) {
	try {
		gs.info(methods[x]);
	} catch (_) {}
}
```

If you run this code

```js
gs.info(GlideRecord.prototype.isValidEncodedQuery);
```

You will see output similar to this:

```js
*** Script: function isValidEncodedQuery() {
	[native code, arity=1]
}
```

where `arity` is the number of arguments this method can possibly take. Not all of them may be mandatory or even used ever.

#### Updating the docs

For new classes, add a file called GlideRecord.js (match the class name) in the classes folder and add documentation in the form of JSDoc comments. For existing classes, add an empty method with parameters and then add JSDoc comments as normal.

##### Calling out working vs broken methods

Add a `@summary` tag to class methods to denote whether they are Documented, Undocumented but we know how they work, or Unknown. The colour of this text will change depending on key words: `not working`, `deprecated`, `unknown` will apply red styling, `undocumented` will apply yellow warning styling, otherwise green styling will apply

#### Attributing community members for their discoveries

For methods which are offically documented, include an `@see` tag with a link to the official documentation.

For methods which have been explored and uncovered by the community, include an `@see` tag with a link to the community or blog site which explains the method in detail.

#### Commit process

The docs are auto-generated with a pre-commit stage.

1. `git add *`
2. `git commit -m "message of what you added"`

### Previewing changes locally before pushing

1. Install [JSDoc](https://github.com/jsdoc/jsdoc) globally
2. From the root folder, run `npm run generate-docs` which will generate the files in a `docs` folder
3. Open `/docs/index.html` in your browser of choice

#### Using live server

1. Open 2 terminals and run `npm run serve` and `npm run watch`
2. This will automatically regenerate the docs then reload a live server on your local machine for hot reloads during editing.
