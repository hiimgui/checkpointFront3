import emailIcon from "../assets/email-svgrepo-com.svg";
import githubIcon from "../assets/github-svgrepo-com.svg";
import linkedinIcon from "../assets/linkedin-svgrepo-com.svg";
const Contato = () => {
  return (
    <div className="m-10" id="contato">
      <h6 className="flex justify-center mb-10">
        Você pode me contatar pelos seguintes meios:
      </h6>
      <div className="flex justify-evenly p-8 ">
        <a href="https://github.com/hiimgui">
          <img className="w-10 h-9 animate-pulse" src={githubIcon} alt="github" />
        </a>
        <a href="mailto: guiproc@gmail.com">
          {" "}
          <img className="w-10 h-9  animate-pulse" src={emailIcon} alt="email" />
        </a>
        <a href="">
          {" "}
          <img
            className="w-10 h-9 animate-pulse"
            src={linkedinIcon}
            alt="linkedin"
          />
        </a>
      </div>
    </div>
  );
};

export default Contato;
