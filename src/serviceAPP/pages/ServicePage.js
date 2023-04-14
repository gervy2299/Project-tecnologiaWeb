import { useEffect } from "react";
import { useServiceStore } from "../../hooks"
import { CardServiceCheck, NavBar } from "../components"

export const ServicePage = () => {

  const { getCheckLists, currentPage } = useServiceStore();

  useEffect(() => {

    getCheckLists();

  }, [currentPage]);


  return (
    <>
      <NavBar />
      <CardServiceCheck />
    </>
  )
}


