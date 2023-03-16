import { useEffect } from "react"
import { useAuthStore } from "../../hooks"
import { NavBar } from "../components"

export const ServicePage = () => {

  const { checkTimeSession } = useAuthStore();
  
  useEffect(() => {
    checkTimeSession();
  }, [])

  return (
    <>
      <NavBar />
    </>
  )
}
