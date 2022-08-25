/**
* Retrieve and manipulate records from the database
 */
class GlideRecord {
    /**
     * Creates a new instance of the GlideRecord class on the given table   
     * @param {string} tableName The internal name of the table
     */
    constructor(tableName) {
        this.tableName = tableName
    }

    /**
     * Retrieve an exact record
     * @param {string} parm1 Either a sys_id or the field name
     * @param {string} parm2 The field value, not required if parm1 is a sys_id
     * @returns {boolean} True if a record was found, false if no record was found.
     */
    get(parm1, parm2) { }
};
