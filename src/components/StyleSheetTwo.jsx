import { NavLink } from "react-router-dom";

const StyleSheetTwo = () => {
  return (
    <>
    <nav>
      <NavLink to="/">Stylesheet1</NavLink>
      <NavLink to="/stylesheettwo">Stylesheet2</NavLink>
    </nav>
    <div>StyleSheetTwo</div>
    </>
  )
}

export default StyleSheetTwo