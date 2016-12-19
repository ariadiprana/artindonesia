$(function() {

});

function order(){
  $('.ui.modal').modal('show');
}

function cleanUp(){
  $("#product").html("")
  $("#sculptor").html("")
  $("#detail-sculptor").html("")
  $("#detail-product").html("")
}

function detailProduct(){
  cleanUp()
  $("#detail-product").html(`
    <div class="ui modal">
      <i class="close icon"></i>
      <div class="header">
        Order Screen
      </div>
      <div class="image content">
        <div class="ui medium image">
          <img src="/images/products/products_1.jpg">
        </div>
        <div class="description">
          <div class="ui header">Thank you for ordering this item.</div>
          <p>We will contact you upon you fill informations below</p>
          <form class="ui form">
            <div class="field">
              <label>Full Name</label>
              <input type="text" name="full-name" placeholder="Full Name">
            </div>
            <div class="field">
              <label>Full Address</label>
              <textarea placeholder="Full Address"></textarea>
            </div>
            <div class="field">
              <label>Contact Number</label>
              <input type="text" name="contact" placeholder="Contact Number">
            </div>
          </form>
        </div>
      </div>
      <div class="actions">
        <div class="ui black deny button">
          Close
        </div>
        <button class="ui button green" type="submit">Submit</button>
      </div>
    </div>







    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <img class="img-fluid" src="/images/products/products_1.jpg" alt="Card image cap">
        </div>
        <div class="col-sm-4">
          <img class="img-fluid" src="/images/products/products_2.jpg" alt="Card image cap">
        </div>
        <div class="col-sm-4">
          <img class="img-fluid" src="/images/products/products_3.jpg" alt="Card image cap">
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <center>
              <br>
              <div class="ui pointing below green basic label">
                <h3>Available</h3>
                <label class="ui red label"><h3>IDR 15.000.000 ,-</h3></label>
              </div>
              <h1 class="display-3">Patung Kayu Bali</h1>
              <div class="ui green vertical animated button" tabindex="0" onclick="order()">
                <div class="hidden content">Order</div>
                <div class="visible content">
                  <i class="shop icon"></i>
                </div>
              </div>
              <h3>Sculptured by</h3>
              <img class="img-fluid" src="/images/sculptors/sculptor_1.jpg"  alt="Card image cap">
              <h1 class="display-4">I Made Perwira</h1>
          </center>
        </div>
      </div>

      <div class="divider"></div>

      <div class="row">
        <div class="card">
          <div class="col-sm-5">
            <br>
            <h1 class="card-title">Specifications</h1>
              <div class="divider"></div>
              <i class="maximize icon"></i><b>Dimension</b>
                <div class="description">L 25cm x W 50cm x H 230cm </div>
                  <br>
              <i class="checked calendar icon"></i><b>Finished Date</b>
                <div class="description">December, 2016</div>
                  <br>
              <i class="marker icon"></i><b>Sculpture Location</b>
                <div class="description">Kuta, Bali</div>
                  <br>
              <i class="cube icon"></i><b>Material</b>
                <div class="description">Gold, Wood, Silver</div>
                  <br>
              <i class="hourglass full icon"></i><b>Processing Time</b>
                <div class="description">3 Months</div>
                  <br>
          </div>
          <div class="col-sm-0.5">
          </div>
          <div class="col-sm-6">
            <br>
            <h1 class="card-title">Story</h1>
              <div class="divider"></div>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
          </div>
        </div>
      </div>
    </div>
  `)
}

