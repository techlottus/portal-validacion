"use client";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "/src/logo.png";
import search from "/src/search.png";
import technology from "/src/technology.png";
import Table from "/src/utils/UseTable";
import callAPI from "/src/services/Service";
const result = callAPI();
var id = Promise.resolve(result).then((value) => {
  id = value[0];
});

function Page() {
  const [folio, setFolio] = useState("");
  const [submitClicked, setSubmitClicked] = useState(false);
  const { handleSubmit } = useForm();
  const onSubmit = () => {
    if (folio.trim() === id) {
      setSubmitClicked(true);
      setFolio("");
    } else if (folio.trim() === "") {
      setSubmitClicked(false);
      alert("Necesita ingresar la informacion");
    } else {
      setSubmitClicked(false);
      setFolio("");
      alert("No existe el folio");
    }
  };

  return (
    <main>
      <div>
        <Image src={logo} alt="logo" height={70} width={200} />
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            style={{
              backgroundImage: `url(${technology.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100vw",
              height: "100vh",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <Image src={search} alt="search" height={20} width={20} />
              <div>
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={folio}
                  onChange={(e) => setFolio(e.target.value)}
                />
                <button
                  style={{
                    backgroundColor: "#e7e7e7",
                    color: "black",
                    border: "2px solid black",
                  }}
                  type="submit"
                >
                  Buscar
                </button>
              </div>
            </div>
            <h1 style={{ fontSize: 50, color: "white" }}></h1>
          </div>
        </form>
        <div>{submitClicked && <Table />}</div>
      </div>
    </main>
  );
}

export default Page;
