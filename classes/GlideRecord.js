
/**
 * Retrieve and manipulate records from the database
 * This class is officially documented 
 * @see https://developer.servicenow.com/dev.do#!/reference/api/sandiego/server_legacy/c_GlideRecordAPI 
 */
class GlideRecord {
    /**
     * Creates a new instance of the GlideRecord class on the given table   
     * @param {string} tableName The internal name of the table
     * @see https://developer.servicenow.com/dev.do#!/reference/api/sandiego/server_legacy/c_GlideRecordAPI#r_GlideRecord-GlideRecord_S?navFilter=gliderecord
     */
    constructor(tableName) {
        this.tableName = tableName
    }

    /**
     * Retrieve an exact record. This method has official documentation
     * @param {string} parm1 Either a sys_id or the field name
     * @param {string} parm2 The field value, not required if parm1 is a sys_id
     * @returns {boolean} True if a record was found, false if no record was found.
     * @see https://developer.servicenow.com/dev.do#!/reference/api/sandiego/server_legacy/c_GlideRecordAPI#r_GlideRecord-get_Object_Object?navFilter=gliderecord
     * 
     * @example
     * var gr = new GlideRecord("incident");
     * gr.get("abc123");
     * 
     * var gr = new GlideRecord("incident");
     * gr.get("number", "INC0001234");
     */
    get(parm1, parm2) { }

    /**
     * Tests whether an encoded query string is valid for the given table
     * @param {string} queryString an encoded query to test
     * @returns {boolean} true if the query string is valid, false if not.
     * @example 
var gr = new GlideRecord("incident");
gr.addEncodedQuery("active=true&data=valid");

gs.info(gr.isValidEncodedQuery()); //false
     */
    isValidEncodedQuery(queryString) { }

    /**
     * Seems to always return undefined regardless of how big the query is, and at what stage the method is called.
     * @returns {undefined} in the following cases
     * @example
var gr = new GlideRecord("incident");
gr.addQuery("active",true);
gs.info(gr.largeResultExpected()); //undefined

var gr = new GlideRecord("incident");
gr.addQuery("active",true);
gr.query()
gs.info(gr.largeResultExpected()); //undefined

var gr = new GlideRecord("incident");
gr.addQuery("active",true);
gr.query();
gr.next();
gs.info(gr.largeResultExpected()); //undefined

var gr = new GlideRecord("sys_metadata");
...
gs.info(gr.largeResultExpected()); //undefined


     */
    largeResultExpected() { }


    /**
     * Prevents editing any GlideRecords which are returned from a query
     * @see isReadOnly
     * @see https://community.servicenow.com/community?id=community_blog&sys_id=b6e5716c1bd3c510587a11751a4bcbcc
     */
    makeReadonly()


    /**
     * Checks whether a GlideRecord result has been made read-only with makeReadonly
     * @see makeReadonly
     * @see https://community.servicenow.com/community?id=community_blog&sys_id=b6e5716c1bd3c510587a11751a4bcbcc
     * 
     * @returns {boolean} true if the GR has been locked with makeReadonly
     */
    isReadOnly()
};