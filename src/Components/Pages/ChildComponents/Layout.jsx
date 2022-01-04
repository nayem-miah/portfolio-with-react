import React from 'react';
import SignatureImg from "../../Img/signature.png";

const Layout = () => {
    return (
        <div>
            <section id="layout">
        <div id="myBtn" class="overlay">
          <div class="wrap">
            <div class="icon">
              <span class="remove_btn">
                <i class="fas fa-times"></i>
              </span>
              <span class="arrow_btn">
                <i class="fas fa-arrow-left"></i>
              </span>
            </div>

            <img class="img-fluid" src="" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              ratione reprehenderit, error qui enim sit ex provident iure,
              dolor, nulla eaque delectus, repudiandae commodi. Velit assumenda
              odit quisquam at, error suscipit unde, necessitatibus ipsum
              ratione excepturi ducimus labore, totam dolorem.
            </p>

            <div class="img-sin d-flex">
              <img class="img-fluid sing" src={SignatureImg} alt="" />
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Layout;