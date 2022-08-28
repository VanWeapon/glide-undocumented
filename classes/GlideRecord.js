
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
     * 
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
    isReadOnly() { }

    /**
     * only appears once in the platform in the Relationship for Audit
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

    getRecordClassName() { }

    putCurrent() { }

    popCurrent() { }

    createElement() { }

    updateElement() { }

    createIndex() { }

    dropIndex() { }

    evaluateAsDefault() { }

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

    setUseEngines() { }

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