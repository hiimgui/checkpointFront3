import "./header.scss";
const Header = (params) => {
  return (
    <div>
      <ul className="flex m-3 justify-around font-bold ">
        <a href="/#" className="cursor-pointer">
          <li className="lg:m-2"> GUILHERME KAGUEIAMA PROCOPIO</li>
        </a>
        <a href="#about" className="cursor-pointer">
          <li className="m-3"> ABOUT </li>
        </a>
        <a href="#projetos" className="cursor-pointer">
          <li className="m-3"> PROJECTS </li>
        </a>
        <a href="#contato" className="cursor-pointer">
          <li className="m-3"> CONTACT </li>
        </a>
      </ul>
    </div>
  );
};

export default Header;
