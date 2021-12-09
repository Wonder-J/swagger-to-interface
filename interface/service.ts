import {request} from 'umi'



export const countStateNumUsingGET_3 : () => Promise<API.RespListCountStateNumVo>=()=>
	request('/v1/SupplierGradeChange/countShowStateNum', {
	method: 'GET',
	params: {
	}})
export const createSupplierGradeChangeManuallyUsingPOST : (data: API.SupplierGradeChangeAddReq) => Promise<API.Respstring>=(data)=>
	request('/v1/SupplierGradeChange/createSupplierGradeChangeManually', {
	method: 'POST',
	data: {
	data}})
export const exportSupplierGradeChangeUsingPOST : (data: API.SupplierGradeChangePageQueryReq) => Promise<any>=(data)=>
	request('/v1/SupplierGradeChange/exportSupplierGradeChange', {
	method: 'POST',
	data: {
	data}})
export const productionApprovalUsingPOST_1 : (data: API.IdListDto) => Promise<API.Respstring>=(data)=>
	request('/v1/SupplierGradeChange/productionApproval', {
	method: 'POST',
	data: {
	data}})
export const queryLogsUsingGET_10 : (params: number,params1: number,params2: number) => Promise<API.RespPageSupplierGradeChangeLogVo>=(params,params1,params2)=>
	request('/v1/SupplierGradeChange/queryLogs', {
	method: 'GET',
	params: {
	params,params1,params2}})
export const queryPageUsingPOST_11 : (data: API.SupplierGradeChangePageQueryReq) => Promise<API.RespPageSupplierGradeChangeVo>=(data)=>
	request('/v1/SupplierGradeChange/queryPage', {
	method: 'POST',
	data: {
	data}})
export const rectifyUsingPOST_1 : (data: API.IdListDto) => Promise<API.Respstring>=(data)=>
	request('/v1/SupplierGradeChange/rectify', {
	method: 'POST',
	data: {
	data}})
export const rejectUsingPOST_1 : (data: API.RejectFlowReq) => Promise<API.Respstring>=(data)=>
	request('/v1/SupplierGradeChange/reject', {
	method: 'POST',
	data: {
	data}})
export const supplyManagementApprovalUsingPOST_1 : (data: API.IdListDto) => Promise<API.Respstring>=(data)=>
	request('/v1/SupplierGradeChange/supplyManagementApproval', {
	method: 'POST',
	data: {
	data}})
export const supplyManagementDirectorApprovalUsingPOST_1 : (data: API.IdListDto) => Promise<API.Respstring>=(data)=>
	request('/v1/SupplierGradeChange/supplyManagementDirectorApproval', {
	method: 'POST',
	data: {
	data}})
export const supplyManagementTerminateUsingPOST_1 : (data: API.TerminateFlowReq) => Promise<API.Respstring>=(data)=>
	request('/v1/SupplierGradeChange/supplyManagementTerminate', {
	method: 'POST',
	data: {
	data}})
export const supplyVicePresidentApprovalUsingPOST : (data: API.IdListDto) => Promise<API.Respstring>=(data)=>
	request('/v1/SupplierGradeChange/supplyVicePresidentApproval', {
	method: 'POST',
	data: {
	data}})
export const getPortalLoginUrlUsingGET : (params: string) => Promise<API.Respstring>=(params)=>
	request('/v1/auth/getPortalLoginUrl', {
	method: 'GET',
	params: {
	params}})
export const getAuthUserInfoUsingGET : () => Promise<API.Resp用户信息>=()=>
	request('/v1/auth/getUserInfo', {
	method: 'GET',
	params: {
	}})
export const loginUsingPOST : (data: API.LoginAuthReq) => Promise<API.RespLoginAuthVO>=(data)=>
	request('/v1/auth/login', {
	method: 'POST',
	data: {
	data}})
export const batchUpdateSupplierScoreUsingPOST : (data: API.DictSupplierScoreUpdateReq) => Promise<API.Respstring>=(data)=>
	request('/v1/base-config/batchUpdateSupplierScore', {
	method: 'POST',
	data: {
	data}})
export const queryDictOperationUsingGET : (params: 'SCORE_SUBJECT'|'RANK_COEFFICIENT'|'LEVEL_COEFFICIENT'|'CAPACITY_PLAN') => Promise<API.RespListSysOperationDictVo>=(params)=>
	request('/v1/base-config/queryDictOperation', {
	method: 'GET',
	params: {
	params}})
export const queryProductionCapacityPlanListUsingGET : () => Promise<API.RespListDictProductionCapacityPlanVo>=()=>
	request('/v1/base-config/queryProductionCapacityPlanList', {
	method: 'GET',
	params: {
	}})
export const querySupplierLevelCoefficientListUsingGET : () => Promise<API.RespListDictSupplierLevelCoefficientVo>=()=>
	request('/v1/base-config/querySupplierLevelCoefficientList', {
	method: 'GET',
	params: {
	}})
export const querySupplierRankCoefficientListUsingGET : () => Promise<API.RespListDictSupplierRankCoefficientVo>=()=>
	request('/v1/base-config/querySupplierRankCoefficientList', {
	method: 'GET',
	params: {
	}})
export const querySupplierScoreSubjectListUsingGET : () => Promise<API.RespListDictSupplierScoreSubjectVo>=()=>
	request('/v1/base-config/querySupplierScoreSubjectList', {
	method: 'GET',
	params: {
	}})
