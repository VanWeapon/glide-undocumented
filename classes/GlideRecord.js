
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
};