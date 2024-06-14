import logo from "../../components/twitterLogo.png"
import "./Welcome.css"
// import google from "../../components/googleIcon.png"

export default function Welcome () {
    return (
      <>
        <div className="welcome-page">
          <img src={logo} className="welcome-logo" />
          <div className="welcome-signup">
            <h1 id="title">Şu anda olup bitenler</h1>
            <h2>Hemen katıl</h2>
            <div className="buttons">
              <div className="white-button">
                <button id="google-signup">Google ile kaydol </button>
                <button>Apple ile kaydol</button>
              </div>

              <h5 id="veya">veya</h5>

              <button style={{ backgroundColor: "#1DA1F2", color: "white" }}>
                Hesap oluştur
              </button>
              <h4>Zaten bir hesabın var mı?</h4>
              <button
                style={{
                  backgroundColor: "black",
                  border: "1px solid white",
                  color: "#1DA1F2",
                }}
              >
                Giriş yap
              </button>
            </div>
          </div>
        </div>
      </>
    );



}