export const allUsingGET : () => Promise<API.RespAllCategoryVo>=()=>
	request('/v1/base-dictionary/all', {
	method: 'GET',
	params: {
	}})
export const delDictUsingPOST : (data: API.IdListReq) => Promise<API.Respstring>=(data)=>
	request('/v1/base-dictionary/delDict', {
	method: 'POST',
	data: {
	data}})
export const editDictUsingPOST : (data: API.DictEditReq) => Promise<API.Respstring>=(data)=>
	request('/v1/base-dictionary/editDict', {
	method: 'POST',
	data: {
	data}})
export const fuzzyQueryDictUsingGET : (params: string) => Promise<API.RespListDictVo>=(params)=>
	request('/v1/base-dictionary/fuzzyQueryDict', {
	method: 'GET',
	params: {
	params}})
export const fuzzyQueryPortalUserUsingGET : (params: string) => Promise<API.RespListPortalUserDto>=(params)=>
	request('/v1/base-dictionary/fuzzyQueryPortalUser', {
	method: 'GET',
	params: {
	params}})
export const queryCategoryUsingGET : () => Promise<API.RespListPdmCategoryEnumVo>=()=>
	request('/v1/base-dictionary/queryCategory', {
	method: 'GET',
	params: {
	}})
export const queryCategoryTreeUsingGET : () => Promise<API.RespListCategoryNodeTree>=()=>
	request('/v1/base-dictionary/queryCategoryTree', {
	method: 'GET',
	params: {
	}})
export const queryDictDetailListUsingGET : (params: number) => Promise<API.RespDictCateVo>=(params)=>
	request('/v1/base-dictionary/queryDictDetailList', {
	method: 'GET',
	params: {
	params}})
export const queryDictListUsingPOST : (data: API.DictQueryReq) => Promise<API.RespPageDictCateVo>=(data)=>
	request('/v1/base-dictionary/queryDictList', {
	method: 'POST',
	data: {
	data}})
export const queryProductLineUsingGET : () => Promise<API.RespListPdmProductLineVo>=()=>
	request('/v1/base-dictionary/queryProductLine', {
	method: 'GET',
	params: {
	}})
export const queryProductionCapacityEnumUsingGET : (params: string) => Promise<API.RespListDictsByTypesVo>=(params)=>
	request('/v1/base-dictionary/queryProductionCapacityEnum', {
	method: 'GET',
	params: {
	params}})
export const saveDictUsingPOST : (data: API.DictSaveReq) => Promise<API.Respstring>=(data)=>
	request('/v1/base-dictionary/saveDict', {
	method: 'POST',
	data: {
	data}})
export const downloadExcelTplUsingGET : (params: string) => Promise<any>=(params)=>
	request('/v1/downloadExcel/downloadExcelTpl/{name}', {
	method: 'GET',
	params: {
	params}})
export const fuzzyQuerySupplierUsingGET : (params: number,params1: string) => Promise<API.RespListFuzzyQuerySupplierVo>=(params,params1)=>
	request('/v1/open-api/fuzzyQuerySupplier', {
	method: 'GET',
	params: {
	params,params1}})
export const getSupplierDetailByCodeUsingGET : (params: string) => Promise<API.RespSupplierDto>=(params)=>
	request('/v1/open-api/getSupplierDetailByCode', {
	method: 'GET',
	params: {
	params}})
export const signContractUsingPOST : (data: API.OaSignContractReq) => Promise<API.Respstring>=(data)=>
	request('/v1/open-api/oa/sign-contract', {
	method: 'POST',
	data: {
	data}})
export const saveOnlineSupplierUsingPOST : (data: API.SaveOnlineSupplierDto) => Promise<API.RespSupplierDto>=(data)=>
	request('/v1/open-api/saveOnlineSupplier', {
	method: 'POST',
	data: {
	data}})
export const saveSupplierResourceRepositoryUsingPOST : (data: API.SaveSupplierResourceRepositoryDto) => Promise<API.RespSaveSupplierResourceRepositoryVo>=(data)=>
	request('/v1/open-api/saveSupplierResourceRepository', {
	method: 'POST',
	data: {
	data}})
export const deleteFilesUsingPOST : (data: string[]) => Promise<API.Respboolean>=(data)=>
	request('/v1/oss/deleteFiles', {
	method: 'POST',
	data: {
	data}})
export const batchUploadFileUsingPOST : (data: API.File[]) => Promise<API.RespListstring>=(data)=>
	request('/v1/oss/files', {
	method: 'POST',
	data: {
	data}})
export const uploadFilesUsingPOST : (data: API.File[]) => Promise<API.RespListSysAccessoriesVo>=(data)=>
	request('/v1/oss/uploadFiles', {
	method: 'POST',
	data: {
	data}})
export const exportScoreUsingPOST : (data: API.ProductionSupplierScoreReq) => Promise<any>=(data)=>
	request('/v1/production-supplier-score-excel/exportScore', {
	method: 'POST',
	data: {
	data}})
export const exportScoreMainUsingPOST : (data: API.ProductionSupplierScoreMainReq) => Promise<any>=(data)=>
	request('/v1/production-supplier-score-excel/exportScoreMain', {
	method: 'POST',
	data: {
	data}})
