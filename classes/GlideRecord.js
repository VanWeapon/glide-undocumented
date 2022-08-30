
/**
 * Retrieve and manipulate records from the database
 * This class is officially documented 
 * @see https://developer.servicenow.com/dev.do#!/reference/api/sandiego/server_legacy/c_GlideRecordAPI 
 */
class GlideRecord {
    /**
     * Creates a new instance of the GlideRecord class on the given table   
     * @summary Documented class
     * 
     * @param {string} tableName The internal name of the table
     * @see https://developer.servicenow.com/dev.do#!/reference/api/sandiego/server_legacy/c_GlideRecordAPI#r_GlideRecord-GlideRecord_S?navFilter=gliderecord
     */
    constructor(tableName) {
        this.tableName = tableName
    }

    /**
     * Retrieve an exact record. This method has official documentation
     * @summary Documented method
     * 
     * @param {string} parm1 Either a sys_id or the field name
     * @param {string} parm2 The field value, not required if parm1 is a sys_id
     * @returns {boolean} True if a record was found, false if no record was found.
     * @see https://developer.servicenow.com/dev.do#!/reference/api/sandiego/server_legacy/c_GlideRecordAPI#r_GlideRecord-get_Object_Object?navFilter=gliderecord
     * 
     * @example
     * var gr = new GlideRecord("incident");
     * gr.get("abc123");
     * @example
     * var gr = new GlideRecord("incident");
     * gr.get("number", "INC0001234");
     */
    get(parm1, parm2) { }

    /**
     * Tests whether an encoded query string is valid for the given table
     * @summary Undocumented method
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
     * @summary Unknown function
     * 
     * @returns {undefined} in the following cases
     * @example
     * var gr = new GlideRecord("incident");
     * gr.addQuery("active",true);
     * gs.info(gr.largeResultExpected()); //undefined
     * @example
     * var gr = new GlideRecord("incident");
     * gr.addQuery("active",true);
     * gr.query()
     * gs.info(gr.largeResultExpected()); //undefined
     * @example
     * var gr = new GlideRecord("incident");
     * gr.addQuery("active",true);
     * gr.query();
     * gr.next();
     * gs.info(gr.largeResultExpected()); //undefined
     * @example
     * var gr = new GlideRecord("sys_metadata");
     * ...
     * gs.info(gr.largeResultExpected()); //undefined


     */
    largeResultExpected() { }


    /**
     * Prevents editing any GlideRecords which are returned from a query and can be tested with {@link GlideRecord#isReadOnly}
     * @summary Undocumented method
     * @author iamkalai
     * @see https://community.servicenow.com/community?id=community_blog&sys_id=b6e5716c1bd3c510587a11751a4bcbcc
     */
    makeReadonly() { }


    /**
     * Checks whether a GlideRecord result has been made read-only with {@link GlideRecord#makeReadonly}
     * @summary Undocumented method
     * 
     * @see https://community.servicenow.com/community?id=community_blog&sys_id=b6e5716c1bd3c510587a11751a4bcbcc
     * 
     * @returns {boolean} true if the GR has been locked with makeReadonly
     */
    isReadonly() { }

    /**
     * Only appears once in the platform in the Relationship for Audit.
     * It looks to be used for tables with a Table Rotation set up, where you want to filter your top-level table down to just the table rotation for performance reasons. 
     * 
     * @summary Undocumented method
     * @param {string} tableName - the name of the exact table under the Table Rotation Schedule 
     * @see /nav_to.do?uri=sys_relationship.do?sys_id=366eda7b0a0004970a7d925c9258806b
     * @example
     * var historySet = new GlideRecord("sys_history_set");
     * historySet.setLimit(1);
     * historySet.query();
     * historySet.next(){
     *  var lineTable = historySet.getValue("line_table"); // sys_history_line000x
     *  var historyLines = new GlideRecord("sys_history_line");
     *      historyLines.addQuery("set", historySet.getUniqueValue());
     *      historyLines.targetExtension(lineTable);
     *      historyLines.query();
     *      ...
     * }
     */
    targetExtension(tableName) { }

