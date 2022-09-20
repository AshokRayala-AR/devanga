import React from "react";
import "./banner.css";
import image from "../images/main-wallpaper.jpg";

export default function Banner() {
  return (
    <section className="banner" id="banner">
      <img src={image} />
      <div className="text-box">
        <h1 className="banner-h1 overflow-hidden">
          ದೇವಾಂಗ ಮಂಡಲಿ (ರಿ.) ದೊಡ್ಡಬಳ್ಳಾಪುರ
        </h1>
        <p className="banner-text">
          ದೇವಾಂಗ, ದಕ್ಷಿಣ ಭಾರತದ ಹಿಂದೂ ಜಾತಿಯಾಗಿದ್ದು, ಸಾಂಪ್ರದಾಯಿಕವಾಗಿ ಜವಳಿ ವ್ಯಾಪಾರ,
          ನೇಯ್ಗೆ ಮತ್ತು ಕೃಷಿಯ ವೃತ್ತಿಯನ್ನು ಅನುಸರಿಸುತ್ತದೆ. ದೇವಾಂಗ ಮತ್ತು ಪದ್ಮಶಾಲಿ
          ಸಮುದಾಯಗಳು ಒಮ್ಮೆ ಒಂದೇ ಘಟಕವಾಗಿದ್ದವು ಎಂಬ ಸಿದ್ಧಾಂತವಿದೆ, ಪದ್ಮಶಾಲಿಗಳು
          ವೈಷ್ಣವರಾಗಿದ್ದಾಗ ದೇವಾಂಗ ಅಂಶವು ಶೈವ ಲಿಂಗಾಯತವಾದ ಅಥವಾ ವೀರಶೈವವಾದವನ್ನು
          ತೆಗೆದುಕೊಂಡಾಗ ವಿಭಜನೆಯಾಯಿತು. ಕೆಲವು ದೇವಾಂಗರು ಯಜ್ಞೋಪವೀತಂ ಅಥವಾ ಜನಿವಾರವನ್ನು
          ಧರಿಸಿದರೆ, ಇತರರು ವೀರಮಸ್ತಿಗಳನ್ನು ತಮ್ಮ ಸಾಂಪ್ರದಾಯಿಕ ಉಪಾಧಿಪತಿಗಳೆಂದು
          ಪರಿಗಣಿಸುತ್ತಾರೆ, ಅವರಿಂದ ಅವರು ನಿಯಮಗಳನ್ನು ತೆಗೆದುಕೊಂಡು ಲಿಂಗವನ್ನು
          ಧರಿಸುತ್ತಾರೆ. ಮಧ್ಯಕಾಲೀನ ಅವಧಿಯಲ್ಲಿ, ವೀರಶೈವ ನೇಕಾರರು ಬಸವ ವಿರೋಧಿ
          ಚಳುವಳಿಗಳನ್ನು ಬೆಂಬಲಿಸಿದರು. ಆದಾಗ್ಯೂ, ಆ ಚಳುವಳಿಯು ಇತರ ವೀರಶೈವರು ಮತ್ತು
          ಬ್ರಾಹ್ಮಣರ ಜಾತಿ ಶ್ರೇಷ್ಠತೆಯೊಂದಿಗೆ ಸೇವಿಸಿದರು. ನೇಕಾರರು ಉನ್ನತ ಜಾತಿ
          ಸ್ಥಾನಮಾನವನ್ನು ಪಡೆಯಲು ಆರಂಭಿಸಿದರು ಮತ್ತು 1231 ರಲ್ಲಿ ರಾಜನು ತಮಗೆ ಪವಿತ್ರ
          ದಾರವನ್ನು ಧರಿಸುವುದು, ಪಲ್ಲಕ್ಕಿಯನ್ನು ಸವಾರಿ ಮಾಡುವುದು ಮತ್ತು ಧ್ವಜವನ್ನು
          ಪ್ರದರ್ಶಿಸುವಂತಹ ಮೇಲ್ಜಾತಿಗಳಿಗೆ ನೀಡಲಾಗುವ ಹಕ್ಕುಗಳನ್ನು ನೀಡಿದ್ದಾನೆ. ಕರ್ನಾಟಕ,
          ಆಂಧ್ರ ಮತ್ತು ತಮಿಳುನಾಡು ಪ್ರದೇಶಗಳಲ್ಲಿ ದೇವಾಂಗ ಜನರ ಮುಖ್ಯ ದೇವರುಗಳು ರಾಮಲಿಂಗ
          ಚೌಡೇಶ್ವರಿ ಅಮ್ಮ ಮತ್ತು ಭಗವಾನ್ ಶಿವ, ದಕ್ಷಿಣ . ಮಧ್ಯ ಮತ್ತು ಉತ್ತರ ಕರ್ನಾಟಕ
          ಪ್ರದೇಶಗಳಲ್ಲಿ, ಶ್ರೀ ಬನಶಂಕರಿ ಅಮ್ಮ ದೇವಾಂಗ ಜನರ ಮುಖ್ಯ ದೇವತೆ .
        </p>
      </div>
    </section>
  );
}