export const exportScoreTemplateUsingPOST : (data: API.ProductionSupplierScoreTemplateReq) => Promise<any>=(data)=>
	request('/v1/production-supplier-score-excel/exportScoreTemplate', {
	method: 'POST',
	data: {
	data}})
export const importScoreUsingPOST : (data: API.File,data1: 'PRODUCTION'|'MANAGE'|'MAN') => Promise<API.RespImportResultVo>=(data,data1)=>
	request('/v1/production-supplier-score-excel/importScore', {
	method: 'POST',
	data: {
	data,data1}})
export const recalculateExportScoreUsingPOST : (data: API.ProductionSupplierScoreRecalculateReq) => Promise<any>=(data)=>
	request('/v1/production-supplier-score-excel/recalculateExportScore', {
	method: 'POST',
	data: {
	data}})
export const queryScoreHistoryUsingGET : (params: number,params1: 'SCORE'|'RANK') => Promise<API.RespListProductionSupplierScoreHistoryVo>=(params,params1)=>
	request('/v1/production-supplier-score-main/queryScoreHistory', {
	method: 'GET',
	params: {
	params,params1}})
export const queryScoreMainCountUsingPOST : () => Promise<API.RespProductionSupplierScoreMainCountVo>=()=>
	request('/v1/production-supplier-score-main/queryScoreMainCount', {
	method: 'POST',
	data: {
	}})
export const queryScoreMainPageUsingPOST : (data: API.ProductionSupplierScoreMainReq) => Promise<API.RespPageProductionSupplierScoreMainVo>=(data)=>
	request('/v1/production-supplier-score-main/queryScoreMainPage', {
	method: 'POST',
	data: {
	data}})
export const applicationUsingPOST_1 : () => Promise<API.Respstring>=()=>
	request('/v1/production-supplier-score-recalculate/application', {
	method: 'POST',
	data: {
	}})
export const queryPageUsingPOST_4 : (data: API.ProductionSupplierScoreRecalculateReq) => Promise<API.RespPageProductionSupplierScoreRecalculateVo>=(data)=>
	request('/v1/production-supplier-score-recalculate/queryPage', {
	method: 'POST',
	data: {
	data}})
export const queryScoreHistoryUsingGET_1 : (params: number) => Promise<API.RespListProductionSupplierScoreHistoryVo>=(params)=>
	request('/v1/production-supplier-score-recalculate/queryScoreHistory', {
	method: 'GET',
	params: {
	params}})
export const querySupplierUsingPOST : (data: API.SupplierScoreRecalculateQuerySupplierReq) => Promise<API.RespListSupplierScoreRecalculateQuerySupplierVo>=(data)=>
	request('/v1/production-supplier-score-recalculate/querySupplier', {
	method: 'POST',
	data: {
	data}})
export const recalculateUsingPOST_1 : (data: API.SupplierScoreRecalculateReq) => Promise<API.Respstring>=(data)=>
	request('/v1/production-supplier-score-recalculate/recalculate', {
	method: 'POST',
	data: {
	data}})
export const addScoreUsingPOST : (data: API.SupplierScoreAddReq) => Promise<API.Respstring>=(data)=>
	request('/v1/production-supplier-score/addScore', {
	method: 'POST',
	data: {
	data}})
export const batchSubmitScoreUsingPOST : (data: API.SupplierScoreSubmitReq) => Promise<API.Respstring>=(data)=>
	request('/v1/production-supplier-score/batchSubmitScore', {
	method: 'POST',
	data: {
	data}})
export const modifyScoreUsingPOST : (data: API.SupplierScoreModifyReq) => Promise<API.Respstring>=(data)=>
	request('/v1/production-supplier-score/modifyScore', {
	method: 'POST',
	data: {
	data}})
export const queryScoreCountUsingPOST : () => Promise<API.RespProductionSupplierScoreCountVo>=()=>
	request('/v1/production-supplier-score/queryScoreCount', {
	method: 'POST',
	data: {
	}})
export const queryScorePageUsingPOST : (data: API.ProductionSupplierScoreReq) => Promise<API.RespPageProductionSupplierScoreVo>=(data)=>
	request('/v1/production-supplier-score/queryScorePage', {
	method: 'POST',
	data: {
	data}})
export const rejectScoreUsingPOST : (data: API.SupplierScoreRejectReq) => Promise<API.Respstring>=(data)=>
	request('/v1/production-supplier-score/rejectScore', {
	method: 'POST',
	data: {
	data}})
export const calculateDistributeCapacityUsingGET : () => Promise<any>=()=>
	request('/v1/productionCapacityDistribute/calculateDistributeCapacity', {
	method: 'GET',
	params: {
	}})
export const queryLogsUsingGET : (params: number) => Promise<API.RespCapacityDistributeLogVo>=(params)=>
	request('/v1/productionCapacityDistribute/queryLogs', {
	method: 'GET',
	params: {
	params}})
export const queryPageUsingPOST : (data: API.ProductionCapacityDistributeReq) => Promise<API.RespPageProductionCapacityDistributeVo>=(data)=>
	request('/v1/productionCapacityDistribute/queryPage', {
	method: 'POST',
	data: {
	data}})
export const applicationUsingPOST : () => Promise<API.Respstring>=()=>
	request('/v1/productionCapacityDistributeRecalculate/application', {
	method: 'POST',
	data: {
	}})
