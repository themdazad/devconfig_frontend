import { Divider } from "@nextui-org/react";

export function Footer() {
  return (
    <>
        <Divider/>

      <footer className="text-center py-4">
        <p>DevConfig 2024, @Copyright reserved.</p>
        <p>
          Designed and Developed by{" "}
          <a className="underline underline-offset-4" href="http://www.intagram.com/the_mdazad/">{'Md Azad'}</a>
        </p>
      </footer>
    </>
  );
}
