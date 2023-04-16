import { useEffect } from "react";
import { useServiceStore } from "../../hooks"
import { Breadcrumbs, CardServiceCheck, NavBar } from "../components"

export const ServicePage = () => {

  const { getCheckLists, currentPage } = useServiceStore();

  useEffect(() => {

    getCheckLists();

  }, [currentPage]);


  return (
    <>
      <NavBar />
      <Breadcrumbs />
      <CardServiceCheck />
    </>
  )
}


