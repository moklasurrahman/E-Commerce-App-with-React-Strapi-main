import "./categories.scss"
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className="categories">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/2320309/pexels-photo-2320309.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  Sale
                </Link>
              </button>
            </div>
            <div className="row">
              <img
                src="https://images.pexels.com/photos/13717430/pexels-photo-13717430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Women
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://images.pexels.com/photos/8152363/pexels-photo-8152363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  New Season
                </Link>
              </button>
            </div>
          </div>
          <div className="col col-l">
            <div className="row">
              <div className="col">
                <div className="row">
                  <img
                    src="https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                  <button>
                    <Link to="/products/1" className="link">
                      Men
                    </Link>
                  </button>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  {" "}
                  <img
                    src="https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                  <button>
                    <Link to="/products/1" className="link">
                      Accessories
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <img
                src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Shoes
                </Link>
              </button>
            </div>
          </div>
        </div>
      );
    };

export default Categories