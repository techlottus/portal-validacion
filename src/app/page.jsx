"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import Table from "/src/utils/UseTable";
import cn from "classnames";
import callAPI from "/src/services/Service";
const result = callAPI();

var id = Promise.resolve(result).then((value) => {
  id = value[0];
});

function Page() {
  const searchParams = useSearchParams();
  var searchId = searchParams.get("id") || "UTEG"
  var idAcc;
  var school;
  if (searchId.includes("UTEG")) {
    idAcc = searchId.slice(0, -4);
    school = searchId.slice(-4);
  } else {
    idAcc = searchId.slice(0, -3);
    school = searchId.slice(-3);
  }
  console.log(idAcc);
  const [folio, setFolio] = useState(idAcc);
  const [submitClicked, setSubmitClicked] = useState(null);
  const { handleSubmit } = useForm();
  const onSubmit = () => {
    setSubmitClicked(true);
  };

  return (
    <main>
      <nav className="shadow-neutral-300 shadow-sm flex mobile:justify-center">
        <div className="p-6 cursor-pointer  border-solid border-surface-200 mobile:border-0 border-r flex mobile:justify-center  mobile:mx-24">
        {school == "ULA" ? (
              <div className="w-36 h-9  mobile:mx-24 bg-[url('https://bedu-staging-assets.s3.us-west-2.amazonaws.com/ULA/ULA_7ebac4d515.png')] bg-cover bg-center">
                {" "}
              </div>
            ) : school == "UTC" ? (
              <div className="w-36 h-9  mobile:mx-24 bg-[url('https://bedu-staging-assets.s3.us-west-2.amazonaws.com/UTC/utc_152x39_d8f67c2a53.svg')] bg-cover bg-center">
                {" "}
              </div>
            ) : (
              <div className="w-36 h-9  mobile:mx-24 bg-[url('https://bedu-staging-assets.s3.us-west-2.amazonaws.com/UTEG/logotipo_38c0857c20.svg')] bg-cover bg-center">
                {" "}
              </div>
            )}
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
                      <span className="material-icons w-6 h-6 text-xl text-surface-400">
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
        <div className="desktop:px-55 tablet:px-6 px-2 py-12">
          {id == folio && submitClicked ? (
            <Table />
          ) : (
            submitClicked && (
              <div
                className={cn("w-full py-6 flex justify-center align-middle ", {
                  ["hidden"]: id == folio,
                })}
              >
                <div className="flex-col">
                  <img
                    className="w-45 h-45"
                    src="https://s3-alpha-sig.figma.com/img/d2ea/0ad1/c9fd6099d765a35cfc4d97d27c2e6758?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bTqzL2YSJB91XtKx~liGHqcKv93xBRY7cWeskZhFNQd5k2t1HMtx0fqFpmgD1QJzb1ABGBcd8ICu3Las0kgQtgb5CamED6Dt1RKyRkGytHv7MiwHpKJ3hLPpViphTSaErVodtDHICwxskpXmshhmWkCOpT4WxrpZ835uaXH5Ho9vCfUGa3FRqJiayB1ts0820oiNE2SZDPe1YXnCdIJH~lR25SZ3113KMkCy-ZfOP2L~WZSIyWWFSPrPwbM18bqqR0tgE72Yu5PhoDNDWB3IxaYp6Zanu6MYC85L9q~4LQsOJ~J8aI62u7QMb0oB3UkzKjNNTJQR2dbbvJibMDbv4A__"
                  />
                  <div className="font-headings py-4 text-lg font-bold text-surface-900 flex justify-center">
                    El folio no existe
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div className="mt-4 border-t border-t-neutral-300 border-b-8 border-b-primary-500 h-auto">
          <div className="p-6 cursor-pointer  border-solid border-surface-200 mobile:border-0 border-r flex mobile:flex-col mobile:space-y-2 justify-center align-middle space-x-2 items-center">
            {school == "ULA" ? (
              <div className="w-36 h-9  mobile:mx-24 bg-[url('https://bedu-staging-assets.s3.us-west-2.amazonaws.com/ULA/ULA_7ebac4d515.png')] bg-cover bg-center">
                {" "}
              </div>
            ) : school == "UTC" ? (
              <div className="w-36 h-9  mobile:mx-24 bg-[url('https://bedu-staging-assets.s3.us-west-2.amazonaws.com/UTC/utc_152x39_d8f67c2a53.svg')] bg-cover bg-center">
                {" "}
              </div>
            ) : (
              <div className="w-36 h-9  mobile:mx-24 bg-[url('https://bedu-staging-assets.s3.us-west-2.amazonaws.com/UTEG/logotipo_38c0857c20.svg')] bg-cover bg-center">
                {" "}
              </div>
            )}
            <div className="font-texts text-sm">
              <p>©2024 Derechos reservados Lottus.</p>
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
