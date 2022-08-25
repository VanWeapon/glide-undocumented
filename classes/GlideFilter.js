/**
 * Static class used to check whether a {@link GlideRecord} matches a given encoded query
 */
class GlideFilter {

    /**
     * Checks a given glide record against an encoded query to check if it matches. Note that this method is CASE-SENSITIVE
     * @param {GlideRecord} GlideRecord a valid {@link GlideRecord} to check 
     * @param {string} encodedQuery an encoded query to validate against the glide record
     * @example
var gr = new GlideRecord("incident");
gr.addActiveQuery();
gr.query();
gr.next();

var match = GlideFilter.checkRecord(gr,"active=true");
gs.info(match); // true
     */
    static checkRecord(GlideRecord, encodedQuery) { }
}