export const queryLogsUsingGET_1 : (params: number,params1: number) => Promise<API.RespCapacityDistributeRecalculateLogVo>=(params,params1)=>
	request('/v1/productionCapacityDistributeRecalculate/queryLogs', {
	method: 'GET',
	params: {
	params,params1}})
export const queryPageUsingPOST_1 : (data: API.ProductionCapacityDistributeRecalculateReq) => Promise<API.RespPageProductionCapacityDistributeRecalculateVo>=(data)=>
	request('/v1/productionCapacityDistributeRecalculate/queryPage', {
	method: 'POST',
	data: {
	data}})
export const recalculateUsingPOST : (data: API.CapacityDistributeRecalculateReq) => Promise<API.Respstring>=(data)=>
	request('/v1/productionCapacityDistributeRecalculate/recalculate', {
	method: 'POST',
	data: {
	data}})
export const exportProductionCapacityDistributeUsingPOST : (data: API.ProductionCapacityDistributeReq) => Promise<any>=(data)=>
	request('/v1/productionCapacityExport/exportProductionCapacityDistribute', {
	method: 'POST',
	data: {
	data}})
export const exportProductionCapacityPlanUsingPOST : (data: API.ProductionCapacityDistributeRecalculateReq) => Promise<any>=(data)=>
	request('/v1/productionCapacityExport/exportProductionCapacityDistributeRecalculate', {
	method: 'POST',
	data: {
	data}})
export const exportProductionCapacityPlanUsingPOST_1 : (data: API.ProductionCapacityPlanReq) => Promise<any>=(data)=>
	request('/v1/productionCapacityExport/exportProductionCapacityPlan', {
	method: 'POST',
	data: {
	data}})
export const exportProductionCapacitySupplierUsingPOST : (data: API.ProductionCapacitySupplierReportReq) => Promise<any>=(data)=>
	request('/v1/productionCapacityExport/exportProductionCapacitySupplier', {
	method: 'POST',
	data: {
	data}})
export const productionCapacityPlanUsingPOST : (data: API.File) => Promise<API.RespImportResultVo>=(data)=>
	request('/v1/productionCapacityImport/importCapacityPlan', {
	method: 'POST',
	data: {
	data}})
export const changeStateUsingPOST : (data: API.CapacityPlanChangeStateReq) => Promise<API.Respstring>=(data)=>
	request('/v1/productionCapacityPlan/changeState', {
	method: 'POST',
	data: {
	data}})
export const countShowStateNumUsingGET : () => Promise<API.RespListCountStateNumVo>=()=>
	request('/v1/productionCapacityPlan/countShowStateNum', {
	method: 'GET',
	params: {
	}})
export const queryLogsUsingGET_2 : (params: number) => Promise<API.RespCapacityPlanLogVo>=(params)=>
	request('/v1/productionCapacityPlan/queryLogs', {
	method: 'GET',
	params: {
	params}})
export const queryPageUsingPOST_2 : (data: API.ProductionCapacityPlanReq) => Promise<API.RespPageProductionCapacityPlanVo>=(data)=>
	request('/v1/productionCapacityPlan/queryPage', {
	method: 'POST',
	data: {
	data}})
export const saveUsingPOST : (data: API.SaveCapacityPlanReq) => Promise<API.Respstring>=(data)=>
	request('/v1/productionCapacityPlan/save', {
	method: 'POST',
	data: {
	data}})
export const updateUsingPOST : (data: API.UpdateCapacityPlanReq) => Promise<API.Respstring>=(data)=>
	request('/v1/productionCapacityPlan/update', {
	method: 'POST',
	data: {
	data}})
export const changeStateUsingPOST_1 : (data: API.CapacitySupplierReportChangeStateReq) => Promise<API.Respstring>=(data)=>
	request('/v1/productionCapacitySupplierReport/changeState', {
	method: 'POST',
	data: {
	data}})
export const countShowStateNumUsingGET_1 : (params: number) => Promise<API.RespListCountStateNumVo>=(params)=>
	request('/v1/productionCapacitySupplierReport/countShowStateNum', {
	method: 'GET',
	params: {
	params}})
export const queryHistoryUsingGET : (params: string,params1: number) => Promise<API.RespSupplierReportHistoryVo>=(params,params1)=>
	request('/v1/productionCapacitySupplierReport/queryHistory', {
	method: 'GET',
	params: {
	params,params1}})
export const queryLogsUsingGET_3 : (params: number) => Promise<API.RespCapacitySupplierLogVo>=(params)=>
	request('/v1/productionCapacitySupplierReport/queryLogs', {
	method: 'GET',
	params: {
	params}})
export const queryPageUsingPOST_3 : (data: API.ProductionCapacitySupplierReportReq) => Promise<API.RespPageProductionCapacitySupplierReportVo>=(data)=>
	request('/v1/productionCapacitySupplierReport/queryPage', {
	method: 'POST',
	data: {
	data}})
export const saveUsingPOST_1 : (data: API.CapacitySupplierReportSaveReq) => Promise<API.Respstring>=(data)=>
	request('/v1/productionCapacitySupplierReport/save', {
	method: 'POST',
	data: {
	data}})
export const updateUsingPOST_1 : (data: API.CapacitySupplierReportUpdateReq) => Promise<API.Respstring>=(data)=>
	request('/v1/productionCapacitySupplierReport/update', {
	method: 'POST',
	data: {
	data}})
