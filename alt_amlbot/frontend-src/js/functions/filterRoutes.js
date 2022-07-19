import React from "react";
import Main from "../../components/Main";


export default function filterRoutes(routes){
  routes = [
    ...routes,
    { path: "/admin/swagger",
      component: <Main />,
      exact: false},
  ]

  return routes
}
