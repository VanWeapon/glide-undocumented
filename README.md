# GlideUndocumented

This is a for-fun project looking to see if we can figure out what all the undocumented methods in ServiceNow's Glide APIs do and write them down.

[Live Documentation Site](https://vanweapon.github.io/glide-undocumented/)

# Contribution

#### Finding and testing undocumented Glide methods

Run the following in a background script to see all the accessible methods for a given Glide class

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

#### Commit process

1. `npm run generate-docs`
2. `git add *`
3. `git commit -m "message of what you added"`

### Previewing changes locally before pushing

1. Install [JSDoc](https://github.com/jsdoc/jsdoc) globally
2. From the root folder, run `npm run generate-docs` which will generate the files in a `docs` folder
3. Open `/docs/index.html` in your browser of choice
