"use client"

import {QRCodeCanvas} from 'qrcode.react';

export default function Home() {
  return (
    <main className="container">
      <section className="qr-code-container">
        <div className="qr-code">
            <div className="link-input">
              <label htmlFor="link">
                Digite seu texto
              </label>
                <input 
                  type="text"
                  id="link"
                  placeholder="Seu link aqui"
                />
            </div>
            <div className="qr-code-preview">
              <p>
                Qr code Preview
              </p>
              <QRCodeCanvas
                  value={"http://localhost:3000"}
                  title={"Nome do funcionario para colocar"}
                  size={128}
                  bgColor={"#ffffff"}
                  fgColor={"rgb(0, 64, 160)"}
                  level={"L"}
                  imageSettings={{
                    src: "/Logo-UMJ 1.svg",
                    x: undefined,
                    y: undefined,
                    height: 35,
                    width: 50,
                    opacity: 1,
                    excavate: true,
                  }}
              />
            </div>
            <button>
              Baixar QR Code
            </button>
          </div>
        <div className="buttons">
          
          <div className="container-logo">

            <img 
            src="/Logo-UMJ 1.svg"
            alt="detail"
            className="Logo-detail"
            width={130}
            />
          </div>
          <button className="home">
            
            <img src="home.svg" alt="detail"
            height={50}
            width={50}
            />

          </button>
          <button className="whatsapp">

            <img src="whatsapp.svg" alt="detail"
            height={50}
            />
            
          </button>
          <button className="local">
            
            <img src="local.svg" alt="detail"
            height={50}
            />

          </button>
          <button className="qrcode">
            
            <img src="icon_qrcode.svg" alt="detail"
            height={50}
            />

          </button>
        </div>
      </section>
      
    </main>
  );
}
