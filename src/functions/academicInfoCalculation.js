export const cgpaStrokeWidth = (cgpa) => {
  let width = 68.75;
  width = 365 - width * cgpa;
  let strokeValue = width * cgpa;
  if (!cgpa) return 90;
  if (strokeValue < 90) return 90;
  return width;
};

export const creditStrokeWidth = (credit, totalcredit) => {
  let width = (365 - 90) / totalcredit;
  width = 365 - width * credit;
  return width;
};

export const usersSemester = (username) => {
  if (!username) return;
  const date = new Date();
  const year = parseInt(date.getFullYear().toString().slice(-2));
  const currentSem = currentSemester(date.getMonth());
  const batch = parseInt(username.toString().slice(0, 2));
  const startSemester = parseInt(username.toString().slice(2, 3));
  const studentsSem = (year - batch) * 3 + (currentSem - startSemester);
  return studentsSem + 1;
};

export const currentSemester = (month) => {
  if (month <= 4) return 1;
  if (month >= 4 && month <= 8) return 2;
  return 3;
};
