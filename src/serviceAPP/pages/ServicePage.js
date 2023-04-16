import { useEffect } from "react";
import { useServiceStore } from "../../hooks"
import { BasicTemplate, CardServiceCheck } from "../components"

export const ServicePage = () => {

  const { getCheckLists, currentPage } = useServiceStore();

  useEffect(() => {

    getCheckLists();

  }, [currentPage]);


  return (
    <>
      <BasicTemplate />
      <CardServiceCheck />
    </>
  )
}


