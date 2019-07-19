import React from "react"

const About = () => (
  <div>
    <section id="about" class="container about mt-5 mb-5">
      {/*  <h3 class="section-title mb-5 ">
  <span class="quote">&lt</span> ABOUT <span class="quote">/&gt</span>
</h3>
<div class="row mt-5 md-5">
  <div class="about-pic col-lg-6 ">
    <img
      class="img-fluid rounded-circle shadow-lg"
      src="https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
      style={{ width: "10rem", height: "10rem" }}
      alt=""
    />
  </div>
  <div class="about-text text-center col-lg-6">
    <p class="intro-p2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
      malesuada fames ac turpis egestas. Lacus suspendisse faucibus
      interdum posuere lorem. Feugiat sed lectus vestibulum mattis
      ullamcorper velit. Mauris nunc congue nisi vitae suscipit tellus
      mauris a. Iaculis urna id volutpat lacus laoreet. Posuere ac ut
      consequat semper viverra nam libero. Mauris rhoncus aenean vel elit
      scelerisque mauris pellentesque pulvinar pellentesque. Mauris augue
      neque gravida in fermentum. Volutpat diam ut venenatis tellus in
      metus vulputate eu scelerisque. Pretium vulputate sapien nec
      sagittis aliquam. Ut enim blandit volutpat maecenas volutpat
      blandit. Tortor at risus viverra adipiscing at in tellus. Nulla
      malesuada pellentesque elit eget. Ut faucibus pulvinar elementum
      integer enim neque. Vestibulum rhoncus est pellentesque elit
      ullamcorper dignissim. Cursus mattis molestie a iaculis at erat
      pellentesque. Metus dictum at tempor commodo ullamcorper a lacus
      vestibulum sed.
    </p>
    <br />

    <br />
    <br />
  </div>
</div>*/}

      <p class="about-p1 mt-5">Here are the tools I use</p>
      <br />
      <div class="skill-cards mt-5">
        <div class="skills-card card col-md-5" style={{ width: "18rem" }}>
          <h5 class="skills-type card-title border-bottom">Coding</h5>
          <div class="skill-content">
            <ul>
              <li>javascript</li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Material UI</li>
              <li>React</li>
            </ul>
            <ul>
              <li>Gatsby</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Python</li>
              <li>Octave</li>
            </ul>
          </div>
        </div>

        <div class="skills-card card col-md-5" style={{ width: "18rem" }}>
          <h5 class="skills-type card-title border-bottom">Design</h5>
          <div class="skill-content">
            <ul>
              <li>Adobe Photoshop</li>
              <li>Adobe XD</li>
              <li>Adobe Illustrator</li>
              <li>AdobeIndesign</li>
            </ul>
            <ul>
              <li>AutoCAD</li>
              <li>SketchUp</li>
              <li>Lumion</li>
              <li>Vectorworks</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default About
