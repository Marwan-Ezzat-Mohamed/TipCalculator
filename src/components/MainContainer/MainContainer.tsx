import { PropsWithChildren } from "react";

function MainContainer({ children }: PropsWithChildren<{}>) {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center bg-neutral-200  desktop:pt-0 ">
      {children}
    </main>
  );
}

export default MainContainer;