export const changeSupplierAccessStateUsingPOST : (data: API.SupplierAccessStateReq) => Promise<API.Respstring>=(data)=>
	request('/v1/supplier-access/changeSupplierAccessState', {
	method: 'POST',
	data: {
	data}})
export const countStateNumUsingGET : () => Promise<API.RespListCountStateNumVo>=()=>
	request('/v1/supplier-access/countShowStateNum', {
	method: 'GET',
	params: {
	}})
export const exportSupplierAccessUsingPOST : (data: API.SupplierAccessReq) => Promise<any>=(data)=>
	request('/v1/supplier-access/exportSupplierAccess', {
	method: 'POST',
	data: {
	data}})
export const queryLogsUsingGET_4 : (params: number,params1: number,params2: number) => Promise<API.RespPageSupplierAccessLogVo>=(params,params1,params2)=>
	request('/v1/supplier-access/queryLogs', {
	method: 'GET',
	params: {
	params,params1,params2}})
export const queryPageUsingPOST_5 : (data: API.SupplierAccessReq) => Promise<API.RespPageSupplierAccessVo>=(data)=>
	request('/v1/supplier-access/queryPage', {
	method: 'POST',
	data: {
	data}})
export const changeCheckFactoryStateUsingPOST : (data: API.SupplierCheckFactoryDetailStateReq) => Promise<API.Respstring>=(data)=>
	request('/v1/supplier-check-factory-detail/changeCheckFactoryDetailState', {
	method: 'POST',
	data: {
	data}})
export const countStateNumUsingGET_1 : (params: string) => Promise<API.RespListCountStateNumVo>=(params)=>
	request('/v1/supplier-check-factory-detail/countShowStateNum', {
	method: 'GET',
	params: {
	params}})
export const exportSupplierCheckFactoryDetailUsingPOST : (data: API.SupplierCheckFactoryDetailReq) => Promise<any>=(data)=>
	request('/v1/supplier-check-factory-detail/exportSupplierCheckFactoryDetail', {
	method: 'POST',
	data: {
	data}})
export const getDetailUsingGET_1 : (params: number) => Promise<API.RespSupplierCheckFactoryReportVo>=(params)=>
	request('/v1/supplier-check-factory-detail/getDetail', {
	method: 'GET',
	params: {
	params}})
export const queryLogsUsingGET_8 : (params: number,params1: number,params2: number) => Promise<API.RespPageSupplierCheckFactoryDetailLogVo>=(params,params1,params2)=>
	request('/v1/supplier-check-factory-detail/queryLogs', {
	method: 'GET',
	params: {
	params,params1,params2}})
export const queryPageUsingPOST_9 : (data: API.SupplierCheckFactoryDetailReq) => Promise<API.RespPageSupplierCheckFactoryDetailVo>=(data)=>
	request('/v1/supplier-check-factory-detail/queryPage', {
	method: 'POST',
	data: {
	data}})
export const updateUsingPOST_2 : (data: API.SupplierCheckFactoryDetailUpdateReq) => Promise<API.Respstring>=(data)=>
	request('/v1/supplier-check-factory-detail/update', {
	method: 'POST',
	data: {
	data}})
export const changeSupplierCheckFactoryStateUsingPOST : (data: API.SupplierCheckFactoryStateReq) => Promise<API.Respstring>=(data)=>
	request('/v1/supplier-check-factory/changeSupplierCheckFactoryState', {
	method: 'POST',
	data: {
	data}})
export const countShowStateNumUsingGET_3 : () => Promise<API.RespListCountStateNumVo>=()=>
	request('/v1/supplier-check-factory/countShowStateNum', {
	method: 'GET',
	params: {
	}})
export const exportSupplierCheckFactoryUsingPOST : (data: API.SupplierCheckFactoryReq) => Promise<any>=(data)=>
	request('/v1/supplier-check-factory/exportSupplierCheckFactory', {
	method: 'POST',
	data: {
	data}})
export const queryLogsUsingGET_7 : (params: number,params1: number,params2: number) => Promise<API.RespPageSupplierCheckFactoryLogVo>=(params,params1,params2)=>
	request('/v1/supplier-check-factory/queryLogs', {
	method: 'GET',
	params: {
	params,params1,params2}})
export const queryPageUsingPOST_8 : (data: API.SupplierCheckFactoryReq) => Promise<API.RespPageSupplierCheckFactoryVo>=(data)=>
	request('/v1/supplier-check-factory/queryPage', {
	method: 'POST',
	data: {
	data}})
export const changeSupplierDevelopmentStateUsingPOST : (data: API.SupplierDevelopmentStateReq) => Promise<API.Respstring>=(data)=>
	request('/v1/supplier-development/changeSupplierDevelopmentState', {
	method: 'POST',
	data: {
	data}})
export const countStateNumUsingGET_2 : () => Promise<API.RespListCountStateNumVo>=()=>
	request('/v1/supplier-development/countShowStateNum', {
	method: 'GET',
	params: {
	}})
export const deleteMatchSupplierResourceRepositoryUsingPOST : (data: API.DeleteMatchSupplierResourceRepositoryReq) => Promise<API.Respstring>=(data)=>
	request('/v1/supplier-development/deleteMatchSupplierResourceRepository', {
	method: 'POST',
	data: {
	data}})
