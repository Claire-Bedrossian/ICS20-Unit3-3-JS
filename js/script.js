// Copyright (c) 2022 Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit3-03-JS/sw.js", {
    scope: "/ICS2O-Unit3-03-JS/",
  })
}

/**
 * This function calculates the volume of a sphere
 */
function myButtonClicked() {
  // input
  const radius = parseFloat(document.getElementById("radius-number").value)

  //process
  const volume = (4 / 3) * Math.PI * radius ** 3

  // output
  document.getElementById("volume").innerHTML =
    "Volume is equal to: " + volume + " cm³"
}
