// src/utils/pdfGenerator.js
import { jsPDF } from 'jspdf';

export const generatePDF = async (profile) => {
  const doc = new jsPDF();

  doc.text(`Name: ${profile.name}`, 10, 10);
  doc.text(`Industry: ${profile.industry}`, 10, 20);
  doc.text(`Description: ${profile.description}`, 10, 30);
  doc.text(`Founded: ${profile.foundedYear}`, 10, 40);
  doc.text(`Employees: ${profile.employees}`, 10, 50);
  doc.text(`Website: ${profile.website}`, 10, 60);
  doc.text(`Location: ${profile.location}`, 10, 70);

  return doc.output('blob');
};
