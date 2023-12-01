import React from 'react';

const About = () => {
  return (
    <>
      <div className="container">
        <div
          className="bg-body-secondary 
                    text-primary 
                    border-info 
                    border 
                    rounded-3 
                    border-3  
                    mt-2"
        >
          <h3 className="m-3 me-3">
            <span style={{ textTransform: 'lowercase' }}>@sestapertica </span>
            CreativeHub
          </h3>
        </div>
        <p>
          CreativeHub è un ecosistema digitale creato per ispirare e supportare
          la comunità creativa in continua crescita. Grazie alla potenza di
          React e all'agilità di Bootstrap, offriamo una piattaforma flessibile
          e ricca di risorse, progettata per soddisfare le esigenze degli
          artisti, designer e sviluppatori. Il nostro sito offre una
          straordinaria esperienza di navigazione tramite una Navbar intuitiva.
          Una delle caratteristiche distintive è la possibilità di
          personalizzare il tema visivo del sito. Attraverso l'icona della luna
          (fas-moon) e del sole (fas-sun) di FontAwesome, gli utenti possono
          commutare tra il tema scuro e chiaro per adattarsi alle proprie
          preferenze. La Navbar offre inoltre un rapido accesso a varie sezioni
          del sito, inclusi link per esplorare, apprendere e connettersi con
          altri utenti.
          <br></br>
          Tra i link disponibili troviamo a Home, ad About, a Tips e altri
          ancora in divenire, offrendo così un facile accesso alle diverse
          funzionalità del sito.
          <br></br>
          CreativeHub è pubblicato su{' '}
          <a href="https://vercel.app/">vercel.com</a>, a questo{' '}
          <a href="https://my-dark-mode.vercel.app"> link</a> un sito che
          promuove un ambiente inclusivo e stimolante che favorisce la
          creatività, l'apprendimento e la condivisione di idee in un'esperienza
          interattiva e coinvolgente.
          <br></br>
          Inoltre, il repository del sito si trova su{' '}
          <a href="https://github.com/zep2zep/my-dark-mode">github.com</a>, dove
          è possibile accedere al codice sorgente e contribuire allo sviluppo
          della piattaforma.
        </p>
        <div>
          <h4 className=" mb-5">
            Questa{' '}
            <span style={{ textTransform: 'lowercase' }}>l'ha scritta </span>{' '}
            ChatGPT 3.5
          </h4>
        </div>
      </div>
    </>
  );
};

export default About;
