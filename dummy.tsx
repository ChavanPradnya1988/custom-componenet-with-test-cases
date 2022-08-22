interface Idata {
  label: string;
  value: string;
  desc: string;
}
[];

const data: Array<Idata> = [
  {
    label: "Manual Attendance",
    value: "Manual Attendance",
    desc: "Attendance is nutral by default, should be marked manually",
  },
  {
    label: "Staff Attendance With label",
    value: "Staff Attendance With label",
    desc: "Staff can mark their own attandance. Location will be captured automatically",
  },
  {
    label: "Staff attendance with Selfie & Location",
    value: "Staff attendance with Selfie & Location",
    desc: "Staff can mark their own attendance by selfie. Location will be captured automatically",
  },
];

export default data;
