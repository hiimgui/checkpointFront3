import email from "../assets/email-svgrepo-com.svg";
import github from "../assets/github-svgrepo-com.svg";
import linkedin from "../assets/linkedin-svgrepo-com.svg";
const Contato = () => {
  return (
    <div className="m-10" id="contato">
      <h6 className="flex justify-center">
        Você pode me contatar pelos seguintes meios:
      </h6>
      <div className="flex justify-evenly p-5 ">
        <a href="">
          <img className="w-80 h-9 animate-pulse" src={github} alt="github" />
        </a>
        <a href="">
          {" "}
          <img className="w-80 h-9  animate-pulse" src={email} alt="email" />
        </a>
        <a href="">
          {" "}
          <img
            className="w-80 h-9 animate-pulse"
            src={linkedin}
            alt="linkedin"
          />
        </a>
      </div>
    </div>
  );
};

export default Contato;
