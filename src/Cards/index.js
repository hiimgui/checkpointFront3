import dataArr from "../Data";
const Cards = (props) => {
  return (
    <>
      <div className="lg:flex">
        {dataArr.map((x) => {
          return (
            <div className="grid auto-rows-3 place-items-center">
              <h5 className="m-10 uppercase">{x.titulo}</h5>
              <a href={`${x.link}`}>
                <img
                  className="w-80 h-40 transform hover:scale-150 delay-75 ease-in-out duration-700"
                  src={x.imagem}
                  alt="imagem"
                ></img>
              </a>
              <p className="m-10 text-center">{x.descricao}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
