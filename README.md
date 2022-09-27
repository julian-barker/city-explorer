# Project Name

**Author**: Julian Barker
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview

This application is our intro to servers, the web request response cycle, and APIs.  We will be building a React application that uses the Axios library to make user-initiated requests for data from a third-party API. W will use the LocationIQ GeoLocating API.

## Getting Started

1. create-react-app
2. delete cruft
3. add form to App component to gather user input
4. get locationIQ API key and store in .env
5. request data from Location IQ API using the key and the seach input value
6. display data or error message based on the response from the server
7. use data to create source url for the map
8. display the map in an `<img>` tag, with the aforementioned `src` attribute.

## Architecture

Technologies: React, Javascript, Axios, LocationIQ Geolocating API

![image](./code-301-city-explorer-diagram.png)

## Change Log

09-26-2022 1700 - Application now has basic styling and displays results data and a smap of the result location.
09-27-2022 1551 - Application now displays the weather forecast from data received from local Express Server.

## Credit and Collaborations

Worked with Ian Forrester on displaying the data and map.

## Time Estimates

### Display Data

Estimate of time needed to complete: 40 min

Start time: 1300

Finish time: 1400

Actual time needed to complete: 1 hr

### Display Map

Estimate of time needed to complete: 30 min

Start time: 1400

Finish time: 1415

Actual time needed to complete: 15 min

### Style

Estimate of time needed to complete: 30 min

Start time: 1500

Finish time: 1600

Actual time needed to complete: 1 hr

### Display Weather

Estimate of time needed to complete: 1hr

Start time: 1510

Finish time: 1550

Actual time needed to complete: 40 min