export const deleteSupplierDevelopmentUsingPOST : (data: API.IdListReq) => Promise<API.Respstring>=(data)=>
	request('/v1/supplier-development/deleteSupplierDevelopment', {
	method: 'POST',
	data: {
	data}})
export const distributeMerchandiserUsingPOST : (data: API.DistributeMerchandiserReq) => Promise<API.Respstring>=(data)=>
	request('/v1/supplier-development/distributeMerchandiser', {
	method: 'POST',
	data: {
	data}})
export const exportSupplierDevelopmentApplicationUsingPOST : (data: API.SupplierDevelopmentReq) => Promise<any>=(data)=>
	request('/v1/supplier-development/exportSupplierDevelopmentApplication', {
	method: 'POST',
	data: {
	data}})
export const exportSupplierDistributeMerchandiserUsingPOST : (data: API.SupplierDevelopmentReq) => Promise<any>=(data)=>
	request('/v1/supplier-development/exportSupplierDistributeMerchandiser', {
	method: 'POST',
	data: {
	data}})
export const exportSupplierHandleUsingPOST : (data: API.SupplierDevelopmentReq) => Promise<any>=(data)=>
	request('/v1/supplier-development/exportSupplierHandle', {
	method: 'POST',
	data: {
	data}})
export const getDetailUsingGET_2 : (params: number) => Promise<API.RespSupplierDevelopmentDetailVo>=(params)=>
	request('/v1/supplier-development/getDetail', {
	method: 'GET',
	params: {
	params}})
export const matchSupplierUsingPOST : (data: API.MatchSupplierReq) => Promise<API.Respstring>=(data)=>
	request('/v1/supplier-development/matchSupplier', {
	method: 'POST',
	data: {
	data}})
export const queryLogsUsingGET_9 : (params: number,params1: number,params2: number) => Promise<API.RespPageSupplierDevelopmentLogVo>=(params,params1,params2)=>
	request('/v1/supplier-development/queryLogs', {
	method: 'GET',
	params: {
	params,params1,params2}})
export const queryPageUsingPOST_10 : (data: API.SupplierDevelopmentReq) => Promise<API.RespPageSupplierDevelopmentVo>=(data)=>
	request('/v1/supplier-development/queryPage', {
	method: 'POST',
	data: {
	data}})
export const saveOrUpdateUsingPOST_1 : (data: API.SupplierDevelopmentSaveReq) => Promise<API.Respstring>=(data)=>
	request('/v1/supplier-development/saveOrUpdate', {
	method: 'POST',
	data: {
	data}})
export const getShowStateEnumUsingGET : () => Promise<API.RespListBaseDictVo>=()=>
	request('/v1/supplier-development/showStateEnum', {
	method: 'GET',
	params: {
	}})
export const batchDeleteUsingPOST : (data: API.IdListReq) => Promise<API.Respstring>=(data)=>
	request('/v1/supplier-merchandiser/batchDelete', {
	method: 'POST',
	data: {
	data}})
export const exportSupplierConfigTemplateUsingPOST : () => Promise<any>=()=>
	request('/v1/supplier-merchandiser/exportSupplierConfigTemplate', {
	method: 'POST',
	data: {
	}})
export const exportSupplierMerchandiserUsingPOST : (data: API.SupplierMerchandiserReq) => Promise<any>=(data)=>
	request('/v1/supplier-merchandiser/exportSupplierMerchandiser', {
	method: 'POST',
	data: {
	data}})
export const getDetailUsingGET_3 : (params: number) => Promise<API.RespSupplierMerchandiserVo>=(params)=>
	request('/v1/supplier-merchandiser/getDetail', {
	method: 'GET',
	params: {
	params}})
export const importSupplierMerchandiserUsingPOST : (data: API.File) => Promise<API.RespImportResultVo>=(data)=>
	request('/v1/supplier-merchandiser/importSupplierMerchandiser', {
	method: 'POST',
	data: {
	data}})
export const queryLogsUsingGET_11 : (params: number,params1: number) => Promise<API.RespPageSupplierMerchandiserLogVo>=(params,params1)=>
	request('/v1/supplier-merchandiser/queryLogs', {
	method: 'GET',
	params: {
	params,params1}})
export const queryPageUsingPOST_12 : (data: API.SupplierMerchandiserReq) => Promise<API.RespPageSupplierMerchandiserVo>=(data)=>
	request('/v1/supplier-merchandiser/queryPage', {
	method: 'POST',
	data: {
	data}})
export const saveOrUpdateUsingPOST_2 : (data: API.SupplierMerchandiserSaveOrUpdateReqs) => Promise<API.Respstring>=(data)=>
	request('/v1/supplier-merchandiser/saveOrUpdate', {
	method: 'POST',
	data: {
	data}})
export const exportSupplierResourceRepositoryUsingPOST : (data: API.SupplierResourceRepositoryReq) => Promise<any>=(data)=>
	request('/v1/supplier-resource-repository/exportSupplierResourceRepository', {
	method: 'POST',
	data: {
	data}})
export const fuzzyQuerySupplierUsingGET_2 : (params: string) => Promise<API.RespListFuzzyQuerySupplierResourceRepositoryVo>=(params)=>
	request('/v1/supplier-resource-repository/fuzzyQuerySupplier', {
	method: 'GET',
	params: {
	params}})
