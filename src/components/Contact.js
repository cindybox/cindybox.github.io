import React from "react"

const Contact = () => (
  <div>
    <section id="contact" class="contact container mt-5 mb-5">
      <div class="row-grid align-items-center my-md row">
        <div class="col-lg-12 text-center">
          <h3 class="connect-text font-weight-light mb-2">
            I would love to connect!
          </h3>
          <h4 class="mb-0 font-weight-light">
            Let's get in touch on any of these platforms.
          </h4>
        </div>
        <div class="text-lg-center btn-wrapper social-buttons">
          <button
            id="twitter"
            class="btn-icon btn-round btn btn-twitter btn-lg"
          >
            <i class="fab fa-twitter"></i>
          </button>
          <button
            id="facebook"
            class="btn-icon btn-round btn btn-facebook btn-lg"
          >
            <i class="fab fa-facebook-square"></i>
          </button>
          <a
            href="https://github.com/creativetimofficial"
            id="tooltip877922017"
            target="_blank"
            class="btn-icon btn-round btn btn-github btn-lg"
          >
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  </div>
)

export default Contact
