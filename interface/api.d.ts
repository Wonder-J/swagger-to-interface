declare namespace API {
interface AddressInfo {
	address?: string;
	area?: string;
	city?: string;
	province?: string;
	typeId?: number;
	typeName?: string;
}
interface AllCategoryVo {
	accessStateEnums?: BaseDictVo[];
	checkFactoryStateEnums?: BaseDictVo[];
	developmentStateEnums?: BaseDictVo[];
	pdmCategoryEnumVos?: CategoryNodeTree[];
	pdmProductLineVos?: PdmProductLineVo[];
	srmDictsByTypesVos?: DictsByTypesVo[];
}
interface BaseDictVo {
	id?: number;
	name?: string;
}
interface BusinessConditionsDto {
	dayYieldNum?: number;
	deviceNum?: number;
	employeeNum?: number;
	factoryArea?: number;
	isSelfMakeCode?: string;
	isSelfMakeId?: number;
	isSelfMakeName?: string;
	monthYieldNum?: number;
}
interface CapacityDistributeDetailLogVo {
	cooperationScore?: number;
	createTime?: string;
	nextDistributeCapacity?: number;
	nextSimulateCapacity?: number;
	onTimeDeliveryScore?: number;
	operateType?: string;
	operator?: string;
	periodYearMonth?: string;
	quantityPassScore?: number;
	recalculateReason?: string;
	supplierLevel?: string;
	totalScore?: number;
}
interface CapacityDistributeLogVo {
	capacityDistributeDetailLogVos?: CapacityDistributeDetailLogVo[];
	supplierFormatName?: string;
}
interface CapacityDistributeRecalculateDetailLogVo {
	cooperationScore?: number;
	createTime?: string;
	nextDistributeCapacity?: number;
	nextRecalculateDistributeCapacity?: number;
	nextRecalculateSimulateCapacity?: number;
	nextSimulateCapacity?: number;
	onTimeDeliveryScore?: number;
	operateType?: string;
	operator?: string;
	periodYearMonth?: string;
	quantityPassScore?: number;
	recalculateReason?: string;
	supplierLevel?: string;
	totalScore?: number;
}
interface CapacityDistributeRecalculateLogVo {
	capacityDistributeRecalculateDetailLogVos?: CapacityDistributeRecalculateDetailLogVo[];
	supplierFormatName?: string;
}
interface CapacityDistributeRecalculateReq {
	operatorId?: string;
	operatorName?: string;
	recalculateReason?: string;
}
interface CapacityPlanChangeStateReq {
	event?: 'SUBMIT'|'REVIEW'|'REJECT';
	ids?: number[];
	operatorId?: string;
	operatorName?: string;
	rejectReason?: string;
}
interface CapacityPlanDetailLogVo {
	createTime?: string;
	operateType?: string;
	operation?: string;
	operator?: string;
	reason?: string;
}
interface CapacityPlanLogVo {
	capacityPlanDetailLogVos?: CapacityPlanDetailLogVo[];
}
interface CapacitySupplierDetailLogVo {
	createTime?: string;
	operateType?: string;
	operation?: string;
	operator?: string;
	reason?: string;
}
interface CapacitySupplierLogVo {
	capacitySupplierDetailLogVos?: CapacitySupplierDetailLogVo[];
	supplierFormatName?: string;
}
interface CapacitySupplierReportChangeStateReq {
	event?: 'SUBMIT'|'REVIEW'|'REPORT'|'REJECT';
	ids?: number[];
	operatorId?: string;
	operatorName?: string;
	rejectReason?: string;
}
interface CapacitySupplierReportSaveReq {
	dailyDeliveryNum?: number;
	operatorId?: string;
	operatorName?: string;
	reportYearMonth?: string;
	saveCapacitySupplierDetailsReq?: SaveCapacitySupplierDetailsReq[];
	supplierId?: number;
}
interface CapacitySupplierReportUpdateReq {
	id?: number;
	operatorId?: string;
	operatorName?: string;
	reportProductionCapacity?: number;
	updateReason?: string;
}
interface CategoryNodeTree {
	childNode?: CategoryNodeTree[];
	id?: number;
	name?: string;
	parentNodeId?: number;
}
interface CheckFactoryReportAttachmentInfo {
	imageUrls?: string[];
}
interface CheckFactoryReportContactInfo {
	addressInfos?: AddressInfo[];
	dockingPeopleInfos?: DockingPeopleInfo[];
}
interface CheckFactoryReportMechanicalEquipment {
	actualNumber?: number;
	name?: string;
	type?: string;
}
interface CheckFactoryReportPersonnelEquipment {
	department?: string;
	peopleNumber?: number;
	position?: string;
}
interface CheckFactoryReportProductionInfo {
	categoryId?: number;
	categoryName?: string;
	dailyCapacity?: number;
	materialId?: number;
	materialName?: string;
	monthCapacity?: number;
}
interface CheckFactoryReportQualificationCertificate {
	imageUrls?: string[];
	qualificationId?: number;
	qualificationName?: string;
}
interface CheckFactoryReportResult {
	productionReportResult?: ProductionReportResult;
	supplierManageReportResult?: SupplierManageReportResult;
}
interface ContactInformationDto {
	address?: string;
	addressTypeCode?: string;
	addressTypeId?: number;
	addressTypeName?: string;
	email?: string;
	mobilePhone?: string;
	name?: string;
	remark?: string;
	typeCode?: string;
	typeId?: number;
	typeName?: string;
}
interface CountStateNumVo {
	countNum?: number;
	state?: string;
	stateId?: number;
	stateName?: string;
}
interface CurrentMonthAssessmentScoreDto {
	code?: string;
	field1?: string;
	id?: number;
	name?: string;
	score?: number;
	value?: string;
}
interface DeleteMatchSupplierResourceRepositoryReq {
	id?: number;
	operatorId?: string;
	operatorName?: string;
	repositoryId?: number;
}
interface DepartmentGroupNames {
	department_group_id?: number;
	name?: string;
}
interface DictCateVo {
	categoryCode?: string;
	categoryDescription?: string;
	categoryName?: string;
	createTime?: string;
	createUname?: string;
	dictDetailVos?: DictDetailVo[];
	id?: number;
	updateTime?: string;
	updateUname?: string;
}
interface DictDetailReq {
	code?: string;
	description?: string;
	field1?: string;
	field2?: string;
	field3?: string;
	id?: number;
	name?: string;
	parentId?: number;
	status?: number;
}
interface DictDetailVo {
	code?: string;
	description?: string;
	field1?: string;
	field2?: string;
	field3?: string;
	id?: number;
	name?: string;
	parentCategoryName?: string;
	parentCode?: string;
	parentId?: number;
	parentName?: string;
	status?: number;
}
interface DictEditReq {
	categoryDescription?: string;
	categoryId?: number;
	dictList?: DictDetailReq[];
	operatorId?: string;
	operatorName?: string;
}
interface DictProductionCapacityPlan {
	category?: string;
	categoryId?: number;
	description?: string;
	id?: number;
	level?: string;
	levelId?: number;
	status?: number;
	value?: number;
}
interface DictProductionCapacityPlanVo {
	category?: string;
	categoryId?: number;
	id?: number;
	level?: string;
	levelId?: number;
	showOrder?: number;
	status?: number;
	value?: string;
}
interface DictQueryReq {
	categoryCode?: string;
	categoryName?: string;
	createTimeBegin?: string;
	createTimeEnd?: string;
	createUname?: string;
	page?: number;
	pageSize?: number;
	updateTimeBegin?: string;
	updateTimeEnd?: string;
	updateUname?: string;
}
interface DictSaveReq {
	categoryCode?: string;
	categoryDescription?: string;
	categoryName?: string;
	dictList?: DictDetailReq[];
	operatorId?: string;
	operatorName?: string;
}
interface DictSupplierLevelCoefficient {
	code?: string;
	description?: string;
	id?: number;
	name?: string;
	status?: number;
	value?: number;
}
interface DictSupplierLevelCoefficientVo {
	code?: string;
	id?: number;
	name?: string;
	status?: number;
	value?: string;
}
interface DictSupplierRankCoefficient {
	code?: string;
	description?: string;
	id?: number;
	name?: string;
	status?: number;
	value?: number;
}
interface DictSupplierRankCoefficientVo {
	code?: number;
	id?: number;
	name?: string;
	status?: number;
	value?: string;
}
interface DictSupplierScoreSubject {
	description?: string;
	field1?: number;
	id?: number;
	name?: string;
	status?: number;
	value?: number;
}
interface DictSupplierScoreSubjectVo {
	code?: string;
	field1?: string;
	id?: number;
	name?: string;
	status?: number;
	value?: string;
}
interface DictSupplierScoreUpdateReq {
	operatorId?: string;
	operatorName?: string;
	productionCapacityPlans?: DictProductionCapacityPlan[];
	supplierLevelCoefficients?: DictSupplierLevelCoefficient[];
	supplierRankCoefficients?: DictSupplierRankCoefficient[];
	supplierScoreSubjects?: DictSupplierScoreSubject[];
}
interface DictVo {
	baseDictionaryTypeCodeName?: string;
	code?: string;
	desc?: string;
	field1?: string;
	id?: number;
	name?: string;
	showOrder?: number;
	typeName?: string;
}
interface DictsByTypesVo {
	dictVos?: DictVo[];
	type?: string;
}
interface DistributeMerchandiserReq {
	id?: number;
	merchandiser?: string;
	merchandiserCn?: string;
	operatorId?: string;
	operatorName?: string;
}
interface DockingPeopleInfo {
	name?: string;
	phone?: string;
	typeId?: number;
	typeName?: string;
}
interface File {
	absolute?: boolean;
	absoluteFile?: File;
	absolutePath?: string;
	canonicalFile?: File;
	canonicalPath?: string;
	directory?: boolean;
	executable?: boolean;
	file?: boolean;
	freeSpace?: number;
	hidden?: boolean;
	invalid?: boolean;
	lastModified?: number;
	name?: string;
	parent?: string;
	parentFile?: File;
	path?: string;
	prefixLength?: number;
	readable?: boolean;
	totalSpace?: number;
	usableSpace?: number;
	writable?: boolean;
}
interface FlowStatus {
	check?: boolean;
	value?: string;
}
interface FuzzyQuerySupplierResourceRepositoryVo {
	code?: string;
	formatName?: string;
	id?: number;
	name?: string;
}
interface FuzzyQuerySupplierVo {
	code?: string;
	formatName?: string;
	id?: number;
	level?: string;
	levelId?: number;
	name?: string;
	nameAbbr?: string;
}
interface IdListDto {
	idList?: number[];
}
interface IdListReq {
	ids?: number[];
	operatorId?: string;
	operatorName?: string;
}
interface ImportResultVo {
	errorData?: string;
	importId?: number;
	result?: boolean;
}
type InputStream = object 
interface LoginAuthReq {
	sid: string;
}
interface LoginAuthVO {
	accessToken?: string;
	lastExpireTime?: string;
	refreshToken?: string;
	user?: 用户信息;
}
interface MatchSupplierReq {
	id?: number;
	operatorId?: string;
	operatorName?: string;
	supplierResourceIds?: number[];
}
interface OaSignContractReq {
	contractCode?: string;
	contractScanImgs?: string[];
	contractValidityBegin?: string;
	contractValidityEnd?: string;
	isSign?: number;
	operatorId?: string;
	operatorName?: string;
	supplierCode?: string;
}
interface OperationIdListDto {
	idList?: number[];
	operatorId?: string;
	operatorName?: string;
}
interface OrderItem {
	asc?: boolean;
	column?: string;
}
interface PageDictCateVo {
	countId?: string;
	current?: number;
	maxLimit?: number;
	optimizeCountSql?: boolean;
	orders?: OrderItem[];
	pages?: number;
	records?: DictCateVo[];
	searchCount?: boolean;
	size?: number;
	total?: number;
}
interface PageProductionCapacityDistributeRecalculateVo {
	countId?: string;
	current?: number;
	maxLimit?: number;
	optimizeCountSql?: boolean;
	orders?: OrderItem[];
	pages?: number;
	records?: ProductionCapacityDistributeRecalculateVo[];
	searchCount?: boolean;
	size?: number;
	total?: number;
}
interface PageProductionCapacityDistributeVo {
	countId?: string;
	current?: number;
	maxLimit?: number;
	optimizeCountSql?: boolean;
	orders?: OrderItem[];
	pages?: number;
	records?: ProductionCapacityDistributeVo[];
	searchCount?: boolean;
	size?: number;
	total?: number;
}
interface PageProductionCapacityPlanVo {
	countId?: string;
	current?: number;
	maxLimit?: number;
	optimizeCountSql?: boolean;
	orders?: OrderItem[];
	pages?: number;
	records?: ProductionCapacityPlanVo[];
	searchCount?: boolean;
	size?: number;
	total?: number;
}
interface PageProductionCapacitySupplierReportVo {
	countId?: string;
	current?: number;
	maxLimit?: number;
	optimizeCountSql?: boolean;
	orders?: OrderItem[];
	pages?: number;
	records?: ProductionCapacitySupplierReportVo[];
	searchCount?: boolean;
	size?: number;
	total?: number;
}
interface PageProductionSupplierScoreMainVo {
	countId?: string;
	current?: number;
	maxLimit?: number;
	optimizeCountSql?: boolean;
	orders?: OrderItem[];
	pages?: number;
	records?: ProductionSupplierScoreMainVo[];
	searchCount?: boolean;
	size?: number;
	total?: number;
}
interface PageProductionSupplierScoreRecalculateVo {
	countId?: string;
	current?: number;
	maxLimit?: number;
	optimizeCountSql?: boolean;
	orders?: OrderItem[];
	pages?: number;
	records?: ProductionSupplierScoreRecalculateVo[];
	searchCount?: boolean;
	size?: number;
	total?: number;
}
interface PageProductionSupplierScoreVo {
	countId?: string;
	current?: number;
	maxLimit?: number;
	optimizeCountSql?: boolean;
	orders?: OrderItem[];
	pages?: number;
	records?: ProductionSupplierScoreVo[];
	searchCount?: boolean;
	size?: number;
	total?: number;
}
interface PageSupplierAccessLogVo {
	countId?: string;
	current?: number;
	maxLimit?: number;
	optimizeCountSql?: boolean;
	orders?: OrderItem[];
	pages?: number;
	records?: SupplierAccessLogVo[];
	searchCount?: boolean;
	size?: number;
	total?: number;
}
interface PageSupplierAccessVo {
	countId?: string;
	current?: number;
	maxLimit?: number;
	optimizeCountSql?: boolean;
	orders?: OrderItem[];
	pages?: number;
	records?: SupplierAccessVo[];
	searchCount?: boolean;
	size?: number;
	total?: number;
}
interface PageSupplierCancelLogVo {
	countId?: string;
	current?: number;
	maxLimit?: number;
	optimizeCountSql?: boolean;
	orders?: OrderItem[];
	pages?: number;
	records?: SupplierCancelLogVo[];
	searchCount?: boolean;
	size?: number;
	total?: number;
}
interface PageSupplierCancelVo {
	countId?: string;
	current?: number;
	maxLimit?: number;
	optimizeCountSql?: boolean;
	orders?: OrderItem[];
	pages?: number;
	records?: SupplierCancelVo[];
	searchCount?: boolean;
	size?: number;
	total?: number;
}
interface PageSupplierCheckFactoryDetailLogVo {
	countId?: string;
	current?: number;
	maxLimit?: number;
	optimizeCountSql?: boolean;
	orders?: OrderItem[];
	pages?: number;
	records?: SupplierCheckFactoryDetailLogVo[];
	searchCount?: boolean;
	size?: number;
	total?: number;
}
interface PageSupplierCheckFactoryDetailVo {
	countId?: string;
	current?: number;
	maxLimit?: number;
	optimizeCountSql?: boolean;
	orders?: OrderItem[];
	pages?: number;
	records?: SupplierCheckFactoryDetailVo[];
	searchCount?: boolean;
	size?: number;
	total?: number;
}
interface PageSupplierCheckFactoryLogVo {
	countId?: string;
	current?: number;
	maxLimit?: number;
	optimizeCountSql?: boolean;
	orders?: OrderItem[];
	pages?: number;
	records?: SupplierCheckFactoryLogVo[];
	searchCount?: boolean;
	size?: number;
	total?: number;
}
interface PageSupplierCheckFactoryVo {
	countId?: string;
	current?: number;
	maxLimit?: number;
	optimizeCountSql?: boolean;
	orders?: OrderItem[];
	pages?: number;
	records?: SupplierCheckFactoryVo[];
	searchCount?: boolean;
	size?: number;
	total?: number;
}
interface PageSupplierDetailLogVo {
	countId?: string;
	current?: number;
	maxLimit?: number;
	optimizeCountSql?: boolean;
	orders?: OrderItem[];
	pages?: number;
	records?: SupplierDetailLogVo[];
	searchCount?: boolean;
	size?: number;
	total?: number;
}
interface PageSupplierDevelopmentLogVo {
	countId?: string;
	current?: number;
	maxLimit?: number;
	optimizeCountSql?: boolean;
	orders?: OrderItem[];
	pages?: number;
	records?: SupplierDevelopmentLogVo[];
	searchCount?: boolean;
	size?: number;
	total?: number;
}
interface PageSupplierDevelopmentVo {
	countId?: string;
	current?: number;
	maxLimit?: number;
	optimizeCountSql?: boolean;
	orders?: OrderItem[];
	pages?: number;
	records?: SupplierDevelopmentVo[];
	searchCount?: boolean;
	size?: number;
	total?: number;
}
interface PageSupplierGradeChangeLogVo {
	countId?: string;
	current?: number;
	maxLimit?: number;
	optimizeCountSql?: boolean;
	orders?: OrderItem[];
	pages?: number;
	records?: SupplierGradeChangeLogVo[];
	searchCount?: boolean;
	size?: number;
	total?: number;
}
interface PageSupplierGradeChangeVo {
	countId?: string;
	current?: number;
	maxLimit?: number;
	optimizeCountSql?: boolean;
	orders?: OrderItem[];
	pages?: number;
	records?: SupplierGradeChangeVo[];
	searchCount?: boolean;
	size?: number;
	total?: number;
}
interface PageSupplierMerchandiserLogVo {
	countId?: string;
	current?: number;
	maxLimit?: number;
	optimizeCountSql?: boolean;
	orders?: OrderItem[];
	pages?: number;
	records?: SupplierMerchandiserLogVo[];
	searchCount?: boolean;
	size?: number;
	total?: number;
}
interface PageSupplierMerchandiserVo {
	countId?: string;
	current?: number;
	maxLimit?: number;
	optimizeCountSql?: boolean;
	orders?: OrderItem[];
	pages?: number;
	records?: SupplierMerchandiserVo[];
	searchCount?: boolean;
	size?: number;
	total?: number;
}
interface PageSupplierRectifyLogVo {
	countId?: string;
	current?: number;
	maxLimit?: number;
	optimizeCountSql?: boolean;
	orders?: OrderItem[];
	pages?: number;
	records?: SupplierRectifyLogVo[];
	searchCount?: boolean;
	size?: number;
	total?: number;
}
interface PageSupplierRectifyVo {
	countId?: string;
	current?: number;
	maxLimit?: number;
	optimizeCountSql?: boolean;
	orders?: OrderItem[];
	pages?: number;
	records?: SupplierRectifyVo[];
	searchCount?: boolean;
	size?: number;
	total?: number;
}
interface PageSupplierResourceRepositoryVo {
	countId?: string;
	current?: number;
	maxLimit?: number;
	optimizeCountSql?: boolean;
	orders?: OrderItem[];
	pages?: number;
	records?: SupplierResourceRepositoryVo[];
	searchCount?: boolean;
	size?: number;
	total?: number;
}
interface PageSupplierVo {
	countId?: string;
	current?: number;
	maxLimit?: number;
	optimizeCountSql?: boolean;
	orders?: OrderItem[];
	pages?: number;
	records?: SupplierVo[];
	searchCount?: boolean;
	size?: number;
	total?: number;
}
interface PdmCategoryEnumVo {
	categoryCnName?: string;
	id?: number;
	parent_id?: number;
	path_cn_name?: string;
	path_name?: string;
}
interface PdmProductLineVo {
	created_at?: number;
	department_group_names?: DepartmentGroupNames[];
	id?: number;
	name?: string;
	plan_manager_name?: string;
	plan_manager_uid?: string;
	product_manager_name?: string;
	product_manager_uid?: string;
	status?: number;
	status_name?: string;
}
interface PortalUserDto {
	id?: number;
	name?: string;
	uid?: string;
}
interface ProductionCapacityDistributeRecalculateReq {
	categoryId?: number;
	categoryIds?: number[];
	isRecalculate?: number;
	materialTypeId?: number;
	materialTypeIds?: number[];
	merchandiser?: string;
	merchandisers?: string[];
	orderByName?: string;
	orderByType?: 'ASC'|'DESC';
	page?: number;
	pageSize?: number;
	periodYearMonth?: string;
	periodYearMonthEnd?: string;
	periodYearMonthStart?: string;
	scoreTimeEnd?: string;
	scoreTimeStart?: string;
	supplierCode?: string;
	supplierId?: number;
	supplierIds?: number[];
	supplierLevelId?: number;
	supplierLevelIds?: number[];
	supplierStateId?: string;
	supplierStateIds?: string[];
}
interface ProductionCapacityDistributeRecalculateVo {
	categoryName?: string;
	categoryRank?: number;
	cooperationScore?: number;
	distributeId?: number;
	id?: number;
	isAllowRecalculate?: number;
	materialTypeName?: string;
	merchandiserCn?: string;
	nextDistributeCapacity?: number;
	nextRecalculateDistributeCapacity?: number;
	nextRecalculateSimulateCapacity?: number;
	nextSimulateCapacity?: number;
	onTimeDeliveryScore?: number;
	periodYearMonth?: string;
	quantityPassScore?: number;
	recalculateCategoryRank?: number;
	recalculateOnTimeDeliveryScore?: number;
	recalculateQuantityPassScore?: number;
	recalculateReason?: string;
	reportProductionCapacity?: number;
	scoreTime?: string;
	supplier?: string;
	supplierCode?: string;
	supplierFullName?: string;
	supplierId?: number;
	supplierLevel?: string;
	supplierState?: string;
	totalScore?: number;
}
interface ProductionCapacityDistributeReq {
	categoryId?: number;
	categoryIds?: number[];
	materialTypeId?: number;
	materialTypeIds?: number[];
	merchandiser?: string;
	merchandisers?: string[];
	orderByName?: string;
	orderByType?: 'ASC'|'DESC';
	page?: number;
	pageSize?: number;
	periodYearMonth?: string;
	periodYearMonthEnd?: string;
	periodYearMonthStart?: string;
	scoreTimeEnd?: string;
	scoreTimeStart?: string;
	supplierCode?: string;
	supplierId?: number;
	supplierIds?: number[];
	supplierLevelId?: number;
	supplierLevelIds?: number[];
	supplierStateId?: string;
	supplierStateIds?: number[];
}
interface ProductionCapacityDistributeVo {
	categoryId?: number;
	categoryName?: string;
	categoryRank?: number;
	cooperationScore?: number;
	id?: number;
	materialTypeId?: number;
	materialTypeName?: string;
	merchandiserCn?: string;
	nextDistributeCapacity?: number;
	nextSimulateCapacity?: number;
	onTimeDeliveryScore?: number;
	periodYearMonth?: string;
	quantityPassScore?: number;
	recalculateReason?: string;
	reportProductionCapacity?: number;
	scoreTime?: string;
	supplier?: string;
	supplierCode?: string;
	supplierFullName?: string;
	supplierId?: number;
	supplierLevel?: string;
	supplierState?: string;
	totalCategoryRank?: number;
	totalScore?: number;
}
interface ProductionCapacityPlanReq {
	categoryId?: number;
	categoryIds?: number[];
	materialTypeId?: number;
	materialTypeIds?: number[];
	orderByName?: string;
	orderByType?: 'ASC'|'DESC';
	page?: number;
	pageSize?: number;
	reportYearMonthEnd?: string;
	reportYearMonthStart?: string;
	showState?: number;
	showStateNames?: ('undefined')[];
}
interface ProductionCapacityPlanVo {
	categoryName?: string;
	createTime?: string;
	createUname?: string;
	id?: number;
	materialTypeName?: string;
	planProductionCapacity?: number;
	rejectReason?: string;
	rejectTime?: string;
	reportYearMonth?: string;
	reviewTime?: string;
	reviewUname?: string;
	submitTime?: string;
	submitUname?: string;
	updateTime?: string;
	updateUname?: string;
}
interface ProductionCapacitySupplierReportReq {
	categoryId?: number;
	categoryIds?: number[];
	materialTypeId?: number;
	materialTypeIds?: number[];
	merchandiser?: string;
	merchandisers?: string[];
	orderByName?: string;
	orderByType?: 'ASC'|'DESC';
	page?: number;
	pageSize?: number;
	reportYearMonthEnd?: string;
	reportYearMonthStart?: string;
	showState: number;
	showStateNames?: ('undefined')[];
	supplierCode?: string;
	supplierId?: number;
	supplierIds?: number[];
	supplierLevelId?: number;
	supplierLevelIds?: number[];
}
interface ProductionCapacitySupplierReportVo {
	categoryName?: string;
	createTime?: string;
	createUname?: string;
	dailyDeliveryNum?: number;
	dailyProductionCapacity?: number;
	id?: number;
	materialTypeName?: string;
	merchandiserCn?: string;
	rejectReason?: string;
	rejectTime?: string;
	reportProductionCapacity?: number;
	reportTime?: string;
	reportUname?: string;
	reportYearMonth?: string;
	reviewTime?: string;
	reviewUname?: string;
	submitTime?: string;
	submitUname?: string;
	supplier?: string;
	supplierCode?: string;
	supplierFullName?: string;
	supplierId?: number;
	supplierLevel?: string;
	updateTime?: string;
	updateUname?: string;
}
interface ProductionReportDetailResult {
	actualScore?: number;
	checkFactoryProject?: string;
	id?: number;
	projectComments?: string;
	ratio?: number;
	scoreCriteria?: string;
	totalScore?: number;
}
interface ProductionReportResult {
	actualScore?: number;
	productionComments?: string;
	productionReportDetailResults?: ProductionReportDetailResult[];
	totalScore?: number;
}
interface ProductionSupplierScoreCountVo {
	manCommitCount?: number;
	manWaitCount?: number;
	manageCommitCount?: number;
	manageWaitCount?: number;
	productionCommitCount?: number;
	productionWaitCount?: number;
}
interface ProductionSupplierScoreHistoryVo {
	category?: string;
	categoryRank?: number;
	deliveryQcScore?: number;
	id?: number;
	level?: string;
	matchScore?: number;
	orderShipScore?: number;
	period?: string;
	totalScore?: number;
}
interface ProductionSupplierScoreMainCountVo {
	rankCount?: number;
	scoreCount?: number;
}
interface ProductionSupplierScoreMainReq {
	categoryId?: number;
	categoryIds?: number[];
	clothId?: number;
	clothIds?: number[];
	levelId?: number;
	levelIds?: number[];
	merchandiser?: string;
	merchandisers?: string[];
	orderByName?: string;
	orderByType?: 'ASC'|'DESC';
	page?: number;
	pageSize?: number;
	periodTimeEnd?: string;
	periodTimeStart?: string;
	supplierCode?: string;
	supplierId?: number;
	supplierIds?: number[];
	supplierStateId?: number;
	supplierStateIds?: number[];
	supplierStatus?: string;
	tab?: 'SCORE'|'RANK';
}
interface ProductionSupplierScoreMainVo {
	auditTime?: string;
	category?: string;
	categoryId?: number;
	categoryRank?: number;
	cloth?: string;
	deliveryQcScore?: number;
	flowStatus?: FlowStatus[];
	id?: number;
	isManScore?: string;
	isManageScore?: string;
	isProductionScore?: string;
	level?: string;
	matchScore?: number;
	merchandiser?: string;
	orderShipScore?: number;
	period?: string;
	periodStr?: string;
	state?: 'WAIT_SCORE'|'WAIT_AUDIT'|'FINAL';
	stateName?: string;
	supplier?: string;
	supplierCode?: string;
	supplierId?: number;
	supplierStatus?: string;
	totalScore?: number;
}
interface ProductionSupplierScoreRecalculateReq {
	categoryId?: number;
	categoryIds?: number[];
	clothId?: number;
	clothIds?: number[];
	isRecalculate?: number;
	levelId?: number;
	levelIds?: number[];
	merchandiser?: string;
	merchandisers?: string[];
	orderByName?: string;
	orderByType?: 'ASC'|'DESC';
	page?: number;
	pageSize?: number;
	periodTimeEnd?: string;
	periodTimeStart?: string;
	supplierCode?: string;
	supplierId?: number;
	supplierIds?: number[];
	supplierStateId?: number;
	supplierStateIds?: number[];
	supplierStatus?: string;
}
interface ProductionSupplierScoreRecalculateVo {
	auditTime?: string;
	category?: string;
	categoryRank?: number;
	cloth?: string;
	deliveryQcScore?: number;
	id?: number;
	isManScore?: string;
	isManageScore?: string;
	isProductionScore?: string;
	level?: string;
	matchScore?: number;
	merchandiser?: string;
	orderShipScore?: number;
	period?: string;
	periodStr?: string;
	repeatCategoryRank?: number;
	repeatDeliveryQcScore?: number;
	repeatOrderShipScore?: number;
	repeatReason?: string;
	repeatTotalScore?: number;
	state?: 'WAIT_SCORE'|'WAIT_AUDIT'|'FINAL';
	stateName?: string;
	supplier?: string;
	supplierCode?: string;
	supplierId?: number;
	supplierStatus?: string;
	totalScore?: number;
}
interface ProductionSupplierScoreReq {
	level?: string;
	levelId?: number;
	levelIds?: number[];
	orderByName?: string;
	orderByType?: 'ASC'|'DESC';
	page?: number;
	pageSize?: number;
	periodTimeEnd?: string;
	periodTimeStart?: string;
	state?: 'WAIT_SCORE'|'SCORED'|'REJECTED';
	supplierCode?: string;
	supplierId?: number;
	supplierIds?: number[];
	tab?: 'WAIT_PRODUCTION_SCORE'|'FINISH_PRODUCTION_SCORE'|'WAIT_MANAGE_SCORE'|'FINISH_MANAGE_SCORE'|'WAIT_AUDIT'|'FINISH_AUDIT';
	type?: 'PRODUCTION'|'MANAGE'|'MAN';
}
interface ProductionSupplierScoreTemplateReq {
	page?: number;
	pageSize?: number;
	periodTimeEnd?: string;
	periodTimeStart?: string;
	state?: 'WAIT_SCORE'|'SCORED'|'REJECTED';
	type?: 'PRODUCTION'|'MANAGE'|'MAN';
}
interface ProductionSupplierScoreVo {
	changeRemark?: string;
	id?: number;
	isReject?: number;
	level?: string;
	operates?: SysOperationScoreVo[];
	originScore?: number;
	period?: string;
	periodStr?: string;
	rejectReason?: string;
	remark?: string;
	score?: number;
	scoreTime?: string;
	standardList?: string[];
	standardListName?: string;
	supplier?: string;
	supplierCode?: string;
	supplierId?: number;
	type?: 'PRODUCTION'|'MANAGE'|'MAN';
	typeName?: string;
}
interface QualificationDto {
	businessLicenseImgs?: string[];
	businessLicenseNumber?: string;
	contractCode?: string;
	contractScanImgs?: string[];
	contractSignCode?: string;
	contractSignId?: number;
	contractSignName?: string;
	contractValidityBegin?: string;
	contractValidityEnd?: string;
	legalIdentity?: string;
	legalIdentityBacks?: string[];
	legalIdentityFronts?: string[];
	legalImgs?: string[];
	legalPerson?: string;
	openingPermits?: string[];
	otherImgs?: string[];
	registerAddress?: string;
	registerCapital?: string;
	taxRegistrationImgs?: string[];
	taxRegistrationNumber?: string;
	unincorporatedPaymentCertificates?: string[];
}
interface RectifyAssessmentScoreDto {
	code?: string;
	field1?: string;
	id?: number;
	name?: string;
	scoreAfterRectify?: number;
	scoreBeforeRectify?: number;
	value?: string;
}
interface RectifyProductionInfo {
	categoryId?: number;
	dailyCapacity?: number;
	materialTypeId?: number;
	monthCapacity?: number;
}
interface RejectFlowReq {
	id?: number;
	page?: number;
	pageSize?: number;
	rejectReason?: string;
}
interface Resource {
	description?: string;
	file?: File;
	filename?: string;
	inputStream?: InputStream;
	open?: boolean;
	readable?: boolean;
	uri?: URI;
	url?: URL;
}
interface RespAllCategoryVo {
	code?: number;
	data?: AllCategoryVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespCapacityDistributeLogVo {
	code?: number;
	data?: CapacityDistributeLogVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespCapacityDistributeRecalculateLogVo {
	code?: number;
	data?: CapacityDistributeRecalculateLogVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespCapacityPlanLogVo {
	code?: number;
	data?: CapacityPlanLogVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespCapacitySupplierLogVo {
	code?: number;
	data?: CapacitySupplierLogVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespDictCateVo {
	code?: number;
	data?: DictCateVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespFuzzyQuerySupplierVo {
	code?: number;
	data?: FuzzyQuerySupplierVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespImportResultVo {
	code?: number;
	data?: ImportResultVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespListBaseDictVo {
	code?: number;
	data?: BaseDictVo[];
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespListCategoryNodeTree {
	code?: number;
	data?: CategoryNodeTree[];
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespListCountStateNumVo {
	code?: number;
	data?: CountStateNumVo[];
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespListDictProductionCapacityPlanVo {
	code?: number;
	data?: DictProductionCapacityPlanVo[];
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespListDictSupplierLevelCoefficientVo {
	code?: number;
	data?: DictSupplierLevelCoefficientVo[];
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespListDictSupplierRankCoefficientVo {
	code?: number;
	data?: DictSupplierRankCoefficientVo[];
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespListDictSupplierScoreSubjectVo {
	code?: number;
	data?: DictSupplierScoreSubjectVo[];
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespListDictVo {
	code?: number;
	data?: DictVo[];
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespListDictsByTypesVo {
	code?: number;
	data?: DictsByTypesVo[];
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespListFuzzyQuerySupplierResourceRepositoryVo {
	code?: number;
	data?: FuzzyQuerySupplierResourceRepositoryVo[];
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespListFuzzyQuerySupplierVo {
	code?: number;
	data?: FuzzyQuerySupplierVo[];
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespListPdmCategoryEnumVo {
	code?: number;
	data?: PdmCategoryEnumVo[];
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespListPdmProductLineVo {
	code?: number;
	data?: PdmProductLineVo[];
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespListPortalUserDto {
	code?: number;
	data?: PortalUserDto[];
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespListProductionSupplierScoreHistoryVo {
	code?: number;
	data?: ProductionSupplierScoreHistoryVo[];
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespListSupplierScoreRecalculateQuerySupplierVo {
	code?: number;
	data?: SupplierScoreRecalculateQuerySupplierVo[];
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespListSupplierVo {
	code?: number;
	data?: SupplierVo[];
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespListSysAccessoriesVo {
	code?: number;
	data?: SysAccessoriesVo[];
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespListSysOperationDictVo {
	code?: number;
	data?: SysOperationDictVo[];
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespListstring {
	code?: number;
	data?: string[];
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespLoginAuthVO {
	code?: number;
	data?: LoginAuthVO;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespPageDictCateVo {
	code?: number;
	data?: PageDictCateVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespPageProductionCapacityDistributeRecalculateVo {
	code?: number;
	data?: PageProductionCapacityDistributeRecalculateVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespPageProductionCapacityDistributeVo {
	code?: number;
	data?: PageProductionCapacityDistributeVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespPageProductionCapacityPlanVo {
	code?: number;
	data?: PageProductionCapacityPlanVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespPageProductionCapacitySupplierReportVo {
	code?: number;
	data?: PageProductionCapacitySupplierReportVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespPageProductionSupplierScoreMainVo {
	code?: number;
	data?: PageProductionSupplierScoreMainVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespPageProductionSupplierScoreRecalculateVo {
	code?: number;
	data?: PageProductionSupplierScoreRecalculateVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespPageProductionSupplierScoreVo {
	code?: number;
	data?: PageProductionSupplierScoreVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespPageSupplierAccessLogVo {
	code?: number;
	data?: PageSupplierAccessLogVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespPageSupplierAccessVo {
	code?: number;
	data?: PageSupplierAccessVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespPageSupplierCancelLogVo {
	code?: number;
	data?: PageSupplierCancelLogVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespPageSupplierCancelVo {
	code?: number;
	data?: PageSupplierCancelVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespPageSupplierCheckFactoryDetailLogVo {
	code?: number;
	data?: PageSupplierCheckFactoryDetailLogVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespPageSupplierCheckFactoryDetailVo {
	code?: number;
	data?: PageSupplierCheckFactoryDetailVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespPageSupplierCheckFactoryLogVo {
	code?: number;
	data?: PageSupplierCheckFactoryLogVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespPageSupplierCheckFactoryVo {
	code?: number;
	data?: PageSupplierCheckFactoryVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespPageSupplierDetailLogVo {
	code?: number;
	data?: PageSupplierDetailLogVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespPageSupplierDevelopmentLogVo {
	code?: number;
	data?: PageSupplierDevelopmentLogVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespPageSupplierDevelopmentVo {
	code?: number;
	data?: PageSupplierDevelopmentVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespPageSupplierGradeChangeLogVo {
	code?: number;
	data?: PageSupplierGradeChangeLogVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespPageSupplierGradeChangeVo {
	code?: number;
	data?: PageSupplierGradeChangeVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespPageSupplierMerchandiserLogVo {
	code?: number;
	data?: PageSupplierMerchandiserLogVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespPageSupplierMerchandiserVo {
	code?: number;
	data?: PageSupplierMerchandiserVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespPageSupplierRectifyLogVo {
	code?: number;
	data?: PageSupplierRectifyLogVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespPageSupplierRectifyVo {
	code?: number;
	data?: PageSupplierRectifyVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespPageSupplierResourceRepositoryVo {
	code?: number;
	data?: PageSupplierResourceRepositoryVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespPageSupplierVo {
	code?: number;
	data?: PageSupplierVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespProductionSupplierScoreCountVo {
	code?: number;
	data?: ProductionSupplierScoreCountVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespProductionSupplierScoreMainCountVo {
	code?: number;
	data?: ProductionSupplierScoreMainCountVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespSaveSupplierResourceRepositoryVo {
	code?: number;
	data?: SaveSupplierResourceRepositoryVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespSupplierCancelDetailVo {
	code?: number;
	data?: SupplierCancelDetailVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespSupplierCheckFactoryReportVo {
	code?: number;
	data?: SupplierCheckFactoryReportVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespSupplierDevelopmentDetailVo {
	code?: number;
	data?: SupplierDevelopmentDetailVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespSupplierDto {
	code?: number;
	data?: SupplierDto;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespSupplierMerchandiserVo {
	code?: number;
	data?: SupplierMerchandiserVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespSupplierRectifyDetailVo {
	code?: number;
	data?: SupplierRectifyDetailVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespSupplierReportHistoryVo {
	code?: number;
	data?: SupplierReportHistoryVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface RespSupplierResourceRepositoryDetailVo {
	code?: number;
	data?: SupplierResourceRepositoryDetailVo;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface Respboolean {
	code?: number;
	data?: boolean;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface Respstring {
	code?: number;
	data?: string;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface Resp用户信息 {
	code?: number;
	data?: 用户信息;
	errors?: object;
	isSuccess?: boolean;
	message?: string;
	timestamp?: string;
}
interface SaveCapacityPlanDetailReq {
	categoryId?: number;
	categoryName?: string;
	id?: number;
	materialTypeId?: number;
	materialTypeName?: string;
	planProductionCapacity?: number;
}
interface SaveCapacityPlanReq {
	operatorId?: string;
	operatorName?: string;
	saveCapacityPlanDetailReqs?: SaveCapacityPlanDetailReq[];
}
interface SaveCapacitySupplierDetailsReq {
	categoryId?: number;
	categoryName?: string;
	id?: number;
	materialTypeId?: number;
	materialTypeName?: string;
	reportProductionCapacity?: number;
}
interface SaveOnlineSupplierDto {
	goodsSourceUrl: string;
	onlineShopId?: string;
	onlineShopName: string;
	supplierCode?: string;
}
interface SaveSupplierResourceRepositoryDto {
	address?: string;
	area?: string;
	categoryIds?: number[];
	city?: string;
	clientSaveReqs?: SupplierResourceRepositoryClientSaveReq[];
	dailyCapacity?: number;
	designTeamNum?: number;
	director?: string;
	directorPhone?: string;
	employeeNum?: number;
	factoryArea?: number;
	isCBECExperience?: number;
	mainMaterialIds?: number[];
	manageTeamNum?: number;
	monthCapacity?: number;
	monthPlateNum?: number;
	productStyle?: string;
	province?: string;
	referrerName?: string;
	supplierFullName?: string;
	supplierTypeName?: string;
}
interface SaveSupplierResourceRepositoryVo {
	code?: string;
	id?: number;
	supplierFullName?: string;
}
interface SettlementAccount {
	accountNumber?: string;
	bank?: string;
	bankAccount?: string;
	bankAddress?: string;
	bankBranch?: string;
	city?: string;
	isEnable?: number;
	mobile?: string;
	name?: string;
	province?: string;
	receiverIdentity?: string;
	receiverName?: string;
	swiftCode?: string;
	typeCode?: string;
	typeId?: number;
	typeName?: string;
}
interface SettlementDto {
	currencyCode?: string;
	currencyId?: number;
	currencyName?: string;
	deliveryCostCode?: string;
	deliveryCostId?: number;
	deliveryCostName?: string;
	receiverIdentityBacks?: string[];
	receiverIdentityFronts?: string[];
	receivingAccountStatements?: string[];
	settlementAccounts?: SettlementAccount[];
	settlementCurrencyCode?: string;
	settlementCurrencyId?: number;
	settlementCurrencyName?: string;
	settlementMethodCode?: string;
	settlementMethodId?: number;
	settlementMethodName?: string;
	settlementPeriodCode?: string;
	settlementPeriodId?: number;
	settlementPeriodName?: string;
	settlementPointCode?: string;
	settlementPointId?: number;
	settlementPointName?: string;
}
interface SupplierAccessLogVo {
	bizId?: number;
	operate?: string;
	operateTime?: string;
	operateType?: 'CREATE'|'DELETE'|'UPDATE'|'QUERY'|'AGREE'|'REJECT';
	operateTypeName?: string;
	operator?: string;
}
interface SupplierAccessReq {
	accessOrderNo?: string;
	categoryIds?: number[];
	checkFactoryOrderNo?: string;
	code?: string;
	createTimeBegin?: string;
	createTimeEnd?: string;
	createUids?: string[];
	dayYieldNumCeil?: number;
	dayYieldNumFloor?: number;
	demandOrderNo?: string;
	materialIds?: number[];
	natureIds?: number[];
	orderByName?: string;
	orderByType?: 'ASC'|'DESC';
	page?: number;
	pageSize?: number;
	processStateIds?: number[];
	processStates?: ('undefined')[];
	reportCapacityCeil?: number;
	reportCapacityFloor?: number;
	showStateId?: number;
	showStateNames?: ('undefined')[];
	sourceIds?: number[];
	supplierIds?: number[];
	supplierMainTypeIds?: number[];
	supplierTypeIds?: number[];
}
interface SupplierAccessStateReq {
	event: 'ACCESS_APPROVE'|'FINANCE_APPROVE'|'SUPPLIER_MANAGE_APPROVE'|'SUPPLY_CHAIN_APPROVE'|'ACCESS_END'|'REJECT';
	ids: number[];
	operatorId?: string;
	operatorName?: string;
	reason?: string;
}
interface SupplierAccessVo {
	accessOrderNo?: string;
	categoryId?: string;
	categoryNameStr?: string;
	checkFactoryOrderId?: number;
	checkFactoryOrderNo?: string;
	contractSignName?: string;
	contractState?: 'NOT_SIGNED'|'SIGNED';
	createTime?: string;
	createUname?: string;
	dayYieldNum?: number;
	demandOrderNo?: string;
	developmentId?: number;
	id?: number;
	mainMaterialTypeId?: string;
	materialNameStr?: string;
	monthYieldNum?: number;
	natureId?: number;
	natureName?: string;
	rejectReason?: string;
	rejectUname?: string;
	sourceId?: number;
	sourceName?: string;
	state?: '1'|'2'|'3'|'4'|'5';
	stateName?: string;
	supplierFullName?: string;
	supplierId?: string;
	supplierMainTypeId?: number;
	supplierMainTypeName?: string;
	supplierName?: string;
	supplierRepositoryCode?: string;
	supplierRepositoryId?: string;
	supplierTypeId?: number;
	supplierTypeName?: string;
}
interface SupplierAddPageQueryReq {
	beginPeriod?: string;
	categoryId?: number;
	categoryIds?: number[];
	endPeriod?: string;
	materialTypeId?: number;
	materialTypeIds?: number[];
	maxAvgScore?: number;
	maxReportProductionCapacity?: number;
	minAvgScore?: number;
	minReportProductionCapacity?: number;
	orderByName?: string;
	orderByType?: 'ASC'|'DESC';
	page?: number;
	pageSize?: number;
	stateId?: number;
	supplierCode?: string;
	supplierCodes?: string[];
	supplierId?: number;
	supplierIds?: number[];
}
interface SupplierBaseInfoDto {
	address?: string;
	area?: string;
	buyerNames?: string[];
	buyerUids?: string[];
	categoryIds?: number[];
	categoryNames?: string[];
	city?: string;
	deliveryDay?: number;
	electronicSignStateCode?: string;
	electronicSignStateId?: number;
	electronicSignStateName?: string;
	holidayBegin?: string;
	holidayEnd?: string;
	mainMaterialTypeId?: number[];
	mainMaterialTypeNames?: string[];
	province?: string;
	stateCode?: string;
	stateEntryTime?: string;
	stateId?: number;
	stateName?: string;
	website?: string;
}
interface SupplierCancelAddDto {
	cancelReason?: string;
	cancelReasonId?: number;
	operatorId?: string;
	operatorName?: string;
	supplierId?: number;
	supplierRectifyId?: number;
	supplierRectifyOrderNo?: string;
}
interface SupplierCancelAddReq {
	operatorId?: string;
	operatorName?: string;
	supplierCancelAddDtos?: SupplierCancelAddDto[];
}
interface SupplierCancelBehaviorDto {
	behaviorItem?: string;
	behaviorItemTypeId?: string;
	comments?: string;
	content?: string;
}
interface SupplierCancelBehaviorVo {
	behaviorItem?: string;
	behaviorItemTypeId?: number;
	comments?: string;
	content?: string;
	id?: number;
	supplierCancelId?: number;
	supplierCancelOrderNo?: string;
}
interface SupplierCancelDetailVo {
	cancelComment?: string;
	cancelReason?: string;
	cancelReasonId?: number;
	contactInfo?: CheckFactoryReportContactInfo;
	cooperationTime?: string;
	currentMonthAssessmentScoreDtos?: CurrentMonthAssessmentScoreDto[];
	employeeNum?: number;
	factoryArea?: number;
	finalRecommendation?: number;
	finalTidyPersonNum?: number;
	manageTeamNum?: number;
	mechanicalEquipment?: CheckFactoryReportMechanicalEquipment[];
	personnelEquipment?: CheckFactoryReportPersonnelEquipment[];
	productionInfo?: RectifyProductionInfo[];
	state?: 'WAIT_SUPPLY_MANAGEMENT_APPROVAL'|'WAIT_PRODUCTION_APPROVAL'|'WAIT_SUPPLY_MANAGEMENT_DIRECTOR_APPROVAL'|'WAIT_SUPPLY_CHAIN_DIRECTOR_APPROVAL'|'DONE'|'TERMINATED';
	stateName?: string;
	supplier?: string;
	supplierCancelBehaviorVos?: SupplierCancelBehaviorVo[];
	supplierCancelId?: number;
	supplierCancelOrderNo?: string;
	supplierCode?: string;
	supplierFullName?: string;
	supplierLevel?: string;
	supplierLevelId?: number;
	supplierMainType?: string;
	supplierMainTypeId?: number;
	supplierNature?: string;
	supplierNatureId?: number;
	supplierRectifyId?: number;
	supplierRectifyOrderNo?: string;
	supplierSource?: string;
	supplierSourceId?: number;
	supplierState?: string;
	supplierStateId?: number;
	supplierType?: string;
	supplierTypeId?: number;
	tailPersonNum?: number;
}
interface SupplierCancelLogVo {
	bizId?: number;
	operate?: string;
	operateTime?: string;
	operateType?: 'CREATE'|'DELETE'|'UPDATE'|'QUERY'|'AGREE'|'REJECT';
	operateTypeName?: string;
	operator?: string;
}
interface SupplierCancelModifyReq {
	cancelComment?: string;
	contactInfo?: CheckFactoryReportContactInfo;
	employeeNum?: number;
	factoryArea?: number;
	finalRecommendation?: number;
	finalTidyPersonNum?: number;
	manageTeamNum?: number;
	mechanicalEquipments?: CheckFactoryReportMechanicalEquipment[];
	operatorId?: string;
	operatorName?: string;
	personnelEquipments?: CheckFactoryReportPersonnelEquipment[];
	productionInfo?: RectifyProductionInfo[];
	supplierCancelBehaviorDtos?: SupplierCancelBehaviorDto[];
	supplierCancelId?: number;
	supplierCancelOrderNo?: string;
	tailPersonNum?: number;
}
interface SupplierCancelPageQueryReq {
	cancelReasonId?: number;
	cancelReasonIds?: number[];
	createTimeBegin?: string;
	createTimeEnd?: string;
	createUname?: string;
	maxAverageQuarterlyScore?: number;
	merchandiser?: string;
	merchandiserCn?: string;
	minAverageQuarterlyScore?: number;
	orderByName?: string;
	orderByType?: 'ASC'|'DESC';
	page?: number;
	pageSize?: number;
	processStateIds?: number[];
	processStates?: ('undefined')[];
	showStateId?: number;
	showStates?: ('undefined')[];
	supplierCancelOrderNo?: string;
	supplierCancelOrderNos?: string[];
	supplierCode?: string;
	supplierCodes?: string[];
	supplierId?: number;
	supplierIds?: number[];
	supplierLevelId?: number;
	supplierLevelIds?: number[];
	supplierMainTypeId?: number;
	supplierMainTypeIds?: number[];
	supplierNatureId?: number;
	supplierNatureIds?: number[];
	supplierRectifyOrderNo?: string;
	supplierRectifyOrderNos?: string[];
	supplierSourceId?: number;
	supplierSourceIds?: number[];
	supplierStateId?: number;
	supplierStateIds?: number[];
	supplierTypeId?: number;
	supplierTypeIds?: number[];
}
interface SupplierCancelVo {
	averageQuarterlyScore?: number;
	cancelReason?: string;
	cancelReasonId?: number;
	createTime?: string;
	createUname?: string;
	merchandiser?: string;
	merchandiserCn?: string;
	rejectReason?: string;
	state?: 'WAIT_SUPPLY_MANAGEMENT_APPROVAL'|'WAIT_PRODUCTION_APPROVAL'|'WAIT_SUPPLY_MANAGEMENT_DIRECTOR_APPROVAL'|'WAIT_SUPPLY_CHAIN_DIRECTOR_APPROVAL'|'DONE'|'TERMINATED';
	stateName?: string;
	supplier?: string;
	supplierAddress?: string;
	supplierCancelId?: number;
	supplierCancelOrderNo?: string;
	supplierCode?: string;
	supplierFullName?: string;
	supplierLevel?: string;
	supplierLevelId?: number;
	supplierMainType?: string;
	supplierMainTypeId?: number;
	supplierNature?: string;
	supplierNatureId?: number;
	supplierRectifyId?: number;
	supplierRectifyOrderNo?: string;
	supplierSource?: string;
	supplierSourceId?: number;
	supplierState?: string;
	supplierStateId?: number;
	supplierType?: string;
	supplierTypeId?: number;
	sysOperationSupplierCancelVos?: SysOperationSupplierCancelVo[];
}
interface SupplierCheckFactoryDetailLogVo {
	bizId?: number;
	operate?: string;
	operateTime?: string;
	operateType?: 'CREATE'|'DELETE'|'UPDATE'|'QUERY'|'AGREE'|'REJECT';
	operateTypeName?: string;
	operator?: string;
}
interface SupplierCheckFactoryDetailReq {
	categoryId?: number;
	categoryIds?: number[];
	checkFactoryOrderNo?: string;
	code?: string;
	createTimeEnd?: string;
	createTimeStart?: string;
	dailyCapacityCeil?: number;
	dailyCapacityFloor?: number;
	demandOrderNo?: string;
	materialId?: number;
	materialIds?: number[];
	monthDemandCapacityCeil?: number;
	monthDemandCapacityFloor?: number;
	orderByName?: string;
	orderByType?: 'ASC'|'DESC';
	page?: number;
	pageSize?: number;
	processStateIds?: number[];
	processStates?: ('undefined')[];
	scoreCeil?: number;
	scoreFloor?: number;
	state?: string;
	supplierResourceId?: number;
	supplierResourceIds?: number[];
	supplierTypeId?: number;
	supplierTypeIds?: number[];
	type?: string;
	updateTimeEnd?: string;
	updateTimeStart?: string;
}
interface SupplierCheckFactoryDetailStateReq {
	checkFactoryIds: number[];
	event: 'CHECK_FACTORY';
	operatorId?: string;
	operatorName?: string;
	type: 'SUPPLIER_MANAGE'|'PRODUCTION';
}
interface SupplierCheckFactoryDetailUpdateReq {
	attachmentInfo?: CheckFactoryReportAttachmentInfo;
	checkFactoryId?: number;
	checkFactoryOrderNo?: string;
	checkFactoryResult?: CheckFactoryReportResult;
	code?: string;
	contactInfo?: CheckFactoryReportContactInfo;
	demandOrderNo?: string;
	designTeamNum?: number;
	employeeNum?: number;
	factoryArea?: number;
	id?: number;
	manageTeamNum?: number;
	mechanicalEquipment?: CheckFactoryReportMechanicalEquipment[];
	operatorId?: string;
	operatorName?: string;
	personnelEquipment?: CheckFactoryReportPersonnelEquipment[];
	productionInfo?: CheckFactoryReportProductionInfo[];
	qualificationCertificate?: CheckFactoryReportQualificationCertificate[];
	referrerName?: string;
	supplierFullName?: string;
	supplierResourceRepositoryClientVos?: SupplierResourceRepositoryClientVo[];
	supplierTypeId?: number;
	supplierTypeName?: string;
}
interface SupplierCheckFactoryDetailVo {
	categoryId?: string;
	categoryNameStr?: string;
	checkFactoryId?: number;
	checkFactoryOrderNo?: string;
	checkFactoryPersonCn?: string;
	code?: string;
	createTime?: string;
	dailyCapacity?: number;
	demandOrderNo?: string;
	developmentId?: number;
	director?: string;
	directorPhone?: string;
	id?: number;
	mainMaterialTypeId?: string;
	materialNameStr?: string;
	monthDemandCapacity?: number;
	score?: number;
	state?: '1'|'2';
	stateName?: string;
	supplierFullName?: string;
	supplierTypeId?: number;
	supplierTypeName?: string;
	updateTime?: string;
}
interface SupplierCheckFactoryLogVo {
	bizId?: number;
	operate?: string;
	operateTime?: string;
	operateType?: 'CREATE'|'DELETE'|'UPDATE'|'QUERY'|'AGREE'|'REJECT';
	operateTypeName?: string;
	operator?: string;
}
interface SupplierCheckFactoryReportVo {
	attachmentInfo?: CheckFactoryReportAttachmentInfo;
	checkFactoryId?: number;
	checkFactoryOrderNo?: string;
	checkFactoryResult?: CheckFactoryReportResult;
	code?: string;
	contactInfo?: CheckFactoryReportContactInfo;
	demandOrderNo?: string;
	designTeamNum?: number;
	developmentId?: number;
	employeeNum?: number;
	factoryArea?: number;
	manageTeamNum?: number;
	mechanicalEquipment?: CheckFactoryReportMechanicalEquipment[];
	personnelEquipment?: CheckFactoryReportPersonnelEquipment[];
	productionInfo?: CheckFactoryReportProductionInfo[];
	qualificationCertificate?: CheckFactoryReportQualificationCertificate[];
	referrerName?: string;
	supplierFullName?: string;
	supplierResourceRepositoryClientVos?: SupplierResourceRepositoryClientVo[];
	supplierTypeId?: number;
	supplierTypeName?: string;
}
interface SupplierCheckFactoryReq {
	categoryId?: number;
	categoryIds?: number[];
	checkFactoryOrderNo?: string;
	code?: string;
	createTimeEnd?: string;
	createTimeStart?: string;
	dailyCapacityCeil?: number;
	dailyCapacityFloor?: number;
	demandOrderNo?: string;
	materialId?: number;
	materialIds?: number[];
	monthDemandCapacityCeil?: number;
	monthDemandCapacityFloor?: number;
	orderByName?: string;
	orderByType?: 'ASC'|'DESC';
	page?: number;
	pageSize?: number;
	processStateIds?: number[];
	processStates?: ('undefined')[];
	scoreCeil?: number;
	scoreFloor?: number;
	showStateId?: number;
	showStateNames?: ('undefined')[];
	supplierResourceId?: number;
	supplierResourceIds?: number[];
	supplierTypeId?: number;
	supplierTypeIds?: number[];
	updateTimeEnd?: string;
	updateTimeStart?: string;
}
interface SupplierCheckFactoryStateReq {
	event: 'CHECK_FACTORY'|'CONFIRM_ACCESS'|'REJECT_ACCESS';
	id: number[];
	operatorId?: string;
	operatorName?: string;
	reason?: string;
}
interface SupplierCheckFactoryVo {
	categoryId?: string;
	categoryNameStr?: string;
	checkFactoryOrderNo?: string;
	checkFactoryPersonCn?: string;
	code?: string;
	createTime?: string;
	dailyCapacity?: number;
	demandOrderNo?: string;
	developmentId?: number;
	director?: string;
	directorPhone?: string;
	id?: number;
	mainMaterialTypeId?: string;
	materialNameStr?: string;
	monthDemandCapacity?: number;
	score?: number;
	state?: '1'|'2'|'3';
	stateName?: string;
	supplierFullName?: string;
	supplierTypeId?: number;
	supplierTypeName?: string;
	updateTime?: string;
}
interface SupplierDetailLogVo {
	operate?: string;
	operateTime?: string;
	operation?: string;
	operator?: string;
}
interface SupplierDevelopmentDetailVo {
	categoryIds?: number[];
	categoryNames?: string[];
	demandIncomingTime?: string;
	demandOrderNo?: string;
	id?: number;
	materialIds?: number[];
	materialNames?: string[];
	monthDemandCapacity?: number;
	otherImgs?: string[];
	productAgeId?: number;
	productAgeName?: string;
	productPriceCeil?: number;
	productPriceFloor?: number;
	styleReferenceImgs?: string[];
	supplement?: string;
	supplierResourceRepositoryVos?: SupplierResourceRepositoryVo[];
	supplierTypeId?: number;
	supplierTypeName?: string;
	urgentLevelId?: number;
	urgentLevelName?: string;
}
interface SupplierDevelopmentLogVo {
	bizId?: number;
	operate?: string;
	operateTime?: string;
	operateType?: 'CREATE'|'DELETE'|'UPDATE'|'QUERY'|'AGREE'|'REJECT';
	operateTypeName?: string;
	operator?: string;
}
interface SupplierDevelopmentReq {
	categoryId?: number;
	categoryIds?: number[];
	dailyCapacityCeil?: number;
	dailyCapacityFloor?: number;
	demandIncomingTimeEnd?: string;
	demandIncomingTimeStart?: string;
	demandOrderNo?: string;
	materialId?: number;
	materialIds?: number[];
	merchandiser?: string;
	merchandisers?: string[];
	monthDemandCapacityCeil?: number;
	monthDemandCapacityFloor?: number;
	orderByName?: string;
	orderByType?: 'ASC'|'DESC';
	page?: number;
	pageSize?: number;
	processStateIds?: number[];
	processStates?: ('undefined')[];
	productAgeId?: number;
	productAgeIds?: number[];
	productPriceCeil?: number;
	productPriceFloor?: number;
	showStateId?: number;
	showStateNames?: ('undefined')[];
	supplierTypeId?: number;
	supplierTypeIds?: number[];
	urgentLevelId?: number;
	urgentLevelIds?: number[];
}
interface SupplierDevelopmentSaveReq {
	categoryIds?: number[];
	demandIncomingTime?: string;
	demandOrderNo?: string;
	id?: number;
	materialIds?: number[];
	monthDemandCapacity?: number;
	operatorId?: string;
	operatorName?: string;
	otherImgs?: string[];
	productAgeId?: number;
	productPriceCeil?: number;
	productPriceFloor?: number;
	styleReferenceImgs?: string[];
	supplement?: string;
	supplierTypeId?: number;
	urgentLevelId?: number;
}
interface SupplierDevelopmentStateReq {
	event: 'SUBMIT'|'DISTRIBUTE'|'HANDLE'|'CHECK_FACTORY'|'CONFIRM_ACCESS'|'REJECT_ACCESS'|'DEVELOPMENT_END'|'REJECT';
	id: number[];
	operatorId?: string;
	operatorName?: string;
	reason?: string;
}
interface SupplierDevelopmentVo {
	categoryId?: string;
	categoryNameStr?: string;
	dailyCapacity?: number;
	demandIncomingTime?: string;
	demandIncomingTimeStr?: string;
	demandOrderNo?: string;
	id?: number;
	mainMaterialTypeId?: string;
	matchSupplier?: string;
	materialNameStr?: string;
	merchandiserCn?: string;
	monthDemandCapacity?: number;
	productAgeId?: number;
	productAgeName?: string;
	productPriceCeil?: number;
	productPriceFloor?: number;
	productPriceRange?: string;
	rejectReason?: string;
	state?: '1'|'2'|'3'|'4'|'5'|'6';
	stateName?: string;
	submitTime?: string;
	supplierRepositoryIds?: string;
	supplierTypeName?: string;
	typeId?: number;
	urgentLevelId?: number;
	urgentLevelName?: string;
}
interface SupplierDto {
	businessConditionsDto?: BusinessConditionsDto;
	code?: string;
	contactInformationDtos?: ContactInformationDto[];
	directDeliveryCode?: string;
	directDeliveryId?: number;
	directDeliveryName?: string;
	fullName?: string;
	id?: number;
	levelCode?: string;
	levelId?: number;
	levelName?: string;
	mainTypeCode?: string;
	mainTypeId?: number;
	mainTypeName?: string;
	merchandiser?: string;
	merchandiserCn?: string;
	name?: string;
	natureCode?: string;
	natureId?: number;
	natureName?: string;
	operatorId?: string;
	operatorName?: string;
	prodSecondDepartmentIds?: number[];
	prodSecondDepartmentNames?: string[];
	qualificationDto?: QualificationDto;
	referrerName?: string;
	resourceRepositoryId?: number;
	settlementDto?: SettlementDto;
	sourceCode?: string;
	sourceId?: number;
	sourceName?: string;
	supplierBaseInfoDto?: SupplierBaseInfoDto;
	typeCode?: string;
	typeId?: number;
	typeName?: string;
	webShopDtos?: WebShopDto[];
}
interface SupplierGradeChangeAddReq {
	gradeChangeType?: number;
	operatorId?: string;
	operatorName?: string;
	supplierIds?: number[];
}
interface SupplierGradeChangeLogVo {
	bizId?: number;
	operate?: string;
	operateTime?: string;
	operateType?: 'CREATE'|'DELETE'|'UPDATE'|'QUERY'|'AGREE'|'REJECT';
	operateTypeName?: string;
	operator?: string;
}
interface SupplierGradeChangePageQueryReq {
	createTimeBegin?: string;
	createTimeEnd?: string;
	createUname?: string;
	gradeChangeType?: number;
	maxAverageQuarterlyScore?: number;
	merchandiser?: string;
	merchandiserCn?: string;
	minAverageQuarterlyScore?: number;
	orderByName?: string;
	orderByType?: 'ASC'|'DESC';
	page?: number;
	pageSize?: number;
	processStateIds?: number[];
	processStates?: ('undefined')[];
	showStateId?: number;
	showStates?: ('undefined')[];
	supplierCode?: string;
	supplierCodes?: string[];
	supplierGradeChangeOrderNo?: string;
	supplierGradeChangeOrderNos?: string[];
	supplierId?: number;
	supplierIds?: number[];
	supplierLevelId?: number;
	supplierLevelIds?: number[];
	supplierMainTypeId?: number;
	supplierMainTypeIds?: number[];
	supplierNatureId?: number;
	supplierNatureIds?: number[];
	supplierRectifyOrderNo?: string;
	supplierRectifyOrderNos?: string[];
	supplierSourceId?: number;
	supplierSourceIds?: number[];
	supplierStateId?: number;
	supplierStateIds?: number[];
	supplierTypeId?: number;
	supplierTypeIds?: number[];
}
interface SupplierGradeChangeVo {
	averageQuarterlyScore?: number;
	createTime?: string;
	createUname?: string;
	gradeChangeType?: number;
	gradeChangeTypeName?: string;
	merchandiser?: string;
	merchandiserCn?: string;
	rejectReason?: string;
	state?: 'WAIT_SUPPLY_MANAGEMENT_APPROVAL'|'RECTIFYING'|'WAIT_PRODUCTION_APPROVAL'|'WAIT_SUPPLY_MANAGEMENT_DIRECTOR_APPROVAL'|'WAIT_SUPPLY_VICE_PRESIDENT_APPROVAL'|'DONE'|'TERMINATED';
	stateName?: string;
	supplier?: string;
	supplierAddress?: string;
	supplierCode?: string;
	supplierFullName?: string;
	supplierGradeChangeId?: number;
	supplierGradeChangeOrderNo?: string;
	supplierLevel?: string;
	supplierLevelId?: number;
	supplierMainType?: string;
	supplierMainTypeId?: number;
	supplierNature?: string;
	supplierNatureId?: number;
	supplierRectifyId?: number;
	supplierRectifyOrderNo?: string;
	supplierSource?: string;
	supplierSourceId?: number;
	supplierState?: string;
	supplierStateId?: number;
	supplierType?: string;
	supplierTypeId?: number;
}
interface SupplierManageReportDetailResult {
	actualScore?: number;
	checkFactoryProject?: string;
	id?: number;
	projectComments?: string;
	ratio?: number;
	scoreCriteria?: string;
	totalScore?: number;
}
interface SupplierManageReportResult {
	actualScore?: number;
	supplierManageComments?: string;
	supplierManageReportDetailResults?: SupplierManageReportDetailResult[];
	totalScore?: number;
}
interface SupplierMerchandiserLogVo {
	bizId?: number;
	operate?: string;
	operateTime?: string;
	operateType?: 'CREATE'|'DELETE'|'UPDATE'|'QUERY'|'AGREE'|'REJECT';
	operateTypeName?: string;
	operator?: string;
}
interface SupplierMerchandiserReq {
	groupId?: number;
	groupIds?: number[];
	id?: number;
	idList?: number[];
	merchandiser?: string;
	merchandisers?: string[];
	orderByName?: string;
	orderByType?: 'ASC'|'DESC';
	page?: number;
	pageSize?: number;
	supplierCode?: string;
	supplierId?: number;
	supplierIds?: number[];
	supplierLevelId?: number;
	supplierLevelIds?: number[];
	supplierMainTypeId?: number;
	supplierMainTypeIds?: number[];
	supplierTypeId?: number;
	supplierTypeIds?: number[];
}
interface SupplierMerchandiserSaveOrUpdateReq {
	groupId?: number;
	id?: number;
	merchandiser?: string;
	merchandiserCn?: string;
	supplierCode?: string;
	supplierFullName?: string;
	supplierId?: number;
}
interface SupplierMerchandiserSaveOrUpdateReqs {
	operatorId?: string;
	operatorName?: string;
	supplierMerchandiserSaveOrUpdateReqList?: SupplierMerchandiserSaveOrUpdateReq[];
}
interface SupplierMerchandiserVo {
	groupId?: number;
	groupName?: string;
	id?: number;
	merchandiser?: string;
	merchandiserCn?: string;
	supplierCode?: string;
	supplierFullName?: string;
	supplierId?: number;
	supplierLevel?: string;
	supplierLevelId?: number;
	supplierMainTypeId?: number;
	supplierMainTypeName?: string;
	supplierTypeId?: number;
	supplierTypeName?: string;
}
interface SupplierQueryParamReq {
	page?: number;
	pageSize?: number;
	state?: string;
	supplierNatures?: string[];
	supplierTypes?: string[];
}
interface SupplierRectifyDetailVo {
	contactInfo?: CheckFactoryReportContactInfo;
	cooperationTime?: string;
	employeeNum?: number;
	factoryArea?: number;
	finalRecommendation?: number;
	finalTidyPersonNum?: number;
	manageTeamNum?: number;
	mechanicalEquipment?: CheckFactoryReportMechanicalEquipment[];
	personnelEquipment?: CheckFactoryReportPersonnelEquipment[];
	productionComment?: string;
	productionInfo?: RectifyProductionInfo[];
	rectifyAssessmentScoreDtos?: RectifyAssessmentScoreDto[];
	rectifyDeadline?: string;
	rectifyDeadlineId?: number;
	rectifyType?: number;
	rectifyTypeName?: string;
	state?: 'WAIT_SUPPLY_MANAGEMENT_APPROVAL'|'WAIT_PRODUCTION_APPROVAL'|'WAIT_SUPPLY_MANAGEMENT_MANAGER_APPROVAL'|'WAIT_SUPPLY_MANAGEMENT_DIRECTOR_APPROVAL'|'WAIT_SUPPLY_VICE_PRESIDENT_APPROVAL'|'DONE'|'TERMINATED';
	stateName?: string;
	supplier?: string;
	supplierCancelId?: number;
	supplierCancelOrderNo?: string;
	supplierCode?: string;
	supplierFullName?: string;
	supplierGradeChangeId?: number;
	supplierGradeChangeOrderNo?: string;
	supplierLevel?: string;
	supplierLevelId?: number;
	supplierMainType?: string;
	supplierMainTypeId?: number;
	supplierNature?: string;
	supplierNatureId?: number;
	supplierRectifyId?: number;
	supplierRectifyItemVos?: SupplierRectifyItemVo[];
	supplierRectifyOrderNo?: string;
	supplierSource?: string;
	supplierSourceId?: number;
	supplierState?: string;
	supplierStateId?: number;
	supplierType?: string;
	supplierTypeId?: number;
	tailPersonNum?: number;
}
interface SupplierRectifyItemDto {
	anomalyAnalysis?: string;
	rectifyItem?: string;
	rectifyItemTypeId?: string;
	rectifyPlan?: string;
	rectifyResult?: string;
}
interface SupplierRectifyItemVo {
	anomalyAnalysis?: string;
	id?: number;
	rectifyItem?: string;
	rectifyItemTypeId?: number;
	rectifyPlan?: string;
	rectifyResult?: string;
	supplierRectifyId?: number;
	supplierRectifyOrderNo?: string;
}
interface SupplierRectifyLogVo {
	bizId?: number;
	operate?: string;
	operateTime?: string;
	operateType?: 'CREATE'|'DELETE'|'UPDATE'|'QUERY'|'AGREE'|'REJECT';
	operateTypeName?: string;
	operator?: string;
}
interface SupplierRectifyModifyReq {
	employeeNum?: number;
	eventEnum?: 'SUPPLY_MANAGEMENT_APPROVAL'|'PRODUCTION_APPROVAL'|'REJECT'|'SUPPLY_MANAGEMENT_MANAGER_APPROVAL'|'SUPPLY_MANAGEMENT_DIRECTOR_APPROVAL'|'SUPPLY_VICE_PRESIDENT_APPROVAL'|'TERMINATE';
	factoryArea?: number;
	finalRecommendation?: number;
	finalTidyPersonNum?: number;
	manageTeamNum?: number;
	mechanicalEquipments?: CheckFactoryReportMechanicalEquipment[];
	operatorId?: string;
	operatorName?: string;
	personnelEquipments?: CheckFactoryReportPersonnelEquipment[];
	productionComment?: string;
	rectifyDeadline?: string;
	rectifyDeadlineId?: number;
	supplierRectifyId?: number;
	supplierRectifyItems?: SupplierRectifyItemDto[];
	supplierRectifyOrderNo?: string;
	tailPersonNum?: number;
}
interface SupplierRectifyPageQueryReq {
	createTimeBegin?: string;
	createTimeEnd?: string;
	createUname?: string;
	maxScoreAfterRectify?: number;
	maxScoreBeforeRectify?: number;
	merchandiser?: string;
	merchandiserCn?: string;
	minScoreAfterRectify?: number;
	minScoreBeforeRectify?: number;
	orderByName?: string;
	orderByType?: 'ASC'|'DESC';
	page?: number;
	pageSize?: number;
	processStateIds?: number[];
	processStates?: ('undefined')[];
	rectifyType?: number;
	rectifyTypes?: number[];
	showStateId?: number;
	showStates?: ('undefined')[];
	supplierCode?: string;
	supplierCodes?: string[];
	supplierGradeChangeOrderNo?: string;
	supplierGradeChangeOrderNos?: string[];
	supplierId?: number;
	supplierIds?: number[];
	supplierLevelId?: number;
	supplierLevelIds?: number[];
	supplierMainTypeId?: number;
	supplierMainTypeIds?: number[];
	supplierNatureId?: number;
	supplierNatureIds?: number[];
	supplierRectifyOrderNo?: string;
	supplierRectifyOrderNos?: string[];
	supplierSourceId?: number;
	supplierSourceIds?: number[];
	supplierStateId?: number;
	supplierStateIds?: number[];
	supplierTypeId?: number;
	supplierTypeIds?: number[];
}
interface SupplierRectifyVo {
	createTime?: string;
	createUname?: string;
	merchandiser?: string;
	merchandiserCn?: string;
	rectifyType?: number;
	rectifyTypeName?: string;
	rejectReason?: string;
	scoreAfterRectify?: number;
	scoreBeforeRectify?: number;
	state?: 'WAIT_SUPPLY_MANAGEMENT_APPROVAL'|'WAIT_PRODUCTION_APPROVAL'|'WAIT_SUPPLY_MANAGEMENT_MANAGER_APPROVAL'|'WAIT_SUPPLY_MANAGEMENT_DIRECTOR_APPROVAL'|'WAIT_SUPPLY_VICE_PRESIDENT_APPROVAL'|'DONE'|'TERMINATED';
	stateName?: string;
	supplier?: string;
	supplierAddress?: string;
	supplierCode?: string;
	supplierFullName?: string;
	supplierGradeChangeId?: number;
	supplierGradeChangeOrderNo?: string;
	supplierLevel?: string;
	supplierLevelId?: number;
	supplierMainType?: string;
	supplierMainTypeId?: number;
	supplierNature?: string;
	supplierNatureId?: number;
	supplierRectifyId?: number;
	supplierRectifyOrderNo?: string;
	supplierSource?: string;
	supplierSourceId?: number;
	supplierState?: string;
	supplierStateId?: number;
	supplierType?: string;
	supplierTypeId?: number;
	sysOperationSupplierRectifyVos?: SysOperationSupplierRectifyVo[];
}
interface SupplierReportDetailHistoryVo {
	categoryName?: string;
	materialTypeName?: string;
	reportProductionCapacity?: number;
	reportYearMonth?: string;
}
interface SupplierReportHistoryVo {
	supplierFormatName?: string;
	supplierReportDetailHistoryVos?: SupplierReportDetailHistoryVo[];
}
interface SupplierReq {
	createTimeEnd?: string;
	createTimeStart?: string;
	id?: number;
	idList?: number[];
	orderByName?: string;
	orderByType?: 'ASC'|'DESC';
	page?: number;
	pageSize?: number;
	sourceId?: number;
	sourceIds?: number[];
	supplierCode?: string;
	supplierId?: number;
	supplierIds?: number[];
	supplierLevelId?: number;
	supplierLevelIds?: number[];
	supplierMainTypeId?: number;
	supplierMainTypeIds?: number[];
	supplierNatureId?: number;
	supplierNatureIds?: number[];
	supplierStatusId?: number;
	supplierTypeId?: number;
	supplierTypeIds?: number[];
}
interface SupplierResourceRepositoryClientSaveReq {
	area?: string;
	categoryIds?: number[];
	mainClient?: string;
	percentage?: number;
	qualityRequirement?: string;
}
interface SupplierResourceRepositoryClientVo {
	area?: string;
	categoryIds?: number[];
	categoryNames?: string[];
	mainClient?: string;
	percentage?: number;
	qualityRequirement?: string;
}
interface SupplierResourceRepositoryDetailVo {
	address?: string;
	area?: string;
	categoryIds?: number[];
	categoryNames?: string[];
	city?: string;
	code?: string;
	createTime?: string;
	createUid?: string;
	createUname?: string;
	dailyCapacity?: number;
	designTeamNum?: number;
	director?: string;
	directorPhone?: string;
	employeeNum?: number;
	factoryArea?: number;
	id?: number;
	manageTeamNum?: number;
	materialIds?: number[];
	materialNames?: string[];
	monthCapacity?: number;
	monthPlateNum?: number;
	productStyle?: string;
	province?: string;
	referrerName?: string;
	sourceId?: number;
	sourceName?: string;
	supplierFullName?: string;
	supplierResourceRepositoryClientVos?: SupplierResourceRepositoryClientVo[];
	supplierTypeId?: number;
	supplierTypeName?: string;
	updateTime?: string;
}
interface SupplierResourceRepositoryReq {
	categoryId?: number;
	categoryIds?: number[];
	createTimeEnd?: string;
	createTimeStart?: string;
	createUid?: string;
	dailyCapacityCeil?: number;
	dailyCapacityFloor?: number;
	isManualMatch?: number;
	materialId?: number;
	materialIds?: number[];
	monthCapacityCeil?: number;
	monthCapacityFloor?: number;
	neRepositoryIds?: number[];
	orderByName?: string;
	orderByType?: 'ASC'|'DESC';
	page?: number;
	pageSize?: number;
	sourceId?: number;
	sourceIds?: number[];
	supplierCode?: string;
	supplierResourceId?: number;
	supplierResourceIds?: number[];
	supplierTypeId?: number;
	supplierTypeIds?: number[];
	updateTimeEnd?: string;
	updateTimeStart?: string;
}
interface SupplierResourceRepositorySaveReq {
	address?: string;
	area?: string;
	categoryIds?: number[];
	city?: string;
	code?: string;
	dailyCapacity?: number;
	dataSource?: 'SRM'|'XIKEGW';
	designTeamNum?: number;
	director?: string;
	directorPhone?: string;
	employeeNum?: number;
	factoryArea?: number;
	id?: number;
	manageTeamNum?: number;
	materialIds?: number[];
	monthCapacity?: number;
	monthPlateNum?: number;
	operatorId?: string;
	operatorName?: string;
	productStyle?: string;
	province?: string;
	referrerName?: string;
	sourceId?: number;
	supplierFullName?: string;
	supplierResourceRepositoryClientVos?: SupplierResourceRepositoryClientSaveReq[];
	supplierTypeId?: number;
}
interface SupplierResourceRepositoryVo {
	categoryId?: string;
	categoryNameStr?: string;
	code?: string;
	createTime?: string;
	createUid?: string;
	createUname?: string;
	dailyCapacity?: number;
	director?: string;
	directorPhone?: string;
	id?: number;
	mainMaterialTypeId?: string;
	materialNameStr?: string;
	monthCapacity?: number;
	sourceId?: number;
	sourceName?: string;
	supplierFullName?: string;
	supplierTypeId?: number;
	supplierTypeName?: string;
	updateTime?: string;
}
interface SupplierScoreAddReq {
	deliveryQcScore?: number;
	operatorId?: string;
	operatorName?: string;
	orderShipScore?: number;
	period?: string;
	supplierId?: number;
}
interface SupplierScoreModifyReq {
	id?: number;
	operatorId?: string;
	operatorName?: string;
	remark?: string;
	score?: number;
}
interface SupplierScoreRecalculateQuerySupplierReq {
	categoryId?: number;
	clothId?: number;
	levelId?: number;
	periodTimeEnd?: string;
	periodTimeStart?: string;
	supplierId?: number;
}
interface SupplierScoreRecalculateQuerySupplierVo {
	deliveryQcScore?: number;
	id?: number;
	level?: string;
	matchScore?: number;
	orderShipScore?: number;
	period?: string;
	supplier?: string;
	supplierCode?: string;
	supplierId?: number;
	totalScore?: number;
}
interface SupplierScoreRecalculateReq {
	ids?: number[];
	operatorId?: string;
	operatorName?: string;
	recalculateReason?: string;
}
interface SupplierScoreRejectReq {
	id?: number;
	operatorId?: string;
	operatorName?: string;
	rejectReason?: string;
}
interface SupplierScoreSubmitReq {
	event?: 'SUBMIT_PRODUCTION_SCORE'|'SUBMIT_MANAGE_SCORE'|'SUBMIT_MAN_SCORE'|'REJECT_MAN_SCORE'|'CHANGE_MAN_SCORE'|'ADD'|'IMPORT_ADD';
	idList?: number[];
	operatorId?: string;
	operatorName?: string;
}
interface SupplierVo {
	address?: string;
	area?: string;
	avgScore?: number;
	categoryId?: string;
	categoryName?: string;
	city?: string;
	createTime?: string;
	id?: number;
	materialTypeId?: string;
	materialTypeName?: string;
	natureId?: number;
	province?: string;
	reportProductionCapacity?: number;
	source?: string;
	sourceId?: number;
	supplierAddress?: string;
	supplierCode?: string;
	supplierFullName?: string;
	supplierLevel?: string;
	supplierLevelId?: number;
	supplierMainTypeId?: number;
	supplierMainTypeName?: string;
	supplierMerchandiserCn?: string;
	supplierName?: string;
	supplierNatureName?: string;
	supplierStatus?: string;
	supplierStatusId?: number;
	supplierTypeId?: number;
	supplierTypeName?: string;
	updateTime?: string;
}
interface SysAccessoriesVo {
	absolutelyUrl?: string;
	bizId?: number;
	fileName?: string;
	id?: number;
	operatorId?: string;
	operatorName?: string;
	relativeUrl?: string;
	userId?: string;
	userName?: string;
}
interface SysOperationDictVo {
	bizId?: number;
	category?: string;
	name?: string;
	newValue?: string;
	oldValue?: string;
	operateTime?: string;
	operator?: string;
	reason?: string;
}
interface SysOperationScoreVo {
	bizId?: number;
	changeDesc?: string;
	operateTime?: string;
	operation?: string;
	operator?: string;
	reason?: string;
}
interface SysOperationSupplierCancelVo {
	bizId?: number;
	operate?: string;
	operateTime?: string;
	operation?: string;
	operator?: string;
	operatorId?: string;
	operatorType?: 'CREATE'|'DELETE'|'UPDATE'|'QUERY'|'AGREE'|'REJECT';
}
interface SysOperationSupplierRectifyVo {
	bizId?: number;
	operate?: string;
	operateTime?: string;
	operation?: string;
	operator?: string;
	operatorId?: string;
	operatorType?: 'CREATE'|'DELETE'|'UPDATE'|'QUERY'|'AGREE'|'REJECT';
}
interface TerminateFlowReq {
	id?: number;
	page?: number;
	pageSize?: number;
	terminateReason?: string;
}
interface URI {
	absolute?: boolean;
	authority?: string;
	fragment?: string;
	host?: string;
	opaque?: boolean;
	path?: string;
	port?: number;
	query?: string;
	rawAuthority?: string;
	rawFragment?: string;
	rawPath?: string;
	rawQuery?: string;
	rawSchemeSpecificPart?: string;
	rawUserInfo?: string;
	scheme?: string;
	schemeSpecificPart?: string;
	string?: string;
	userInfo?: string;
}
interface URL {
	authority?: string;
	content?: object;
	defaultPort?: number;
	deserializedFields?: URLStreamHandler;
	file?: string;
	hashCode?: number;
	host?: string;
	path?: string;
	port?: number;
	protocol?: string;
	query?: string;
	ref?: string;
	serializedHashCode?: number;
	userInfo?: string;
}
interface URLStreamHandler {
	defaultPort?: number;
}
interface UpdateCapacityPlanReq {
	id?: number;
	operatorId?: string;
	operatorName?: string;
	planProductionCapacity?: number;
	updateReason?: string;
}
interface WebShopDto {
	dockingPeopleAddress?: string;
	id?: number;
	isDefault?: number;
	isEnable?: number;
	onlineSupplierTypeCode?: string;
	onlineSupplierTypeId?: number;
	onlineSupplierTypeName?: string;
	remark?: string;
	shopId?: number;
	shopName?: string;
	shopWebsite?: string;
	wangwang?: string;
}
interface 用户信息 {
	account?: string;
	avatar?: string;
	email?: string;
	id?: number;
	name?: string;
	permissions?: string[];
}
}
