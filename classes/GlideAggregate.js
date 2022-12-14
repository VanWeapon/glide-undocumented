
/**
 * Used for applying aggregation methods to record sets
 * @summary Documented class
 */
class GlideAggregate {
    /**
     * 
     * @param {string} tableName Sets the table for the query
     */
    constructor(tableName) {
    }

    /**
     * 
     * @param {string} queryString a valid encoded query which will be added to the filter
     */
    addEncodedQuery(queryString) { }

    /**
     * Orders the result set by the specified column, in ascending order. 
     * 
     * Oldest to newest for dates, lowest to highest for numbers, A-Z for strings
     * @summary Documented method
     * 
     * 
     * @param {string} fieldName field to order results by
     */
    orderBy(fieldName) { }

    /**
     * Orders the result set by the specified column, in descending order.
     * 
     * Newest to oldest for dates, highest to lowest for numbers, A-Z for strings
     * @summary Documented method
     * 
     * @param {string} fieldName field to order results by
     */
    orderByDesc(fieldName) { }

    getValue() { }

    addAggregate() { }

    addTrend() { }

    addBizCalendarTrend() { }

    addBizCalendarTrendBase() { }

    addBizCalendarTrendIntersect() { }

    addHaving() { }

    groupBy() { }

    orderByAggregate() { }

    setGroup() { }

    setGroupByFollowRef() { }

    setOrderByFollowRef() { }

    setOrder() { }

    setAggregateWindow() { }

    getTotal() { }

    getCount() { }

    getAggregate() { }

    getQuery() { }

    getAggregateEncodedQuery() { }

    isBizCalendarTrendFillGap() { }

    setBizCalendarTrendFillGap() { }

    largeResultExpected() { }

    targetExtension() { }

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

    isEncodedQueryValid() { }

    isValidEncodedQuery() { }

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

    get() { }

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

}