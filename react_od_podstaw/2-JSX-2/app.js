const header = <h1 className="title">Witaj na stronie!</h1>;

const handleClick = () => alert("klik!");
const main = (
  <div>
    <h1 className="red" onClick={handleClick}>
      Pierwszy artykuł
    </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste
      similique itaque a sequi provident corporis fuga, neque libero dolore
      quidem iure aliquam mollitia, velit pariatur quos sint iusto culpa?
    </p>
  </div>
);

const classBig = "big";

const footer = (
  <footer>
    <p className={classBig}>Stopka</p>
  </footer>
);

ReactDOM.render([header, main, footer], document.getElementById("root"));

// const header = <h1 className="title">Witaj na stronie!</h1>

// const classBig = "big";

// const handleClick = () => alert("klik!")
// const main = (
//   <div>
//     <h1 person="osoby" onClick={handleClick} className="red">Pierwszy artykuł</h1>
//     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae iste similique itaque a sequi provident corporis fuga, neque libero dolore quidem iure aliquam mollitia, velit pariatur quos sint iusto culpa?</p>
//   </div>
// )

// const text = "stopkaaa";
// const largeTxt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore temporibus quasi repudiandae, quia beatae, quas et nulla, soluta reprehenderit consequuntur voluptatum a delectus fuga? Minus, unde? Iusto fugit non quisquam."
// const footer = (
//   <footer>
//     {largeTxt}
//     <p className={classBig}>{text}</p>

//   </footer>
// )

// const app = [header, main, footer]

// ReactDOM.render(app, document.getElementById('root'))
