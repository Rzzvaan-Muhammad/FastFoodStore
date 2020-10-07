import cacheUtils from "../utils/loginUtils";

// const loginResponse = {
//   Token:
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InNhbGFtIiwicm9sZSI6IkFkbWluIiwidXNlcl9pZCI6IjQiLCJuYmYiOjE1NzYzMTY5MzYsImV4cCI6MTU3NjMyNDEzNiwiaWF0IjoxNTc2MzE2OTM2fQ.376o-jOK5ORO3_Xp-8oXObRuL4y-rYeXBK2hCk91wQc",
//   UserInfo: {
//     DUserAccesses: [],
//     DUserRoles: [],
//     Id: 9,
//     UserId: "salam",
//     CustomerIdFK: 4,
//     Password: "cGFzcw==",
//     BaseUri: "",
//     Icon: "Icon- "
//   },
//   UserApps: [
//     {
//       AppCategoryName: null,
//       AppCategoryMenuTitle: null,
//       AppCategoryMenuIcon: null,
//       AppId: "Client Manager",
//       AppName: "Client Manager",
//       AppMenuTitle: "Client Manager",
//       AppMenuURI: null,
//       AppMenuIcon: null
//     },
//     {
//       AppCategoryName: null,
//       AppCategoryMenuTitle: null,
//       AppCategoryMenuIcon: null,
//       AppId: "Task Manager",
//       AppName: "Task Manager",
//       AppMenuTitle: "Task Manager",
//       AppMenuURI: null,
//       AppMenuIcon: null
//     },
//     {
//       AppCategoryName: null,
//       AppCategoryMenuTitle: null,
//       AppCategoryMenuIcon: null,
//       AppId: "User Manager",
//       AppName: "User Manager",
//       AppMenuTitle: "User Manager",
//       AppMenuURI: null,
//       AppMenuIcon: null
//     },
//   {
//       AppCategoryName: null,
//       AppCategoryMenuTitle: null,
//       AppCategoryMenuIcon: null,
//       AppId: "Expense Manager",
//       AppName: "Expense Manager",
//       AppMenuTitle: "Expense Manager",
//       AppMenuURI: null,
//       AppMenuIcon: null
//     }
//   ],
//   ModulesAccess: [
//     {
//       ModuleName: "CustomerAccount",
//       AccessLevel: 1,
//       RoleNameOfferingThisAccess: "ACoopers-SuperUser",
//       SystemIdThatThisRoleBelongTo: "DevUpAccountant"
//     },
//     {
//       ModuleName: "CustomerAccount",
//       AccessLevel: 2,
//       RoleNameOfferingThisAccess: "ACoopers-Guest",
//       SystemIdThatThisRoleBelongTo: "DevUpAccountant"
//     },
//     {
//       ModuleName: "CustomerAccount",
//       AccessLevel: 3,
//       RoleNameOfferingThisAccess: "AIOU-Admin",
//       SystemIdThatThisRoleBelongTo: "DevUpAccountant"
//     },
//     {
//       ModuleName: "CustomerAccountOfficer",
//       AccessLevel: 1,
//       RoleNameOfferingThisAccess: "ACoopers-SuperUser",
//       SystemIdThatThisRoleBelongTo: "DevUpAccountant"
//     },
//     {
//       ModuleName: "CustomerAccountOfficer",
//       AccessLevel: 2,
//       RoleNameOfferingThisAccess: "ACoopers-Guest",
//       SystemIdThatThisRoleBelongTo: "DevUpAccountant"
//     },
//     {
//       ModuleName: "CustomerAccountOfficer",
//       AccessLevel: 3,
//       RoleNameOfferingThisAccess: "AIOU-Admin",
//       SystemIdThatThisRoleBelongTo: "DevUpAccountant"
//     },
//     {
//       ModuleName: "DUTask",
//       AccessLevel: 1,
//       RoleNameOfferingThisAccess: "ACoopers-SuperUser",
//       SystemIdThatThisRoleBelongTo: "DevUpAccountant"
//     },
//     {
//       ModuleName: "DUTask",
//       AccessLevel: 2,
//       RoleNameOfferingThisAccess: "ACoopers-Guest",
//       SystemIdThatThisRoleBelongTo: "DevUpAccountant"
//     },
//     {
//       ModuleName: "DUTask",
//       AccessLevel: 3,
//       RoleNameOfferingThisAccess: "AIOU-Admin",
//       SystemIdThatThisRoleBelongTo: "DevUpAccountant"
//     },
//     {
//       ModuleName: "DUAction",
//       AccessLevel: 1,
//       RoleNameOfferingThisAccess: "ACoopers-SuperUser",
//       SystemIdThatThisRoleBelongTo: "DevUpAccountant"
//     },
//     {
//       ModuleName: "DUAction",
//       AccessLevel: 2,
//       RoleNameOfferingThisAccess: "ACoopers-Guest",
//       SystemIdThatThisRoleBelongTo: "DevUpAccountant"
//     },
//     {
//       ModuleName: "DUAction",
//       AccessLevel: 3,
//       RoleNameOfferingThisAccess: "AIOU-Admin",
//       SystemIdThatThisRoleBelongTo: "DevUpAccountant"
//     },
//     {
//       ModuleName: "DUser",
//       AccessLevel: 5,
//       RoleNameOfferingThisAccess: "ACoopers-SuperUser",
//       SystemIdThatThisRoleBelongTo: "DevUpUtilities"
//     },
//     {
//       ModuleName: "DsUser",
//       AccessLevel: 3,
//       RoleNameOfferingThisAccess: "ACoopers-Guest",
//       SystemIdThatThisRoleBelongTo: "DevUpUtilities"
//     },
//     {
//       ModuleName: "DsUser",
//       AccessLevel: 4,
//       RoleNameOfferingThisAccess: "AIOU-Admin",
//       SystemIdThatThisRoleBelongTo: "DevUpUtilities"
//     },
//     {
//       ModuleName: "DRole",
//       AccessLevel: 5,
//       RoleNameOfferingThisAccess: "ACoopers-SuperUser",
//       SystemIdThatThisRoleBelongTo: "DevUpUtilities"
//     },
//     {
//       ModuleName: "DRole",
//       AccessLevel: 2,
//       RoleNameOfferingThisAccess: "ACoopers-Guest",
//       SystemIdThatThisRoleBelongTo: "DevUpUtilities"
//     },
//     {
//       ModuleName: "DRole",
//       AccessLevel: 3,
//       RoleNameOfferingThisAccess: "AIOU-Admin",
//       SystemIdThatThisRoleBelongTo: "DevUpUtilities"
//     },
//     {
//       ModuleName: "DModule",
//       AccessLevel: 1,
//       RoleNameOfferingThisAccess: "ACoopers-SuperUser",
//       SystemIdThatThisRoleBelongTo: "DevUpUtilities"
//     },
//     {
//       ModuleName: "DModule",
//       AccessLevel: 2,
//       RoleNameOfferingThisAccess: "ACoopers-Guest",
//       SystemIdThatThisRoleBelongTo: "DevUpUtilities"
//     },
//     {
//       ModuleName: "DModule",
//       AccessLevel: 3,
//       RoleNameOfferingThisAccess: "AIOU-Admin",
//       SystemIdThatThisRoleBelongTo: "DevUpUtilities"
//     },
//     {
//       ModuleName: "DModuleRole",
//       AccessLevel: 1,
//       RoleNameOfferingThisAccess: "ACoopers-SuperUser",
//       SystemIdThatThisRoleBelongTo: "DevUpUtilities"
//     },
//     {
//       ModuleName: "DModuleRole",
//       AccessLevel: 2,
//       RoleNameOfferingThisAccess: "ACoopers-Guest",
//       SystemIdThatThisRoleBelongTo: "DevUpUtilities"
//     },
//     {
//       ModuleName: "DModuleRole",
//       AccessLevel: 3,
//       RoleNameOfferingThisAccess: "AIOU-Admin",
//       SystemIdThatThisRoleBelongTo: "DevUpUtilities"
//     },
//     {
//       ModuleName: "DUserRole",
//       AccessLevel: 1,
//       RoleNameOfferingThisAccess: "ACoopers-SuperUser",
//       SystemIdThatThisRoleBelongTo: "DevUpUtilities"
//     },
//     {
//       ModuleName: "DUserRole",
//       AccessLevel: 2,
//       RoleNameOfferingThisAccess: "ACoopers-Guest",
//       SystemIdThatThisRoleBelongTo: "DevUpUtilities"
//     },
//     {
//       ModuleName: "DUserRole",
//       AccessLevel: 3,
//       RoleNameOfferingThisAccess: "AIOU-Admin",
//       SystemIdThatThisRoleBelongTo: "DevUpUtilities"
//     }
//   ]
// };

