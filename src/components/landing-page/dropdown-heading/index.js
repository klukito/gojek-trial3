import React from 'react';

const DropdownHeading = () => (
    <header>
    <div class="collapse bg-light" id="navbarHeader">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-md-7 py-4">
            <h4 class="text-teal">About</h4>
            <p class="text-muted"> We are simply, GoZomato. Your guide to Food Heaven exploration. </p>
          </div>
          <div class="col-sm-4 offset-md-1 py-4">
            <h4 class="text-teal">Contact Us!</h4>
            <ul class="list-unstyled">
              <li><a href="http://twitter.com" class="icons-sm tw-ic"><i class="fab fa-twitter-f fa-2x"> </i>Follow us on Twitter</a></li>
              <li><a href="http://facebook.com" class="icons-sm fb-ic"><i class="fab fa-facebook-f fa-2x"> </i>Like us on Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar navbar-light bg-light shadow-sm">
      <div class="container d-flex justify-content-between">
        <a href="#" class="navbar-brand d-flex align-items-center">
          <strong>GoZomato</strong>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  </header>
);

export default DropdownHeading;
