import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import CollectionPage from "./pages/CollectionPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/917204552025?text=Hello%20AF%20Furniture%2C%20I%20would%20like%20to%20know%20more%20about%20your%20furniture%20and%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chat with AF Furniture on WhatsApp"
      >
        <span className="whatsapp-icon">
          <svg
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path
              d="M19.11 17.08c-.27-.14-1.59-.78-1.84-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.46-.84-2-.22-.52-.45-.45-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.63 1.11 2.81.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.59-.65 1.81-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"
              fill="currentColor"
            />
            <path
              d="M16.02 3.2c-7.08 0-12.83 5.75-12.83 12.83 0 2.26.59 4.39 1.63 6.24L3.1 28.8l6.69-1.68a12.77 12.77 0 0 0 6.23 1.61h.01c7.08 0 12.83-5.75 12.83-12.83S23.1 3.2 16.02 3.2zm0 23.42h-.01c-1.94 0-3.84-.52-5.5-1.51l-.39-.23-3.97 1 1.06-3.87-.25-.4a10.61 10.61 0 0 1-1.63-5.58c0-5.84 4.76-10.6 10.61-10.6 2.83 0 5.49 1.1 7.49 3.1 2 2 3.1 4.66 3.1 7.49-.01 5.84-4.77 10.6-10.61 10.6z"
              fill="currentColor"
            />
          </svg>
        </span>

        <span className="whatsapp-tooltip">
          Chat with us
        </span>
      </a>
    </BrowserRouter>
  );
}

export default App;