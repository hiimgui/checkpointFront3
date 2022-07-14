const Banner = (props) => {
  //TODO:Arrumar spacing quando no mobile
  return (
    <div className=" min-h-screen grid place-items-center container mx-auto">
      <h3 className="text-4xl text-white mb-3  p-10 lg:w-13 lg:p-35">
        Olá 
        <span className="text-justify"> 👋, </span> meu nome é Guilherme
        Kagueiama Procopio e sou estudante da Digital House, no programa
        Certified Tech Developer<span className="blinking ">|</span>
      </h3>
      <div className="lg:flex lg:justify-center mb-3">
        <img className=" mx-auto  lg:my-3" src={props.img} alt="profile"></img>
        <div className="lg:mx-10" />
        <p id="about" className="m-3 p-10 text-white lg:w-80 lg:my-10 text-justify">
          Tenho 27 anos e meus hobbies principais são ler sobre algum assunto
          que eu estou obcecado (no momento é moda), e assistir mais programas
          de variedades coreanos do que deveria.
        </p>
      </div>
    </div>
  );
};
export default Banner;
