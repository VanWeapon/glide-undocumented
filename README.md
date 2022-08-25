# GlideUndocumented 

This is a for-fun project looking to see if we can figure out what all the undocumented methods in ServiceNow's Glide APIs do and write them down. 

# Contribution

Run the following in a background script to see all the accessible methods for a given Glide class
```js
// Sub out GlideRecord for your given class
var methods = Object.getOwnPropertyNames(GlideRecord.prototype); 

for(var x in methods){
    try{
        gs.info(methods[x])
    }catch(_){}
}
```
Add a file called GlideRecord.md (to match the api name) and add documentation 
