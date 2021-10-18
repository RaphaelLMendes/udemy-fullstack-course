import Hero from "./Hero";

const AboutView = () => {
    return(
      <div>
        <Hero text="About Us" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
              <p className="lead">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit magnam deleniti, modi laboriosam voluptatum repudiandae provident nisi amet animi nulla ducimus consequuntur nobis labore accusantium eaque numquam exercitationem officiis recusandae.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default AboutView;