    /**
     * @description Prints out the filter query that has been built using {@link GlideRecord#addQuery}, {@link GlideRecord#addEncodedQuery}, and {@link GlideRecord#addJoinQuery}
     * 
     * @summary Documented method.
     * @returns {string} The encoded GlideRecord query
     * @see https://developer.servicenow.com/dev.do#!/reference/api/sandiego/server_legacy/c_GlideRecordAPI#r_GlideRecord-getEncodedQuery_Boolean?navFilter=encodedquery
     */
    getEncodedQuery() { }

    /**
     * Returns the internal table name of the GlideRecord. Always returns the subclass even if the GR was queried from a higher table 
     * @summary Documented method
     * 
     * @example
     * var inc = new GlideRecord("incident");
     * inc.addNotNullQuery("short_description")
     * inc.orderBy("short_description");
     * inc.query();
     * 
     * inc.next();
     * gs.info(inc.number + " - " + inc.getRecordClassName()); //INC0008112 - incident
     * @example
     * var task = new GlideRecord("task");
     * task.get("number", "INC0008112");
     * gs.info(task.number + " - " + task.getRecordClassName());// INC0008112 - incident
     */
    getRecordClassName() { }

    /**
     * Seen in script include DeliveryPlanTaskGenerator along with {@link GlideRecord#popCurrent} to run a script evaluation which generates child tasks for a parent using a delivery plan.
     * Since delivery plans are no longer used in new versions, this is probably a deprecated feature. 
     * @summary Unknown method, possibly deprecated
     * 
     * @example 
// global.DeliveryPlanTaskGenerator line 135
   _runTaskScript : function (
   task, //GlideRecord
   tt //TaskToken
   ) {
    if (!tt.getGenerationScript())
        return;

    task.putCurrent();
    GlideEvaluator.evaluateString(tt.getGenerationScript() + '');
    task.popCurrent();
}
     */
    putCurrent() { }

    /**
     * See {@link GlideRecord#putCurrent}
     * @summary Unknown method, possibly deprecated
     */
    popCurrent() { }

    /**
     * Only used once in the platform in the business rule CreateElement. Function appears to be related to creating supplementry files as part of the insert of a sys_dictionary record.
     * 
     * @summary Unknown function
     * @see /nav_to.do?uri=sys_script.do?sys_id=75b83f9fc6112271000396c74dfbab7a
     */
    createElement() { }

    /**
     * Similar to {@link GlideRecord#createElement}, used in 1 business rule UpdateElement and fires after a sys_dictionary is updated.
     * 
     * @summary Unknown function
     * @see /nav_to.do?uri=sys_script.do?sys_id=54d4cd4077320110b6d21fd89a5a996a
     */
    updateElement() { }

    /**
     * Unable to find references to this method being called in the base platform. Likely to due with the platform's text-indexing functionality. 
     * @summary Unknown function
     */
    createIndex() { }

    /**
     * Unable to find references to this method being called in the base platform. Likely to due with the platform's text-indexing functionality. 
     * @summary Unknown function
     */
    dropIndex() { }

    /**
     * Unknown function, unused in any OOB scripts.  Takes one argument.
     * @summary Unknown method
     * @param {unknown} param1 probably supposed to be either true or false
     * @returns {unknown}
     */
    evaluateAsDefault(param1) { }

    addJoinQuery() { }

    addQuery() { }

    addNullQuery() { }

    addNotNullQuery() { }

    appendOrQuery() { }

    addActiveQuery() { }

    addInactiveQuery() { }

    orderBy() { }

    orderByDesc() { }

    addEncodedQuery() { }

    isEncodedQueryValid() { }

    moreEncodedQuery() { }

    setLimit() { }

    chooseWindow() { }

    applyRowSecurity() { }

    query() { }

    _query() { }

    queryNoDomain() { }

