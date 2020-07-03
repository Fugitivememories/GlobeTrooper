// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  loginUri :  "http://localhost:4000/Wanderlust_Server/UserAPI/userLogin",
  getPackages : "http://localhost:4000/Wanderlust_Server/PackageAPI/viewAllPackages",
  book : "http://localhost:4000/Wanderlust_Server/UserBookingAPI/bookDestination",
  deleteUrl : "http://localhost:4000/Wanderlust_Server/UserBookingAPI/cancelBooking/",
  getBookings : "http://localhost:4000/Wanderlust_Server/UserBookingAPI/viewMyBookings/",
  cancelBooking : "http://localhost:4000/Wanderlust_Server/UserBookingAPI/",
  getDestinationById : "http://localhost:4000/Wanderlust_Server/PackageAPI/viewPackage/",
  registerUser : "http://localhost:4000/Wanderlust_Server/UserAPI/userRegister/",
  destinationById:"http://localhost:4000/Wanderlust_Server/PackageAPI/destinationById",
  production: false
};


//added a comment



//my comment

//added a comment
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
