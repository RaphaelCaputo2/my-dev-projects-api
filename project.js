const fs = require('fs').promises;

const PATH_FILE = './my-projects.json';
const REQUIRED_PROPERTIES = ['id','modulo','bloco','nome','repositorio','resultado'];
const readContentFile = async (path) => {
  try {
    const content = await fs.readFile(path, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    return null;
  }
};

const writeContentFile = async (path, content) => {
  try {
    await fs.writeFile(path, JSON.stringify(content));
    return content;
  } catch (error) {
    return null;
  }
};

const findAll = async () => await readContentFile(PATH_FILE);

const findById = async (id) => { 
  const myProjects = await readContentFile(PATH_FILE);
  if (myProjects === null) return null;
  return myProjects.find( curr => curr.id === id );
  
};

const findByTerm = async (term, value) => { 
  const myProjects = await readContentFile(PATH_FILE);
  if (myProjects === null || !REQUIRED_PROPERTIES.includes(term)) return null;
  return myProjects.filter( curr => curr[term] === value );
  
};
const addProject = async (project) => {
  const myProjects = await readContentFile(PATH_FILE);
  if (myProjects === null || !isProjectHasAllRequiredProps(project)) return null;
  const newProject = {
    ...project,
    id: myProjects.length + 1,
  };

  myProjects.push(newProject);
  await fs.writeFile(PATH_FILE, JSON.stringify(myProjects));
  return newProject;
};

const delProject = async (id) => {
  const myProjects = await readContentFile(PATH_FILE);
  if (myProjects === null) return null;
  const deletedProject = myProjects.find( curr => curr.id === id );
  if (deletedProject) {
    const myProjectsUpdated = myProjects.filter( curr => curr.id !== id );
    await writeContentFile(PATH_FILE, myProjectsUpdated);
    return deletedProject;
  }
  return null;
};

const editProject = async (project) => {
  const myProjects = await readContentFile(PATH_FILE);
  if (myProjects === null || !isProjectHasAllRequiredProps(project)) return null;
  const indexProject = myProjects.findIndex(({ id }) => id === project.id);
  if (indexProject >= 0) {
    myProjects[indexProject] = project;
    await writeContentFile(PATH_FILE, myProjects);
    return project;
  } 
  return null
};

const isProjectHasAllRequiredProps = (project) => {
  return REQUIRED_PROPERTIES.every(prop => Object.getOwnPropertyNames(project).includes(prop));
};



module.exports = {
  findAll,
  findById,
  findByTerm,
  addProject,
  delProject,
  editProject
};