export const getDetailUsingGET_4 : (params: number) => Promise<API.RespSupplierResourceRepositoryDetailVo>=(params)=>
	request('/v1/supplier-resource-repository/getDetail', {
	method: 'GET',
	params: {
	params}})
export const queryPageUsingPOST_14 : (data: API.SupplierResourceRepositoryReq) => Promise<API.RespPageSupplierResourceRepositoryVo>=(data)=>
	request('/v1/supplier-resource-repository/queryPage', {
	method: 'POST',
	data: {
	data}})
export const saveOrUpdateUsingPOST_3 : (data: API.SupplierResourceRepositorySaveReq) => Promise<API.Respstring>=(data)=>
	request('/v1/supplier-resource-repository/saveOrUpdate', {
	method: 'POST',
	data: {
	data}})
export const exportSupplierUsingPOST : (data: API.SupplierReq) => Promise<any>=(data)=>
	request('/v1/supplier/exportSupplier', {
	method: 'POST',
	data: {
	data}})
export const fuzzyQuerySupplierUsingGET_1 : (params: string) => Promise<API.RespListFuzzyQuerySupplierVo>=(params)=>
	request('/v1/supplier/fuzzyQuerySupplier', {
	method: 'GET',
	params: {
	params}})
export const getDetailUsingGET : (params: number) => Promise<API.RespSupplierDto>=(params)=>
	request('/v1/supplier/getDetail', {
	method: 'GET',
	params: {
	params}})
export const getSupplierByCodeUsingGET : (params: string) => Promise<API.RespFuzzyQuerySupplierVo>=(params)=>
	request('/v1/supplier/getSupplierByCode', {
	method: 'GET',
	params: {
	params}})
export const getSupplierByIdUsingGET : (params: number) => Promise<API.RespFuzzyQuerySupplierVo>=(params)=>
	request('/v1/supplier/getSupplierById', {
	method: 'GET',
	params: {
	params}})
export const listByQueryParamUsingPOST : (data: API.SupplierQueryParamReq) => Promise<API.RespListSupplierVo>=(data)=>
	request('/v1/supplier/listByQueryParam', {
	method: 'POST',
	data: {
	data}})
export const queryAddPageUsingPOST : (data: API.SupplierAddPageQueryReq) => Promise<API.RespPageSupplierVo>=(data)=>
	request('/v1/supplier/queryAddPage', {
	method: 'POST',
	data: {
	data}})
export const queryLogsUsingGET_5 : (params: number,params1: number,params2: number) => Promise<API.RespPageSupplierDetailLogVo>=(params,params1,params2)=>
	request('/v1/supplier/queryLogs', {
	method: 'GET',
	params: {
	params,params1,params2}})
export const queryPageUsingPOST_6 : (data: API.SupplierReq) => Promise<API.RespPageSupplierVo>=(data)=>
	request('/v1/supplier/queryPage', {
	method: 'POST',
	data: {
	data}})
export const saveOrUpdateUsingPOST : (data: API.SupplierDto) => Promise<API.Respstring>=(data)=>
	request('/v1/supplier/saveOrUpdate', {
	method: 'POST',
	data: {
	data}})
export const sendSupplierInfoByManualUsingPOST : (data: API.IdListReq) => Promise<API.Respstring>=(data)=>
	request('/v1/supplier/sendSupplierInfoByManual', {
	method: 'POST',
	data: {
	data}})
export const countShowStateNumUsingGET_2 : () => Promise<API.RespListCountStateNumVo>=()=>
	request('/v1/supplierCancel/countShowStateNum', {
	method: 'GET',
	params: {
	}})
export const createSupplierCancelManuallyUsingPOST : (data: API.SupplierCancelAddReq) => Promise<API.Respstring>=(data)=>
	request('/v1/supplierCancel/createSupplierCancelManually', {
	method: 'POST',
	data: {
	data}})
export const exportSupplierCancelUsingPOST : (data: API.SupplierCancelPageQueryReq) => Promise<any>=(data)=>
	request('/v1/supplierCancel/exportSupplierCancel', {
	method: 'POST',
	data: {
	data}})
export const modifyAndApprovalUsingPOST : (data: API.SupplierCancelModifyReq) => Promise<API.Respstring>=(data)=>
	request('/v1/supplierCancel/modifyAndApproval', {
	method: 'POST',
	data: {
	data}})
export const modifySupplierRectifyUsingPOST : (data: API.SupplierCancelModifyReq) => Promise<API.Respstring>=(data)=>
	request('/v1/supplierCancel/modifySupplierCancel', {
	method: 'POST',
	data: {
	data}})
export const productionApprovalUsingPOST : (data: API.IdListDto) => Promise<API.Respstring>=(data)=>
	request('/v1/supplierCancel/productionApproval', {
	method: 'POST',
	data: {
	data}})
export const queryLogsUsingGET_6 : (params: number,params1: number,params2: number) => Promise<API.RespPageSupplierCancelLogVo>=(params,params1,params2)=>
	request('/v1/supplierCancel/queryLogs', {
	method: 'GET',
	params: {
	params,params1,params2}})
export const queryPageUsingPOST_7 : (data: API.SupplierCancelPageQueryReq) => Promise<API.RespPageSupplierCancelVo>=(data)=>
	request('/v1/supplierCancel/queryPage', {
	method: 'POST',
	data: {
	data}})