function detailSculptor(){
  cleanUp()
  $("#sculptor").html(`
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <img class="img-fluid" src="images/sculptors/sculptor_1.jpg" alt="Card image cap">
        </div>
        <div class="col-sm-8">
          <div class="card-block">
              <h1 class="display-4">Andi Boromeus</h1>
              <h6 class="card-subtitle text-muted">63 Sculptures</h6>
              <div class="divider"></div>
              <h1 class="display-6">Profile</h1>

              <div class="col-sm-3"><b>Year of Birth</b></div>
              <div class="col-sm-3">1951</div>

              <div class="col-sm-3"><b>Media</b></div>
              <div class="col-sm-3">Wood, Rock</div>

              <div class="col-sm-3"><b>Residence</b></div>
              <div class="col-sm-3">Bali</div>

              <div class="col-sm-3"><b>Art Stream</b></div>
              <div class="col-sm-3">Naturalism</div>

              <div class="col-sm-3"><b>Award</b></div>
              <div class="col-sm-12">
                <ul>
                  <li>Global Pedestal Sculpture 2016</li>
                  <li>Five Star Excellence Award</li>
                  <li>Five Star Excellence Award</li>
                  <li>Gold Winner</li>
                </ul>
              </div>
              <br><br>

          </div>
        </div>
      </div>

      <div class="row">
        <center><h1 class="display-4">Portfolio</h1></center>
        <div class="container">
          <div class="card-group">
            <div class="card">
                <img class="img-fluid" src="images/products/products_1.jpg" alt="Card image cap">
            </div>
            <div class="card">
              <img class="img-fluid" src="images/products/products_2.jpg" alt="Card image cap">

            </div>
            <div class="card">
              <img class="img-fluid" src="images/products/products_3.jpg" alt="Card image cap">

            </div>
            <div class="card">
              <img class="img-fluid" src="images/products/products_4.jpg" alt="Card image cap">

            </div>
          </div>
          <div class="card-group">
            <div class="card">
              <img class="img-fluid" src="images/products/products_5.jpg" alt="Card image cap">

            </div>
            <div class="card">
              <img class="img-fluid" src="images/products/products_6.jpg" alt="Card image cap">

            </div>
            <div class="card">
              <img class="img-fluid" src="images/products/products_7.jpg" alt="Card image cap">

            </div>
            <div class="card">
              <img class="img-fluid" src="images/products/products_8.jpg" alt="Card image cap">

            </div>
          </div>
        </div>
      </div>
      <div class="divider"></div>
    </div>
  `)
}

 $("#btn-sculptor").click(function(){
   cleanUp()
    $("#sculptor").html(`
      <div class="container">
        <div class="card-group">
          <div class="card">
            <a href="#" onclick="detailSculptor()">
              <img class="img-fluid" src="images/sculptors/sculptor_1.jpg" alt="Card image cap">
            </a>
            <div class="card-block">
              <h4 class="card-title">Andi Boromeus</h4>
            </div>
          </div>
          <div class="card">
            <img class="img-fluid" src="images/sculptors/sculptor_2.jpg" alt="Card image cap">
            <div class="card-block">
              <h4 class="card-title">Inne Kursian</h4>
            </div>
          </div>
          <div class="card">
            <img class="img-fluid" src="images/sculptors/sculptor_3.jpg" alt="Card image cap">
            <div class="card-block">
              <h4 class="card-title">Alan Budikusyanto</h4>
            </div>
          </div>
          <div class="card">
            <img class="img-fluid" src="images/sculptors/sculptor_4.jpg" alt="Card image cap">
            <div class="card-block">
              <h4 class="card-title">Tanita Tahulaon</h4>
            </div>
          </div>
        </div>
        <div class="card-group">
          <div class="card">
            <img class="img-fluid" src="images/sculptors/sculptor_5.jpg" alt="Card image cap">
            <div class="card-block">
              <h4 class="card-title">Andi Boromeus</h4>
            </div>
          </div>
          <div class="card">
            <img class="img-fluid" src="images/sculptors/sculptor_6.jpg" alt="Card image cap">
            <div class="card-block">
              <h4 class="card-title">Inne Kursian</h4>
            </div>
          </div>
          <div class="card">
            <img class="img-fluid" src="images/sculptors/sculptor_7.jpg" alt="Card image cap">
            <div class="card-block">
              <h4 class="card-title">Alan Budikusyanto</h4>
            </div>
          </div>
          <div class="card">
            <img class="img-fluid" src="images/sculptors/sculptor_8.jpg" alt="Card image cap">
            <div class="card-block">
              <h4 class="card-title">Tanita Tahulaon</h4>
            </div>
          </div>
        </div>
      `)
 })


 $("#btn-product").click(function(){
    cleanUp()
    $("#product").html(`
       <div class="container">
         <div class="card-group">
           <div class="card">
              <a href="#" onclick="detailProduct()">
                <img class="img-fluid" src="images/products/products_1.jpg" alt="Card image cap">
              </a>
           </div>
           <div class="card">
             <img class="img-fluid" src="images/products/products_2.jpg" alt="Card image cap">

           </div>
           <div class="card">
             <img class="img-fluid" src="images/products/products_3.jpg" alt="Card image cap">

           </div>
           <div class="card">
             <img class="img-fluid" src="images/products/products_4.jpg" alt="Card image cap">

           </div>
         </div>
         <div class="card-group">
           <div class="card">
             <img class="img-fluid" src="images/products/products_5.jpg" alt="Card image cap">

           </div>
           <div class="card">
             <img class="img-fluid" src="images/products/products_6.jpg" alt="Card image cap">

           </div>
           <div class="card">
             <img class="img-fluid" src="images/products/products_7.jpg" alt="Card image cap">

           </div>
           <div class="card">
             <img class="img-fluid" src="images/products/products_8.jpg" alt="Card image cap">

           </div>
         </div>
       </div>
     `)
})
