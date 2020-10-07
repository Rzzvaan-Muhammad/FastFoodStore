// 6- No Access
const noAccess = {
  Read: false,
  Delete: false,
  Edit: false,
  Create: false,
  Audit: false,
  Perf: false,
  Trans: false
};
// 5- Read Only
const readOnly = {
  Read: true
};
// 4- Read , Create and Update But No Delete and no Admin
const readWrite = {
  Read: true,
  Edit: true,
  Create: true
};
// 3- Read ,Create & Write and Delete Only but No Admin level Access like no User Role, Modules, Translation etc
const crudOnly = {
  Read: true,
  Delete: true,
  Edit: true,
  Create: true
};
// 2- Client Admin CRUD Access, User Role, Modules, Translation etc
const clientAdmin = {
  Read: true,
  Delete: true,
  Edit: true,
  Create: true,
  Audit: true
};
// 1- SuperAdmin Level Full Access, Can create edit, users, roles, modules , translations, audit, performance logs etc
const superAdmin = {
  Read: true,
  Delete: true,
  Edit: true,
  Create: true,
  Audit: true,
  Perf: true,
  Trans: true
};
export { superAdmin, clientAdmin, readOnly, crudOnly, noAccess, readWrite };