export const querySupplierCancelDetailUsingGET : (params: number) => Promise<API.RespSupplierCancelDetailVo>=(params)=>
	request('/v1/supplierCancel/querySupplierCancelDetail', {
	method: 'GET',
	params: {
	params}})
export const rectifyUsingPOST : (data: API.IdListDto) => Promise<API.Respstring>=(data)=>
	request('/v1/supplierCancel/rectify', {
	method: 'POST',
	data: {
	data}})
export const rejectUsingPOST : (data: API.RejectFlowReq) => Promise<API.Respstring>=(data)=>
	request('/v1/supplierCancel/reject', {
	method: 'POST',
	data: {
	data}})
export const supplyChainDirectorApprovalUsingPOST : (data: API.IdListDto) => Promise<API.Respstring>=(data)=>
	request('/v1/supplierCancel/supplyChainDirectorApproval', {
	method: 'POST',
	data: {
	data}})
export const supplyManagementApprovalUsingPOST : (data: API.IdListDto) => Promise<API.Respstring>=(data)=>
	request('/v1/supplierCancel/supplyManagementApproval', {
	method: 'POST',
	data: {
	data}})
export const supplyManagementDirectorApprovalUsingPOST : (data: API.IdListDto) => Promise<API.Respstring>=(data)=>
	request('/v1/supplierCancel/supplyManagementDirectorApproval', {
	method: 'POST',
	data: {
	data}})
export const supplyManagementTerminateUsingPOST : (data: API.TerminateFlowReq) => Promise<API.Respstring>=(data)=>
	request('/v1/supplierCancel/supplyManagementTerminate', {
	method: 'POST',
	data: {
	data}})
export const bactchCreateSupplierRectifyUsingPOST : (data: API.OperationIdListDto) => Promise<API.Respstring>=(data)=>
	request('/v1/supplierRectify/bactchCreateSupplierRectify', {
	method: 'POST',
	data: {
	data}})
export const countStateNumUsingGET_4 : () => Promise<API.RespListCountStateNumVo>=()=>
	request('/v1/supplierRectify/countShowStateNum', {
	method: 'GET',
	params: {
	}})
export const exportSupplierRectifyUsingPOST : (data: API.SupplierRectifyPageQueryReq) => Promise<any>=(data)=>
	request('/v1/supplierRectify/exportSupplierRectify', {
	method: 'POST',
	data: {
	data}})
export const modifyAndApprovalUsingPOST_1 : (data: API.SupplierRectifyModifyReq) => Promise<API.Respstring>=(data)=>
	request('/v1/supplierRectify/modifyAndApproval', {
	method: 'POST',
	data: {
	data}})
export const modifySupplierRectifyUsingPOST_1 : (data: API.SupplierRectifyModifyReq) => Promise<API.Respstring>=(data)=>
	request('/v1/supplierRectify/modifySupplierRectify', {
	method: 'POST',
	data: {
	data}})
export const productionApprovalUsingPOST_2 : (data: API.IdListDto) => Promise<API.Respstring>=(data)=>
	request('/v1/supplierRectify/productionApproval', {
	method: 'POST',
	data: {
	data}})
export const queryLogsUsingGET_12 : (params: number,params1: number,params2: number) => Promise<API.RespPageSupplierRectifyLogVo>=(params,params1,params2)=>
	request('/v1/supplierRectify/queryLogs', {
	method: 'GET',
	params: {
	params,params1,params2}})
export const queryPageUsingPOST_13 : (data: API.SupplierRectifyPageQueryReq) => Promise<API.RespPageSupplierRectifyVo>=(data)=>
	request('/v1/supplierRectify/queryPage', {
	method: 'POST',
	data: {
	data}})
export const querySupplierRectifyDetailUsingGET : (params: number) => Promise<API.RespSupplierRectifyDetailVo>=(params)=>
	request('/v1/supplierRectify/querySupplierRectifyDetail', {
	method: 'GET',
	params: {
	params}})
export const rejectUsingPOST_2 : (data: API.RejectFlowReq) => Promise<API.Respstring>=(data)=>
	request('/v1/supplierRectify/reject', {
	method: 'POST',
	data: {
	data}})
export const supplyManagementApprovalUsingPOST_2 : (data: API.IdListDto) => Promise<API.Respstring>=(data)=>
	request('/v1/supplierRectify/supplyManagementApproval', {
	method: 'POST',
	data: {
	data}})
export const supplyManagementDirectorApprovalUsingPOST_2 : (data: API.IdListDto) => Promise<API.Respstring>=(data)=>
	request('/v1/supplierRectify/supplyManagementDirectorApproval', {
	method: 'POST',
	data: {
	data}})
export const supplyManagementManagerApprovalUsingPOST : (data: API.IdListDto) => Promise<API.Respstring>=(data)=>
	request('/v1/supplierRectify/supplyManagementManagerApproval', {
	method: 'POST',
	data: {
	data}})
export const supplyManagementTerminateUsingPOST_2 : (data: API.TerminateFlowReq) => Promise<API.Respstring>=(data)=>
	request('/v1/supplierRectify/supplyManagementTerminate', {
	method: 'POST',
	data: {
	data}})
export const supplyVicePresidentApprovalUsingPOST_1 : (data: API.IdListDto) => Promise<API.Respstring>=(data)=>
	request('/v1/supplierRectify/supplyVicePresidentApproval', {
	method: 'POST',
	data: {
	data}})
