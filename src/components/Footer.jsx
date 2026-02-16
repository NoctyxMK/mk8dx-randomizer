import '../components/Footer.css'

function Footer(){
    return(
      <footer className="footer">
        <div>
            <span>Developed by Noctyx</span>
        </div>

        <div className="contacts-footer">

            <span>Contacts</span>
            <a href="https://github.com/NoctyxMK" target="_blank">GitHub: NoctyxMK</a>
            <p>Discord: noctyxmk</p>
            <a href="https://www.youtube.com/@NoctyxMK" target="_blank">Youtube: @NoctyxMK</a>

        </div>

        <div className="credits-footer">

            <span>Credits</span>
            <p>Images are taken from:</p>
            <a href="https://www.mariowiki.com/Mario_Kart_8_Deluxe" target="_blank">Super Mario Wiki</a>
            <a href="https://mariokart.fandom.com/wiki/Mario_Kart_8_Deluxee" target="_blank">Mario Kart Fandom</a>
            
        </div>

      </footer>
    )
}

export default Footer;