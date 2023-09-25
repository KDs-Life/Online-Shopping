import { useEffect, useState } from "react"; // Hier holen wir uns spezielle Werkzeuge, um unsere Webseite aufzubauen
import axios from "axios"; // Das ist wie ein Telefon, um Informationen aus dem Internet zu holen
import "./Products.css";

// Hier erstellen wir unsere eigene Funktion namens "Products"
function Products() {
  // Das sind wie leere Behälter, in die wir später Informationen stecken werden
  const [products, setProducts] = useState([]); // Hier kommt unsere Liste von Produkten rein
  const [loading, setLoading] = useState(true); // Das ist wie ein Hinweis, dass wir noch auf Informationen warten

  // Hier sagen wir dem Computer, was er tun soll, wenn unsere Webseite startet
  useEffect(() => {
    // Jetzt benutzen wir unser "Telefon" (Axios), um Informationen aus dem Internet zu holen
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // Wenn das Telefon die Informationen bekommt, tun wir Folgendes:
        setProducts(response.data); // Wir legen die erhaltenen Produkte in unseren leeren Behälter
        setLoading(false); // Wir sagen dem Hinweis, dass wir nicht mehr warten müssen
      })
      .catch((error) => {
        // Wenn es ein Problem gibt und wir keine Informationen erhalten können, machen wir Folgendes:
        console.error(error.message); // Wir zeigen eine Fehlermeldung in der Konsole an
      });
  }, []); // Hier sagen wir dem Computer, dass er dies nur einmal beim Start machen soll

  // Jetzt überprüfen wir, ob wir noch auf Informationen warten
  if (loading) {
    return (
      <p>
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣤⡤⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⢀⣠⣤⣤⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⡄⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢻⣛⣛⠟⣛⠻⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⢠⣿⠟⠛⠛⢻⣿⠀⠀⠀⣤⣤⡄⠀⠀⠀⣤⣤⡄⠀⠀⠀⣤⣤⠀⣿⡇⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⢾⢸⡜⡟⡟⣷⢾⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⢠⣶⣿⣿⣷⣦⠀⠀⠀⠀⠀⠀⣷⡆⠀⠀⠀⠀⠀⠀⢠⣾⡿⠇⠀⠀⠀⠀⠀
        ⠀⠀⢸⣿⠀⠀⣤⣤⣤⡄⢰⣿⠋⠙⢿⣆⢀⣾⠟⠉⢻⣷⠀⣼⡟⠉⠹⣿⡇⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⠋⠐⠅⠀⢤⣌⢿⣿⣿⣸⢻⢰⡇⡗⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⢠⣿⠏⠀⠀⠙⠛⠂⠀⣤⣠⣶⠀⣤⡆⠀⣠⣶⣦⣄⠀⣼⣿⣤⡄⠀⠀⠀⠀⠀
        ⠀⠀⠸⣿⣄⡀⢀⣨⣿⡇⢸⣷⠀⠀⣸⡿⠘⣿⡄⠀⢠⣿⠃⢿⣇⠀⢀⣿⡇⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⡇⠠⢹⡷⣿⡿⡍⣿⣞⣟⠷⡧⣿⣿⣿⣿⣿⣿⣿⣿⣿⠶⠁⠀⠀⠀⢸⣿⡀⠀⠿⠿⣿⡇⠘⣿⡏⠈⠀⣿⡃⢸⣿⣤⣬⣿⡆⢸⣿⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠈⠛⠛⠛⠛⠉⠀⠀⠙⠛⠛⠋⠀⠀⠈⠛⠛⠛⠁⠀⠈⠛⠛⠋⠛⠃⠀⠀⠀⢀⣀⠿⢿⣿⣿⣿⣿⣿⡈⠒⢊⠠⠁⢼⡿⣽⣟⡧⠉⢾⠡⢎⣗⣿⢿⡟⣿⣿⣿⣿⣿⡷⠂⠀⠀⠀⠀⠀⠻⣷⣤⣤⣴⡿⠇⢈⣿⡅⠀⠀⣿⡇⠸⣿⣄⣰⡶⠂⢸⣿⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠽⣷⣄⣉⠙⠛⠿⢿⠷⣀⣂⣤⣵⡿⠹⡿⠧⠇⠛⠚⣉⣉⣡⣴⣾⣷⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠁⠀⠀⠀⠉⠁⠀⠀⠉⠁⠀⠀⠉⠉⠀⠀⠈⠉⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣯⡿⣿⣷⣶⣾⣴⣤⣴⣦⣶⣶⣶⣷⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠤⠀⠒⠰⠔⠂⢐⠛⠛⣿⣿⣽⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣛⡽⣿⠋⣄⢿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠾⡣⠀⣀⣤⣔⡒⠶⠒⢲⡍⢉⣏⣀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢿⠿⣟⠹⡜⣲⠏⣾⡌⣸⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠊⠀⢠⢮⠋⠧⢄⣠⡤⣖⢯⣝⣧⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⡻⢿⣿⣷⡿⢬⣗⣌⡳⠊⠁⠀⣷⡗⣿⣿⠫⣹⠻⢶⣤⣀⠀⠀⢀⠄⢂⠭⠁⠉⠡⡂⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠂⠀⡰⡯⠁⠀⢠⢯⠶⡻⠚⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⡿⢿⠀⠉⢹⣭⠿⠉⠉⠉⠘⠀⠀⢰⡾⠋⣰⣿⣿⣿⣯⢛⡶⣬⣙⠻⡗⠁⠀⡠⠒⠈⠉⠪⡌⠊⢢⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠋⠀⢰⡿⠁⠀⢰⣟⡏⠘⠁⣰⡿⣿⡿⣿⠿⣿⣿⡿⢿⠛⠛⠉⠉⣁⣇⡸⣀⡀⠈⠉⠀⠀⠀⠀⠘⠀⠀⠸⢇⢾⣿⣿⣿⣿⣻⡿⣷⢟⣿⢻⠁⠀⢰⣿⣶⣀⠀⠀⢹⢀⠸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠂⠀⣠⡟⠀⠀⣠⠿⡜⣉⣠⡾⣫⢷⣽⣴⡿⠟⣻⣿⡇⠘⡀⠀⠀⠀⠘⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⡇⠀⠀⡗⠁⠀⠻⣿⣿⡳⢛⡼⣳⢮⣔⣸⠀⠀⢿⠢⢉⠻⢷⣦⣸⡇⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠄⠁⢀⢴⠟⠀⢀⣰⣏⡿⠭⠿⠘⠛⠓⠛⣿⠗⣋⣽⣿⣿⡿⡀⢇⠀⠀⣈⣄⡀⢉⠀⠀⠀⠀⠀⠀⠀⢰⠀⠀⢰⠀⢀⡇⠀⣿⣟⣵⣫⢞⣕⡫⠚⢆⣧⣄⣈⣦⠀⠈⠒⢌⠛⠿⣧⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠃⡰⠀⡜⢁⠀⢀⡠⠄⠒⠀⠀⢀⣀⣠⢤⣤⣭⢴⢽⣿⣞⣿⣟⢷⡈⠀⠀⢨⠋⠛⠛⠛⠻⢶⡄⠀⠀⢀⠃⠀⡠⠃⢠⣾⡇⠈⡽⢺⡵⣣⢯⢮⣝⠵⠀⠀⠻⣵⡲⠃⠀⠀⠀⢈⠆⢨⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠇⢠⠀⡞⠀⡌⠀⡌⠀⠀⠛⠛⠊⠉⠉⠀⠀⢷⣿⣿⣿⣟⣿⣻⣿⣄⠁⠀⠱⢶⠶⠤⠤⠔⠂⠀⠀⢀⡠⢪⠃⠀⠈⣽⠁⠀⡇⠀⠙⠳⣕⠳⠮⠀⠀⠀⡼⠋⠀⠀⠀⠀⢔⡪⣤⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡟⠀⢸⢀⠃⢀⠇⡸⠁⠀⡰⠀⠀⢀⣀⣤⣴⣶⣿⣿⣿⣿⣿⢾⣽⡟⣿⣆⠀⠐⢮⠀⠀⠀⠀⠀⣀⠔⠁⠀⡎⠀⠀⠰⣿⠀⠀⢷⣀⠀⠀⠀⠙⢦⣀⠀⠾⠁⠀⠀⠀⠀⢀⠌⣸⣿⣏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⡌⠀⠀⢸⠈⠀⠀⡰⢡⠆⢈⣾⡿⣟⣿⣽⣿⣿⣿⣿⡿⣯⣟⣿⣿⣿⣦⣀⠂⠀⠂⢁⣤⠞⠁⠀⠀⣸⠀⠀⠀⠈⣿⠀⠀⠈⢻⣶⣀⠀⠀⠀⢳⠑⢤⡀⠂⠀⠀⡔⢎⣰⣿⢿⣀⢳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⣀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⣤⣶⠆⠀⢀⠃⠄⢁⠇⡐⠈⢰⠃⢁⠐⣸⣿⣻⣽⣾⣿⣿⣿⣿⣻⣽⣷⣯⣿⢷⣟⡿⣯⣿⣿⣿⣿⠃⠁⠀⠂⠁⡇⠀⠀⠀⢠⣿⠀⠀⠀⠀⠙⠛⠿⣲⡤⢀⢫⠄⡙⠦⡀⢀⠎⣳⣿⣯⣾⣧⢀⢳⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⣿⣿⣷⣤⣠⣤⣶⣶⣿⣿⣿⣿⣿⣿⠀⠀⣸⠐⡈⡼⠐⠠⢡⠇⢂⠰⢠⣿⢃⣹⣿⡿⣿⣟⡿⣷⡿⣽⣾⣽⣾⣿⣟⣿⣿⣾⢷⠟⢸⡀⠀⠠⢁⢸⠁⠀⠀⡐⣸⡿⡄⠀⠀⢀⠀⠀⠀⠀⠉⠛⠈⣧⢘⢰⠈⠪⣰⣿⣿⣿⣿⣿⡎⡔⣻⣿⣿⣿⣶⣶⣤⣤⣀⡀⠀⠀⠀⣠⣴⣶
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠰⣎⢰⢀⣇⡸⢀⡏⡰⡌⡄⣿⣿⣰⣿⣿⣽⣷⣯⣿⣷⣿⣿⣿⣿⣾⣿⣿⣽⣯⣿⠇⠀⠀⡀⡌⡰⡄⡾⡈⠀⠀⡄⣿⣽⣷⡈⠶⡄⣤⢀⡀⣀⢀⡀⣤⢹⡎⡴⡆⠀⠈⠿⣿⣿⣿⣿⣿⣤⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠠⣏⠸⡘⢨⠁⠼⣁⠹⢠⠙⣿⣯⣿⣿⣿⢿⣽⣿⢿⣿⣿⣟⣿⣿⣿⣿⣿⡿⡿⠻⡄⠘⡠⢡⠘⡡⢣⡇⠅⠀⠀⡜⠹⣿⣻⣿⣤⠙⡄⢋⠥⡉⠬⡙⠤⢻⣿⡅⣻⠀⠀⠀⠈⠙⠣⢟⣹⡜⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠐⠤⣃⠜⣠⢉⡒⣄⠣⢎⣹⣿⣿⣿⣿⢯⣿⣟⣿⡿⣿⣻⣾⣿⣿⣿⣿⣿⡟⠁⡄⢿⣦⡑⢢⣱⣼⡿⡘⠄⠀⠀⡈⠒⣌⠻⢷⣿⣿⣾⣬⣦⠙⢦⡙⣌⢣⣿⣧⢃⡆⠀⠀⠀⠀⠀⠀⠈⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢧⡀⢈⢲⢡⡚⢤⢣⡜⣤⢛⢦⣿⣿⣿⣻⣟⣿⢿⣯⣿⣿⣿⢿⡿⠛⠛⠚⠻⢟⢀⢣⡐⢩⠻⣿⣿⡿⢋⠴⡡⣆⠵⠚⠒⠛⠢⠵⣦⠬⢭⠭⡽⣤⠯⣖⢳⡚⢯⣿⣿⣯⣱⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠉⠀⣧⢣⡝⢎⠶⣱⠮⣽⣾⣿⣿⣿⣽⣾⣿⣿⣻⣯⣷⢟⡩⢔⠢⡄⢤⡀⢠⠙⣢⣙⠦⣙⠬⣒⢌⣣⠮⠋⠁⢠⡐⢆⡎⡵⢋⡴⢋⢮⡱⢳⣌⠳⣌⢧⣙⢦⣽⣿⣿⡼⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠛⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⢹⡇⡞⣭⢞⣵⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣣⣏⣝⣮⠱⣎⠳⣜⢣⡓⢦⣍⠻⣍⣳⡞⠊⢁⡀⡴⣸⠱⣎⢧⡹⣍⢯⡹⢏⢯⣙⣧⣞⣷⣾⣶⣿⣾⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿...
      </p>
    ); // Wenn ja, zeigen wir "Loading..." auf unserer Webseite an
  }

  // Wenn wir die Informationen haben, machen wir Folgendes:
  return (
    <>
      <h1 className="header"> Products</h1>
      {/* Hier erstellen wir eine Liste von Produkten */}
      <div className="product-list">
        {/* Jetzt gehen wir durch jedes Produkt in der Liste */}
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            {" "}
            {/* Hier erstellen wir eine Karte für jedes Produkt */}
            <h2 className="product-title">{product.title}</h2>{" "}
            {/* Das ist der Titel des Produkts */}
            {/* Hier zeigen wir ein Bild des Produkts an */}
            <img
              className="product-image"
              src={product.image}
              alt={product.title}
              width="100"
            />
            <p className="product-description">{product.description}</p>{" "}
            {/* Das ist die Beschreibung des Produkts */}
            <p className="product-price">${product.price}</p>{" "}
            {/* Das ist der Preis des Produkts */}
            {/* Als nächstes ist ein Knopf, um das Produkt in den Warenkorb zu legen */}
            <button
              className="add-to-cart"
              onClick={() => setProducts({ ...product })}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products; // Am Ende sagen wir dem Computer, dass er diese Funktion exportieren soll, damit wir sie in anderen Teilen unserer Webseite verwenden können
