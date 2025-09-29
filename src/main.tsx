
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx'
import './index.css'

// New Relic Browser Agent Configuration
declare global {
  interface Window {
    NREUM: any;
  }
}

(window as any).NREUM||(window.NREUM={});
window.NREUM.init={
  session_replay:{
    enabled:true,
    block_selector:'',
    mask_text_selector:'*',
    sampling_rate:45.0,
    error_sampling_rate:100.0,
    mask_all_inputs:true,
    collect_fonts:true,
    inline_images:false,
    inline_stylesheet:true,
    fix_stylesheets:true,
    preload:false,
    mask_input_options:{}
  },
  distributed_tracing:{enabled:true},
  performance:{capture_measures:true},
  privacy:{cookies_enabled:true},
  ajax:{deny_list:["bam.nr-data.net"]}
};

window.NREUM.loader_config={
  accountID:"4435823",
  trustKey:"4435823",
  agentID:"1431873705",
  licenseKey:"NRJS-d4d42c1941d0a99490a",
  applicationID:"1431873705"
};

window.NREUM.info={
  beacon:"bam.nr-data.net",
  errorBeacon:"bam.nr-data.net",
  licenseKey:"NRJS-d4d42c1941d0a99490a",
  applicationID:"1431873705",
  sa:1
};

// Load New Relic Browser Agent
const script = document.createElement('script');
script.src = 'https://js-agent.newrelic.com/nr-loader-spa-1.297.1.min.js';
script.type = 'text/javascript';
script.crossOrigin = 'anonymous';
document.head.appendChild(script);

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
