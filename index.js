'use strict';
import { getMunicipalityDepartment, getDepartment, getMunicipality, showDepartments, showMunicipalities, showMunicipalitiesByDepartment } from './GeoInfo.js';

const letras = "ABCDEFGHJKLMNPQRSTUVWXY"
/* Validate birth date in ID */
function validateDate(code) {
  const day = parseInt(code.substr(3, 2), 10);
  const month = parseInt(code.substr(5, 2), 10);

  if (month < 1 || month > 12) return false;

  const daysPerMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return day >= 1 && day <= daysPerMonth[month - 1];
}

/* Validate control letter */
function validateLetter(id) {
  const code = id.replace(/-/g, '');
  const idLetter = code.slice(-1);
  const number = parseInt(code.slice(0, -1), 10);

  const index = number % 23;
  return letras[index] === idLetter;
}

/* Validate full ID */
function validateId(id) {
  const regex = /^[0-9]{13}[A-Za-z]$/;
  const code = id.replace(/-/g, '');

  if (!regex.test(code)) return false;
  if (!validateDate(code)) return false;

  return validateLetter(code, letras);
}

/* Generate control letter from 13 digits */
function generateLetter(numericId) {
    const code = numericId.replace(/-/g, '');
  
    if (!/^[0-9]{13}$/.test(code)) {
      throw new Error("ID must contain exactly 13 numeric digits");
    }
  
    const number = parseInt(code, 10);
    const index = number % 23;
    return letras[index];
  }  
  
export {
  validateId,
  validateDate,
  validateLetter,
  getMunicipalityDepartment,
  getDepartment,
  getMunicipality,
  generateLetter,
  showDepartments,
  showMunicipalities,
  showMunicipalitiesByDepartment
};
