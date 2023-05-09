import { useEffect, useState } from "react"

// Ved oprettelse af en hook i react er det et must at det pågældene hook starter med use
export const useFetch = (url, key) => {
    // State-variabel til at gemme API-data. apiData er ansvarlig for at opbevare data, der hentes fra APIet.
    const [apiData, setApiData] = useState([]);
    // State-variabel for at spore om data bliver indlæst. 
    // Loading bruges til at indikere , om data bliver indlæst fra API'et, eller om indholdet allerede er tilgængeligt.
    const [loading, setLoading] = useState(true);
    // State-variabel for at håndtere fejl under API-kald. Error bruges til at håndtere eventuelle fejl under API-kald.
    const [error, setError] = useState(null);


    useEffect(() => {
        // Ved dette hook henter vi data fra et api angivet i den url der passes som prop
        // Vi laver en async funktion som henter data fra apiet
        const fetchData = async () => {
            try {
                // Vi laver en const som indeholder den hentede data fra pågældene url
                const res = await fetch(url);
                // Vi konventere data til json
                const json = await res.json();

                // Vi opdataere state med den hentede data
                setApiData(json[key])
                // Vi sætter loading til false så kaldet ved at vi er færdig med at loade
                setLoading(false);

            } catch (err) {
                // Hvis der opstår fejl opdate vi state med de pågældene fejl
                console.error(err)
                setError(err)
                // Sætter loading til false
                setLoading(false)
            }
        }
        fetchData();

    }, [url, key]);

    // Vi returnerer de states som vi har opdateret for at de indsamlede data kan bruges i det script der har lavet kaldet.
    return { apiData, loading, error }

}