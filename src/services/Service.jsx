"use client";

export default async function getAccount() {
  const service = process.env.NEXT_PUBLIC_SERVICE;
  var id;
  if (typeof window !== "undefined") {
    id = new URL(location.href).searchParams.get("id");
  }
  console.log(service + id);
  const rs = [];
  const res = await fetch(`${service}${id}`);
  const data = await res.json();
  const response = Object.values(data);
  console.log(response);
  const idAcc = String(response.map((row) => row.id)).split(",")[0];
  const name = String(response.map((row) => row.studentName)).split(",")[0];
  const school = String(response.map((row) => row.school)).split(",")[0];
  const bannerId = String(response.map((row) => row.enrollmentNumber)).split(
    ","
  )[0];
  const mail = String(response.map((row) => row.email)).split(",")[0];
  const campus = String(response.map((row) => row.campus)).split(",")[0];
  const proName = String(response.map((row) => row.procedureName)).split(
    ","
  )[0];
  const ticket = String(response.map((row) => row.sfTicketNumber)).split(
    ","
  )[0];
  const file = String(response.map((row) => row.file)).split(",")[0];
  const payDate = String(response.map((row) => row.paymentDate)).split(",")[0];
  const expDate = String(response.map((row) => row.expirationDate)).split(
    ","
  )[0];
  rs.push(idAcc);
  rs.push(name);
  rs.push(school);
  rs.push(bannerId);
  rs.push(mail);
  rs.push(campus);
  rs.push(proName);
  rs.push(ticket);
  rs.push(file);
  rs.push(new Date(payDate).toLocaleDateString("es-MX"));
  rs.push(new Date(expDate).toLocaleDateString("es-MX"));
  return rs;
}
