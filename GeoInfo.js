import { municipalities } from './municipalities.js';
import { departments } from './departments.js';

/**
 * Get municipality and department by ID code
 */
export function getMunicipalityDepartment(idCode) {
  const code = idCode.replace(/-/g, '').substr(0, 3);
  return municipalities[code] || { municipality: "Unknown", department: "Unknown" };
}

/**
 * Get department by ID code
 */
export function getDepartment(idCode) {
  const code = idCode.replace(/-/g, '').substr(0, 3);
  return municipalities[code]?.department || "Unknown";
}

/**
 * Get municipality by ID code
 */
export function getMunicipality(idCode) {
  const code = idCode.replace(/-/g, '').substr(0, 3);
  return municipalities[code]?.municipality || "Unknown";
}

/**
 * Show all departments
 */
export function showDepartments() {
  return departments;
}

/**
 * Show all municipalities
 */
export function showMunicipalities() {
  return Object.values(municipalities).map(m => m.municipality);
}

/**
 * Show municipalities by department
 */
export function showMunicipalitiesByDepartment(department) {
  return Object.values(municipalities)
    .filter(m => m.department === department)
    .map(m => m.municipality);
}
