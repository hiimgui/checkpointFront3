const Banner = (props) => {
  return (
    <div className=" grid place-items-center container mx-auto">
      <h3 className="text-4xl text-white p-10 lg:w-13 lg:p-35">
        Olá 
        <span className="animate-bounce"> 👋, </span> meu nome é Guilherme
        Kagueiama Procopio e sou estudante da Digital House, no programa
        Certified Tech Developer<span className="blinking ">|</span>
      </h3>
      <div className="lg:flex lg:justify-evenly">
        <img className="mx-auto my-3" src={props.img} alt="profile"></img>
        <p id="about" className="m-3 p-10 text-white lg:w-80 lg:my-10">
          Tenho 27 anos e meus hobbies principais são ler sobre algum assunto
          que eu estou obcecado (no momento é moda), e assistir mais programas
          de variedades coreanos do que deveria.
        </p>
      </div>
    </div>
  );
};
export default Banner;