export function LoginResponse() {
  return cacheUtils.getLoginResponse();
}

export function getUserApps() {
  const apps = LoginResponse().UserApps;
  const appList = apps.map(x => ({
    to: x.AppMenuURI || x.AppId.replace(/\s/g, "").toLowerCase(),
    Name: x.AppName,
    title: x.AppMenuTitle
  }));

  return appList;
}

export function AccessLevelCheck(moduleName) {
  const modules = LoginResponse().ModulesAccess;
  const moduleList = modules.filter(x => x.ModuleName === moduleName);

  if (moduleList === null) throw Error("Module Configuration Missing");

  const accesslevel1 = moduleList.filter(x => x.AccessLevel === 1);
  if (accesslevel1.length > 0) return 1; // SuperAdmin Level Full Access, Can create edit, users, roles, modules , translations, audit, performance logs etc

  const accesslevel2 = moduleList.filter(x => x.AccessLevel === 2);
  if (accesslevel2.length > 0) return 2; // Client Admin CRUD Access, User Role, Modules, Translation etc

  const accesslevel3 = moduleList.filter(x => x.AccessLevel === 3);
  if (accesslevel3.length > 0) return 3; // Read ,Create & Write and Delete Only but No Admin level Access like no User Role, Modules, Translation etc

  const accesslevel4 = moduleList.filter(x => x.AccessLevel === 4);
  if (accesslevel4.length > 0) return 4; // Read , Create and Update But No Delete and no Admin

  const accesslevel5 = moduleList.filter(x => x.AccessLevel === 5);
  if (accesslevel5.length > 0) return 5; // Read Only

  return 0; // No Access
}

export function isMenuItemVisible(moduleName) {
  const modules = LoginResponse().ModulesAccess;
  const moduleList = modules.filter(x => x.ModuleName === moduleName);

  if (moduleList === null || moduleList.length <= 0) {
    return false;
  }
  return true;
}
