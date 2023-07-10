import { TipInput } from "../../components/TipInput";
import { TipValue } from "../../components/TipValue";

import Logo from "../../assets/logo.svg";
import { useTipCalculator } from "../../hooks/useTipCalculator";

const Home = () => {
  const { formik, tipResults, resetAll } = useTipCalculator();

  return (
    <div className="flex flex-grow flex-col items-center mobile:pt-10 desktop:mb-[115px]">
      <header className="flex h-36 w-full items-start justify-center ">
        <img src={Logo} alt="logo" draggable={false} />
      </header>
      <section className="grid h-[480px] min-h-desktop !w-full max-w-desktop grid-cols-1 gap-x-14 gap-y-4 rounded-t-3xl bg-white px-8 py-9 desktop:min-h-0  desktop:grid-cols-2  desktop:rounded-3xl desktop:p-8">
        <div>
          <TipInput {...formik} />
        </div>
        <div>
          <TipValue resetAll={resetAll} {...tipResults} />
        </div>
      </section>
    </div>
  );
};

export default Home;
