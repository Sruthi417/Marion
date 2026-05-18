import Image from "next/image";
import './page.scss'


const page = () => {
  return (
    <div className="image-wrapper">
    <Image src="/images/under-devp.png" height={300} width={300} alt="under-development" className="image"/>
    </div>
  )
}

export default page