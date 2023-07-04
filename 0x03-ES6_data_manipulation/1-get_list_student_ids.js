/**
 * Retrieves ids from a list of students.
 * students - in getListStudents or any Array
 * @returns
 */

export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
