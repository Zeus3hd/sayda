import React from "react";

const Content = () => (
  <div id="contents">
    <div id="content-container">
      <div className="frame">
        <img src={require("../img/test.jpg")} alt="test" />
        <div className="frame-text">
          <h4>عنوان</h4>
          <p>شوية كلام في الحمادة عن الصورة البطاطا</p>
        </div>
      </div>
      <div className="frame">
        <img src={require("../img/1387326.jpg")} alt="test" />
        <div className="frame-text">
          <h4>عنوان</h4>
          <p>شوية كلام في الحمادة عن الصورة البطاطا</p>
        </div>
      </div>
      <div className="frame">
        <img src={require("../img/2049-13.jpg")} alt="test" />
        <div className="frame-text">
          <h4>عنوان</h4>
          <p>شوية كلام في الحمادة عن الصورة البطاطا</p>
        </div>
      </div>
    </div>
    <div className="content-container-2">
      <div className="square-3d">
        <div className="square-text">
          <h2>عنوان يا ابني</h2>
          <p>كلام خرابيش مسك الالوان ورسم عالحيط</p>
        </div>
      </div>
      <img src={require("../img/edited/square2.png")} alt="model" />
    </div>
    <div className="content-container-2" id="content-container-modified">
      <div className="square-3d">
        <div className="square-text">
          <h2>عنوان يا ابني</h2>
          <p>كلام خرابيش مسك الالوان ورسم عالحيط</p>
        </div>
      </div>
      <img src={require("../img/edited/abayaremove.png")} alt="model" />
    </div>
    <div id="parallax">
      <p>انا عندي سجارة بني وحاسس دماغي بتاكلني</p>
    </div>
  </div>
);

export default Content;
