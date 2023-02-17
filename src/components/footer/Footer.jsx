import "./footer.scss"
const Footer = () => {
  return (
    <div className="footer">
    <div className="top">
      <div className="item">
        <h1>Categories</h1>
        <span className="list">Women</span>
        <span className="list">Men</span>
        <span className="list">Shoes</span>
        <span className="list">Accessories</span>
        <span className="list">New Arrivals</span>
      </div>
      <div className="item">
        <h1>Links</h1>
        <span className="list">FAQ</span>
        <span className="list">Pages</span>
        <span className="list">Stores</span>
        <span className="list">Compare</span>
        <span className="list">Cookies</span>
      </div>
      <div className="item">
        <h1>About</h1>
        <span>
          Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
          
        </span>
      </div>
      <div className="item">
        <h1>Contact</h1>
        <span>
          Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
          amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
          ut labore etdolore.
        </span>
      </div>
    </div>

    <div className="bottom">
      <div className="left">
        <span className="logo">Moklasur rahamn</span>
        <span className="copyright">
          © Copyright 2023. All Rights Reserved
        </span>
      </div>
      <div className="right">
        <img src="/imgs/payment.png" alt="" />
      </div>
    </div>
  </div>
);
}

export default Footer