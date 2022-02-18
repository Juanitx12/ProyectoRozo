import React from 'react'
import { Button } from "../../UI/Button/Button"

export const Foter = () => {
    return (
      <footer>
        <nav class = "footer">
          <a target ="https://www.facebook.com/profile.php?id=100007566885206" href="https://www.facebook.com/profile.php?id=100007566885206">
            <Button claseColor= "boton_fb" nombre_boton="Facebook" /> 
          </a>

          <a target = "https://www.instagram.com/userjuanito12/?hl=es-la" href="https://www.instagram.com/userjuanito12/?hl=es-la">
            <Button claseColor= "boton_ig"  nombre_boton="Instagram" />
          </a>

          <a target = "https://github.com/Juanitx12" href="https://github.com/Juanitx12">
            <Button claseColor= "boton_gh" nombre_boton="GitHub" />  
          </a>  
            
        </nav>
      </footer>
        
      
    )
  }
