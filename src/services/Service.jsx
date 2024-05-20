"use client";

export default async function getAccount() {
  let searchId;
  var id;
  if (typeof window !== "undefined") {
    searchId = new URL(location.href).searchParams.get("id") || "UTEG";
  }
  if (searchId.includes("UTEG")) {
    id = searchId.slice(0, -4);
  } else {
    id = searchId.slice(0, -3);
  }
  const res = await fetch(
    `https://app-cv-ads-prod.azurewebsites.net/api/v1/procedureValidation/${id}`
  );
  const data = await res.json();
  const response = Object.values(data);
  console.log("RETORNO DE VARIABLES Y CARGA DE TABLA");
  return response;
}
