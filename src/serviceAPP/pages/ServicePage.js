import { useServiceStore } from "../../hooks"
import { NavBar } from "../components"

export const ServicePage = () => {

  const { listChecks } = useServiceStore();

  return (
    <>
      <NavBar />
      <p>{JSON.stringify(listChecks)}</p>
    </>
  )
}
