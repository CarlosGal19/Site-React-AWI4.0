import FooterSection from './FooterSection';
import '../App.css'

const Footer = () => {

  const arrayContactMe = ["Contact me", "Github", "Discord", "LinkedIn", "https://github.com/CarlosGal19", "carlosgalindo19", "https://www.linkedin.com/in/carlosgalindoislas/", "./github.svg", "./discord.svg", "./linkedin.svg"];
  const arrayAnotherPeople = ["Another people from academy", "Gerardo Orduña Alvarez", "Jose de Jesus Cabrera Castro", "Luis Guillermo", "https://www.linkedin.com/in/gerardo-orduna-b532b2156/", "https://www.linkedin.com/in/jose-de-jesus-cabrera-316515126/", "https://github.com/ZeroXionXZ"];

  return (
    <>
      <FooterSection info={arrayContactMe}/>
      <FooterSection info={arrayAnotherPeople}/>
    </>
  )
}

export default Footer
