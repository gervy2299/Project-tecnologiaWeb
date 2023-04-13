import { useEffect } from "react";
import { useServiceStore } from "../../hooks"
import { CardServiceCheck, NavBar } from "../components"

export const ServicePage = () => {

  const { getCheckLists } = useServiceStore();

  useEffect(() => {

    getCheckLists();

  }, []);


  return (
    <>
      <NavBar />
      <CardServiceCheck />
    </>
  )
}


