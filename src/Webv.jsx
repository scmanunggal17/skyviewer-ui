import "./Webv.css"

function Webv() {
  return (
    <div className="container">
      <button id="btn-set-loc">Set Home</button>
      <iframe className="webview" src="http://localhost/tar1090" frameborder="0"></iframe>
    </div>
  );
}

export default Webv;