    getSetRowCount() { }

    getRowCount() { }

    getRowNumber() { }

    isForeignTable() { }

    isMetadata() { }

    isValidMetadataRecord() { }

    getRelatedRecords() { }

    putOptimizers() { }

    isView() { }

    isReadonly() { }

    makeReadonly() { }

    getRelatedTables() { }

    getRelatedLists() { }

    getLabel() { }

    getPlural() { }

    update() { }

    updateWithReferences() { }

    updateLazy() { }

    updateNoDomain() { }

    scheduleScript() { }

    initialize() { }

    applyTemplate() { }

    insertLazy() { }

    operation() { }

    insert() { }

    insertWithReferences() { }

    insertOrUpdate() { }

    deleteRecord() { }

    incrementViewCount() { }

    deleteMultiple() { }

    addValue() { }

    updateMultiple() { }

    next() { }

    nextRecord() { }

    _next() { }

    _operation() { }

    hasNext() { }

    newRecord() { }

    saveLocation() { }

    setLocation() { }

    restoreLocation() { }

    getLocation() { }

    getDisplayValue() { }

    getEscapedDisplayValue() { }

    getClassDisplayValue() { }

    getFields() { }

    findForeignKey() { }

    close() { }

    getTableName() { }

    find() { }

    setValue() { }

    setDisplayValue() { }

    getValue() { }

    getUniqueValue() { }

    setAbortAction() { }

    isActionAborted() { }

    instanceOf() { }

    isValid() { }

    isValidRecord() { }

    isNewRecord() { }

    hasAttachments() { }

    applyEncodedQuery() { }

    getDisplayName() { }

    setNewGuid() { }

    setNewGuidValue() { }

    isWorkflow() { }

    setEngineParameter() { }

    getEngineParameter() { }

    /**
     * Controls whether engines such as approval engines will trigger upon calling .update() or .insert() on this record.
     * Anything from this list marked as an 'engine' will not run: {@link https://docs.servicenow.com/bundle/tokyo-application-development/page/script/general-scripting/reference/r_ExecutionOrderScriptsAndEngines.html}
     * 
     * For example, this can be used to turn off Data Policies before inserting a record with empty fields which would normally be mandatory at a db level. 
     * @summary Undocumented method
     * 
     * @param {boolean} useEngines If false, disables the use of engines for the next insert/update. 
     * 
     * @see https://community.servicenow.com/community?id=community_question&sys_id=4caa472ddb5cdbc01dcaf3231f96191b
     * @example
     * // Prevent running engines during insert of a record
     * var chg = new GlideRecord("change_request");
     * chg.newRecord();
     * chg.setUseEngines(false);
     * chg.insert();
     * 
     * @example
     * // Turn off engines for one update, then re-enable for a second update
     * task.setUseEngines(false);
     * task.setValue('state',3);
     * task.update(); // Engines will not run for this update
     * task.setUseEngines(true);
     * ...
     * task.update(); //engines will run for this update 
     */
    setUseEngines(useEngines) { }

    setWorkflow() { }

    setForceUpdate() { }

    getED() { }

    getAttribute() { }

    getBooleanAttribute() { }

    canWrite() { }

    canCreate() { }

    canRead() { }

    notifyUser() { }

    hasRightsTo() { }

    canDelete() { }

    isValidField() { }

    getElement() { }

    getLastErrorMessage() { }

    getLink() { }

    setQueryReferences() { }

    enableSessionLanguageJoin() { }

    attachGlideListener() { }

    setSystem() { }

    autoSysFields() { }

    changes() { }

    getElements() { }

    addDomainQuery() { }

    setNoCount() { }

    onePassQuery() { }

    setCategory() { }

    getCategory() { }

    isInGlobalScope() { }

    isInStoreScope() { }

    isInSelectedScope() { }

    getTableScope() { }

    getTableScopeName() { }

    getTableScopeId() { }

    addFunction() { }

    newGlideRecordNamed() { }

};