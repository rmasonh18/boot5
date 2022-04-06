
export default function Home() {
  return(
    <>
    <div className="container p-3">
      <button className="btn btn-primary m-3">
        firstButton 
      </button>
      <button className="btn btn-warning m-3">
        warningbutton
      </button>
    </div>
    <div className="dropdown m-3">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        id="dropdownMenuButton1"
        aria-expanded="false"
      >
        dropdownButton
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1"> 
      <li>
        <a className="dropdown-item" href="#">
        Option 1
        </a>
     
      </li>
      <li>
        <a className="dropdown-item" href="#">
        Option 2
        </a>
      </li>
      </ul>

      
    </div>
    </>
  )
}
  
