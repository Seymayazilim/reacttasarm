import React, { Component } from 'react'

 class Deneme extends Component {
  render() {
    return (
      <div>




<div>
  <title>admin sayfası</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
  <link rel="stylesheet" href="adminpanel.css" />
  <style dangerouslySetInnerHTML={{__html: "\n    /* Set height of the grid so .sidenav can be 100% (adjust as needed) */\n    .row.content {height: 550px}\n    \n    /* Set gray background color and 100% height */\n    .sidenav {\n      background-color: #f1f1f1;\n      height: 100%;\n    }\n        \n    /* On small screens, set height to 'auto' for the grid */\n    @media screen and (max-width: 767px) {\n      .row.content {height: auto;} \n    }\n  " }} />
  <nav className="navbar navbar-inverse visible-xs">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span className="icon-bar">AAAAA</span>
          <span className="icon-bar" />
          <span className="icon-bar" />                        
        </button>
        <a className="navbar-brand" href="#">Logo</a>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Dashboard</a></li>
          <li><a href="#">Age</a></li>
          <li><a href="#">Gender</a></li>
          <li><a href="#">Geo</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="container-fluid">
    <div className="row content">
      <div className="col-sm-3 sidenav hidden-xs">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax82KYMJGqLDnM_5C5-4YAzafZZs0ZkrB-g&usqp=CAU" alt="W3Schools.com" style={{width: 260, height: 142}} />
        <ul className="nav nav-pills nav-stacked">
          <li className="active"><a href="#section1"> ADMİN YÖNETİM PANELİ</a></li>
          <li className="btn btn-default btn-sm"><a href="#section2"><span className="glyphicon glyphicon-home" /> ANASAYFA</a></li>
          <li className="btn btn-default btn-sm"><a href="#section3"><span className="glyphicon glyphicon-map-marker" /> İLÇELER</a></li>
          <li className="btn btn-default btn-sm"><a href="#section3"><span className="glyphicon glyphicon-bed" /> KAZALAR</a></li>
          <li className="btn btn-default btn-sm"><a href="#section3"><span className="glyphicon glyphicon-list" />RAPORLAR</a></li>
          <li className="btn btn-default btn-sm"><a href="#section3"><span className="glyphicon glyphicon-cog" /> AYARLAR</a></li>
          <li className="btn btn-default btn-sm"><a href="#section3"><span className="glyphicon glyphicon-signal" /> İSTATİSTİK</a></li>
          <li className="btn btn-default btn-sm"><a href="#section3"><span className="glyphicon glyphicon-off" /> ÇIKIŞ</a></li>
        </ul><br />
      </div>
      <br /> 
      <div className="col-sm-9">
        <div className="well">
          <h4>SON KAZALAR</h4>
          <p>  Elazığ'da bir ay içerisinde 277 trafik kazası meydana geldi.1 yılda 2 bin 662 kaza meydana gelirken bu kazalarda 12 kişi öldü, bin 722 kişi de yaralandı.</p>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div className="well">
              <h4>ALKOL NEDENLİ</h4>
              <p>%40 <iframe src="https://www.caginpolisi.com.tr/eski_sitemiz/117/7-8-9-10-11-12_dosyalar/image021.png" frameBorder={0} width={230} /> </p> 
            </div>
          </div>
          <div className="col-sm-2">
            <div className="well">
              <h4>AŞIRI HIZ</h4>
              <p>%20   <iframe src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmFaihA07qhzHuvIYJzO0T6VZa23epMG2qrA&usqp=CAU" frameBorder={0} /> </p> 
            </div>
          </div>
          <div className="col-sm-0">
            <div className="well">
              <h4>HAVA DURUMU</h4>
              <p>%10 <iframe src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLRM9_YuB8uw6e8Z9GtGiesuSVKnEleNz0fQ&usqp=CAU" frameBorder={0} /></p> 
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="well">
              <p>KAZA YERİ KONUMU HARİTA</p> 
              <p><iframe src="file:///C:/Users/Packard%20bell/reacttasarm/src/components/harita.html" frameBorder={0} width={906} height={300} /></p> 
              <p /> 
            </div>
          </div>
        </div>
      </div>
    </div></div></div>









 
      </div>
    )
  }
}
export default Deneme;