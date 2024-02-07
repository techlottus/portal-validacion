"use client";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
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
  const searchParams = useSearchParams();
  const searchId = searchParams.get("id");
  console.log("hola " + searchId);
  const [folio, setFolio] = useState(searchId);
  const [submitClicked, setSubmitClicked] = useState(false);
  const { handleSubmit } = useForm();
  const onSubmit = () => {
    setSubmitClicked(true);
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
              width: "auto",
              height: "60vh",
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
              <Image src={search} alt="search" height={35} width={35} />
              <input
                class="appearance-none block bg-white-200 text-black-700 border border-blue-700 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                type="text"
                value={folio}
                readonly="readonly"
                onChange={(e) => setFolio(e.target.value)}
              />
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Buscar
              </button>
            </div>
          </div>
        </form>
        <div>{submitClicked && <Table />}</div>
      </div>
    </main>
  );
}

export default Page;
