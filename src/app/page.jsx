"use client";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import search from "/src/search.png";
import backgrImage from "/src/technology.png";
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
      <div className="py-4 h-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative w-full h-full">
            <div
              className=" w-full h-[230px] mobile:h-[320px] bg-cover"
              style={{
                backgroundImage: `url("https://bedu-staging-assets.s3.us-west-2.amazonaws.com/UTEG/banners_validacion_documentos_7ceb4bf575.jpg")`,
                backgroundPosition: "center",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className=" absolute w-full h-full top-0 ">
              <div className="w-full h-full flex align-middle justify-center">
                <div className="flex mobile:flex-col mobile:space-y-2 align-middle items-center justify-center">
                  <div className="flex  w-[660px] mobile:w-full bg-neutral-100  px-6 py-4 mobile:py-2 mobile:px-2 space-x-4 mobile:space-x-0 rounded shadow h-fit">
                    <div className="flex items-center mobile:hidden">
                    <span class="material-icons w-6 h-6 text-xl text-surface-400">
                      search
                    </span>
                    </div>
                    <div className="border-r mobile:border-none grow border-neutral-300">
                      <input
                        className="appearance-none grow  bg-neutral-100 font-texts text-neutral-900 rounded py-2 px-4 leading-tight text-lg mobile:text-md focus:outline-none focus:bg-white"
                        type="text"
                        placeholder="Introduzca el folio"
                        value={folio}
                        readOnly="readonly"
                        onChange={(e) => setFolio(e.target.value)}
                      />
                    </div>
                    <button
                      className="text-surface-900 font-bold font-texts py-2 px-4 rounded mobile:hidden"
                      type="submit"
                    >
                      Buscar
                    </button>
                  </div>
                  <div className="hidden mobile:flex w-full">
                    <button
                      className="text-neutral-100 font-bold bg-neutral-900 font-texts py-2 px-4 rounded w-full"
                      type="submit"
                    >
                      Buscar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div>{submitClicked && <Table />}</div>
        <div className="mt-4 border-t border-t-neutral-300 border-b-8 border-b-primary-500 h-auto">
          <div className="p-6 cursor-pointer  border-solid border-surface-200 mobile:border-0 border-r flex mobile:flex-col mobile:space-y-2 justify-center align-middle space-x-2 items-center">
            <div className="w-36 h-9  mobile:mx-24 bg-[url('https://bedu-staging-assets.s3.us-west-2.amazonaws.com/UTEG/logotipo_38c0857c20.svg')] bg-cover bg-center">
              {" "}
            </div>
            <div className="font-texts text-sm">
              <p>©2021 Derechos reservados Lottus.</p>
            </div>
            <div className="font-texts text-sm">
              <p>Aviso de privacidad y Términos y condiciones</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
