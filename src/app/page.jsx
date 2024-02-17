"use client";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
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
  const [folio, setFolio] = useState(searchId);
  const [submitClicked, setSubmitClicked] = useState(false);
  const { handleSubmit } = useForm();
  const onSubmit = () => {
    if (id === folio) {
      setSubmitClicked(true);
    }
  };

  return (
    <main>
      <nav className="shadow-neutral-300 shadow-sm flex mobile:justify-center">
        <div className="p-6 cursor-pointer  border-solid border-surface-200 mobile:border-0 border-r flex mobile:justify-center  mobile:mx-24">
          <div className="w-36 h-9  mobile:mx-24 bg-[url('https://bedu-staging-assets.s3.us-west-2.amazonaws.com/UTEG/logotipo_38c0857c20.svg')] bg-cover bg-center">
            {" "}
          </div>
        </div>
      </nav>
      <div className="py-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            style={{
              backgroundImage: `url(${technology.src})`,
              backgroundPosition: "center",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              width: "auto",
              height: "75vh",
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
                className="appearance-none block bg-white-200 text-black-700 border border-blue-700 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                type="text"
                readOnly="readonly"
                onChange={(e) => setFolio(e.target.value)}
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
